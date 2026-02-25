import { Section } from "../Section";

const GOOGLE_LOGO = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const STAR = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#FBBC05]">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const REVIEWS = [
  { initials: "CM", name: "Clara M.", role: "Créatrice de bijoux", text: "J'avais peur que créer une boutique en ligne soit compliqué. En 72h j'avais un site magnifique avec paiement Stripe intégré. Mes premières ventes sont arrivées la semaine suivante. Incroyable." },
  { initials: "TL", name: "Thomas L.", role: "Boutique de vêtements", text: "On avait une boutique physique mais zéro présence en ligne. Novaly nous a livré un e-commerce pro avec catalogue produits, panier et tunnel d'achat. Les commandes en ligne représentent déjà 30% de notre CA." },
  { initials: "SH", name: "Sophie H.", role: "Artisane cosmétiques", text: "Le site est sublime, mes produits sont vraiment mis en valeur. Les clientes me disent que le parcours d'achat est super fluide. J'ai doublé mes ventes en un mois." },
  { initials: "AB", name: "Antoine B.", role: "Cave à vins", text: "Franchement bluffé. Le catalogue est clair, la fiche produit donne envie d'acheter. Les clients commandent directement en ligne et viennent retirer en boutique. Parfait." },
  { initials: "LR", name: "Laura R.", role: "Créatrice mode", text: "Je vendais uniquement sur Instagram. Avec ma boutique Novaly, j'ai enfin un vrai site pro. Le SEO fonctionne, je reçois des commandes de clients qui me trouvent sur Google." },
  { initials: "MG", name: "Marc G.", role: "Épicerie fine", text: "Site livré en 72h comme promis. Le design est élégant, le paiement en ligne fonctionne parfaitement. Mes clients adorent pouvoir commander depuis chez eux." },
  { initials: "JD", name: "Julie D.", role: "Fleuriste", text: "J'hésitais entre plusieurs solutions. Novaly m'a créé un site e-commerce sur mesure, pas un template. La différence se voit et mes clients le remarquent." },
  { initials: "PV", name: "Pierre V.", role: "Artisan chocolatier", text: "Le tableau de bord commandes est top. Je gère tout facilement. Le site est rapide, beau, et surtout il convertit. Très satisfait du résultat !" },
  { initials: "NK", name: "Nadia K.", role: "Boutique déco", text: "Passage du physique au digital réussi. Le catalogue est magnifique, les fiches produits sont optimisées. J'ai reçu ma première commande en ligne le jour du lancement." },
  { initials: "RB", name: "Romain B.", role: "Torréfacteur", text: "Site e-commerce propre et efficace. Le tunnel d'achat est fluide, les clients finalisent leurs commandes sans friction. Mon chiffre en ligne ne fait que monter." },
];

function ReviewCard({ initials, name, role, text }: { initials: string; name: string; role: string; text: string }) {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-xl shadow-md p-4">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900 text-sm truncate">{name}</span>
            {GOOGLE_LOGO}
          </div>
          <p className="text-xs text-gray-500 truncate">{role}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-2">{STAR}{STAR}{STAR}{STAR}{STAR}</div>
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">{text}</p>
    </div>
  );
}

const STATS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag w-5 h-5 text-accent-lime">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    value: "30+",
    label: "Boutiques livrées",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-accent-lime">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
    value: "+1196",
    label: "Avis clients",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-5 h-5 text-accent-lime">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
      </svg>
    ),
    value: "100%",
    label: "Satisfaction",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-accent-lime">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "72h",
    label: "Délai garanti",
  },
];

export function EcomCredibilitySection() {
  return (
    <Section id="credibility">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Pensé pour les e-commerçants</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Artisans, créateurs, boutiques physiques… passez à la vente en ligne avec un site professionnel.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
          {STATS.map(({ icon, value, label }, i) => (
            <div
              key={label}
              className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center card-hover scroll-animate-scale"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-accent-lime/10 flex items-center justify-center">
                {icon}
              </div>
              <div className="text-3xl font-bold text-text-primary mb-1">{value}</div>
              <div className="text-sm text-text-secondary">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Reviews Marquee - full width */}
      <div className="w-full">
        {/* Header badge */}
        <div className="flex items-center justify-center gap-2 mb-6 scroll-animate px-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-text-primary font-medium">Avis Google</span>
                <div className="flex gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#FBBC05]">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-text-secondary text-sm ml-1">5.0</span>
              </div>

              {/* Desktop: single scrolling row */}
              <div className="hidden md:block relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
                <div className="reviews-marquee">
                  <div className="reviews-track">
                    <div className="reviews-group">
                      {REVIEWS.map((r) => <ReviewCard key={r.initials} {...r} />)}
                    </div>
                    <div className="reviews-group" aria-hidden="true">
                      {REVIEWS.map((r) => <ReviewCard key={r.initials + "-dup"} {...r} />)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: two staggered rows */}
              <div className="md:hidden space-y-4">
                {[REVIEWS.slice(0, 5), REVIEWS.slice(5)].map((group, gi) => (
                  <div key={gi} className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
                    <div className="reviews-marquee">
                      <div className={gi === 0 ? "reviews-track" : "reviews-track-r"}>
                        <div className="reviews-group">
                          {group.map((r) => <ReviewCard key={r.initials} {...r} />)}
                        </div>
                        <div className="reviews-group" aria-hidden="true">
                          {group.map((r) => <ReviewCard key={r.initials + "-dup"} {...r} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      </div>
    </Section>
  );
}
