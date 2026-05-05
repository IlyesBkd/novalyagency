import Image from "next/image";
import { SmartCta } from "./SmartCta";


export function HeroSection() {
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
          <div className="mb-8 animate-reveal animate-delay-100">
            <Image
              src="/assets/logo"
              alt="Logo"
              width={640}
              height={320}
              className="h-56 sm:h-80 md:h-96 lg:h-[28rem] w-auto mx-auto"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* H1 */}
          <h1
            className="font-[var(--font-playfair)] tracking-tight mb-6 animate-reveal-scale"
            style={{
              fontFamily: "var(--font-playfair)",
              textShadow:
                "rgba(255,255,255,0.15) 0px 0px 40px, rgba(255,255,255,0.1) 0px 0px 80px, rgba(255,255,255,0.05) 0px 0px 120px",
            }}
          >
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary">
              Votre site pro
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium italic text-accent-lime mt-3">
              designé gratuitement
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary mb-10 animate-reveal animate-delay-800 max-w-xl mx-auto">
            Voyez le résultat avant de payer — gratuit, sans engagement.
          </p>

          {/* CTA */}
          <div className="animate-reveal-scale animate-delay-1200">
            <SmartCta variant="hero" ctaLabel="Recevoir mon design gratuit" />
          </div>

          {/* Google Avis badge */}
          <div className="flex items-center justify-center gap-2 mt-8 animate-reveal animate-delay-1500">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#FBBC05]">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-text-secondary text-sm">5.0 sur Google</span>
          </div>
        </div>
      </section>
    </div>
  );
}
