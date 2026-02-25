import Link from "next/link";
import { Section } from "../Section";

const INCLUDED_FEATURES = [
  { label: "Boutique e-commerce complète", icon: "shopping-bag" },
  { label: "Paiement intégré (Stripe)", icon: "credit-card" },
  { label: "Catalogue produits illimité", icon: "package" },
  { label: "Gestion des stocks", icon: "box" },
  { label: "Panier + tunnel d'achat", icon: "cart" },
  { label: "Tableau de bord commandes", icon: "chart" },
  { label: "SEO e-commerce", icon: "search" },
  { label: "100% mobile responsive", icon: "smartphone" },
  { label: "Certificat SSL (HTTPS)", icon: "shield" },
];

function FeatureIcon({ name }: { name: string }) {
  const cls = "lucide w-4 h-4 text-accent-lime";
  switch (name) {
    case "shopping-bag": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
    case "credit-card": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>;
    case "package": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
    case "box": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
    case "cart": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
    case "chart": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
    case "search": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
    case "smartphone": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
    case "shield": return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>;
    default: return null;
  }
}

export function EcomOffersSection() {
  return (
    <Section id="offers" glow>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">L&apos;offre complète</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">Tout est inclus</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">Une boutique en ligne professionnelle clé en main</p>
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

                    <div className="mb-2">
                      <div className="flex items-start justify-center lg:justify-start">
                        <span className="text-7xl sm:text-8xl lg:text-[6.5rem] font-bold text-text-primary leading-none tracking-tight">899</span>
                        <span className="text-2xl sm:text-3xl font-bold text-accent-lime mt-2 ml-2">EUR</span>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-4 lg:mb-8">Paiement unique - Pas d&apos;abonnement caché</p>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-4 w-full">
                      <Link href="#contact-form" id="cta-plan-ecommerce" className="btn-primary group inline-flex items-center gap-3 px-8 py-4 text-lg">
                        <span>Lancer ma boutique</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </Link>
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
                        <p className="text-text-secondary text-xs leading-relaxed">Votre boutique en ligne 24h/24 avec votre propre adresse<br />(ex: maboutique.fr)</p>
                      </div>
                      <div className="bg-dark-800/60 border border-white/10 rounded-lg px-4 py-3">
                        <p className="text-text-primary text-sm font-medium text-center mb-1">Puis 150 €/an à partir de la 2e année</p>
                        <p className="text-text-secondary text-xs text-center opacity-70">Frais de renouvellement pour maintenir votre boutique active</p>
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
                        <p className="text-text-primary text-sm font-medium">Livrée en 72h ou remboursé</p>
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
                    <Link href="#contact-form" id="cta-plan-ecommerce" className="btn-primary group inline-flex items-center gap-3 px-8 py-4 text-lg">
                      <span>Lancer ma boutique</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
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
