import Image from "next/image";
import Link from "next/link";

export function EcomHeroSection() {
  return (
    <div id="hero">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video background */}
        <div className="absolute inset-0 bg-black z-0" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23000'/%3E%3C/svg%3E"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/space" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="mb-4 animate-reveal animate-delay-100">
            <Image
              src="/assets/logo"
              alt="Logo"
              width={320}
              height={160}
              className="h-20 sm:h-40 md:h-48 lg:h-56 w-auto mx-auto"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Eyebrow */}
          <p className="text-text-secondary text-sm sm:text-base uppercase tracking-[0.3em] mb-4 font-medium animate-reveal animate-delay-200">
            Offre e-commerce
          </p>

          {/* H1 */}
          <h1
            className="font-bold tracking-tight mb-3 animate-reveal-scale"
            style={{
              textShadow:
                "rgba(255,255,255,0.15) 0px 0px 40px, rgba(255,255,255,0.1) 0px 0px 80px, rgba(255,255,255,0.05) 0px 0px 120px",
            }}
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary">
              Boutique en ligne à{" "}
              <span className="text-accent-lime hand-underline">
                899€
              </span>
            </span>
          </h1>

          <p className="text-xl sm:text-3xl md:text-4xl font-semibold text-text-primary mb-2 animate-reveal animate-delay-800">
            Livrée en <span className="text-accent-lime">48h.</span>
          </p>
          <p className="text-base sm:text-xl text-text-secondary mb-6 animate-reveal animate-delay-1200">
            Paiement intégré. Catalogue produits. Prêt à vendre.
          </p>

          {/* CTA */}
          <div className="animate-reveal-scale animate-delay-1500">
            <Link
              href="#contact-form"
              id="cta-plan-ecommerce"
              className="btn-primary group inline-flex items-center gap-3 px-10 py-5 text-xl"
            >
              <span>Lancer ma boutique</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Google Avis badge */}
          <div className="flex items-center justify-center gap-2 mt-6 animate-reveal animate-delay-1800">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-text-primary font-medium text-sm">Avis Google</span>
            <div className="flex gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#FBBC05]">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-text-secondary text-sm ml-1">5.0</span>
            <span className="text-text-secondary/60 text-xs ml-1">sur +1872 avis</span>
          </div>

          {/* Scroll-down nudge */}
          <a href="#portfolio" className="inline-flex flex-col items-center gap-2 mt-10 text-accent-lime/80 hover:text-accent-lime transition-colors duration-300 animate-reveal animate-delay-1800 group cursor-pointer">
            <span className="text-sm font-medium">Découvrez nos réalisations e-commerce</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 animate-bounce">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
