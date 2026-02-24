"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const professions = [
  "Artisans", "Commercants", "Coachs", "Consultants",
  "Therapeutes", "Restaurateurs", "Independants", "TPE / PME",
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { ref: tagsRef, isVisible: tagsVisible } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/7686986/7686986-uhd_1440_2560_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        {/* Logo */}
        <div className="mb-6 animate-reveal animate-delay-100">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span className="text-accent-lime">LIME</span>
            <span className="text-white ml-3">77</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-text-secondary text-sm sm:text-base uppercase tracking-[0.3em] mb-6 font-medium animate-reveal animate-delay-200">
          Offre unique
        </p>

        {/* Main Heading */}
        <h1
          className="font-bold tracking-tight mb-6 animate-reveal-scale"
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(255,255,255,0.1)",
          }}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Site premium a{" "}
            <span className="text-accent-lime hand-underline">497&euro;</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8 animate-reveal animate-delay-300 leading-relaxed">
          Un site professionnel{" "}
          <span className="text-white font-medium">sur mesure</span>, concu et
          livre en{" "}
          <span className="text-accent-lime font-semibold">48 heures</span>.
          <br className="hidden sm:block" />
          {"Ideal pour les pros qui veulent une presence en ligne claire, moderne et efficace."}
        </p>

        {/* CTA */}
        <div className="mb-10 animate-reveal animate-delay-400">
          <a
            href="#commander"
            className="btn-primary group inline-flex items-center gap-3 px-10 py-5 text-lg sm:text-xl"
          >
            <span>Commander mon site</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Profession Tags */}
        <div
          ref={tagsRef}
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 scroll-animate ${tagsVisible ? "visible" : ""}`}
        >
          {professions.map((prof, i) => (
            <span
              key={prof}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 cursor-default
                bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm
                hover:border-accent-lime/40 hover:bg-accent-lime/10 hover:text-accent-lime
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
          className={`text-center scroll-animate ${bottomVisible ? "visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            {"Livre en "}
            <span className="text-accent-lime">48h.</span>
          </p>
          <p className="text-lg text-white/80 font-medium">
            {"Satisfait ou rembourse"}
          </p>
        </div>
      </div>
    </section>
  );
}
