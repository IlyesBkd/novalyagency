"use client";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { Section } from "../Section";
import { ABEcomPriceText } from "../ABEcomPrice";

const CALENDLY_URL = "https://calendly.com/novalyagencyweb/new-meeting";

// ── Google Ads Config (from env) ──
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GA_CONVERSION_LABEL;

export function EcomFinalCta() {
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
              <div className="calendly-container">
                <InlineWidget
                  url={CALENDLY_URL}
                  styles={{ width: "100%", height: "100%" }}
                  pageSettings={{
                    backgroundColor: "1a1a2e",
                    textColor: "f5f7fa",
                    primaryColor: "9fe870",
                    hideGdprBanner: true,
                  }}
                />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 mt-2 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-text-secondary/50 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/60"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>Appel de 15 min offert</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-secondary/50 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/60"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                  <span>Satisfait ou remboursé</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-secondary/50 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/60"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  <span><ABEcomPriceText /> tout inclus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
