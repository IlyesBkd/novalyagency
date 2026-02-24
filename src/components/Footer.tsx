export default function Footer() {
  return (
    <footer className="relative py-8 bg-dark-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm">
            {new Date().getFullYear()} {"— Tous droits reserves"}
          </div>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <a
              href="#mentions-legales"
              className="hover:text-accent-lime transition-colors"
            >
              Mentions legales
            </a>
            <span className="opacity-30">|</span>
            <a
              href="#politique-de-confidentialite"
              className="hover:text-accent-lime transition-colors"
            >
              {"Politique de confidentialite"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
