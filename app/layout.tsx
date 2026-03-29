import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { PostHogProvider } from "@/components/PostHogProvider";
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
  title: {
    default: "Novaly Agency | Création de Sites Web Premium & E-commerce",
    template: "%s | Novaly Agency",
  },
  description:
    "Novaly Agency est une agence web spécialisée dans la création de sites vitrines sur-mesure et de boutiques Shopify performantes. Réservez votre audit stratégique gratuit.",
  verification: {
    google: "U2-pbv96Tx5orf25m4_8C9kCNFftPa37gRvW2Rv9sN0",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Novaly Agency | Création de Sites Web Premium & E-commerce",
    description:
      "Novaly Agency est une agence web spécialisée dans la création de sites vitrines sur-mesure et de boutiques Shopify performantes. Réservez votre audit stratégique gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "Novaly Agency",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novaly Agency | Création de Sites Web Premium & E-commerce",
    description:
      "Agence web spécialisée dans la création de sites vitrines sur-mesure et de boutiques Shopify performantes.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <SpeedInsights />
        <Analytics />
        <GoogleTagManager gtmId="GTM-NHSTRCBK" />
      </body>
    </html>
  );
}
