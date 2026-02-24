const FEATURES = [
  "Design 100 % sur mesure",
  "Développement front-end complet",
  "Responsive mobile / tablette / desktop",
  "Formulaire de contact fonctionnel",
  "Optimisation SEO on-page",
  "Hébergement inclus 1 an (Offre B) ou mensuel (Offre A)",
  "Nom de domaine .fr ou .com",
  "Certificat SSL (HTTPS)",
  "Vitesse de chargement optimisée",
  "Livraison en 48h garantie",
  "1 révision incluse",
  "Satisfait ou remboursé",
];

export function WhatsIncluded() {
  return (
    <div id="whats-included">
      <section className="relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,112,184,0.06),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.03] to-accent-lime/[0.02]" />

        <div className="py-24 sm:py-32 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-16 scroll-animate">
              <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">
                L&apos;offre complète
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Tout est inclus
              </h2>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                Un site professionnel clé en main
              </p>
            </div>

            {/* Card */}
            <div
              className="max-w-4xl mx-auto scroll-animate-scale"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent-lime/50 via-accent-lime/20 to-accent-lime/50 opacity-60" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-lime/60 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-lime/30 to-transparent" />

                <div className="relative rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-[1fr,1.2fr]">
                    {/* Left panel */}
                    <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/[0.08] to-transparent" />
                      <div className="absolute top-6 left-6 w-20 h-20 bg-accent-lime/20 rounded-full blur-3xl" />
                      <div className="absolute bottom-6 right-6 w-16 h-16 bg-accent-lime/10 rounded-full blur-2xl" />

                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-accent-lime/15 border border-accent-lime/25 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check w-8 h-8 text-accent-lime">
                            <path d="m16 16 2 2 4-4" /><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.5" />
                            <path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" />
                          </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                          Tout inclus,<br />
                          <span className="text-accent-lime">dès le premier jour</span>
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          Aucun supplément caché. Aucun module payant. Un prix fixe, une
                          livraison rapide, un site professionnel.
                        </p>
                      </div>
                    </div>

                    {/* Right panel — features grid */}
                    <div className="p-8 sm:p-10 lg:p-12">
                      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">
                        Ce qui est inclus
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {FEATURES.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.03] transition-colors"
                          >
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-lime/15 border border-accent-lime/25 flex items-center justify-center mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </div>
                            <span className="text-text-secondary text-sm leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
