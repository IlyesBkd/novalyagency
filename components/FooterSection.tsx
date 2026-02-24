import Link from "next/link";

export function FooterSection() {
  return (
    <div id="footer">
      <footer className="relative py-8 bg-dark-950 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-text-secondary text-sm">
              © 2026 Novaly Agency — Tous droits réservés ·{" "}
              <a href="mailto:support@novalyagency.com" className="hover:text-accent-lime transition-colors">support@novalyagency.com</a>
            </div>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <Link
                href="/mentions-legales"
                className="hover:text-accent-lime transition-colors"
              >
                Mentions légales
              </Link>
              <span className="opacity-30">|</span>
              <Link
                href="/politique-confidentialite"
                className="hover:text-accent-lime transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
