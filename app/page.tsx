import { HeroSection } from "@/components/HeroSection";
import { OffersSection } from "@/components/OffersSection";
import { NouvelleApproche } from "@/components/NouvelleApproche";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalCta } from "@/components/FinalCta";
import { FaqSection } from "@/components/FaqSection";
import { FooterSection } from "@/components/FooterSection";
import { ScrollAnimateInit } from "@/components/ScrollAnimateInit";
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

      {/* Page sections */}
      <HeroSection />
      <OffersSection />
      <NouvelleApproche />
      <PortfolioSection imageNames={portfolioImages} />
      <CredibilitySection />
      <HowItWorks />
      <WhatsIncluded />
      <GuaranteeSection />
      <FinalCta />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
