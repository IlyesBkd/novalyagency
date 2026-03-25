"use client";

import { useFeatureFlagVariantKey } from "posthog-js/react";
import { useEffect, useState } from "react";
import posthog from "posthog-js";

/**
 * Hook A/B test sur le prix e-commerce.
 *
 * Feature flag PostHog : `ecom_pricing_ab_test`
 *   - variant "control" | undefined (fallback) → 499€
 *   - variant "test" → 699€
 *
 * Anti-flickering : skeleton pendant max 1.5s, puis fallback 499€.
 */
export function useEcomPricingAB() {
  const variant = useFeatureFlagVariantKey("ecom_pricing_ab_test");
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (variant !== undefined) return;
    const t = setTimeout(() => setTimedOut(true), 1500);
    return () => clearTimeout(t);
  }, [variant]);

  const isLoading = variant === undefined && !timedOut;

  // Fallback & control → 499€ | test → 699€
  const price = variant === "test" ? 699 : 499;
  const priceLabel = `${price}€`;

  /** Événement de conversion — conforme doc PostHog */
  function trackLeadClick() {
    posthog.capture("lead_button_clicked", {
      price_displayed: price,
      variant: variant ?? "control",
      page: "ecommerce",
    });
  }

  return { price, priceLabel, isLoading, variant, trackLeadClick };
}
