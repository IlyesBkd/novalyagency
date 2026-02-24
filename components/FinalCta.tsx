import Link from "next/link";
import Script from "next/script";

const TRUST_BADGES = [
  {
    label: "Livraison 48h",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-accent-lime transition-transform duration-300 group-hover:scale-110">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Satisfait ou remboursé",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-5 h-5 text-accent-lime transition-transform duration-300 group-hover:scale-110">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
  {
    label: "100 % personnalisé",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-5 h-5 text-accent-lime transition-transform duration-300 group-hover:scale-110">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
      </svg>
    ),
  },
];

export function FinalCta() {
  return (
    <div id="commander">
      <section className="relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.04] to-accent-lime/[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-lime/[0.05] rounded-full blur-[150px] animate-pulse-glow" />

        <div className="py-24 sm:py-32 relative z-10">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-text-primary">Prêt à avoir</span>
                <br />
                <span className="gradient-text">votre site premium ?</span>
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Réservez un appel téléphonique de 15 minutes.
                <br />
                <br />
                Nous cadrerons votre site, répondrons à vos questions et lancerons
                immédiatement la création.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                {TRUST_BADGES.map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-2 text-text-secondary group">
                    {icon}
                    <span className="transition-colors duration-300 group-hover:text-text-primary">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="scroll-animate-scale" style={{ transitionDelay: "200ms" }}>
                <Link
                  href="#"
                  className="btn-primary group inline-flex items-center gap-3 px-12 py-5 text-xl"
                >
                  <span>Réserver mon appel gratuit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Calendly placeholder */}
            <div
              className="scroll-animate-scale rounded-2xl overflow-hidden border border-dark-700/60 bg-dark-900/40 backdrop-blur-sm"
              style={{ transitionDelay: "300ms" }}
            >
              <div
                className="calendly-inline-widget min-w-[320px]"
                data-url="https://calendly.com/lime77/appel-decouverte?hide_gdpr_banner=1&background_color=04070d&text_color=e8f1f9&primary_color=0070b8"
                style={{ height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
