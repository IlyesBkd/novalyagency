import type { Metadata } from "next";
import Link from "next/link";
import { InstantDemo } from "@/components/magnets/InstantDemo";

export const metadata: Metadata = {
  title: "Votre site en 1 minute — maquette gratuite",
  description: "Entrez le nom de votre entreprise, votre métier et votre ville : la maquette de votre futur site apparaît tout de suite. Gratuit, sans inscription.",
  alternates: { canonical: "/votre-site-en-1-minute" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-dark-950">
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Link href="/" className="text-text-secondary text-sm hover:text-accent-lime">← Novaly Agency</Link>
      </div>
      <InstantDemo />
    </main>
  );
}
