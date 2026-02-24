import Link from "next/link";

export function SectionCta({ text = "Demander mon site" }: { text?: string }) {
  return (
    <div className="text-center mt-12 scroll-animate">
      <Link
        href="#contact-form"
        className="btn-primary group inline-flex items-center gap-3 px-8 py-4 text-base"
      >
        <span>{text}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
