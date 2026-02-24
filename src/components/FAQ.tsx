"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "497\u20AC pour un site, c'est vraiment le prix final ?",
    answer:
      "Oui. 497\u20AC tout compris : design, developpement, hebergement et nom de domaine offerts la premiere annee. Aucun frais cache, aucun supplement.",
  },
  {
    question: "Mon site sera-t-il vraiment unique ?",
    answer:
      "Aucun template, aucun modele recycle.\nChaque site est concu specifiquement pour votre activite, des reception de vos contenus.",
  },
  {
    question: "Et si je n'ai pas de logo ou de photos ?",
    answer:
      "Aucun probleme.\nNous utilisons des images libres de droits de qualite professionnelle.\nLa creation d'un logo texte elegant est proposee en option a 49 \u20AC.\nVotre site conservera un rendu premium.",
  },
  {
    question: "Le site sera-t-il vraiment professionnel ?",
    answer:
      "Absolument. On cree des sites modernes, rapides et optimises pour le referencement. Le design est soigne et adapte a votre activite. Si le resultat ne vous convient pas, on vous rembourse.",
  },
  {
    question: "Puis-je modifier mon site apres la livraison ?",
    answer:
      "Une revision est incluse apres la livraison pour ajuster les details. Pour des modifications ulterieures, on peut intervenir a la demande.",
  },
  {
    question: "Je ne suis pas a l'aise avec la technique, c'est un probleme ?",
    answer:
      "Pas du tout. Vous n'avez rien de technique a faire. Envoyez-nous vos contenus, on s'occupe de tout. On vous guide a chaque etape avec un formulaire simple.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer:
      "On vous rembourse integralement. Notre objectif est votre satisfaction. Si le site ne correspond pas a vos attentes apres la revision incluse, vous recuperez votre argent.",
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
              <span className="gradient-text">frequentes</span>
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
