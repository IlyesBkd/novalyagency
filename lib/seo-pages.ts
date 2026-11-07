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
};

const DIR = path.join(process.cwd(), "content", "seo");

export function allSeoPages(): SeoPage[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as SeoPage);
}

export function seoPage(slug: string): SeoPage | undefined {
  return allSeoPages().find((p) => p.slug === slug);
}
