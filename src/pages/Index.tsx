import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustSection } from "@/components/TrustSection";
import { Comparison } from "@/components/Comparison";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TrustSection />
        <Comparison />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
