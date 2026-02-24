"use client";
import { FileText, Palette, Smartphone, Zap, Search, Mail, Phone, MessageCircle, Star, Gift, ShieldCheck, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const feats = [
  { icon: FileText, text: "Site 1 à 3 pages" },
  { icon: Palette, text: "Design premium sur mesure" },
  { icon: Smartphone, text: "100% mobile responsive" },
  { icon: Zap, text: "Chargement ultra rapide" },
  { icon: Search, text: "Optimisation SEO" },
  { icon: Mail, text: "Formulaire de contact" },
  { icon: Phone, text: "Bouton appel direct" },
  { icon: MessageCircle, text: "Bouton WhatsApp" },
  { icon: Star, text: "Widget avis Google" },
];

export default function Features() {
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: cRef, isVisible: cV } = useScrollAnimation();
  return (
    <section id="offre" className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.03] to-accent-lime/[0.02]" />
      <div className="py-24 sm:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={hRef} className={`text-center mb-16 scroll-animate ${hV ? "visible" : ""}`}>
            <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">L&apos;offre complète</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">Tout est inclus</h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">Un site professionnel clé en main</p>
          </div>
          <div ref={cRef} className={`max-w-4xl mx-auto scroll-animate-scale ${cV ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
            <div className="relative">
              {/* Border gradient */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent-lime/30 via-accent-lime/10 to-accent-lime/30" />
              {/* Top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-lime/60 to-transparent z-10" />

              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-dark-800/95 to-dark-900/98 backdrop-blur-xl">
                <div className="grid lg:grid-cols-[1fr,1.2fr]">
                  <PricePanel />
                  <FeaturePanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricePanel() {
  return (
    <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/[0.08] to-transparent" />
      <div className="absolute top-6 left-6 w-20 h-20 bg-accent-lime/20 rounded-full blur-3xl" />
      <div className="absolute bottom-6 right-6 w-16 h-16 bg-accent-lime/10 rounded-full blur-2xl" />
      <div className="relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-accent-lime text-xs font-semibold uppercase tracking-wider mb-6">
          <Palette className="w-3 h-3" />Prix unique
        </span>
        <div className="mb-2">
          <div className="flex items-start justify-center lg:justify-start">
            <span className="text-7xl sm:text-8xl lg:text-[6.5rem] font-bold text-text-primary leading-none tracking-tight">497</span>
            <span className="text-2xl sm:text-3xl font-bold text-accent-lime mt-2 ml-2">EUR</span>
          </div>
        </div>
        <p className="text-text-secondary text-sm mb-4 lg:mb-8">Paiement unique - Pas d&apos;abonnement caché</p>
        <div className="hidden lg:block w-full">
          <a href="#commander" className="btn-primary group inline-flex items-center gap-3 px-8 py-4 text-lg">
            <span>Commander mon site</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

function FeaturePanel() {
  return (
    <div className="relative z-10 p-8 sm:p-10 lg:p-12">
      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">Ce qui est inclus</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {feats.map((f) => { const I = f.icon; return (
          <div key={f.text} className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.03]">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-lime/20 to-accent-lime/5 border border-accent-lime/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
              <I className="w-4 h-4 text-accent-lime" />
            </div>
            <span className="text-text-primary text-sm font-medium transition-colors duration-300 group-hover:text-accent-lime">{f.text}</span>
          </div>
        ); })}
      </div>
      <HostingOffer />
      <DoubleGuarantee />
    </div>
  );
}

function HostingOffer() {
  return (
    <div className="mt-6 pt-5 border-t border-white/10">
      <div className="rounded-xl p-5 bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-400/20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gift className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">1 an offert</span>
        </div>
        <div className="text-center mb-4">
          <p className="text-text-primary text-base font-semibold mb-1.5">Hébergement + Nom de domaine</p>
          <p className="text-text-secondary text-xs leading-relaxed">Votre site en ligne 24h/24 avec votre propre adresse<br />(ex: votreentreprise.fr)</p>
        </div>
        <div className="rounded-lg px-4 py-3 bg-dark-800/60 border border-white/10">
          <p className="text-text-primary text-sm font-medium text-center mb-1">Puis 150 €/an à partir de la 2e année</p>
          <p className="text-text-secondary text-xs text-center opacity-70">Frais de renouvellement pour maintenir votre site actif</p>
        </div>
      </div>
    </div>
  );
}

function DoubleGuarantee() {
  return (
    <div className="mt-5 pt-5 border-t border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Double garantie</span>
      </div>
      <div className="space-y-2">
        <div className="rounded-xl p-3 flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 border border-emerald-400/20">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-text-primary text-sm font-medium">Satisfait ou remboursé</p>
            <p className="text-text-secondary text-xs">Si le résultat ne vous plaît pas</p>
          </div>
        </div>
        <div className="rounded-xl p-3 flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 border border-emerald-400/20">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-text-primary text-sm font-medium">1 révision incluse</p>
            <p className="text-text-secondary text-xs">Pour ajuster les derniers détails</p>
          </div>
        </div>
      </div>
    </div>
  );
}
