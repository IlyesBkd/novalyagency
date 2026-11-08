import fs from "node:fs";
import path from "node:path";

export type SeoPage = {
  slug: string;
  trade: string;
  city: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { h2: string; paragraphs: string[] }[];
  checklist: string[];
  faq: { q: string; a: string }[];
  published: string;
  // Added by the prospecting engine from 2026-11-08 (older pages may not have them)
  tradeLabel?: string; // "restaurant", "cabinet dentaire"…
  example?: { url: string; video?: string; poster?: string };
  local?: { total: number; withoutSite: number; label: string; source: string; date: string };
};

const DIR = path.join(process.cwd(), "content", "seo");

export function allSeoPages(): SeoPage[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as SeoPage)
    .sort((a, b) => (a.tradeLabel ?? a.trade).localeCompare(b.tradeLabel ?? b.trade, "fr") || a.city.localeCompare(b.city, "fr"));
}

export function seoPage(slug: string): SeoPage | undefined {
  return allSeoPages().find((p) => p.slug === slug);
}

// Internal links: the same trade in other cities, and other trades in the same city
export function relatedPages(p: SeoPage, max = 8): { sameTrade: SeoPage[]; sameCity: SeoPage[] } {
  const all = allSeoPages().filter((x) => x.slug !== p.slug);
  return {
    sameTrade: all.filter((x) => x.trade === p.trade).slice(0, max),
    sameCity: all.filter((x) => x.city === p.city).slice(0, max),
  };
}
