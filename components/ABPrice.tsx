"use client";

import { usePricingAB } from "./usePricingAB";

/**
 * Affiche le prix A/B dans le Hero (texte inline).
 * Skeleton animé pendant le chargement du flag.
 */
export function ABPriceInline() {
  const { priceLabel, isLoading } = usePricingAB();

  if (isLoading) {
    return (
      <span className="text-accent-lime hand-underline inline-block">
        <span className="inline-block w-[3.5ch] h-[0.9em] bg-accent-lime/20 rounded-lg animate-pulse" />
      </span>
    );
  }

  return (
    <span className="text-accent-lime hand-underline">
      {priceLabel}
    </span>
  );
}

/**
 * Affiche le gros prix A/B dans la carte Offre.
 * Skeleton animé pendant le chargement du flag.
 */
export function ABPriceCard() {
  const { price, isLoading } = usePricingAB();

  if (isLoading) {
    return (
      <div className="mb-2">
        <div className="flex items-start justify-center lg:justify-start">
          <span className="inline-block w-48 h-24 bg-white/5 rounded-2xl animate-pulse" />
          <span className="text-2xl sm:text-3xl font-bold text-accent-lime mt-2 ml-2">EUR</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-2">
      <div className="flex items-start justify-center lg:justify-start">
        <span className="text-7xl sm:text-8xl lg:text-[6.5rem] font-bold text-text-primary leading-none tracking-tight">
          {price}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-accent-lime mt-2 ml-2">EUR</span>
      </div>
    </div>
  );
}

/**
 * Bouton CTA avec tracking PostHog `lead_button_clicked`.
 * Passe le prix affiché comme propriété de l'événement.
 */
export function ABCtaButton({
  text,
  href = "#contact-form",
  className = "",
}: {
  text: string;
  href?: string;
  className?: string;
}) {
  const { trackLeadClick } = usePricingAB();

  return (
    <a
      href={href}
      onClick={trackLeadClick}
      className={`btn-primary group inline-flex items-center gap-3 px-8 py-4 text-lg ${className}`}
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  );
}
