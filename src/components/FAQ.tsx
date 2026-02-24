"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "497€ pour un site, c'est vraiment le prix final ?",
    answer:
      "Oui. 497€ tout compris : design, développement, hébergement et nom de domaine offerts la première année. Aucun frais caché, aucun supplément.",
  },
  {
    question: "Mon site sera-t-il vraiment unique ?",
    answer:
      "Aucun template, aucun modèle recyclé.\nChaque site est conçu spécifiquement pour votre activité, dès réception de vos contenus.",
  },
  {
    question: "Et si je n'ai pas de logo ou de photos ?",
    answer:
      "Aucun problème.\nNous utilisons des images libres de droits de qualité professionnelle.\nLa création d'un logo texte élégant est proposée en option à 49 €.\nVotre site conservera un rendu premium.",
  },
  {
    question: "Le site sera-t-il vraiment professionnel ?",
    answer:
      "Absolument. On crée des sites modernes, rapides et optimisés pour le référencement. Le design est soigné et adapté à votre activité. Si le résultat ne vous convient pas, on vous rembourse.",
  },
  {
    question: "Puis-je modifier mon site après la livraison ?",
    answer:
      "Une révision est incluse après la livraison pour ajuster les détails. Pour des modifications ultérieures, on peut intervenir à la demande.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer:
      "On vous rembourse intégralement. Notre objectif est votre satisfaction. Si le site ne correspond pas à vos attentes après la révision incluse, vous récupérez votre argent.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: lRef, isVisible: lV } = useScrollAnimation();
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.025] to-accent-lime/[0.015]" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-lime/[0.025] rounded-full blur-[130px]" />

      <div className="py-20 sm:py-28 relative z-10">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div
            ref={hRef}
            className={`text-center mb-14 scroll-animate ${hV ? "visible" : ""}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-text-primary">Questions</span>
              <br />
              <span className="gradient-text hand-underline">fréquentes</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              Tout ce que vous devez savoir avant de commander.
            </p>
          </div>

          <div ref={lRef} className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-dark-900/40 border border-dark-800 rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-sm hover:border-dark-700 scroll-animate ${lV ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-text-primary text-sm sm:text-base font-medium pr-4 transition-colors duration-300 group-hover:text-accent-lime">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-lime flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: open === i ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-text-secondary text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
