import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { NouvelleApproche } from "@/components/NouvelleApproche";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { OffersSection } from "@/components/OffersSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalCta } from "@/components/FinalCta";
import { FooterSection } from "@/components/FooterSection";
import { ScrollAnimateInit } from "@/components/ScrollAnimateInit";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SectionCta } from "@/components/SectionCta";
import { getPortfolioImageNames } from "@/lib/portfolio";

export default function HomePage() {
  const portfolioImages = getPortfolioImageNames();

  return (
    <div className="min-h-screen bg-dark-950 text-text-primary overflow-x-hidden relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Global ambient blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-accent-lime/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-accent-lime/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-accent-lime/[0.02] rounded-full blur-[80px]" />
      </div>

      {/* Scroll animation observer (client-side) */}
      <ScrollAnimateInit />

      {/* === STRICT SECTION ORDER === */}

      {/* S1 — Hero */}
      <HeroSection />

      {/* S2 — Portfolio */}
      <PortfolioSection imageNames={portfolioImages} />

      {/* CTA after S2 */}
      <div className="relative z-10 -mt-8 pb-8">
        <SectionCta text="Être rappelé" />
      </div>

      {/* S3 — Ils nous ont fait confiance + Métiers */}
      <CredibilitySection />

      {/* S4 — Pourquoi Novaly ? (Tableau comparatif) */}
      <ComparisonTable />

      {/* S5 — Un site 100 % personnalisé */}
      <NouvelleApproche />

      {/* CTA after S5 */}
      <div className="relative z-10 -mt-8 pb-8">
        <SectionCta text="Demander mon site" />
      </div>

      {/* S6 — Comment ça marche */}
      <HowItWorks />

      {/* S7 — L'offre complète */}
      <WhatsIncluded />

      {/* CTA after S7 */}
      <div className="relative z-10 -mt-8 pb-8">
        <SectionCta text="Être rappelé" />
      </div>

      {/* S8 — Deux formules + Badge urgence */}
      <OffersSection />

      {/* S9 — Double garantie */}
      <GuaranteeSection />

      {/* S10 — Formulaire de contact */}
      <FinalCta />

      {/* Footer */}
      <FooterSection />

      {/* Global overlays */}
      <WhatsAppWidget />
    </div>
  );
}
