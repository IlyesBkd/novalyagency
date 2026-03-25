"use client";

import { useEcomPricingAB } from "./useEcomPricingAB";

/**
 * Affiche le prix A/B e-commerce dans le Hero (texte inline).
 * Skeleton animé pendant le chargement du flag.
 */
export function ABEcomPriceInline() {
  const { priceLabel, isLoading } = useEcomPricingAB();

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
 * Affiche le gros prix A/B e-commerce dans la carte Offre.
 * Skeleton animé pendant le chargement du flag.
 */
export function ABEcomPriceCard() {
  const { price, isLoading } = useEcomPricingAB();

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
 * Texte inline du prix e-commerce (pour les mentions textuelles comme "pour 899€").
 */
export function ABEcomPriceText() {
  const { priceLabel, isLoading } = useEcomPricingAB();

  if (isLoading) {
    return <span className="inline-block w-12 h-4 bg-accent-lime/20 rounded animate-pulse" />;
  }

  return <span>{priceLabel}</span>;
}

/**
 * Cellule de tableau e-commerce qui affiche le prix A/B dynamique.
 */
export function ABEcomPriceCell() {
  const { priceLabel, isLoading } = useEcomPricingAB();

  if (isLoading) {
    return <span className="inline-block w-20 h-4 bg-accent-lime/20 rounded animate-pulse" />;
  }

  return <span>{priceLabel} tout inclus</span>;
}

/**
 * Bouton CTA e-commerce avec tracking PostHog `lead_button_clicked`.
 */
export function ABEcomCtaButton({
  text,
  href = "#contact-form",
  className = "",
  id,
}: {
  text: string;
  href?: string;
  className?: string;
  id?: string;
}) {
  const { trackLeadClick } = useEcomPricingAB();

  return (
    <a
      href={href}
      id={id}
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
