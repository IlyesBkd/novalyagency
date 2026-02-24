"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight, Users, Clock, CheckCircle, TrendingUp,
  FileText, Palette, Smartphone, Zap, Search, Mail, Phone,
  MessageCircle, Star, Gift, ShieldCheck, Rocket, Shield,
  ChevronDown,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */
const professions = [
  "Artisans","Commerçants","Coachs","Consultants",
  "Thérapeutes","Restaurateurs","Indépendants","TPE / PME",
];

const stats = [
  { icon: Users, value: "50+", label: "Clients livrés" },
  { icon: Clock, value: "48h", label: "Délai moyen" },
  { icon: CheckCircle, value: "100%", label: "Satisfaction" },
  { icon: TrendingUp, value: "0", label: "Réclamation" },
];

const reviews = [
  { name: "Sophie M.", role: "Coach sportif", text: "Site livré en 2 jours, exactement ce que je voulais. Très pro !", rating: 5 },
  { name: "Marc D.", role: "Plombier", text: "Enfin un site qui me ressemble. Mes clients me trouvent facilement maintenant.", rating: 5 },
  { name: "Julie R.", role: "Photographe", text: "Design magnifique, rapide et efficace. Je recommande à 100% !", rating: 5 },
  { name: "Thomas B.", role: "Consultant", text: "Rapport qualité/prix imbattable. Le site est exactement comme je l'imaginais.", rating: 5 },
  { name: "Laura K.", role: "Thérapeute", text: "Processus simple et résultat bluffant. Merci Lime 77 !", rating: 5 },
  { name: "Pierre L.", role: "Restaurateur", text: "Mon restaurant a gagné en visibilité grâce à ce site. Excellent travail.", rating: 5 },
];

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

const steps = [
  { icon: Phone, n: "1", title: "Appel de cadrage", desc: "15 min pour comprendre votre activité, vos besoins et définir ensemble le contenu de votre site." },
  { icon: FileText, n: "2", title: "Création sur mesure", desc: "Notre équipe conçoit votre site professionnel avec un design premium adapté à votre image." },
  { icon: Rocket, n: "3", title: "Livraison en 48h", desc: "Votre site est en ligne, optimisé et prêt à recevoir vos premiers visiteurs." },
];

const faqs = [
  { q: "497€ pour un site, c'est vraiment le prix final ?", a: "Oui, 497 € tout compris.\nPas de frais cachés, pas d'abonnement obligatoire.\nVous payez une seule fois et votre site est à vous." },
  { q: "Mon site sera-t-il vraiment unique ?", a: "Absolument.\nAucun template, aucun modèle recyclé.\nChaque site est conçu spécifiquement pour votre activité, dès réception de vos contenus." },
  { q: "Et si je n'ai pas de logo ou de photos ?", a: "Aucun problème.\nNous utilisons des images libres de droits de qualité professionnelle.\nLa création d'un logo texte élégant est proposée en option à 49 €.\nVotre site conservera un rendu premium." },
  { q: "Le site sera-t-il vraiment professionnel ?", a: "Absolument. On crée des sites modernes, rapides et optimisés pour le référencement. Le design est soigné et adapté à votre activité. Si le résultat ne vous convient pas, on vous rembourse." },
  { q: "Puis-je modifier mon site après la livraison ?", a: "Oui, une révision est incluse dans l'offre pour ajuster les derniers détails. Au-delà, nous proposons des modifications ponctuelles à tarif préférentiel." },
  { q: "Que se passe-t-il si je ne suis pas satisfait ?", a: "On vous rembourse intégralement. Notre objectif est votre satisfaction. Si le site ne correspond pas à vos attentes après la révision incluse, vous récupérez votre argent." },
];

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function LimePage() {
  return (
    <div className="min-h-screen bg-dark-950 text-text-primary overflow-x-hidden relative">
      <div className="noise-overlay" />
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-accent-lime/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-accent-lime/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-accent-lime/[0.02] rounded-full blur-[80px]" />
      </div>

      <Hero />
      <Credibility />
      <Features />
      <Process />
      <Commander />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */
function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { ref: tagsRef, isVisible: tagsVis } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVis } = useScrollAnimation();

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black z-0" />
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://www.pexels.com/fr-fr/download/video/7686986/" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Logo */}
        <div className="mb-4 animate-reveal animate-delay-100">
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="text-accent-lime">LIME</span>
              <span className="text-white ml-3">77</span>
            </h2>
          </div>
        </div>

        <p className="text-text-secondary text-sm sm:text-base uppercase tracking-[0.3em] mb-4 font-medium animate-reveal animate-delay-200">
          Offre unique
        </p>

        <h1 className="font-bold tracking-tight mb-3 animate-reveal-scale"
          style={{ textShadow: "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(255,255,255,0.1), 0 0 120px rgba(255,255,255,0.05)" }}>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary">
            Site premium à <span className="text-accent-lime hand-underline">497€</span>
          </span>
        </h1>

        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-5 animate-reveal animate-delay-300">
          Un site professionnel <span className="text-text-primary font-medium">sur mesure</span>, conçu et livré en{" "}
          <span className="text-accent-lime font-semibold">48 heures</span>.
          <br className="hidden sm:block" />
          Idéal pour les pros qui veulent une présence en ligne claire, moderne et efficace.
        </p>

        <div className="mb-10 animate-reveal animate-delay-400">
          <a href="#commander" className="btn-primary group inline-flex items-center gap-3 px-10 py-5 text-xl">
            <span>Commander mon site</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Profession tags */}
        <div ref={tagsRef} className={`flex flex-wrap justify-center gap-3 mb-14 scroll-animate ${tagsVis ? "visible" : ""}`}>
          {professions.map((p, i) => (
            <span key={p}
              className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 cursor-default bg-dark-800/80 text-text-primary border border-dark-700/60 hover:border-accent-lime/40 hover:bg-accent-lime/10 hover:text-accent-lime hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.12)] scroll-animate-scale ${tagsVis ? "visible" : ""}`}
              style={{ transitionDelay: `${300 + i * 70}ms` }}>
              {p}
            </span>
          ))}
        </div>

        <div ref={bottomRef} className={`text-center mb-12 scroll-animate ${bottomVis ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
          <div className="mb-6">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-2">
              Livré en <span className="text-accent-lime">48h.</span>
            </p>
            <p className="text-lg text-text-primary font-medium mb-6">Satisfait ou remboursé</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CREDIBILITY
   ═══════════════════════════════════════════════════════════ */
function Credibility() {
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animId: number;
    let pos = 0;
    const speed = 0.5;
    const animate = () => {
      if (!isPaused && marqueeRef.current) {
        pos -= speed;
        const half = marqueeRef.current.scrollWidth / 2;
        if (Math.abs(pos) >= half) pos = 0;
        marqueeRef.current.style.transform = `translateX(${pos}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <section id="credibility" className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.025] to-accent-lime/[0.02]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-lime/[0.025] rounded-full blur-[120px] -translate-x-1/3" />

      <div className="py-24 sm:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div ref={hRef} className={`text-center mb-16 scroll-animate ${hV ? "visible" : ""}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">Ils nous ont</span><br />
              <span className="gradient-text">fait confiance</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Des professionnels comme vous qui avaient besoin d&apos;un site rapidement.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label}
                  className="bg-dark-900/40 border border-dark-800 rounded-xl p-6 text-center card-hover backdrop-blur-sm scroll-animate-scale visible"
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-accent-lime/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-lime" />
                  </div>
                  <div className="text-3xl font-bold text-text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-text-secondary">{s.label}</div>
                </div>
              );
            })}
          </div>

          {/* Google Reviews */}
          <div className="w-full overflow-hidden py-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <GoogleIcon />
              <span className="text-text-primary font-medium">Avis Google</span>
              <div className="flex gap-0.5 ml-1">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              <span className="text-text-secondary text-sm ml-1">5.0</span>
            </div>

            {/* Desktop marquee */}
            <div className="hidden md:block relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
              <div className="relative overflow-hidden">
                <div ref={marqueeRef} className="flex gap-4 py-2 w-max"
                  onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                  {[...reviews, ...reviews].map((r, i) => <ReviewCard key={i} review={r} />)}
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-4 px-2">
              {reviews.slice(0, 4).map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-dark-900/60 border border-dark-800 rounded-xl p-5 min-w-[300px] max-w-[340px] backdrop-blur-sm hover:border-dark-700 transition-all duration-300">
      <div className="flex gap-0.5 mb-3">{[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}</div>
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center text-accent-lime text-xs font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-text-primary text-sm font-medium">{review.name}</p>
          <p className="text-text-secondary text-xs">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#FBBF24">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURES / PRICING
   ═══════════════════════════════════════════════════════════ */
function Features() {
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
            {/* Gradient border wrapper */}
            <div className="relative">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent-lime/30 via-accent-lime/10 to-accent-lime/30" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-lime/60 to-transparent z-10" />

              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-dark-800/95 to-dark-900/98 backdrop-blur-xl">
                <div className="grid lg:grid-cols-[1fr,1.2fr]">
                  {/* Price panel */}
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

                  {/* Features panel */}
                  <div className="relative z-10 p-8 sm:p-10 lg:p-12">
                    <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">Ce qui est inclus</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {feats.map((f) => {
                        const I = f.icon;
                        return (
                          <div key={f.text} className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.03]">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-lime/20 to-accent-lime/5 border border-accent-lime/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                              <I className="w-4 h-4 text-accent-lime" />
                            </div>
                            <span className="text-text-primary text-sm font-medium transition-colors duration-300 group-hover:text-accent-lime">{f.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Hosting offer */}
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

                    {/* Double guarantee */}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════════════════════ */
function Process() {
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: gRef, isVisible: gV } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.025] to-accent-lime/[0.02]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-lime/[0.025] rounded-full blur-[120px]" />

      <div className="py-24 sm:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={hRef} className={`text-center mb-16 scroll-animate ${hV ? "visible" : ""}`}>
            <p className="text-accent-lime text-sm uppercase tracking-[0.2em] mb-4 font-medium">Comment ça marche</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">3 étapes.</span><br />
              <span className="gradient-text">48 heures.</span>
            </h2>
          </div>

          <div ref={gRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className={`relative scroll-animate ${gV ? "visible" : ""}`} style={{ transitionDelay: `${i * 150}ms` }}>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-accent-lime/40 to-transparent" />
                  )}
                  <div className="text-center relative z-10 group">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center transition-all duration-500 group-hover:bg-accent-lime/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-lime/20">
                      <Icon className="w-7 h-7 text-accent-lime" />
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-lime text-dark-950 font-bold text-sm mb-4">
                      {s.n}
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3 transition-colors duration-300 group-hover:text-accent-lime">{s.title}</h3>
                    <p className="text-text-secondary">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMMANDER (Calendly)
   ═══════════════════════════════════════════════════════════ */
function Commander() {
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: cRef, isVisible: cV } = useScrollAnimation();

  return (
    <section id="commander" className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.04] to-accent-lime/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-lime/[0.05] rounded-full blur-[150px] animate-pulse-glow" />

      <div className="py-24 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div ref={hRef} className={`text-center mb-12 scroll-animate ${hV ? "visible" : ""}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-text-primary">Prêt à avoir</span><br />
              <span className="gradient-text">votre site premium ?</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Réservez un appel téléphonique de 15 minutes.<br /><br />
              Nous cadrerons votre site, répondrons à vos questions et lancerons immédiatement la création (497 €, sans devis, sans engagement).
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-text-secondary group">
                <Clock className="w-5 h-5 text-accent-lime transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-text-primary">Livraison 48h</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary group">
                <Shield className="w-5 h-5 text-accent-lime transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-text-primary">Satisfait ou remboursé</span>
              </div>
            </div>
          </div>

          <div ref={cRef} className={`bg-dark-900/60 border border-dark-800 rounded-2xl overflow-hidden backdrop-blur-sm scroll-animate-scale ${cV ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            <div className="relative" style={{ minWidth: "320px", height: "750px" }}>
              <iframe
                src="https://calendly.com/aimane-fellah/nouvelle-reunion?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1e1f&text_color=ffffff&primary_color=9fe870"
                width="100%" height="100%" frameBorder="0" scrolling="no"
                title="Réserver un appel - Calendly"
              />
            </div>
          </div>

          <p className={`mt-8 text-center text-sm text-text-secondary scroll-animate ${hV ? "visible" : ""}`} style={{ transitionDelay: "400ms" }}>
            Paiement sécurisé. Aucun engagement avant l&apos;appel.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: lRef, isVisible: lV } = useScrollAnimation();

  return (
    <section id="faq" className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.025] to-accent-lime/[0.015]" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-lime/[0.025] rounded-full blur-[130px]" />

      <div className="py-24 sm:py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div ref={hRef} className={`text-center mb-16 scroll-animate ${hV ? "visible" : ""}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">Questions</span><br />
              <span className="gradient-text">fréquentes</span>
            </h2>
            <p className="text-lg text-text-secondary">Tout ce que vous devez savoir avant de commander.</p>
          </div>

          <div ref={lRef} className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i}
                className={`bg-dark-900/40 border border-dark-800 rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-sm hover:border-dark-700 scroll-animate ${lV ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group">
                  <span className="text-text-primary font-medium pr-4 transition-colors duration-300 group-hover:text-accent-lime">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-accent-lime flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-6 pb-5 text-text-secondary leading-relaxed whitespace-pre-line">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative py-8 bg-dark-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm">
            {new Date().getFullYear()} — Tous droits réservés
          </div>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <a href="#mentions-legales" className="hover:text-accent-lime transition-colors">Mentions légales</a>
            <span className="opacity-30">|</span>
            <a href="#politique-de-confidentialite" className="hover:text-accent-lime transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
