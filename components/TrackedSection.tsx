"use client";

import { useEffect, useRef, type ReactNode } from "react";
import posthog from "posthog-js";

type TrackedSectionProps = {
  sectionName: string;
  children: ReactNode;
  /** Pourcentage de la section visible pour déclencher l'événement (0–1) */
  threshold?: number;
};

/**
 * Wrapper qui déclenche un événement PostHog `section_viewed`
 * une seule fois quand la section entre dans le viewport.
 */
export function TrackedSection({
  sectionName,
  children,
  threshold = 0.3,
}: TrackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          posthog.capture("section_viewed", { section_name: sectionName });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName, threshold]);

  return <div ref={ref}>{children}</div>;
}
