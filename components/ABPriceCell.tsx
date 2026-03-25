"use client";

import { usePricingAB } from "./usePricingAB";

/**
 * Cellule de tableau qui affiche le prix A/B dynamique.
 * Skeleton pendant le chargement du feature flag.
 */
export function ABPriceCell() {
  const { priceLabel, isLoading } = usePricingAB();

  if (isLoading) {
    return <span className="inline-block w-12 h-4 bg-accent-lime/20 rounded animate-pulse" />;
  }

  return <span>{priceLabel}</span>;
}
