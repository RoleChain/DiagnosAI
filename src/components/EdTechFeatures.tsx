import { Brain, Target, BookOpen, Users, BarChart, Award } from "lucide-react";
import personalizedImage from "@/assets/personalized-learning.jpg";
import tutoringImage from "@/assets/ai-tutoring.jpg";
import progressImage from "@/assets/progress-tracking.jpg";

const features = [
  {
    icon: Brain,
    title: "Personalized AI Learning",
    description: "Our AI analyzes your learning style and creates customized study paths for optimal comprehension.",
    image: personalizedImage
  },
  {
    icon: Target,
    title: "Instant AI Tutoring",
    description: "Get immediate help with homework, explanations, and step-by-step problem solving 24/7.",
    image: tutoringImage
  },
  {
    icon: BarChart,
    title: "Smart Progress Tracking",
    description: "Monitor learning progress with detailed analytics and insights to optimize study efficiency.",
    image: progressImage
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Connect with study groups, share knowledge, and learn together in AI-moderated environments.",
    image: null
  },
  {
    icon: BookOpen,
    title: "Adaptive Curriculum",
    description: "Dynamic content that adjusts to your knowledge level and learning preferences in real-time.",
    image: null
  },
  {
    icon: Award,
    title: "Gamified Achievement",
    description: "Earn badges, track streaks, and compete with friends to make learning engaging and motivating.",
    image: null
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Revolutionary Learning{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of education with our comprehensive AI-powered platform
            designed to deliver personalized, efficient, and engaging learning experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-educational transition-all duration-300 hover:-translate-y-1 border border-border/50"
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