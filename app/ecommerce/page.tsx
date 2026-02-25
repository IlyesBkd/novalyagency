import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { EcomHeroSection } from "@/components/ecommerce/EcomHeroSection";
import { EcomCredibilitySection } from "@/components/ecommerce/EcomCredibilitySection";
import { EcomComparisonTable } from "@/components/ecommerce/EcomComparisonTable";
import { EcomNouvelleApproche } from "@/components/ecommerce/EcomNouvelleApproche";
import { EcomHowItWorks } from "@/components/ecommerce/EcomHowItWorks";
import { EcomWhatsIncluded } from "@/components/ecommerce/EcomWhatsIncluded";
import { EcomOffersSection } from "@/components/ecommerce/EcomOffersSection";
import { EcomGuaranteeSection } from "@/components/ecommerce/EcomGuaranteeSection";
import { FooterSection } from "@/components/FooterSection";
import { SectionCta } from "@/components/SectionCta";
import { getPortfolioImageNames } from "@/lib/portfolio";

const PortfolioSection = dynamic(
  () => import("@/components/PortfolioSection").then((m) => m.PortfolioSection),
  { ssr: true }
);
const EcomFinalCta = dynamic(
  () => import("@/components/ecommerce/EcomFinalCta").then((m) => m.EcomFinalCta),
  { ssr: false }
);
const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppWidget").then((m) => m.WhatsAppWidget),
  { ssr: false }
);
const ScrollAnimateInit = dynamic(
  () => import("@/components/ScrollAnimateInit").then((m) => m.ScrollAnimateInit),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Création Boutique en Ligne | Novaly Agency",
  description:
    "Lancez votre boutique en ligne professionnelle en 48h. Paiement intégré, catalogue produits, SEO. 899€ tout inclus.",
  openGraph: {
    title: "Création Boutique en Ligne | Novaly Agency",
    description:
      "Lancez votre boutique en ligne professionnelle en 48h. Paiement intégré, catalogue produits, SEO. 899€ tout inclus.",
    type: "website",
    locale: "fr_FR",
    siteName: "Novaly Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création Boutique en Ligne | Novaly Agency",
    description: "Boutique e-commerce sur mesure livrée en 48h. 899€ tout inclus.",
  },
};

export default function EcommercePage() {
  const portfolioImages = getPortfolioImageNames();

  return (
    <div className="min-h-screen bg-dark-950 text-text-primary overflow-x-hidden relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Global ambient blobs — hidden on mobile for GPU perf */}
      <div className="hidden md:block fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-accent-lime/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-accent-lime/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-accent-lime/[0.02] rounded-full blur-[80px]" />
      </div>

      {/* Scroll animation observer (client-side) */}
      <ScrollAnimateInit />

      {/* === STRICT SECTION ORDER === */}

      {/* S1 — Hero */}
      <EcomHeroSection />

      {/* S2 — Portfolio */}
      <PortfolioSection imageNames={portfolioImages} />

      {/* CTA after S2 */}
      <div className="relative z-10 -mt-8 pb-8">
        <SectionCta text="Lancer ma boutique" />
      </div>

      {/* S3 — Ils nous ont fait confiance */}
      <EcomCredibilitySection />

      {/* S4 — Pourquoi Novaly ? (Tableau comparatif) */}
      <EcomComparisonTable />

      {/* S5 — Une boutique 100 % personnalisée */}
      <EcomNouvelleApproche />

      {/* CTA after S5 */}
      <div className="relative z-10 -mt-8 pb-8">
        <SectionCta text="Lancer ma boutique" />
      </div>

      {/* S6 — Comment ça marche */}
      <EcomHowItWorks />

      {/* S7 — L'offre complète */}
      <EcomWhatsIncluded />

      {/* CTA after S7 */}
      <div className="relative z-10 -mt-8 pb-8">
        <SectionCta text="Lancer ma boutique" />
      </div>

      {/* S8 — Offre unique 899€ */}
      <EcomOffersSection />

      {/* S9 — Double garantie */}
      <EcomGuaranteeSection />

      {/* S10 — Formulaire de contact */}
      <EcomFinalCta />

      {/* Footer */}
      <FooterSection />

      {/* Global overlays */}
      <WhatsAppWidget />
    </div>
  );
}
