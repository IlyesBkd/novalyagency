import Link from "next/link";
import { Section } from "./Section";

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

function Check({ lime = false }: { lime?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 ${lime ? "text-accent-lime" : "text-text-secondary/60"}`}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function OffersSection() {
  return (
    <Section id="offers" glow>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 scroll-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
              <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" />
            </svg>
            <span className="text-sm text-accent-lime font-medium">Nos offres</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">Deux formules.</span>
            <br />
            <span className="gradient-text">Un seul objectif&nbsp;: convertir.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choisissez l&apos;offre qui correspond à votre besoin. Les deux incluent un site 100&nbsp;% sur mesure, livré en 48h.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">

          {/* ── Card 1 : Paiement unique ── */}
          <div className="scroll-animate-scale h-full">
            <div className="group h-full bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <span className="inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/5 text-text-secondary border border-white/10 mb-6">
                Paiement unique
              </span>

              <div className="mb-1">
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-text-primary">399</span>
                <span className="text-xl font-bold text-text-secondary/60 ml-1">€</span>
              </div>
              <p className="text-text-secondary/60 text-sm mb-6">Paiement unique · pas d&apos;abonnement</p>

              <div className="h-px bg-white/[0.06] mb-6" />

              <ul className="space-y-3.5 flex-1">
                {ONESHOT_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check />
                    <span className="text-text-secondary text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact-form"
                className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-text-primary bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Choisir cette offre
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* ── Card 2 : Abonnement (premium) ── */}
          <div className="scroll-animate-scale h-full" style={{ transitionDelay: "100ms" }}>
            <div className="group relative h-full">
              {/* Subtle lime glow behind card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-accent-lime/30 via-accent-lime/10 to-accent-lime/30 blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative h-full bg-black/30 backdrop-blur-md border border-accent-lime/20 rounded-3xl p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-all duration-300">
                {/* Badge "Recommandé" */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-lime text-dark-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-accent-lime/25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    Recommandé
                  </span>
                </div>

                <span className="inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent-lime/10 text-accent-lime border border-accent-lime/20 mt-3 mb-6">
                  Abonnement
                </span>

                <div className="mb-1">
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-white">99</span>
                  <span className="text-xl font-bold text-accent-lime ml-1">€<span className="text-base font-semibold text-accent-lime/70">/mois</span></span>
                </div>
                <p className="text-text-secondary/60 text-sm mb-6">Engagement 6 mois · tout inclus</p>

                <div className="h-px bg-gradient-to-r from-transparent via-accent-lime/20 to-transparent mb-6" />

                <ul className="space-y-3.5 flex-1">
                  {ABO_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check lime />
                      <span className="text-text-primary/90 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact-form"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm bg-accent-lime text-dark-950 hover:shadow-lg hover:shadow-accent-lime/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Choisir cette offre
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>

                {/* Urgency pill */}
                <div className="mt-3 flex justify-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/[0.08] border border-red-500/15 text-red-400 text-xs font-medium">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                    </span>
                    Plus que 3 places ce mois-ci
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Reassurance strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-text-secondary/50 text-sm scroll-animate">
          {[
            { icon: "⏱", text: "Livraison 48h" },
            { icon: "✓", text: "Satisfait ou remboursé" },
            { icon: "✦", text: "100 % sur mesure" },
            { icon: "⚡", text: "Sans engagement caché" },
          ].map(({ icon, text }, i) => (
            <span key={text} className="inline-flex items-center gap-1.5">
              {i > 0 && <span className="text-white/10 mr-2">·</span>}
              <span className="text-accent-lime/40">{icon}</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
