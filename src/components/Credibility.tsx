"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Clock, Award, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Users, value: "50+", label: "Sites livrés" },
  { icon: Clock, value: "48h", label: "Délai moyen" },
  { icon: Award, value: "100%", label: "Clients satisfaits" },
  { icon: Target, value: "0", label: "Mauvaise surprise" },
];

const reviews = [
  {
    initials: "BP", name: "Bruno P.", profession: "Magnetiseur",
    text: "J'ai ete sincerement touche par le rendu du site. Je voulais quelque chose d'humain, presque \"ressenti\", pas un site froid ou marketing. Le visuel est doux, fluide, et les personnes qui me contactent arrivent deja apaisees. Pour mon activite, c'est bien plus qu'un simple site. Merci",
  },
  {
    initials: "YH", name: "Youba H.", profession: "Facadier",
    text: "Franchement propre. Site clair, rapide. Les gens appel direct. Rien a dire",
  },
  {
    initials: "ND", name: "Nicolas D.", profession: "Exterminateur de nuisibles",
    text: "Tres surpris par la qualite du site, je m'attendais pas a ca honnetement. Le visuel est vraiment pro et surtout ca rassure les clients. Depuis qu'il est en ligne, les appels sont plus serieux, moins de gens qui doutent ou posent 50 questions. Tres satisfait du resultat !!!",
  },
  {
    initials: "LJ", name: "Lin J.", profession: "Restaurateur",
    text: "WOW. C'est litteralement le mot que j'ai dit en voyant le site la premiere fois. Le design est vraiment au-dessus de ce que j'imaginais. Plusieurs clients m'ont parle du site en arrivant au restaurant. Tres beau travail, bravo",
  },
  {
    initials: "SB", name: "Selim B.", profession: "Nettoyage professionnel",
    text: "J'ai pas l'habitude de laisser des avis mais la oui. Le site est simple mais hyper pro. Visuellement ca fait tres serieux. Les clients comprennent tout de suite ce que je propose. Ca change clairement la perception de mon activite.",
  },
  {
    initials: "YO", name: "Yahia O.", profession: "Restaurateur",
    text: "Tres honnetement choque par le rendu. Je m'attendais a un site correct, j'ai eu un site vraiment elegant. Le visuel est propre, moderne, ca donne une super image du restaurant. Livraison rapide en plus. Rien a redire.",
  },
  {
    initials: "EJ", name: "Edison J.", profession: "Chauffeur VTC",
    text: "Site vraiment style. Je pensais pas qu'un site pouvait faire autant \"pro\". Les clients me font plus confiance direct, ca se sent. Tres content du resultat !!",
  },
  {
    initials: "ND", name: "Nicolas D.", profession: "Installation d'alarme",
    text: "Deuxieme site commande. Toujours aussi bluffe par la qualite visuelle. Pour un service de securite, l'image est super importante et la c'est nickel. Serieux, efficace, propre.",
  },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#FBBC05" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[340px] bg-white rounded-lg shadow-md p-4">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
          {review.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900 text-sm truncate">{review.name}</span>
            <GoogleIcon className="w-5 h-5" />
          </div>
          <p className="text-xs text-gray-500 truncate">{review.profession}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4" />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">{review.text}</p>
    </div>
  );
}

export default function Credibility() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        pos -= speed;
        const half = el.scrollWidth / 2;
        if (Math.abs(pos) >= half) pos = 0;
        el.style.transform = `translateX(${pos}px)`;
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
          {/* Header */}
          <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">Ils nous ont</span>
              <br />
              <span className="gradient-text">fait confiance</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Des professionnels comme vous qui avaient besoin d&apos;un site rapidement.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-dark-900/40 border border-dark-800 rounded-xl p-6 text-center card-hover backdrop-blur-sm scroll-animate-scale visible"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-accent-lime/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-lime" />
                  </div>
                  <div className="text-3xl font-bold text-text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Google Reviews Header */}
          <div className="w-full overflow-hidden py-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <GoogleIcon className="w-5 h-5" />
              <span className="text-text-primary font-medium">Avis Google</span>
              <div className="flex gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-text-secondary text-sm ml-1">5.0</span>
            </div>

            {/* Reviews Marquee */}
            <div className="hidden md:block relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
              <div className="relative overflow-hidden">
                <div
                  ref={marqueeRef}
                  className="flex gap-4 py-2 w-max"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {[...reviews, ...reviews].map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Reviews */}
            <div className="md:hidden space-y-4 px-2">
              {reviews.slice(0, 4).map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
