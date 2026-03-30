"use client";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { usePostHog } from "posthog-js/react";
import { Section } from "../Section";
import { ABEcomPriceText } from "../ABEcomPrice";
import { useEcomPricingAB } from "../useEcomPricingAB";

const CALENDLY_URL = "https://calendly.com/novalyagencyweb/new-meeting";

// ── Google Ads Config (from env) ──
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GA_CONVERSION_LABEL;

export function EcomFinalCta() {
  const posthog = usePostHog();
  // Utilise le hook existant pour récupérer le prix affiché
  const { price, isLoading } = useEcomPricingAB();

  // ── Tracking générique pour les boutons de contact ──
  const trackContactClick = (channel: "whatsapp" | "email") => {
    // PostHog tracking
    posthog?.capture(`clicked_${channel}_contact`, { location: "footer_ecom" });

    // Google Ads conversion tracking
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (GA_MEASUREMENT_ID && GA_CONVERSION_LABEL) {
        window.gtag("event", "conversion", {
          send_to: `${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}`,
        });
        console.log(`[${channel}] Google Ads conversion tracked`);
      }
    }

    console.log(`[${channel}] Contact click tracked (ecom)`);
  };

  // ── Tracking Calendly + Google Ads + Discord ──
  useEffect(() => {
    function handleCalendlyEvent(e: MessageEvent) {
      // Vérifie que c'est bien un événement Calendly de réservation confirmée
      if (e.data?.event !== "calendly.event_scheduled") return;

      // ── Action A : Google Ads Conversion ──
      if (GA_MEASUREMENT_ID && GA_CONVERSION_LABEL) {
        // Fallback: Si gtag n'est pas défini (AdBlocker ou timing), on le recrée
        if (typeof window.gtag === "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function (...args: unknown[]) {
            window.dataLayer?.push(args);
          };
          console.log("[Calendly Ecom] gtag fallback initialized");
        }

        window.gtag("event", "conversion", {
          send_to: `${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}`,
        });
        console.log("[Calendly Ecom] Google Ads conversion tracked:", `${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}`);
      } else if (process.env.NODE_ENV === "development") {
        console.warn("[Calendly Ecom] Google Ads conversion skipped: env vars missing");
      }

      // ── Action B : Discord Notification (via API sécurisée) ──
      fetch("/api/webhooks/discord", { method: "POST" })
        .then((res) => {
          if (res.ok) console.log("[Calendly Ecom] Discord notification sent");
          else console.error("[Calendly Ecom] Discord notification failed");
        })
        .catch((err) => console.error("[Calendly Ecom] Discord fetch error:", err));
    }

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  return (
    <Section id="contact-form" glow>
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20 scroll-animate">
          <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">Prêt à vendre en ligne ?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-text-primary">Réservez</span>
            <br />
            <span className="gradient-text">votre appel gratuit</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto">
            Choisissez un créneau et nous vous rappelons pour lancer votre boutique en ligne.
          </p>
        </div>

        {/* Calendly widget */}
        <div className="scroll-animate-scale" style={{ transitionDelay: "150ms" }}>
          <div className="relative">
            {/* Glow border */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent-lime/40 via-accent-lime/10 to-accent-lime/40 opacity-50" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-dark-800/90 to-dark-900/95 backdrop-blur-xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-lime/50 to-transparent" />

            <div className="relative rounded-3xl p-2 sm:p-4">
              {/* Calendly inline widget — responsive height */}
              <div className="w-full overflow-hidden">
                {isLoading ? (
                  // État de chargement pendant que PostHog charge les flags
                  <div className="flex items-center justify-center h-[1000px] text-text-secondary">
                    <div className="text-center">
                      <div className="animate-spin w-8 h-8 border-2 border-accent-lime border-t-transparent rounded-full mx-auto mb-4" />
                      <p>Chargement de l&apos;agenda...</p>
                    </div>
                  </div>
                ) : (
                  <InlineWidget
                    url={CALENDLY_URL}
                    styles={{ minWidth: "320px", height: "1000px" }}
                    pageSettings={{
                      backgroundColor: "1a1a2e",
                      textColor: "f5f7fa",
                      primaryColor: "9fe870",
                      hideGdprBanner: true,
                    }}
                    utm={{
                      utmSource: "website",
                      utmMedium: "organic",
                      utmCampaign: "ecommerce",
                      utmContent: `prix_${price}`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges - outside the card */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-1.5 text-text-secondary/60 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/70"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Appel de 15 min offert</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary/60 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/70"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
            <span>Satisfait ou remboursé</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary/60 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/70"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span><ABEcomPriceText /> tout inclus</span>
          </div>
        </div>

        {/* Fallback contact options */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-center text-lg md:text-xl font-medium text-zinc-300 mb-8">
            Vous préférez m&apos;expliquer votre projet par message ?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-xs sm:max-w-none mx-auto">
            {/* WhatsApp Button - Star CTA */}
            <a
              href="https://wa.me/33756893198?text=Bonjour%20Novaly%20Agency%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20cr%C3%A9ation%20d%27une%20boutique%20en%20ligne."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("whatsapp")}
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-base font-semibold hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
              <span>Discutons sur WhatsApp</span>
            </a>

            {/* Email Button - Glassmorphism style */}
            <a
              href="mailto:novalyagencyweb@gmail.com?subject=Demande%20de%20création%20de%20boutique%20en%20ligne"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("email")}
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-zinc-200 text-base font-semibold hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Envoyez-moi un e-mail</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
