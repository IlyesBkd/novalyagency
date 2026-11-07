import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSeoPages, seoPage } from "@/lib/seo-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return allSeoPages().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = seoPage(params.slug);
  if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: `/creation-site-internet/${p.slug}` } };
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = seoPage(params.slug);
  if (!p) notFound();
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main className="min-h-screen bg-dark-950 text-text-secondary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <article className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <Link href="/" className="text-sm hover:text-accent-lime">← Novaly Agency</Link>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-6 mb-6">{p.h1}</h1>
        <p className="text-lg mb-10">{p.intro}</p>
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
        <div className="rounded-3xl border border-accent-lime/30 bg-accent-lime/5 p-6 md:p-8 text-center">
          <p className="text-xl font-bold text-text-primary mb-2">Voyez votre futur site avant de payer</p>
          <p className="mb-5">On génère la maquette de votre site en 1 minute, gratuitement.</p>
          <Link href="/votre-site-en-1-minute" className="inline-block rounded-xl bg-accent-lime text-dark-950 font-bold px-6 py-4">Créer ma maquette gratuite</Link>
        </div>
      </article>
    </main>
  );
}
