"use client";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { usePostHog } from "posthog-js/react";
import { Section } from "./Section";
import { SmartCta } from "./SmartCta";
import { usePricingAB } from "./usePricingAB";

const CALENDLY_URL = "https://calendly.com/novalyagencyweb/new-meeting";

// ── Google Ads Config (from env) ──
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GA_CONVERSION_LABEL;

// Types gtag définis dans types/gtag.d.ts

export function FinalCta() {
  const posthog = usePostHog();
  const { isLoading } = usePricingAB();

  // ── Détection mobile/desktop ──
  const isMobile = (): boolean => {
    if (typeof window === "undefined") return false;
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  };

  // ── Tracking générique pour les boutons de contact ──
  const trackContactClick = (channel: "whatsapp" | "email") => {
    // PostHog tracking
    posthog?.capture(`clicked_${channel}_contact`, { location: "footer" });

    // Google Ads conversion tracking
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (GA_MEASUREMENT_ID && GA_CONVERSION_LABEL) {
        window.gtag("event", "conversion", {
          send_to: `${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}`,
        });
        console.log(`[${channel}] Google Ads conversion tracked`);
      }
    }

    console.log(`[${channel}] Contact click tracked`);
  };

  // ── Email click handler avec redirection adaptative ──
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackContactClick("email");

    if (isMobile()) {
      // Mobile: ouvre l'app mail native
      window.location.href = "mailto:novalyagencyweb@gmail.com?subject=Demande%20de%20création%20de%20site";
    } else {
      // Desktop: ouvre Gmail dans un nouvel onglet
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=novalyagencyweb@gmail.com&su=Demande%20de%20création%20de%20site",
        "_blank",
        "noopener,noreferrer"
      );
    }
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
          console.log("[Calendly] gtag fallback initialized");
        }

        window.gtag("event", "conversion", {
          send_to: `${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}`,
        });
        console.log("[Calendly] Google Ads conversion tracked:", `${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}`);
      } else if (process.env.NODE_ENV === "development") {
        console.warn("[Calendly] Google Ads conversion skipped: env vars missing");
      }

      // ── Action B : Discord Notification (via API sécurisée) ──
      fetch("/api/webhooks/discord", { method: "POST" })
        .then((res) => {
          if (res.ok) console.log("[Calendly] Discord notification sent");
          else console.error("[Calendly] Discord notification failed");
        })
        .catch((err) => console.error("[Calendly] Discord fetch error:", err));
    }

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  return (
    <Section id="contact-form" glow>
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20 scroll-animate">
          <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">Prêt à lancer votre projet ?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-text-primary">Recevez</span>
            <br />
            <span className="gradient-text">votre design gratuit</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto">
            On vous envoie un design complet de votre futur site — gratuit et sans engagement.
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
                      utmCampaign: "site_vitrine",
                      utmContent: "design_gratuit",
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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/70"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            <span>Design gratuit avant paiement</span>
          </div>
        </div>

        {/* Fallback contact options */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-center text-lg md:text-xl font-medium text-zinc-300 mb-8">
            Vous préférez expliquer votre projet par message ?
          </p>
          <SmartCta variant="section" ctaLabel="Recevoir mon design gratuit" whatsappText="Bonjour Novaly Agency, j'aimerais recevoir un design gratuit de mon futur site web." />
        </div>
      </div>
    </Section>
  );
}
