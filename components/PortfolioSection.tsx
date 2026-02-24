"use client";
import { useState, useRef, useCallback } from "react";
import { Section } from "./Section";

type PortfolioSectionProps = {
  imageNames: string[];
};

export function PortfolioSection({ imageNames }: PortfolioSectionProps) {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback(() => {
    const track = marqueeRef.current?.querySelector(".portfolio-track") as HTMLElement | null;
    if (track) track.style.animationPlayState = "paused";
  }, []);

  const handleTouchEnd = useCallback(() => {
    const track = marqueeRef.current?.querySelector(".portfolio-track") as HTMLElement | null;
    if (track) track.style.animationPlayState = "running";
  }, []);

  if (!imageNames.length) return null;

  const makeCard = (name: string, index: number) => {
    const url = `/assets/portfolio/${encodeURIComponent(name)}`;
    const label = String(index + 1).padStart(2, "0");
    return (
      <button
        key={`${name}-${index}`}
        className="portfolio-thumb snap-center"
        onClick={() => setActiveModal(index)}
        aria-label={`Ouvrir maquette ${label}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={`Aperçu maquette ${index + 1}`} loading="lazy" decoding="async" />
      </button>
    );
  };

  const cards = imageNames.map((name, index) => makeCard(name, index));

  return (
    <>
      <Section id="portfolio">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent-lime text-sm uppercase tracking-[0.22em] mb-4 font-medium">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Ils nous ont fait confiance
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Des professionnels comme vous qui avaient besoin d&apos;un site rapidement.
            </p>
          </div>

          {/* Mobile: native horizontal scroll with snap */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 portfolio-scroll-hide touch-pan-x">
            {imageNames.map((name, index) => makeCard(name, index))}
          </div>

          {/* Desktop: infinite marquee */}
          <div
            ref={marqueeRef}
            className="hidden md:block portfolio-marquee"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="portfolio-track">
              <div className="portfolio-group">{cards}</div>
              <div className="portfolio-group" aria-hidden="true">
                {cards}
              </div>
            </div>
          </div>
        </div>
      </Section>

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
