import { Section } from "./Section";
import { ABPriceCard, ABCtaButton } from "./ABPrice";

const INCLUDED_FEATURES = [
  { label: "Site 1 à 3 pages", icon: "globe" },
  { label: "Design premium sur mesure", icon: "sparkles" },
  { label: "100% mobile responsive", icon: "smartphone" },
  { label: "Chargement ultra rapide", icon: "zap" },
  { label: "Optimisation SEO", icon: "search" },
  { label: "Formulaire de contact", icon: "mail" },
  { label: "Bouton appel direct", icon: "phone" },
  { label: "Bouton WhatsApp", icon: "message" },
  { label: "Widget avis Google", icon: "star" },
];

function FeatureIcon({ name }: { name: string }) {
  const cls = "lucide w-4 h-4 text-accent-lime";
  switch (name) {
    case "globe": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
    case "sparkles": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;
    case "smartphone": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
    case "zap": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case "search": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
    case "mail": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
    case "phone": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case "message": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>;
    case "star": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    default: return null;
  }
}

export function OffersSection() {
  return (
    <Section id="offers" glow>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">L&apos;offre complète</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">Tout est inclus</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">Un site professionnel clé en main</p>
        </div>

        {/* Premium card */}
        <div className="max-w-4xl mx-auto scroll-animate-scale" style={{ transitionDelay: "100ms" }}>
          <div className="relative">
            {/* Border glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent-lime/50 via-accent-lime/20 to-accent-lime/50 opacity-60" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-lime/60 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-lime/30 to-transparent" />

            <div className="relative rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-[1fr,1.2fr]">

                {/* Left — Price */}
                <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/[0.08] to-transparent" />
                  <div className="absolute top-6 left-6 w-20 h-20 bg-accent-lime/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-6 right-6 w-16 h-16 bg-accent-lime/10 rounded-full blur-2xl" />

                  <div className="relative">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-accent-lime text-xs font-semibold uppercase tracking-wider mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                      Prix unique
                    </span>

                    <ABPriceCard />
                    <p className="text-text-secondary text-sm mb-4 lg:mb-8">Paiement unique — Sans abonnement</p>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-4 w-full">
                      <ABCtaButton text="Commander mon site" />
                    </div>
                  </div>
                </div>

                {/* Right — Features */}
                <div className="relative p-8 sm:p-10 lg:p-12">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">Ce qui est inclus</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {INCLUDED_FEATURES.map(({ label, icon }) => (
                      <div key={label} className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.03]">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-lime/20 to-accent-lime/5 border border-accent-lime/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:from-accent-lime/30 group-hover:to-accent-lime/10 group-hover:border-accent-lime/20 group-hover:scale-110">
                          <FeatureIcon name={icon} />
                        </div>
                        <span className="text-text-primary text-sm font-medium transition-colors duration-300 group-hover:text-accent-lime">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hosting bonus */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-400/20 rounded-xl p-5">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-400"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
                        <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">1 an offert</span>
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-text-primary text-base font-semibold mb-1.5">Hébergement + Nom de domaine</p>
                        <p className="text-text-secondary text-xs leading-relaxed">Votre site en ligne 24h/24 avec votre propre adresse<br />(ex: votreentreprise.fr)</p>
                      </div>
                      <div className="bg-dark-800/60 border border-white/10 rounded-lg px-4 py-3">
                        <p className="text-text-primary text-sm font-medium text-center mb-1">Puis 150 €/an à partir de la 2e année</p>
                        <p className="text-text-secondary text-xs text-center opacity-70">Frais de renouvellement pour maintenir votre site actif</p>
                      </div>
                    </div>
                  </div>

                  {/* Double guarantee */}
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Double garantie</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 border border-emerald-400/20 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <p className="text-text-primary text-sm font-medium">Livré en 72h ou remboursé</p>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 border border-emerald-400/20 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                        </div>
                        <p className="text-text-primary text-sm font-medium">Satisfait ou remboursé</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="lg:hidden mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-4">
                    <ABCtaButton text="Commander mon site" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
