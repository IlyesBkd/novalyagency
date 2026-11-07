import type { Metadata } from "next";
import Link from "next/link";
import { SiteAudit } from "@/components/magnets/SiteAudit";

export const metadata: Metadata = {
  title: "Audit gratuit de votre site en 30 secondes",
  description: "Vitesse sur mobile, sécurité, bouton d'appel, Google : vérifiez gratuitement ce qui fait perdre des clients à votre site.",
  alternates: { canonical: "/audit-gratuit" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-dark-950">
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <Link href="/" className="text-text-secondary text-sm hover:text-accent-lime">← Novaly Agency</Link>
      </div>
      <SiteAudit />
    </main>
  );
}
