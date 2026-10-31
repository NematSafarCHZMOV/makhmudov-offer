import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Backdrop } from "@/components/layout/Backdrop";
import { Hero } from "@/components/offer/Hero";
import { Portfolio } from "@/components/offer/Portfolio";
import { Analysis } from "@/components/offer/Analysis";
import { TierComparison } from "@/components/offer/TierComparison";
import { Covers } from "@/components/offer/Covers";
import { Recommendation } from "@/components/offer/Recommendation";
import { FinalCta } from "@/components/offer/FinalCta";

// Makhmudov Design Studio üçün təklif: giriş → brendlər → səhifə təhlili → 3 səviyyə → tövsiyə → əlaqə
export default function Home() {
  return (
    <div className="relative isolate min-h-screen flex flex-col bg-canvas text-label">
      <Backdrop />
      <Header />
      <main className="relative flex-1">
        <Hero />
        <Portfolio />
        <Analysis />
        <TierComparison />
        <Covers />
        <Recommendation />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
