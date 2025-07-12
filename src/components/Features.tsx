import { Brain, Shield, Clock, Users, Stethoscope, Heart } from "lucide-react";
import aiFeatureImage from "@/assets/ai-feature.jpg";
import safetyImage from "@/assets/safety-privacy.jpg";
import supportImage from "@/assets/support-24-7.jpg";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Diagnosis",
    description: "Our AI analyzes symptoms using machine learning trained on millions of medical cases.",
    image: aiFeatureImage
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Bank-level encryption ensures your health data remains completely private and secure.",
    image: safetyImage
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get medical guidance anytime, anywhere. Our AI never sleeps, so you're always covered.",
    image: supportImage
  },
  {
    icon: Users,
    title: "Specialist Network",
    description: "Connect with verified healthcare professionals when you need human expertise.",
    image: null
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Health Tracking",
    description: "Monitor your health metrics and receive personalized insights and recommendations.",
    image: null
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Get proactive health recommendations to prevent issues before they become serious.",
    image: null
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Advanced Medical AI{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              at Your Fingertips
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of healthcare with our comprehensive AI-powered platform
            designed to provide accurate, accessible, and personalized medical assistance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-medical transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {feature.image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};