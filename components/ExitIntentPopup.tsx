"use client";
import { useState, useEffect, useCallback } from "react";
import { submitPopup } from "@/actions/submitForm";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !show) {
      const dismissed = sessionStorage.getItem("exit-popup-dismissed");
      if (!dismissed) {
        setShow(true);
      }
    }
  }, [show]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  function handleClose() {
    setShow(false);
    sessionStorage.setItem("exit-popup-dismissed", "1");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const result = await submitPopup({ email });
      if (result.success) {
        setStatus("sent");
        setTimeout(() => handleClose(), 2500);
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Une erreur est survenue.");
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-dark-900 border border-accent-lime/20 p-8 shadow-2xl shadow-black/50">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-all"
          aria-label="Fermer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Glow */}
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-lime/50 to-transparent" />

        {status === "sent" ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-accent-lime/15 border border-accent-lime/30 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Merci !</h3>
            <p className="text-text-secondary text-sm">Nous vous envoyons votre estimation très vite.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Attendez !
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Avant de partir, recevez une estimation gratuite de votre site en 2 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="w-full rounded-xl bg-black/50 border border-gray-700 focus:border-accent-lime/50 focus:outline-none focus:ring-1 focus:ring-accent-lime/30 px-4 py-3.5 text-white placeholder-gray-400 text-sm transition-all duration-200"
              />

              {status === "error" && (
                <p className="text-red-400 text-xs text-center">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Envoi…
                  </>
                ) : (
                  "Recevoir mon estimation gratuite"
                )}
              </button>

              <p className="text-center text-text-secondary/50 text-xs">
                Aucun spam. Réponse sous 24h.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
