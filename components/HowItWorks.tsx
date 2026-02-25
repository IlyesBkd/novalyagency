import { Section } from "./Section";

const STEPS = [
  {
    num: "01",
    title: "Vous commandez",
    desc: "Choisissez votre formule et réservez un appel de 15 min. On cadre votre site ensemble, sans devis ni engagement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-7 h-7 text-accent-lime transition-transform duration-500 group-hover:scale-110">
        <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Vous envoyez vos infos",
    desc: "Logo, textes, couleurs, exemples de sites que vous aimez. Un formulaire simple guide chaque étape.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-7 h-7 text-accent-lime transition-transform duration-500 group-hover:scale-110">
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.112z" />
        <path d="m21.854 2.147-10.94 10.939" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Votre site est en ligne",
    desc: "En moins de 72h, votre site professionnel est livré, hébergé et prêt à convertir vos visiteurs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-7 h-7 text-accent-lime transition-transform duration-500 group-hover:scale-110">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 scroll-animate">
          <p className="text-accent-lime text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            Comment ça marche
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-text-primary">3 étapes.</span>
            <br />
            <span className="gradient-text">48 heures.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {STEPS.map(({ num, title, desc, icon }, i) => (
            <div
              key={num}
              className="relative scroll-animate"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-accent-lime/40 to-transparent" />
              )}
              <div className="text-center relative z-10 group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center transition-all duration-500 group-hover:bg-accent-lime/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-lime/20">
                  {icon}
                </div>
                <div className="inline-flex items-center gap-2 bg-accent-lime/10 border border-accent-lime/20 rounded-full px-3 py-1 mb-4">
                  <span className="text-accent-lime text-xs font-bold tracking-wider">
                    Étape {num}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 transition-colors duration-300 group-hover:text-accent-lime">
                  {title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
