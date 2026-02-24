import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

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
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
