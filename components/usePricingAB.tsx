"use client";

import { useFeatureFlagVariantKey } from "posthog-js/react";
import { useEffect, useState } from "react";
import posthog from "posthog-js";

/**
 * Hook A/B test sur le prix vitrine.
 *
 * Feature flag PostHog : `pricing_ab_test`
 *   - variant "control" | undefined (fallback) → 249€
 *   - variant "test" → 599€
 *
 * Doc PostHog : le fallback est TOUJOURS le prix control (249€).
 * L'événement `$feature_flag_called` est envoyé automatiquement
 * quand `useFeatureFlagVariantKey` résout le flag.
 *
 * Anti-flickering : skeleton pendant max 1.5s, puis fallback 249€.
 */
export function usePricingAB() {
  const variant = useFeatureFlagVariantKey("pricing_ab_test");
  const [timedOut, setTimedOut] = useState(false);

  // Timeout de sécurité : si PostHog ne répond pas en 1.5s,
  // on arrête le skeleton et on affiche le prix fallback (249€).
  useEffect(() => {
    if (variant !== undefined) return; // déjà résolu
    const t = setTimeout(() => setTimedOut(true), 1500);
    return () => clearTimeout(t);
  }, [variant]);

  // Skeleton seulement si PostHog charge ET pas de timeout
  const isLoading = variant === undefined && !timedOut;

  // Fallback & control → 249€ | test → 599€
  const price = variant === "test" ? 599 : 249;
  const priceLabel = `${price}€`;

  /** Événement de conversion — conforme doc PostHog */
  function trackLeadClick() {
    posthog.capture("lead_button_clicked", {
      price_displayed: price,
      variant: variant ?? "control",
    });
  }

  return { price, priceLabel, isLoading, variant, trackLeadClick };
}
