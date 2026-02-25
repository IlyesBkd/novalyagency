import { Section } from "../Section";

const GUARANTEES = [
  {
    title: "Livraison 48h garantie",
    desc: "Si votre boutique n'est pas livrée dans les 48h suivant la réception de vos contenus, vous êtes remboursé intégralement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-accent-lime">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Satisfait ou remboursé",
    desc: "Si le résultat ne vous convient pas, on vous rembourse sans discussion. Aucun risque de votre côté.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6 text-accent-lime">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Modifications incluses",
    desc: "Une révision complète est incluse après la livraison. Produits, design, tunnel d'achat — on ajuste jusqu'à ce que ce soit parfait.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil w-6 h-6 text-accent-lime">
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
  },
];

export function EcomGuaranteeSection() {
  return (
    <Section id="guarantee" glow>
      <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-10 md:mb-16 scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6 animate-pulse-glow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4 text-accent-lime">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
                <span className="text-sm text-accent-lime font-medium">Double garantie</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-text-primary">Zéro risque</span>
                <br />
                <span className="gradient-text">pour vous</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                On prend tous les risques à votre place. Vous n&apos;avez rien à perdre.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {GUARANTEES.map(({ title, desc, icon }, i) => (
                <div
                  key={title}
                  className="bg-dark-900/60 border border-dark-800 rounded-2xl p-8 text-center card-hover backdrop-blur-sm scroll-animate-scale"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center transition-all duration-500 hover:bg-accent-lime/20 hover:scale-110 hover:shadow-lg hover:shadow-accent-lime/20">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
      </div>
    </Section>
  );
}
