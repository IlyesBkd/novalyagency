import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function Section({ id, children, className = "", glow = false }: SectionProps) {
  return (
    <section id={id} className={`relative w-full py-10 md:py-24 overflow-hidden ${className}`}>
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Optional radial glow — hidden on mobile for GPU perf */}
      {glow && (
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-lime/[0.03] rounded-full blur-[150px] pointer-events-none" />
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
