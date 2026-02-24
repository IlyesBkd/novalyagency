import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Commander from "@/components/Commander";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950 text-text-primary overflow-x-hidden relative">
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-accent-lime/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-accent-lime/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-accent-lime/[0.02] rounded-full blur-[80px]" />
      </div>
      <Hero />
      <Credibility />
      <Features />
      <Process />
      <Commander />
      <FAQ />
      <Footer />
    </div>
  );
}
