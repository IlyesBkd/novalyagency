"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Offres", href: "#offers" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/80 backdrop-blur-lg border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo"
            alt="Lime 77"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              className="text-sm text-text-secondary hover:text-accent-lime transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact-form"
            onClick={(e) => handleSmoothScroll(e, "#contact-form")}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent-lime text-dark-950 text-sm font-semibold hover:shadow-lg hover:shadow-accent-lime/25 hover:scale-[1.03] transition-all duration-200"
          >
            Commander
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 border-b border-white/[0.06]" : "max-h-0"
        } bg-dark-950/95 backdrop-blur-lg`}
      >
        <div className="px-6 py-4 space-y-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              className="block text-sm text-text-secondary hover:text-accent-lime transition-colors py-2"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact-form"
            onClick={(e) => handleSmoothScroll(e, "#contact-form")}
            className="block w-full text-center px-5 py-3 rounded-lg bg-accent-lime text-dark-950 text-sm font-semibold mt-2"
          >
            Commander mon site
          </a>
        </div>
      </div>
    </nav>
  );
}
