import { Section } from "../Section";

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
    ),
    title: "Paiement en ligne intégré (Stripe)",
    desc: "Acceptez CB, Apple Pay, Google Pay dès le lancement",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
    ),
    title: "Catalogue produits illimité",
    desc: "Ajoutez autant de produits que vous le souhaitez",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><path d="M16 16h6"/><path d="M19 13v6"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 .84.18"/></svg>
    ),
    title: "Gestion des stocks",
    desc: "Suivi automatique des quantités disponibles",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
    ),
    title: "Page produit optimisée conversion",
    desc: "Photos, description, variantes, avis — tout pour vendre",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    ),
    title: "Panier + tunnel d'achat",
    desc: "Parcours d'achat fluide pour maximiser les conversions",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    title: "Mobile-first",
    desc: "Parfait sur smartphone, tablette et desktop",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    ),
    title: "SEO e-commerce",
    desc: "Fiches produits optimisées pour Google Shopping",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    ),
    title: "Tableau de bord commandes",
    desc: "Suivez vos ventes, commandes et clients en temps réel",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    ),
    title: "Certificat SSL (HTTPS)",
    desc: "Paiements sécurisés, confiance client maximale",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    title: "Chargement ultra-rapide",
    desc: "Performance optimisée, zéro temps d'attente",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    title: "Nom de domaine .fr / .com",
    desc: "Votre adresse web professionnelle incluse",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
    ),
    title: "Satisfait ou remboursé",
    desc: "100 % remboursé si vous n'êtes pas satisfait",
    isBlue: true,
  },
];

export function EcomWhatsIncluded() {
  return (
    <Section id="whats-included" glow>
      <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-10 md:mb-16 scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.5"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
                <span className="text-sm text-accent-lime font-medium">L&apos;offre complète</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Tout est inclus.{" "}
                <span className="gradient-text">Prêt à vendre.</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                Paiement, catalogue, stocks, SEO — votre boutique est livrée clé en main pour 899€.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
              {FEATURES.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`group relative flex items-start gap-4 p-5 rounded-2xl bg-dark-900/40 border border-white/[0.05] ${feature.isBlue ? 'hover:border-blue-400/20' : 'hover:border-accent-lime/20'} hover:bg-dark-900/60 transition-all duration-300 scroll-animate-scale`}
                  style={{ transitionDelay: `${(i % 6) * 60}ms` }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.isBlue ? 'from-blue-400/[0.03]' : 'from-accent-lime/[0.03]'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`relative flex-shrink-0 w-10 h-10 rounded-xl ${feature.isBlue ? 'bg-blue-400/10 border-blue-400/20 group-hover:bg-blue-400/15' : 'bg-accent-lime/10 border-accent-lime/20 group-hover:bg-accent-lime/15'} border flex items-center justify-center transition-colors duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="relative">
                    <p className="font-semibold text-text-primary text-sm mb-0.5">{feature.title}</p>
                    <p className="text-text-secondary text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </Section>
  );
}
