"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

/* ── Initialise PostHog une seule fois ───────────────────────── */
if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY &&
  !posthog.__loaded
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: false, // on le fait manuellement ci-dessous
    capture_pageleave: true,
  });
}

/* ── Pageview tracker (compatible App Router navigation) ─────── */
function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrl = useRef("");

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    if (url !== lastUrl.current) {
      lastUrl.current = url;
      posthog.capture("$pageview", { $current_url: window.origin + url });
    }
  }, [pathname, searchParams]);

  return null;
}

/* ── Provider exporté ────────────────────────────────────────── */
export function PostHogProvider({ children }: { children: ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <PostHogPageview />
      {children}
    </PHProvider>
  );
}
