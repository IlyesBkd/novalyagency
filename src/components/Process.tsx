"use client";

import { Phone, FileText, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Appel de cadrage",
    description:
      "15 min pour comprendre votre activite, vos besoins et definir ensemble le contenu de votre site.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Creation sur mesure",
    description:
      "Notre equipe concoit votre site professionnel avec un design premium adapte a votre image.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Livraison en 48h",
    description:
      "Votre site est en ligne, optimise et pret a recevoir vos premiers visiteurs.",
  },
];

export default function Process() {
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: gRef, isVisible: gV } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.025] to-accent-lime/[0.02]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-lime/[0.025] rounded-full blur-[120px]" />

      <div className="py-20 sm:py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div
            ref={hRef}
            className={`text-center mb-14 scroll-animate ${hV ? "visible" : ""}`}
          >
            <p className="text-accent-lime text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Comment ca marche
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">{"3 etapes."}</span>
              <br />
              <span className="gradient-text">48 heures.</span>
            </h2>
          </div>

          <div
            ref={gRef}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className={`relative scroll-animate ${gV ? "visible" : ""}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Connector line between steps */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-accent-lime/40 to-accent-lime/10" />
                  )}
                  <div className="text-center relative z-10 group">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center transition-all duration-500 group-hover:bg-accent-lime/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-lime/20">
                      <Icon className="w-7 h-7 text-accent-lime" />
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-lime text-dark-950 font-bold text-sm mb-4 transition-transform duration-300 group-hover:scale-110">
                      {s.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 transition-colors duration-300 group-hover:text-accent-lime">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
