import type { MetadataRoute } from "next";

const SITE = "https://www.novalyagency.com";

// Public pages only; /api and the asset routes stay out of the index.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/ecommerce`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/politique-confidentialite`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
