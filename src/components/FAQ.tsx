import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the AI medical diagnosis?",
    answer: "Our AI has a 98.7% accuracy rate, validated through extensive clinical testing with over 1 million patient cases. However, AI recommendations should always be discussed with healthcare professionals for serious conditions."
  },
  {
    question: "Is my health data secure and private?",
    answer: "Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your health information is never shared with third parties and is stored securely on encrypted servers."
  },
  {
    question: "Can the AI replace my doctor?",
    answer: "No, our AI is designed to complement, not replace, healthcare professionals. It provides preliminary assessments and guidance, but we always recommend consulting with licensed doctors for diagnosis and treatment."
  },
  {
    question: "What types of medical conditions can the AI help with?",
    answer: "Our AI can assist with a wide range of conditions including common symptoms, minor injuries, skin conditions, mental health concerns, and general wellness questions. For emergencies, always call 911."
  },
  {
    question: "How much does the service cost?",
    answer: "We offer a free 7-day trial with unlimited consultations. After that, plans start at $19.99/month for unlimited AI consultations, with premium plans including access to human healthcare professionals."
  },
  {
    question: "Is the AI available in multiple languages?",
    answer: "Yes, our AI currently supports 15 languages including English, Spanish, French, German, and Chinese. We're continuously adding more language support."
  },
  {
    question: "How quickly can I get a response from the AI?",
    answer: "Our AI provides instant responses 24/7. Most consultations are completed within 2-3 minutes, with detailed analysis and recommendations provided immediately."
  },
  {
    question: "What if I need to speak with a human doctor?",
    answer: "Premium subscribers can connect with licensed healthcare professionals through our platform. We also provide referrals to local specialists when needed."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our AI medical assistant
            and how it can help improve your healthcare experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 shadow-card hover:shadow-medical transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};