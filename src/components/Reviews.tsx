import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Dr. Sarah Johnson",
    role: "Family Medicine Physician",
    rating: 5,
    text: "As a practicing physician, I'm impressed by the accuracy and thoroughness of this AI system. It's an excellent tool for preliminary assessments and patient education.",
    avatar: "👩‍⚕️"
  },
  {
    name: "Michael Chen",
    role: "Working Parent",
    rating: 5,
    text: "This app has been a game-changer for our family. When my kids have minor symptoms, I can get immediate guidance instead of waiting days for an appointment.",
    avatar: "👨‍💼"
  },
  {
    name: "Emily Rodriguez",
    role: "College Student",
    rating: 5,
    text: "Perfect for someone on a tight budget. The AI gives me peace of mind about my health concerns, and I know when I really need to see a doctor.",
    avatar: "👩‍🎓"
  },
  {
    name: "Dr. James Wilson",
    role: "Emergency Medicine",
    rating: 5,
    text: "I recommend this to my patients for non-emergency consultations. It helps reduce unnecessary ER visits while ensuring they get proper care when needed.",
    avatar: "👨‍⚕️"
  },
  {
    name: "Lisa Thompson",
    role: "Senior Citizen",
    rating: 5,
    text: "The AI is so easy to use and explains everything in terms I understand. It's like having a knowledgeable medical friend available anytime.",
    avatar: "👵"
  },
  {
    name: "David Park",
    role: "Rural Resident",
    rating: 5,
    text: "Living in a remote area, access to healthcare is limited. This AI assistant bridges that gap perfectly and has helped me make informed health decisions.",
    avatar: "👨‍🌾"
  }
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what healthcare professionals and patients are saying about their 
            experience with our AI medical assistant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-medical transition-all duration-300 hover:-translate-y-1 border border-border/50 relative"
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xl">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary stats */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">25,000+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-white/80">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};