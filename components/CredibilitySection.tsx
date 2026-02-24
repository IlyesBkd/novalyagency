const STATS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-accent-lime">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "50+",
    label: "Sites livrés",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-accent-lime">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
    value: "+1196",
    label: "Avis clients",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-5 h-5 text-accent-lime">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
      </svg>
    ),
    value: "100%",
    label: "Satisfaction",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-accent-lime">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "48h",
    label: "Délai garanti",
  },
];

const TESTIMONIALS = [
  {
    name: "Marie L.",
    role: "Thérapeute",
    text: "Site livré en moins de 48h, exactement comme promis. Le rendu est vraiment professionnel et mes clients adorent.",
    stars: 5,
  },
  {
    name: "Thomas B.",
    role: "Consultant RH",
    text: "Zéro prise de tête, un prix clair et un résultat bluffant. Je recommande à tous mes collègues.",
    stars: 5,
  },
  {
    name: "Sophie M.",
    role: "Coach de vie",
    text: "J'avais des doutes au départ, mais le résultat m'a complètement convaincue. Mon site est superbe.",
    stars: 5,
  },
];

export function CredibilitySection() {
  return (
    <div id="credibility">
      <section className="relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.025] to-accent-lime/[0.02]" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-lime/[0.025] rounded-full blur-[120px] -translate-x-1/3" />

        <div className="py-24 sm:py-32 relative z-10">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            {/* Heading */}
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-text-primary">Ils nous ont</span>
                <br />
                <span className="gradient-text">fait confiance</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Des professionnels comme vous qui avaient besoin d&apos;un site rapidement.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {STATS.map(({ icon, value, label }, i) => (
                <div
                  key={label}
                  className="bg-dark-900/40 border border-dark-800 rounded-xl p-6 text-center card-hover backdrop-blur-sm scroll-animate-scale"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-accent-lime/10 flex items-center justify-center">
                    {icon}
                  </div>
                  <div className="text-3xl font-bold text-text-primary mb-1">{value}</div>
                  <div className="text-sm text-text-secondary">{label}</div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ name, role, text, stars }, i) => (
                <div
                  key={name}
                  className="bg-dark-900/40 border border-dark-800 rounded-2xl p-6 card-hover backdrop-blur-sm scroll-animate"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex mb-3">
                    {[...Array(stars)].map((_, j) => (
                      <svg key={j} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-lime">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">&quot;{text}&quot;</p>
                  <div>
                    <p className="text-text-primary font-semibold text-sm">{name}</p>
                    <p className="text-text-secondary text-xs">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
