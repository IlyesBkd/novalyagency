import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSeoPages, relatedPages, seoPage } from "@/lib/seo-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return allSeoPages().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = seoPage(params.slug);
  if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: `/creation-site-internet/${p.slug}` } };
}

function frDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = seoPage(params.slug);
  if (!p) notFound();
  const { sameTrade, sameCity } = relatedPages(p);
  const label = p.tradeLabel ?? p.trade;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main className="min-h-screen bg-dark-950 text-text-secondary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <article className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <nav className="text-sm flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-accent-lime">← Novaly Agency</Link>
          <span>·</span>
          <Link href="/creation-site-internet" className="hover:text-accent-lime">Tous les métiers et villes</Link>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-6 mb-6">{p.h1}</h1>
        <p className="text-lg mb-10">{p.intro}</p>
        {p.local && p.local.total > 0 && (
          <section className="mb-10 rounded-2xl border border-white/10 bg-dark-900/60 p-6">
            <h2 className="text-xl font-bold text-text-primary mb-3">{p.city} en chiffres</h2>
            <p className="leading-relaxed">
              <b className="text-text-primary">{p.local.total}</b> {p.local.label} sont recensés à {p.city} sur {p.local.source}, dont{" "}
              <b className="text-text-primary">{p.local.withoutSite}</b> sans site internet indiqué (relevé du {frDate(p.local.date)}).
            </p>
          </section>
        )}
        {p.example?.video && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Exemple de site : {label} à {p.city}</h2>
            <video
              src={p.example.video}
              poster={p.example.poster}
              controls
              muted
              playsInline
              preload="none"
              className="w-full rounded-2xl border border-white/10 bg-black"
            />
            <p className="mt-3 text-sm">
              Maquette réalisée par Novaly Agency pour illustrer cette page.{" "}
              <a href={p.example.url} target="_blank" rel="nofollow noopener" className="underline hover:text-accent-lime">
                Voir la maquette en direct
              </a>
            </p>
          </section>
        )}
        {p.sections.map((s) => (
          <section key={s.h2} className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-4">{s.h2}</h2>
            {s.paragraphs.map((t, i) => (
              <p key={i} className="mb-4 leading-relaxed">{t}</p>
            ))}
          </section>
        ))}
        {p.checklist.length > 0 && (
          <section className="mb-10 rounded-2xl border border-white/10 bg-dark-900/60 p-6">
            <h2 className="text-xl font-bold text-text-primary mb-4">La check-list avant de lancer votre site</h2>
            <ul className="grid gap-2">{p.checklist.map((c) => <li key={c}>✅ {c}</li>)}</ul>
          </section>
        )}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Questions fréquentes</h2>
          {p.faq.map((f) => (
            <details key={f.q} className="mb-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-text-primary">{f.q}</summary>
              <p className="mt-3">{f.a}</p>
            </details>
          ))}
        </section>
        <div className="rounded-3xl border border-accent-lime/30 bg-accent-lime/5 p-6 md:p-8 text-center mb-12">
          <p className="text-xl font-bold text-text-primary mb-2">Voyez votre futur site avant de payer</p>
          <p className="mb-5">On génère la maquette de votre site en 1 minute, gratuitement.</p>
          <Link href="/votre-site-en-1-minute" className="inline-block rounded-xl bg-accent-lime text-dark-950 font-bold px-6 py-4">Créer ma maquette gratuite</Link>
        </div>
        {(sameTrade.length > 0 || sameCity.length > 0) && (
          <nav className="grid gap-8 md:grid-cols-2 text-sm">
            {sameTrade.length > 0 && (
              <div>
                <p className="font-semibold text-text-primary mb-3">Site de {label} dans d’autres villes</p>
                <ul className="grid gap-2">
                  {sameTrade.map((x) => (
                    <li key={x.slug}><Link href={`/creation-site-internet/${x.slug}`} className="hover:text-accent-lime">{label} à {x.city}</Link></li>
                  ))}
                </ul>
              </div>
            )}
            {sameCity.length > 0 && (
              <div>
                <p className="font-semibold text-text-primary mb-3">Autres métiers à {p.city}</p>
                <ul className="grid gap-2">
                  {sameCity.map((x) => (
                    <li key={x.slug}><Link href={`/creation-site-internet/${x.slug}`} className="hover:text-accent-lime">{x.tradeLabel ?? x.trade} à {p.city}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        )}
      </article>
    </main>
  );
}
