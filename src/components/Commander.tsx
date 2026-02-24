"use client";

import { useState } from "react";
import { Clock, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Commander() {
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: cRef, isVisible: cV } = useScrollAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="commander" className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.04] to-accent-lime/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-lime/[0.05] rounded-full blur-[150px] animate-pulse-glow" />

      <div className="py-20 sm:py-28 relative z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div
            ref={hRef}
            className={`text-center mb-12 scroll-animate ${hV ? "visible" : ""}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-text-primary">{"Prêt à avoir"}</span>
              <br />
              <span className="gradient-text">votre site premium ?</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              {"Réservez un appel téléphonique de 15 minutes."}
              <br />
              <br />
              {"Nous cadrerons votre site, répondrons à vos questions et lancerons immédiatement la création (497 €, sans devis, sans engagement)."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-text-secondary group">
                <Clock className="w-5 h-5 text-accent-lime transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-text-primary">
                  Livraison 48h
                </span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary group">
                <Shield className="w-5 h-5 text-accent-lime transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-text-primary">
                  Satisfait ou remboursé
                </span>
              </div>
            </div>
          </div>

          <div
            ref={cRef}
            className={`bg-dark-900/60 border border-dark-800 rounded-2xl overflow-hidden backdrop-blur-sm scroll-animate-scale ${cV ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative w-full" style={{ minHeight: "680px" }}>
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <div className="calendly-spinner">
                    <div className="calendly-bounce1" />
                    <div className="calendly-bounce2" />
                    <div className="calendly-bounce3" />
                  </div>
                  <p className="text-text-secondary text-sm">
                    Chargement du calendrier...
                  </p>
                </div>
              )}
              <iframe
                src="https://calendly.com/aimane-fellah/nouvelle-reunion?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1e1f&text_color=ffffff&primary_color=9fe870"
                width="100%"
                height="680"
                frameBorder="0"
                scrolling="no"
                title="Réserver un appel - Calendly"
                onLoad={() => setIsLoading(false)}
                className="relative z-20"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <p
            className={`mt-8 text-center text-sm text-text-secondary scroll-animate ${hV ? "visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            {"Paiement sécurisé. Aucun engagement avant l'appel."}
          </p>
        </div>
      </div>
    </section>
  );
}
