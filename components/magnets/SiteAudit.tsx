"use client";
import { useState } from "react";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { submitMagnetLead } from "@/actions/submitForm";

const ENGINE = "https://demo.novalyagency.com";
const WHATSAPP = `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "33764136623").replace(/[^0-9]/g, "")}`;

type Check = { label: string; ok: boolean; detail?: string };
type Report = { url: string; score: number; checks: Check[]; summary: string };

export function SiteAudit() {
  const posthog = usePostHog();
  const [url, setUrl] = useState("");
  const [trap, setTrap] = useState("");
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setReport(null);
    try {
      const res = await fetch(`${ENGINE}/api/audit`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url, website_url: trap }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Audit impossible.");
      setReport(body);
      posthog?.capture("site_audit_done", { score: body.score });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Audit impossible.");
    } finally {
      setLoading(false);
    }
  }

  async function lead(e: React.FormEvent) {
    e.preventDefault();
    if (!report) return;
    await fetch(`${ENGINE}/api/audit/lead`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ phone, url: report.url, score: report.score }),
    }).catch(() => null);
    const res = await submitMagnetLead({ phone, source: "audit", message: `Audit ${report.url} : ${report.score}/100` });
    if (res.success) {
      posthog?.capture("site_audit_lead");
      setSent(true);
    } else setError(res.error || "Envoi impossible.");
  }

  const input =
    "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent-lime/60";
  const color = (s: number) => (s >= 80 ? "text-accent-lime" : s >= 50 ? "text-amber-400" : "text-red-400");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-10">
        <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">Gratuit · 30 secondes</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          <span className="text-text-primary">Audit gratuit</span> <span className="gradient-text">de votre site</span>
        </h1>
        <p className="text-lg text-text-secondary">Collez l’adresse de votre site : on vérifie ce qui vous fait perdre des clients sur téléphone et sur Google.</p>
      </div>

      <form onSubmit={run} className="flex flex-col sm:flex-row gap-3 rounded-3xl border border-white/10 bg-dark-900/60 p-4">
        <input required className={input} value={url} onChange={(e) => setUrl(e.target.value)} placeholder="www.votre-site.fr" inputMode="url" />
        <input tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={trap} onChange={(e) => setTrap(e.target.value)} />
        <button disabled={loading} className="rounded-xl bg-accent-lime text-dark-950 font-bold px-6 py-3.5 whitespace-nowrap disabled:opacity-60">
          {loading ? "Analyse en cours…" : "Analyser mon site"}
        </button>
      </form>
      {loading && <p className="text-center text-text-secondary text-sm mt-4">Le test de vitesse Google peut prendre jusqu’à 30 secondes.</p>}
      {error && <p className="text-center text-red-400 text-sm mt-4">{error}</p>}

      {report && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-dark-900/60 p-6 md:p-8">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-text-primary break-all">{report.url}</h2>
            <span className={`text-4xl font-bold ${color(report.score)}`}>{report.score}<span className="text-lg">/100</span></span>
          </div>
          <ul className="grid gap-3 mb-6">
            {report.checks.map((c) => (
              <li key={c.label} className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3">
                <span className="text-text-primary">{c.ok ? "✅" : "❌"} {c.label}</span>
                {c.detail && <span className="text-sm text-text-secondary">{c.detail}</span>}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary mb-8">{report.summary}</p>
          {sent ? (
            <p className="rounded-xl bg-accent-lime/10 border border-accent-lime/30 text-accent-lime p-4">
              C’est noté ! On vous prépare une maquette corrigée et on vous l’envoie sur WhatsApp.
            </p>
          ) : (
            <form onSubmit={lead} className="grid gap-3">
              <p className="text-text-primary font-semibold">Recevez gratuitement la maquette d’un site corrigé :</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input required inputMode="tel" className={input} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Votre WhatsApp : 06 12 34 56 78" />
                <button className="rounded-xl bg-accent-lime text-dark-950 font-bold px-6 py-3.5 whitespace-nowrap">Recevoir ma maquette</button>
              </div>
              <p className="text-xs text-text-secondary/70">
                Ou écrivez-nous directement sur <a className="underline" href={WHATSAPP}>WhatsApp</a> · <Link className="underline" href="/votre-site-en-1-minute">Créer ma maquette maintenant</Link>
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
