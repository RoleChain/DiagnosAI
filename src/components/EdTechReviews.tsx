import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ms. Sarah Johnson",
    role: "High School Math Teacher",
    rating: 5,
    text: "This AI platform has revolutionized how my students learn mathematics. The personalized approach helps each student progress at their own pace while maintaining engagement.",
    avatar: "👩‍🏫"
  },
  {
    name: "Alex Chen",
    role: "College Student",
    rating: 5,
    text: "The AI tutoring helped me understand complex physics concepts that I struggled with for months. The instant feedback and step-by-step explanations are incredible.",
    avatar: "👨‍🎓"
  },
  {
    name: "Maria Rodriguez",
    role: "Parent",
    rating: 5,
    text: "My daughter's grades have improved dramatically since using this platform. The gamified learning keeps her motivated and she actually enjoys studying now!",
    avatar: "👩‍💼"
  },
  {
    name: "Dr. James Wilson",
    role: "Education Director",
    rating: 5,
    text: "We've implemented this across our entire school district. The learning analytics and personalized curriculum have led to a 40% improvement in test scores.",
    avatar: "👨‍💼"
  },
  {
    name: "Emily Thompson",
    role: "Homeschool Educator",
    rating: 5,
    text: "Perfect for homeschooling! The AI adapts to each of my children's learning styles and provides me with detailed progress reports and curriculum suggestions.",
    avatar: "👩‍🏫"
  },
  {
    name: "David Park",
    role: "Adult Learner",
    rating: 5,
    text: "I'm learning programming in my 40s, and this AI tutor makes complex concepts accessible. The patience and personalized explanations are exactly what I needed.",
    avatar: "👨‍💻"
  }
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Learners Everywhere
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what educators, students, and parents are saying about their 
            experience with our AI-powered learning platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-educational transition-all duration-300 hover:-translate-y-1 border border-border/50 relative"
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
              <div className="text-3xl font-bold mb-1">50,000+</div>
              <div className="text-white/80">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-white/80">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};