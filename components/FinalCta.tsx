"use client";
import { useState } from "react";
import { submitContact } from "@/actions/submitForm";
import { Section } from "./Section";

export function FinalCta() {
  const [form, setForm] = useState({ email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const result = await submitContact({ ...form, leadType: "vitrine", offerPrice: 399 });
      if (result.success) {
        setStatus("sent");
        // Push GTM event with lead type and offer price
        if (typeof window !== "undefined") {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: "generate_lead_form",
            lead_type: "vitrine",
            offer_price: 399
          });
        }
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
    }
  }

  return (
    <Section id="contact-form" glow>
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20 scroll-animate">
          <p className="text-accent-lime text-sm uppercase tracking-[0.25em] mb-4 font-medium">Prêt à lancer votre projet ?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-text-primary">Commandez</span>
            <br />
            <span className="gradient-text">votre site premium</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto">
            Décrivez votre projet et nous vous recontactons sous 24h pour lancer la création.
          </p>
        </div>

        {/* Form card — premium glassmorphism with glow border */}
        <div className="scroll-animate-scale" style={{ transitionDelay: "150ms" }}>
          <div className="relative">
            {/* Glow border */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent-lime/40 via-accent-lime/10 to-accent-lime/40 opacity-50" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-dark-800/90 to-dark-900/95 backdrop-blur-xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-lime/50 to-transparent" />

            <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12">
              {status === "sent" ? (
                <div className="text-center py-12">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-accent-lime/20 blur-xl" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent-lime/20 to-accent-lime/5 border border-accent-lime/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Message envoyé !</h3>
                  <p className="text-text-secondary text-lg">Nous vous recontactons sous 24h pour lancer votre projet.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Form header inside card */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-lime/20 to-accent-lime/5 border border-accent-lime/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold text-base">Formulaire de contact</h3>
                      <p className="text-text-secondary text-xs">Remplissez les champs ci-dessous</p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2.5">
                      Adresse e-mail <span className="text-accent-lime">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vous@exemple.fr"
                        className="w-full rounded-xl border border-white/10 focus:border-accent-lime focus:outline-none focus:ring-2 focus:ring-accent-lime/30 text-black placeholder-gray-500 text-base transition-all duration-300"
                        style={{ backgroundColor: "#ffffff", color: "#111827", caretColor: "#111827", padding: "16px 20px" }}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2.5">
                      Numéro de téléphone{" "}
                      <span className="text-text-secondary/40 text-xs font-normal">(facultatif)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full rounded-xl border border-white/10 focus:border-accent-lime focus:outline-none focus:ring-2 focus:ring-accent-lime/30 text-black placeholder-gray-500 text-base transition-all duration-300"
                        style={{ backgroundColor: "#ffffff", color: "#111827", caretColor: "#111827", padding: "16px 20px" }}
                      />
                    </div>
                  </div>

                  {/* Project description */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2.5">
                      Décrivez votre projet <span className="text-accent-lime">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-text-secondary/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
                      </div>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Ex: Je suis plombier à Lyon et j'ai besoin d'un site vitrine professionnel pour attirer de nouveaux clients..."
                        className="w-full rounded-xl border border-white/10 focus:border-accent-lime focus:outline-none focus:ring-2 focus:ring-accent-lime/30 text-black placeholder-gray-500 text-base transition-all duration-300 resize-none"
                        style={{ backgroundColor: "#ffffff", color: "#111827", caretColor: "#111827", padding: "16px 20px" }}
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <p className="text-red-400 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full group inline-flex items-center justify-center gap-3 px-8 py-5 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        <span>Envoi en cours…</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer ma demande</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Trust badges */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-text-secondary/50 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/60"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span>Réponse sous 24h</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-secondary/50 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/60"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                      <span>Satisfait ou remboursé</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-secondary/50 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/60"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                      <span>100 % sur mesure</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
