import Link from "next/link";

const ONESHOT_FEATURES = [
  "Création complète du site web",
  "Mise en ligne & configuration incluses",
  "Hébergement gratuit pendant 1 an",
  "Puis 80 €/an pour l'hébergement",
  "1 révision incluse après livraison",
];

const ABO_FEATURES = [
  "Création complète du site web",
  "Hébergement, maintenance & sécurité inclus",
  "Mises à jour & modifications : 2h/mois",
  "Rapport Analytics mensuel",
  "Support prioritaire continu",
];

function CheckIcon({ className = "text-accent-lime" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 ${className}`}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function OffersSection() {
  return (
    <div id="offers">
      <section className="relative overflow-hidden bg-dark-950">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.01] via-accent-lime/[0.025] to-accent-lime/[0.01]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-accent-lime/[0.035] rounded-full blur-[180px]" />

        <div className="py-24 sm:py-32 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16 scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
                  <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" />
                </svg>
                <span className="text-sm text-accent-lime font-medium">Nos offres</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-text-primary">Deux formules.</span>
                <br />
                <span className="gradient-text">Un seul objectif : convertir.</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Choisissez l&apos;offre qui correspond à votre besoin. Les deux incluent un site 100&nbsp;% sur mesure, livré en 48h.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">

              {/* ── CARD 1 : Paiement unique ── */}
              <div className="scroll-animate-scale" style={{ transitionDelay: "0ms" }}>
                <div className="relative rounded-2xl border border-white/[0.06] bg-dark-900/50 backdrop-blur-sm overflow-hidden">
                  <div className="p-8 sm:p-10 flex flex-col">
                    {/* Label */}
                    <span className="inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/5 text-text-secondary border border-white/10 mb-5">
                      Paiement unique
                    </span>

                    {/* Price block */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-5xl font-extrabold tracking-tight text-text-primary">399</span>
                        <span className="text-lg font-semibold text-text-secondary">€</span>
                      </div>
                      <p className="text-text-secondary/70 text-sm mt-1.5">paiement unique · pas d&apos;abonnement</p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/[0.06] mb-6" />

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {ONESHOT_FEATURES.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckIcon className="text-text-secondary/60" />
                          <span className="text-text-secondary text-sm leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="#contact-form"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-white/[0.06] text-text-primary border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      Choisir cette offre
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── CARD 2 : Abonnement (premium) ── */}
              <div className="scroll-animate-scale" style={{ transitionDelay: "120ms" }}>
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Animated glow border */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent-lime/60 via-accent-lime/20 to-accent-lime/60" />
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-accent-lime/[0.04]" />

                  <div className="relative rounded-2xl bg-gradient-to-br from-dark-800/95 to-dark-900 m-[1px]">
                    {/* Recommended badge */}
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-b-xl bg-accent-lime text-dark-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-accent-lime/25">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        Recommandé
                      </span>
                    </div>

                    {/* Top ambient glow inside card */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-lime/[0.06] rounded-full blur-[60px] pointer-events-none" />

                    <div className="relative p-8 sm:p-10 pt-12 flex flex-col">
                      {/* Label */}
                      <span className="inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent-lime/15 text-accent-lime border border-accent-lime/25 mb-5">
                        Abonnement
                      </span>

                      {/* Price block */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-5xl font-extrabold tracking-tight text-accent-lime">99</span>
                          <span className="text-lg font-semibold text-accent-lime/80">€/mois</span>
                        </div>
                        <p className="text-text-secondary/70 text-sm mt-1.5">engagement 6 mois · tout inclus</p>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-accent-lime/30 to-transparent mb-6" />

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {ABO_FEATURES.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-text-primary/90 text-sm leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        href="#contact-form"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-accent-lime text-dark-950 hover:shadow-lg hover:shadow-accent-lime/30 hover:scale-[1.02] transition-all duration-300"
                      >
                        Choisir cette offre
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>

                      {/* Urgency badge — right below CTA */}
                      <div className="mt-4 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/25">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                          </span>
                          <span className="text-red-400 text-xs font-bold">Plus que 3 places disponibles ce mois-ci</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom guarantees strip */}
            <div className="mt-12 scroll-animate">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-text-secondary/60 text-sm">
                {[
                  { icon: "⏱", label: "Livraison 48h" },
                  { icon: "✓", label: "Satisfait ou remboursé" },
                  { icon: "✦", label: "100 % sur mesure" },
                  { icon: "⚡", label: "Sans engagement caché" },
                ].map(({ icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2">
                    <span className="text-accent-lime/50">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
