import Image from "next/image";
import Link from "next/link";


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
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto mx-auto"
              priority
            />
          </div>

          {/* Eyebrow */}
          <p className="text-text-secondary text-sm sm:text-base uppercase tracking-[0.3em] mb-4 font-medium animate-reveal animate-delay-200">
            Offre unique
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
              Site premium à{" "}
              <span className="text-accent-lime hand-underline">
                99€/mois
              </span>
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-primary mb-2 animate-reveal animate-delay-800">
            Livré en 48h. Prix fixe.
          </p>
          <p className="text-lg sm:text-xl text-text-secondary mb-6 animate-reveal animate-delay-1200">
            Sans devis. Sans surprise. Sans Blabla.
          </p>

          {/* CTA */}
          <div className="animate-reveal-scale animate-delay-1500">
            <Link
              href="#commander"
              className="btn-primary group inline-flex items-center gap-3 px-10 py-5 text-xl"
            >
              <span>Commander mon site</span>
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

          {/* Trustpilot badge */}
          <div className="flex items-center justify-center gap-3 mt-8 animate-reveal animate-delay-1800">
            <span className="text-white font-semibold text-sm tracking-tight">Excellent</span>
            <div className="flex gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[22px] h-[22px] bg-[#00b67a] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-[14px] h-[14px]">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="#00b67a" className="w-[18px] h-[18px]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-white font-semibold text-sm tracking-tight">Trustpilot</span>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="text-center mb-12 absolute bottom-0 left-0 right-0 scroll-animate">
          <div className="mb-6">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-2">
              Livré en <span className="text-accent-lime">48h.</span>
            </p>
            <p className="text-lg text-text-primary font-medium mb-6">
              Satisfait ou remboursé
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
