"use client";

import { usePostHog } from "posthog-js/react";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "33764136623";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9]/g, "")}`;

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GA_CONVERSION_LABEL;

/**
 * SmartCta — CTA adaptatif mobile/desktop.
 *
 * Mobile  → lien WhatsApp direct (prioritaire).
 * Desktop → 3 options : WhatsApp · Calendly · Email.
 *
 * Variante "inline" pour les SectionCta (petit bouton).
 * Variante "hero" pour le Hero (gros bouton).
 * Variante "section" pour les sections intermédiaires.
 */
export function SmartCta({
  variant = "section",
  whatsappText = "Bonjour Novaly Agency, j'aimerais recevoir un design gratuit de mon futur site web.",
  ctaLabel = "Recevoir mon design gratuit",
  className = "",
}: {
  variant?: "hero" | "section" | "inline";
  whatsappText?: string;
  ctaLabel?: string;
  className?: string;
}) {
  const posthog = usePostHog();

  const waUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappText)}`;
  const calendlyUrl = "#contact-form";
  const emailSubject = encodeURIComponent("Demande de design gratuit — Novaly Agency");

  const trackClick = (channel: "whatsapp" | "calendly" | "email") => {
    posthog?.capture("clicked_contact_cta", {
      channel,
      variant,
      location: variant === "hero" ? "hero" : "section",
    });

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (GA_MEASUREMENT_ID && GA_CONVERSION_LABEL) {
        window.gtag("event", "conversion", {
          send_to: `${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}`,
        });
      }
    }
  };

  const isMobile = (): boolean => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || navigator.vendor;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase());
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackClick("email");
    if (isMobile()) {
      window.location.href = `mailto:novalyagencyweb@gmail.com?subject=${emailSubject}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=novalyagencyweb@gmail.com&su=${emailSubject}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  // ── Inline variant (used inside SectionCta — simple button) ──
  if (variant === "inline") {
    return (
      <div className={`text-center mt-12 scroll-animate ${className}`}>
        {/* Mobile: WhatsApp direct */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick("whatsapp")}
          className="md:hidden btn-primary group inline-flex items-center gap-3 px-8 py-4 text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          <span>{ctaLabel}</span>
        </a>

        {/* Desktop: scroll to contact section */}
        <a
          href={calendlyUrl}
          onClick={() => trackClick("calendly")}
          className="hidden md:inline-flex btn-primary group items-center gap-3 px-8 py-4 text-base"
        >
          <span>{ctaLabel}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  // ── Hero variant (big prominent CTA) ──
  if (variant === "hero") {
    return (
      <div className={className}>
        {/* Mobile: WhatsApp big button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick("whatsapp")}
          className="md:hidden btn-primary group inline-flex items-center gap-3 px-10 py-5 text-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          <span>{ctaLabel}</span>
        </a>

        {/* Desktop: scroll to contact section */}
        <a
          href={calendlyUrl}
          onClick={() => trackClick("calendly")}
          className="hidden md:inline-flex btn-primary group items-center gap-3 px-10 py-5 text-xl"
        >
          <span>{ctaLabel}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  // ── Section variant (full contact block with 3 options on desktop) ──
  return (
    <div className={className}>
      {/* Mobile: WhatsApp priority button */}
      <div className="md:hidden flex flex-col items-center gap-4">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick("whatsapp")}
          className="group flex items-center justify-center gap-3 w-full max-w-xs px-8 py-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-base font-semibold hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          <span>{ctaLabel}</span>
        </a>
        <p className="text-text-secondary/50 text-xs">Réponse en moins de 2h</p>
      </div>

      {/* Desktop: 3 options */}
      <div className="hidden md:flex flex-col items-center gap-6">
        <p className="text-lg md:text-xl font-medium text-zinc-300">
          Choisissez votre moyen de contact préféré
        </p>
        <div className="flex items-center justify-center gap-4">
          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("whatsapp")}
            className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-base font-semibold hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Calendly */}
          <a
            href={calendlyUrl}
            onClick={() => trackClick("calendly")}
            className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-accent-lime/10 border border-accent-lime/30 text-accent-lime text-base font-semibold hover:bg-accent-lime/20 hover:border-accent-lime/50 hover:shadow-[0_0_25px_rgba(159,232,112,0.2)] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4" /><path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <span>Réserver un appel</span>
          </a>

          {/* Email */}
          <a
            href="#"
            onClick={handleEmailClick}
            className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-200 text-base font-semibold hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Email</span>
          </a>
        </div>
        <p className="text-text-secondary/50 text-xs">Design complet offert — Sans engagement</p>
      </div>
    </div>
  );
}
