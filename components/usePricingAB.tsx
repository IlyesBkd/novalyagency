"use client";

import { useFeatureFlagVariantKey } from "posthog-js/react";
import posthog from "posthog-js";

/**
 * Hook A/B test sur le prix vitrine.
 *
 * Feature flag PostHog : `pricing_ab_test`
 *   - variant "control" → 249€
 *   - variant "test"    → 599€
 *   - fallback (loading / erreur) → null
 *
 * Retourne { price, priceLabel, isLoading, trackLeadClick }
 */
export function usePricingAB() {
  const variant = useFeatureFlagVariantKey("pricing_ab_test");

  const isLoading = variant === undefined;
  const price = variant === "test" ? 599 : variant === "control" ? 249 : null;
  const priceLabel = price !== null ? `${price}€` : null;

  /** Déclenche l'événement de conversion avec le prix affiché */
  function trackLeadClick() {
    posthog.capture("lead_button_clicked", {
      price_displayed: price,
      pricing_variant: variant ?? "unknown",
    });
  }

  return { price, priceLabel, isLoading, variant, trackLeadClick };
}
