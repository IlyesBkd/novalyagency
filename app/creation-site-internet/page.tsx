import type { Metadata } from "next";
import Link from "next/link";
import { allSeoPages } from "@/lib/seo-pages";

export const metadata: Metadata = {
  title: "Création de site internet par métier et par ville | Novaly Agency",
  description: "Restaurants, avocats, dentistes, artisans… Exemples de sites et conseils pour créer le site de votre activité dans votre ville.",
  alternates: { canonical: "/creation-site-internet" },
};

export default function Index() {
  const pages = allSeoPages();
  const byTrade = new Map<string, typeof pages>();
  for (const p of pages) {
    const k = p.tradeLabel ?? p.trade;
    byTrade.set(k, [...(byTrade.get(k) ?? []), p]);
  }
  return (
    <main className="min-h-screen bg-dark-950 text-text-secondary">
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <Link href="/" className="text-sm hover:text-accent-lime">← Novaly Agency</Link>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-6 mb-6">Création de site internet, par métier et par ville</h1>
        <p className="text-lg mb-12">
          Chaque page montre un exemple de site réalisé pour le métier, les informations que vos clients cherchent et les chiffres de votre ville.
        </p>
        {pages.length === 0 && <p>Les premières pages arrivent bientôt.</p>}
        <div className="grid gap-10 md:grid-cols-2">
          {[...byTrade.entries()].map(([trade, list]) => (
            <section key={trade}>
              <h2 className="text-xl font-bold text-text-primary mb-3 first-letter:uppercase">{trade}</h2>
              <ul className="grid gap-2">
                {list.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/creation-site-internet/${p.slug}`} className="hover:text-accent-lime">{trade} à {p.city}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="rounded-3xl border border-accent-lime/30 bg-accent-lime/5 p-6 md:p-8 text-center mt-16">
          <p className="text-xl font-bold text-text-primary mb-2">Voyez votre futur site avant de payer</p>
          <p className="mb-5">On génère la maquette de votre site en 1 minute, gratuitement.</p>
          <Link href="/votre-site-en-1-minute" className="inline-block rounded-xl bg-accent-lime text-dark-950 font-bold px-6 py-4">Créer ma maquette gratuite</Link>
        </div>
      </div>
    </main>
  );
}
