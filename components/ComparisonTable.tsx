import Link from "next/link";
import { Section } from "./Section";
import { ABPriceCell } from "./ABPriceCell";

const ROWS = [
  { label: "Prix", novaly: "ab_price", agence: "3 000 – 8 000€", freelance: "Variable" },
  { label: "Délai de livraison", novaly: "72h", agence: "4 – 8 semaines", freelance: "Inconnu" },
  { label: "Ingénieur certifié", novaly: "check", agence: "Parfois", freelance: "Rarement" },
  { label: "Maintenance incluse", novaly: "check", agence: "cross", freelance: "cross" },
];

function CellValue({ value }: { value: string }) {
  if (value === "check") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent-lime/15">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
    );
  }
  if (value === "cross") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        </svg>
      </span>
    );
  }
  if (value === "ab_price") {
    return <ABPriceCell />;
  }
  return <span>{value}</span>;
}

export function ComparisonTable() {
  return (
    <Section id="comparison" glow>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 scroll-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/20 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="text-sm text-accent-lime font-medium">Comparatif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">Pourquoi Novaly</span>
            <br />
            <span className="gradient-text">plutôt qu&apos;une autre agence ?</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comparez objectivement. La différence parle d&apos;elle-même.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto scroll-animate-scale" style={{ transitionDelay: "150ms" }}>
          <table className="w-full max-w-4xl mx-auto border-collapse">
            <thead>
              <tr>
                <th className="text-left text-text-secondary text-sm font-medium py-4 px-4 w-1/4"></th>
                <th className="text-center py-4 px-4 w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-accent-lime font-bold text-base">Novaly Agency</span>
                    <span className="text-accent-lime/60 text-xs">Recommandé</span>
                  </div>
                </th>
                <th className="text-center text-text-secondary text-sm font-medium py-4 px-4 w-1/4">Agence classique</th>
                <th className="text-center text-text-secondary text-sm font-medium py-4 px-4 w-1/4">Freelance lambda</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ label, novaly, agence, freelance }, i) => (
                <tr key={label} className={`border-t border-white/[0.06] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                  <td className="py-5 px-4 text-text-primary text-sm font-medium">{label}</td>
                  <td className="py-5 px-4 text-center">
                    <div className="flex justify-center">
                      <span className="text-accent-lime font-semibold text-sm">
                        <CellValue value={novaly} />
                      </span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center text-text-secondary text-sm">
                    <div className="flex justify-center">
                      <CellValue value={agence} />
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center text-text-secondary text-sm">
                    <div className="flex justify-center">
                      <CellValue value={freelance} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-animate">
          <Link
            href="#contact-form"
            className="btn-primary group inline-flex items-center gap-3 px-8 py-4 text-base"
          >
            <span>Demander mon site</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </Section>
  );
}
