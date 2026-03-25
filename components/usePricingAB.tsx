"use client";

import { useFeatureFlagVariantKey } from "posthog-js/react";
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
 */
export function usePricingAB() {
  const variant = useFeatureFlagVariantKey("pricing_ab_test");

  // undefined = PostHog pas encore chargé → skeleton
  const isLoading = variant === undefined;

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
