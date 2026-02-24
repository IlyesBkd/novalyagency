"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const professions = [
  "Artisans", "Commerçants", "Coachs", "Consultants",
  "Thérapeutes", "Restaurateurs", "Indépendants", "TPE / PME",
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { ref: tagsRef, isVisible: tagsVisible } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black z-0" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/fr-fr/download/video/7686986/?fps=23.98&h=1080&w=1920"
          type="video/mp4"
        />
      </video>

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Logo */}
        <div className="mb-4 animate-reveal animate-delay-100">
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="text-accent-lime">LIME</span>
              <span className="text-white ml-3">77</span>
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-text-secondary text-sm sm:text-base uppercase tracking-[0.3em] mb-4 font-medium animate-reveal animate-delay-200">
          Offre unique
        </p>

        {/* Main Heading */}
        <h1
          className="font-bold tracking-tight mb-3 animate-reveal-scale"
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(255,255,255,0.1), 0 0 120px rgba(255,255,255,0.05)",
          }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary">
            Site premium à{" "}
            <span className="text-accent-lime hand-underline">497€</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-5 animate-reveal animate-delay-300">
          Un site professionnel{" "}
          <span className="text-text-primary font-medium">sur mesure</span>,
          conçu et livré en{" "}
          <span className="text-accent-lime font-semibold">48 heures</span>.
          <br className="hidden sm:block" />
          Idéal pour les pros qui veulent une présence en ligne claire, moderne et efficace.
        </p>

        {/* CTA */}
        <div className="mb-10 animate-reveal animate-delay-400">
          <a
            href="#commander"
            className="btn-primary group inline-flex items-center gap-3 px-10 py-5 text-xl"
          >
            <span>Commander mon site</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Profession Tags */}
        <div
          ref={tagsRef}
          className={`flex flex-wrap justify-center gap-3 mb-14 scroll-animate ${tagsVisible ? "visible" : ""}`}
        >
          {professions.map((prof, i) => (
            <span
              key={prof}
              className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 cursor-default
                bg-dark-800/80 text-text-primary border border-dark-700/60
                hover:border-accent-lime/40 hover:bg-accent-lime/10 hover:text-accent-lime hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.12)]
                scroll-animate-scale ${tagsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${300 + i * 70}ms` }}
            >
              {prof}
            </span>
          ))}
        </div>

        {/* Bottom text */}
        <div
          ref={bottomRef}
          className={`text-center mb-12 scroll-animate ${bottomVisible ? "visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="mb-6">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-2">
              Livré en <span className="text-accent-lime">48h.</span>
            </p>
            <p className="text-lg text-text-primary font-medium mb-6">
              Satisfait ou remboursé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
