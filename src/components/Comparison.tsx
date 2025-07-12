import { Check, X, Clock, DollarSign, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    feature: "Availability",
    traditional: "Business hours only",
    ai: "24/7 instant access",
    icon: Clock
  },
  {
    feature: "Wait Time",
    traditional: "Days to weeks",
    ai: "Instant response",
    icon: Zap
  },
  {
    feature: "Cost per Consultation",
    traditional: "$200-500+",
    ai: "Starting at $19.99/month unlimited",
    icon: DollarSign
  },
  {
    feature: "Initial Assessment",
    traditional: "Limited time slots",
    ai: "Comprehensive AI analysis",
    icon: Users
  },
  {
    feature: "Follow-up Support",
    traditional: "Additional appointments",
    ai: "Continuous monitoring included",
    icon: Check
  },
  {
    feature: "Travel Required",
    traditional: "Yes, to clinic/hospital",
    ai: "No, from anywhere",
    icon: X
  }
];

export const Comparison = () => {
  return (
    <section className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose AI{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Over Traditional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI-powered medical assistant compares to traditional healthcare 
            methods and discover the advantages of modern digital health solutions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-medical overflow-hidden border border-border/50">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-hero text-white">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">Feature</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-xl font-semibold">Traditional Healthcare</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-xl font-semibold">AI Medical Assistant</h3>
              </div>
            </div>
            
            {/* Comparison rows */}
            {comparisons.map((comparison, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 border-b border-border/50 last:border-b-0 hover:bg-muted/30 transition-colors ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                }`}
              >
                <div className="p-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <comparison.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{comparison.feature}</span>
                </div>
                <div className="p-6 border-l border-border/50 flex items-center">
                  <span className="text-muted-foreground">{comparison.traditional}</span>
                </div>
                <div className="p-6 border-l border-border/50 flex items-center">
                  <span className="text-primary font-semibold">{comparison.ai}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="medical" size="xl" className="group">
              Experience the Difference
              <Check className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};