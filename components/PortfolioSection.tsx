"use client";
import { useState } from "react";

type PortfolioSectionProps = {
  imageNames: string[];
};

export function PortfolioSection({ imageNames }: PortfolioSectionProps) {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  if (!imageNames.length) return null;

  const cards = imageNames.map((name, index) => {
    const url = `/assets/portfolio/${encodeURIComponent(name)}`;
    const label = String(index + 1).padStart(2, "0");
    return (
      <button
        key={`${name}-${index}`}
        className="portfolio-thumb"
        onClick={() => setActiveModal(index)}
        aria-label={`Ouvrir maquette ${label}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={`Aperçu maquette ${index + 1}`} loading="lazy" decoding="async" />
        <span className="portfolio-thumb-label">Maquette {label}</span>
      </button>
    );
  });

  return (
    <>
      <div id="portfolio">
        <section className="relative overflow-hidden bg-dark-950">
          <div className="absolute inset-0 bg-dark-950" />
          <div className="py-24 sm:py-28 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-10">
                <p className="text-accent-lime text-sm uppercase tracking-[0.22em] mb-4 font-medium">
                  Portfolio
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                  Maquettes de sites web
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Défilement horizontal automatique. Cliquez sur une carte pour afficher
                  la maquette complète.
                </p>
              </div>

              {/* Marquee */}
              <div className="portfolio-marquee">
                <div className="portfolio-track">
                  <div className="portfolio-group">{cards}</div>
                  <div className="portfolio-group" aria-hidden="true">
                    {cards}
                  </div>
                </div>
              </div>

              <p className="text-text-secondary text-sm mt-2">
                Survolez pour mettre en pause, puis cliquez pour ouvrir une maquette complète.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div
          className="portfolio-modal-overlay"
          onClick={() => setActiveModal(null)}
        >
          <button
            className="portfolio-modal-close"
            onClick={() => setActiveModal(null)}
            aria-label="Fermer"
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/portfolio/${encodeURIComponent(imageNames[activeModal])}`}
            alt={`Maquette complète ${activeModal + 1}`}
            className="portfolio-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
