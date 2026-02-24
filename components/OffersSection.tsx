import Link from "next/link";

const CHECK_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0 text-accent-lime"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const OFFERS = [
  {
    id: "b",
    label: "One-shot",
    name: "Site sur mesure",
    price: "399",
    priceSuffix: "€",
    priceDetail: "paiement unique",
    premium: false,
    features: [
      "Création complète du site web",
      "Mise en ligne & configuration incluses",
      "Hébergement gratuit pendant 1 an",
      "Puis 80 €/an pour l'hébergement",
      "1 révision incluse après livraison",
    ],
    cta: "Choisir cette offre",
  },
  {
    id: "a",
    label: "Abonnement",
    badge: "Recommandé",
    name: "Site sur mesure + suivi",
    price: "99",
    priceSuffix: "€/mois",
    priceDetail: "engagement 6 mois",
    premium: true,
    features: [
      "Création complète du site web",
      "Hébergement, maintenance & sécurité inclus",
      "Mises à jour & modifications : 2h/mois",
      "Rapport Analytics mensuel",
      "Support prioritaire continu",
    ],
    cta: "Choisir cette offre",
  },
];

export function OffersSection() {
  return (
    <div id="offers">
      <section className="relative overflow-hidden bg-dark-950">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.015] via-accent-lime/[0.03] to-accent-lime/[0.015]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-accent-lime/[0.04] rounded-full blur-[160px]" />

        <div className="py-24 sm:py-32 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
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
                <span className="gradient-text">Un seul objectif : convertir.</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Choisissez l&apos;offre qui correspond à votre besoin. Les deux incluent un site 100 % sur mesure, livré en 48h.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {OFFERS.map((offer, i) => (
                <div
                  key={offer.id}
                  className="relative scroll-animate-scale"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Glow border for premium */}
                  {offer.premium && (
                    <div className="absolute -inset-px rounded-2xl ring-2 ring-blue-500 bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-blue-500/40 opacity-60" />
                  )}

                  <article
                    className={`relative rounded-2xl p-[1px] h-full ${
                      offer.premium
                        ? ""
                        : "border border-dark-700/60"
                    }`}
                  >
                    <div
                      className={`relative rounded-2xl h-full flex flex-col ${
                        offer.premium
                          ? "bg-gradient-to-br from-dark-800/90 to-dark-900/95 backdrop-blur-xl"
                          : "bg-dark-900/50 backdrop-blur-sm"
                      }`}
                    >
                      {/* Recommended badge */}
                      {offer.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-lime text-dark-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-accent-lime/30">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            {offer.badge}
                          </span>
                        </div>
                      )}

                      <div className="p-8 sm:p-10 flex flex-col flex-1">
                        {/* Label */}
                        <span className={`inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-6 ${
                          offer.premium
                            ? "bg-accent-lime/15 text-accent-lime border border-accent-lime/25"
                            : "bg-white/5 text-text-secondary border border-white/10"
                        }`}>
                          {offer.label}
                        </span>

                        {/* Name */}
                        <h3 className="text-xl font-bold text-text-primary mb-4">{offer.name}</h3>

                        {/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline gap-1">
                            <span className={`text-5xl font-extrabold tracking-tight ${
                              offer.premium ? "text-accent-lime" : "text-text-primary"
                            }`}>
                              {offer.price}
                            </span>
                            <span className={`text-lg font-semibold ${
                              offer.premium ? "text-accent-lime/80" : "text-text-secondary"
                            }`}>
                              {offer.priceSuffix}
                            </span>
                          </div>
                          <p className="text-text-secondary text-sm mt-1">{offer.priceDetail}</p>
                        </div>

                        {/* Divider */}
                        <div className={`h-px mb-6 ${
                          offer.premium
                            ? "bg-gradient-to-r from-transparent via-accent-lime/30 to-transparent"
                            : "bg-white/5"
                        }`} />

                        {/* Features */}
                        <ul className="space-y-3.5 mb-8 flex-1">
                          {offer.features.map((f) => (
                            <li key={f} className="flex items-start gap-3">
                              {CHECK_ICON}
                              <span className="text-text-secondary text-sm leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Link
                          href="#contact-form"
                          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                            offer.premium
                              ? "bg-accent-lime text-dark-950 hover:shadow-lg hover:shadow-accent-lime/30 hover:scale-[1.02]"
                              : "bg-white/5 text-text-primary border border-white/10 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          {offer.cta}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="text-center text-text-secondary text-sm mt-8 scroll-animate">
              Les deux offres incluent : design sur mesure, livraison 48h et garantie satisfait ou remboursé.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
