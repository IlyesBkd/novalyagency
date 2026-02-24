import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novaly Agency | Site Premium à 99€/mois — Livré en 48h",
  description:
    "Votre site web professionnel 100 % sur mesure, livré en 48h. Design premium, hébergement inclus, maintenance continue. À partir de 99€/mois. Satisfait ou remboursé.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Novaly Agency | Site Premium à 99€/mois — Livré en 48h",
    description:
      "Site web professionnel 100 % sur mesure, livré en 48h. Design premium, hébergement inclus. Satisfait ou remboursé.",
    type: "website",
    locale: "fr_FR",
    siteName: "Novaly Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novaly Agency | Site Premium à 99€/mois",
    description: "Site web sur mesure livré en 48h. Satisfait ou remboursé.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
