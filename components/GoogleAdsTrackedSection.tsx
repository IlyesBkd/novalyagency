"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Google Ads Engagement Label (from env)
const GA_ENGAGEMENT_LABEL = process.env.NEXT_PUBLIC_GA_ENGAGEMENT_LABEL;

type GoogleAdsTrackedSectionProps = {
  children: ReactNode;
  /** Nom de la section pour les logs (debug) */
  sectionName?: string;
  /** Pourcentage de la section visible pour déclencher l'événement (0–1) */
  threshold?: number;
};

/**
 * Wrapper qui déclenche une micro-conversion Google Ads
 * une seule fois quand la section entre dans le viewport.
 * Utilise l'API IntersectionObserver native.
 */
export function GoogleAdsTrackedSection({
  children,
  sectionName = "Section",
  threshold = 0.3,
}: GoogleAdsTrackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasFired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si pas de label configuré, on ne fait rien
    if (!GA_ENGAGEMENT_LABEL) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `[GoogleAdsTrackedSection] NEXT_PUBLIC_GA_ENGAGEMENT_LABEL non défini - tracking désactivé pour "${sectionName}"`
        );
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Déclenche une seule fois quand la section est visible
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;

          // Fallback: Si gtag n'est pas défini, on le recrée
          if (typeof window.gtag === "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function (...args: unknown[]) {
              window.dataLayer?.push(args);
            };
          }

          // Envoi de la micro-conversion Google Ads
          window.gtag("event", "conversion", {
            send_to: GA_ENGAGEMENT_LABEL,
          });

          console.log(
            `✅ Micro-conversion envoyée : ${sectionName} atteinte (${GA_ENGAGEMENT_LABEL})`
          );

          // Déconnecte l'observer pour ne plus tracker
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    // Cleanup
    return () => observer.disconnect();
  }, [sectionName, threshold]);

  return <div ref={ref}>{children}</div>;
}
