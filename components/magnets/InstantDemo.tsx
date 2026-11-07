"use client";
import { useState } from "react";
import { usePostHog } from "posthog-js/react";
import { submitMagnetLead } from "@/actions/submitForm";

const ENGINE = "https://demo.novalyagency.com";
const TRADES = [
  { value: "vtc", label: "VTC / taxi" },
  { value: "restaurant", label: "Restaurant / snack" },
  { value: "nettoyage", label: "Nettoyage" },
  { value: "btp", label: "Bâtiment / artisan" },
  { value: "beaute", label: "Coiffure / beauté" },
  { value: "autre", label: "Autre activité" },
];

type Demo = { slug: string; url: string };

export function InstantDemo() {
  const posthog = usePostHog();
  const [form, setForm] = useState({ name: "", trade: "vtc", city: "", website_url: "" });
  const [demo, setDemo] = useState<Demo | null>(null);
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "claiming" | "done">("idle");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  async function generate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setState("loading");
    try {
      const res = await fetch(`${ENGINE}/api/instant-demo`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Génération impossible.");
      setDemo(body);
      posthog?.capture("instant_demo_generated", { trade: form.trade });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Génération impossible.");
    } finally {
      setState("idle");
    }
  }

  async function claim(e: React.FormEvent) {
    e.preventDefault();
    if (!demo) return;
    setError("");
    setState("claiming");
    try {
      const res = await fetch(`${ENGINE}/api/instant-demo/claim`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug: demo.slug, phone, name: form.name, city: form.city }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Numéro invalide.");
      await submitMagnetLead({
        phone,
        source: "instant_demo",
        message: `${form.name} (${form.trade}, ${form.city}) — maquette ${demo.url}`,
      });
      posthog?.capture("instant_demo_claimed", { trade: form.trade });
      setDone(body.message);
      setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Envoi impossible.");
      setState("idle");
    }
  }

  const input =
    "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent-lime/60";

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">Gratuit · sans inscription</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          <span className="text-text-primary">Votre site</span> <span className="gradient-text">en 1 minute</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto">
          Indiquez le nom de votre entreprise : on génère tout de suite la maquette de votre futur site, à regarder sur votre téléphone.
        </p>
      </div>

      {!demo && (
        <form onSubmit={generate} className="max-w-xl mx-auto grid gap-4 rounded-3xl border border-white/10 bg-dark-900/60 p-6 md:p-8">
          <label className="grid gap-2 text-sm text-text-secondary">
            Nom de votre entreprise
            <input required minLength={2} maxLength={60} className={input} value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="ex. Karim Taxi" />
          </label>
          <label className="grid gap-2 text-sm text-text-secondary">
            Votre métier
            <select className={input} value={form.trade} onChange={(e) => setForm({ ...form, trade: e.target.value })}>
              {TRADES.map((t) => (
                <option key={t.value} value={t.value} className="bg-dark-900">{t.label}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-text-secondary">
            Votre ville
            <input required minLength={2} maxLength={50} className={input} value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="ex. Lyon" />
          </label>
          {/* Honeypot: hidden from people, filled by bots */}
          <input tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.website_url}
            onChange={(e) => setForm({ ...form, website_url: e.target.value })} />
          <button disabled={state === "loading"} className="mt-2 rounded-xl bg-accent-lime text-dark-950 font-bold py-4 text-lg disabled:opacity-60">
            {state === "loading" ? "Création de votre maquette…" : "Voir mon site maintenant"}
          </button>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </form>
      )}

      {demo && (
        <div className="grid md:grid-cols-[minmax(0,380px)_1fr] gap-8 items-start">
          <div className="mx-auto w-full max-w-[380px] rounded-[2.2rem] border-[10px] border-dark-800 bg-black overflow-hidden shadow-2xl">
            <iframe src={demo.url} title="Votre maquette" className="w-full h-[680px]" loading="lazy" />
          </div>
          <div className="rounded-3xl border border-white/10 bg-dark-900/60 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">Elle vous plaît ?</h2>
            <p className="text-text-secondary mb-6">
              On vous l’envoie sur WhatsApp, et on l’améliore avec vos vrais textes, vos couleurs et vos photos. Gratuit, sans engagement.
            </p>
            <a href={demo.url} target="_blank" rel="noopener" className="inline-block text-accent-lime underline mb-6">
              Ouvrir la maquette en grand
            </a>
            {state === "done" ? (
              <p className="rounded-xl bg-accent-lime/10 border border-accent-lime/30 text-accent-lime p-4">{done}</p>
            ) : (
              <form onSubmit={claim} className="grid gap-3">
                <label className="grid gap-2 text-sm text-text-secondary">
                  Votre numéro WhatsApp
                  <input required inputMode="tel" className={input} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="06 12 34 56 78" />
                </label>
                <button disabled={state === "claiming"} className="rounded-xl bg-accent-lime text-dark-950 font-bold py-4 disabled:opacity-60">
                  {state === "claiming" ? "Envoi…" : "Recevoir ma maquette sur WhatsApp"}
                </button>
                <p className="text-xs text-text-secondary/70">
                  Votre numéro sert uniquement à vous envoyer la maquette et à en parler avec vous. Aucun démarchage par des tiers.
                </p>
              </form>
            )}
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
