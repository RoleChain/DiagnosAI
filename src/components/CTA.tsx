import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and educators who are already using our AI-powered 
            learning platform to achieve better educational outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg group"
            >
              Start Learning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="educational-outline" 
              size="xl" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Download className="w-5 h-5" />
              Try Demo
            </Button>
          </div>
          
          <div className="text-white/80 text-sm">
            <p className="mb-2">✓ No credit card required  ✓ Free forever plan  ✓ Cancel anytime</p>
            <p>Trusted by educators and students worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};