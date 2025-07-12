import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/EdTechFeatures";
import { HowItWorks } from "@/components/EdTechHowItWorks";
import { TrustSection } from "@/components/EdTechTrustSection";
import { Comparison } from "@/components/Comparison";
import { Reviews } from "@/components/EdTechReviews";
import { FAQ } from "@/components/EdTechFAQ";
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
