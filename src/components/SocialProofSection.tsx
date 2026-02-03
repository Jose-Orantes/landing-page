import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Business Owner",
    statement: "My credit score jumped from 580 to 720 in just 45 days. The collections that haunted me for years are completely gone.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    initials: "SM",
    stats: "720 Credit Score"
  },
  {
    name: "Marcus Johnson",
    title: "Real Estate Investor", 
    statement: "I was denied for every loan application. Now I'm pre-approved for $500K+ and closing on my third property.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    initials: "MJ",
    stats: "$500K+ Approved"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Subtle section separator */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16 ring-2 ring-accent/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{testimonial.title}</p>
                  
                  <blockquote className="text-foreground leading-relaxed mb-4">
                    "{testimonial.statement}"
                  </blockquote>
                  
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    {testimonial.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;