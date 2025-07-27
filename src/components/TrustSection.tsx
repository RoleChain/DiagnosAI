import { Shield, Award, Users, CheckCircle } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Full compliance with healthcare privacy regulations"
  },
  {
    icon: Award,
    title: "FDA Recognized",
    description: "Our AI algorithms meet FDA guidelines for medical software"
  },
  {
    icon: Users,
    title: "Doctor Approved",
    description: "Reviewed and validated by licensed medical professionals"
  },
  {
    icon: CheckCircle,
    title: "Clinically Tested",
    description: "Rigorously tested in clinical environments for accuracy"
  }
];

const stats = [
  { number: "98.7%", label: "Diagnostic Accuracy" },
  { number: "50,000+", label: "Healthcare Providers" },
  { number: "1M+", label: "Successful Consultations" },
  { number: "24/7", label: "Availability" }
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Trust Points */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Healthcare Professionals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our AI medical assistant meets the highest standards for healthcare technology,
            ensuring you receive reliable and secure medical guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};