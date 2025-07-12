import { MessageSquare, Brain, BookOpen, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Learning Goals",
    description: "Tell our AI about your subjects, skill level, and learning preferences to get started."
  },
  {
    icon: Brain,
    title: "AI Creates Your Path",
    description: "Our advanced AI analyzes your needs and creates a personalized learning curriculum just for you."
  },
  {
    icon: BookOpen,
    title: "Learn at Your Pace",
    description: "Study with adaptive content that adjusts difficulty based on your progress and understanding."
  },
  {
    icon: Trophy,
    title: "Track Your Success",
    description: "Monitor progress with detailed analytics and celebrate achievements as you master new skills."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with personalized AI learning is simple. Our intuitive process 
            ensures you get the most effective learning experience in just a few steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};