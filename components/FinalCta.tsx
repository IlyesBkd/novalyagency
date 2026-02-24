"use client";
import { useState } from "react";
import { submitContact } from "@/actions/submitForm";

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
      const result = await submitContact(form);
      if (result.success) {
        setStatus("sent");
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
    <div id="contact-form">
      <section className="relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.02] via-accent-lime/[0.04] to-accent-lime/[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-lime/[0.05] rounded-full blur-[150px] animate-pulse-glow" />

        <div className="py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            {/* Heading */}
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-text-primary">Commandez</span>
                <br />
                <span className="gradient-text">votre site premium</span>
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto">
                Décrivez votre projet et nous vous recontactons sous 24h pour lancer la création.
              </p>
            </div>

            {/* Form card — glassmorphism */}
            <div className="scroll-animate-scale" style={{ transitionDelay: "150ms" }}>
              <div className="rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 sm:p-10 lg:p-12">
                {status === "sent" ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-accent-lime/15 border border-accent-lime/30 flex items-center justify-center mx-auto mb-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Message envoyé !</h3>
                    <p className="text-text-secondary">Nous vous recontactons sous 24h pour lancer votre projet.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Adresse e-mail <span className="text-accent-lime">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vous@exemple.fr"
                        className="w-full rounded-xl bg-black/50 border border-gray-700 focus:border-accent-lime/50 focus:outline-none focus:ring-1 focus:ring-accent-lime/30 px-5 py-4 text-white placeholder-gray-400 text-base transition-all duration-200"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Numéro de téléphone{" "}
                        <span className="text-text-secondary/60 text-xs font-normal">(facultatif)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full rounded-xl bg-black/50 border border-gray-700 focus:border-accent-lime/50 focus:outline-none focus:ring-1 focus:ring-accent-lime/30 px-5 py-4 text-white placeholder-gray-400 text-base transition-all duration-200"
                      />
                    </div>

                    {/* Project description */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Décrivez votre projet <span className="text-accent-lime">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Ex: Je suis plombier à Lyon et j'ai besoin d'un site vitrine professionnel pour attirer de nouveaux clients..."
                        className="w-full rounded-xl bg-black/50 border border-gray-700 focus:border-accent-lime/50 focus:outline-none focus:ring-1 focus:ring-accent-lime/30 px-5 py-4 text-white placeholder-gray-400 text-base transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <p className="text-red-400 text-sm text-center">{errorMsg}</p>
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

                    {/* Trust line */}
                    <p className="text-center text-text-secondary/60 text-xs">
                      Réponse garantie sous 24h · Satisfait ou remboursé · 100 % sur mesure
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
