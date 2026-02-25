import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
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
  title: "Novaly Agency | Site Premium à 69€/mois — Livré en 72h",
  description:
    "Votre site web professionnel 100 % sur mesure, livré en 72h. Design premium, hébergement inclus, maintenance continue. À partir de 69€/mois. Satisfait ou remboursé.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Novaly Agency | Site Premium à 69€/mois — Livré en 72h",
    description:
      "Site web professionnel 100 % sur mesure, livré en 72h. Design premium, hébergement inclus. Satisfait ou remboursé.",
    type: "website",
    locale: "fr_FR",
    siteName: "Novaly Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novaly Agency | Site Premium à 69€/mois",
    description: "Site web sur mesure livré en 72h. Satisfait ou remboursé.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
        <GoogleTagManager gtmId="GTM-NHSTRCBK" />
      </body>
    </html>
  );
}
