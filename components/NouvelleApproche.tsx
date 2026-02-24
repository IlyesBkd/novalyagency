const COMPARISONS = [
  {
    before: "Agence classique",
    beforeDetails: ["Devis interminable", "3 à 6 mois de délai", "Budgets opaques", "Processus complexe"],
    after: "Notre approche",
    afterDetails: ["Prix fixe, transparent", "Livraison en 48h", "100 % personnalisé", "Zéro surprise"],
  },
];

export function NouvelleApproche() {
  return (
    <div id="nouvelle-approche" className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950 to-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-lime/[0.02] to-accent-lime/[0.03]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-accent-lime/[0.03] rounded-full blur-[150px]" />

      <div className="py-24 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6 animate-pulse-glow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-accent-lime">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span className="text-sm text-accent-lime font-medium">Une nouvelle approche</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 space-y-2">
              <div>
                Un site <span className="gradient-text">100 % personnalisé.</span>
              </div>
              <div>
                À prix <span className="text-accent-lime">100 % fixe.</span>
              </div>
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
              <div className="bg-dark-900/40 border border-dark-800 rounded-2xl p-6">
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
              <div className="relative bg-dark-900/40 border border-accent-lime/30 rounded-2xl p-6">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent-lime/20 to-transparent opacity-40 pointer-events-none" />
                <p className="text-accent-lime text-sm uppercase tracking-[0.18em] mb-4 font-medium">
                  Notre approche
                </p>
                <ul className="space-y-3">
                  {["Prix fixe, transparent", "Livraison en 48h", "100 % personnalisé", "Zéro surprise"].map((item) => (
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
      </div>
    </div>
  );
}
