import type { MetadataRoute } from "next";
import { allSeoPages } from "@/lib/seo-pages";

const SITE = "https://www.novalyagency.com";

// Public pages only; /api and the asset routes stay out of the index.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/ecommerce`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/politique-confidentialite`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/votre-site-en-1-minute`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/audit-gratuit`, changeFrequency: "monthly", priority: 0.6 },
    ...allSeoPages().map((p) => ({
      url: `${SITE}/creation-site-internet/${p.slug}`,
      lastModified: p.published,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
