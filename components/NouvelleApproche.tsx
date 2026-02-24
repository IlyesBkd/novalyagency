import { Section } from "./Section";

export function NouvelleApproche() {
  return (
    <Section id="nouvelle-approche">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6 animate-pulse-glow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-accent-lime">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span className="text-sm text-accent-lime font-medium">Une nouvelle approche</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Un site <span className="gradient-text">100 % personnalisé.</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Nous avons créé une alternative simple : un site 100 % personnalisé, moderne et
            professionnel, livré rapidement, sans process interminable.
          </p>
        </div>

        {/* Comparison table */}
        <div className="scroll-animate-scale" style={{ transitionDelay: "150ms" }}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Before */}
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <p className="text-text-secondary text-sm uppercase tracking-[0.18em] mb-4 font-medium">
                Agence classique
              </p>
              <ul className="space-y-3">
                {["Devis interminable", "3 à 6 mois de délai", "Budgets opaques", "Processus complexe"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-red-400/70">
                      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="relative bg-black/30 backdrop-blur-md border border-accent-lime/30 rounded-2xl p-6">
              <div className="hidden md:block absolute -inset-px rounded-2xl bg-gradient-to-b from-accent-lime/20 to-transparent opacity-40 pointer-events-none" />
              <p className="text-accent-lime text-sm uppercase tracking-[0.18em] mb-4 font-medium">
                Notre approche
              </p>
              <ul className="space-y-3">
                {["Tarif clair, sans surprise", "Livraison en 48h", "100 % personnalisé", "Zéro engagement caché"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-accent-lime">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
