import { Section } from "./Section";

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    ),
    title: "Design 100 % sur mesure",
    desc: "Identité visuelle unique, créée pour vous",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: "Développement front-end",
    desc: "Code propre, performant et moderne",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    title: "Responsive multi-écrans",
    desc: "Parfait sur mobile, tablette et desktop",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    title: "Formulaire de contact",
    desc: "Recevez les demandes directement par mail",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    ),
    title: "Optimisation SEO on-page",
    desc: "Visibilité maximale sur Google",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
    ),
    title: "Hébergement inclus",
    desc: "1 an offert (Offre B) ou mensuel (Offre A)",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    title: "Nom de domaine .fr / .com",
    desc: "Votre adresse web professionnelle",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    ),
    title: "Certificat SSL (HTTPS)",
    desc: "Site sécurisé, rassurant pour vos clients",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    title: "Chargement ultra-rapide",
    desc: "Performance optimisée, zéro temps d'attente",
    isBlue: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: "Livraison en 48h garantie",
    desc: "Votre site en ligne sous 2 jours ouvrés",
    isBlue: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
    ),
    title: "1 révision incluse",
    desc: "Modifications après livraison sans supplément",
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

export function WhatsIncluded() {
  return (
    <Section id="whats-included" glow>
      <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-16 scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.5"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
                <span className="text-sm text-accent-lime font-medium">L&apos;offre complète</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Tout est inclus.{" "}
                <span className="gradient-text">Vraiment.</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                Aucun supplément caché. Aucun module payant. Un tarif clair, une livraison rapide, un site professionnel.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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

            {/* Guarantee strip */}
            <div className="relative scroll-animate" style={{ transitionDelay: "200ms" }}>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent-lime/30 via-accent-lime/10 to-accent-lime/30" />
              <div className="relative rounded-2xl bg-dark-900/80 backdrop-blur-sm px-8 py-5 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {[
                  { label: "Livraison 48h", icon: "⏱" },
                  { label: "Satisfait ou remboursé", icon: "✓" },
                  { label: "100 % personnalisé", icon: "✦" },
                  { label: "Sans engagement caché", icon: "⚡" },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-accent-lime text-sm font-bold">{icon}</span>
                    <span className="text-text-primary text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </Section>
  );
}
