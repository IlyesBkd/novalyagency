"use client";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Quel est le prix exact de votre offre ?",
    a: "Deux formules claires : Offre A à 99 €/mois (engagement 6 mois) avec hébergement, maintenance et mises à jour inclus. Offre B à 399 € en paiement unique avec hébergement gratuit la première année, puis 80 €/an. Aucun supplément, aucune surprise.",
  },
  {
    q: "Mon site sera-t-il vraiment personnalisé ?",
    a: "Absolument. Aucun template, aucun modèle recyclé. Chaque site est conçu spécifiquement pour votre activité, dès réception de vos contenus.",
  },
  {
    q: "Et si je n'ai pas de logo ou de photos ?",
    a: "Aucun problème. Nous utilisons des images libres de droits de qualité professionnelle. La création d'un logo texte élégant est proposée en option à 49 €. Votre site conservera un rendu premium.",
  },
  {
    q: "Le site sera-t-il vraiment professionnel ?",
    a: "Absolument. On crée des sites modernes, rapides et optimisés pour le référencement. Le design est soigné et adapté à votre activité. Si le résultat ne vous convient pas, on vous rembourse.",
  },
  {
    q: "Puis-je modifier mon site après la livraison ?",
    a: "Oui. Une révision complète est incluse après livraison. Avec l'Offre A, vous bénéficiez de 2h de modifications par mois. Les modifications majeures (refonte totale) sont facturées séparément selon devis.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div id="faq">
      <section className="relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.025] to-accent-lime/[0.015]" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-lime/[0.025] rounded-full blur-[130px]" />

        <div className="py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            {/* Heading */}
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-text-primary">Questions</span>
                <br />
                <span className="gradient-text">fréquentes</span>
              </h2>
              <p className="text-lg text-text-secondary">
                Tout ce que vous devez savoir avant de commander.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {FAQ_ITEMS.map(({ q, a }, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={q}
                    className={`bg-dark-900/40 border rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-sm scroll-animate ${
                      isOpen ? "border-accent-lime/30" : "border-dark-800 hover:border-dark-700"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <button
                      className="w-full px-6 py-5 flex items-center justify-between text-left group"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-medium pr-4 transition-colors duration-300 ${
                          isOpen ? "text-accent-lime" : "text-text-primary group-hover:text-accent-lime"
                        }`}
                      >
                        {q}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down w-5 h-5 text-accent-lime flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isOpen ? "400px" : "0" }}
                    >
                      <p className="px-6 pb-5 text-text-secondary leading-relaxed">{a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
