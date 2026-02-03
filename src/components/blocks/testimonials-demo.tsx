import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahcredit",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "My credit score went from 520 to 720 in just 4 months! The collections that were destroying my credit are completely gone.",
    href: "#"
  },
  {
    author: {
      name: "Marcus Williams",
      handle: "@marcusrepair",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "I was denied for everything - cars, apartments, credit cards. After working with this team, I got approved for my dream home!"
  },
  {
    author: {
      name: "Jennifer Martinez",
      handle: "@jennyfinance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "The stress of collections calls was ruining my life. Now they're all gone and I have peace of mind again."
  },
  {
    author: {
      name: "David Chen",
      handle: "@davidcredit",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "I saved over $15,000 by having my collections erased instead of paying them in full. Best investment ever!"
  },
  {
    author: {
      name: "Lisa Rodriguez",
      handle: "@lisarepair",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "From 480 to 750 credit score! The personalized approach made all the difference in my credit repair journey."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Real Results from Real People"
      description="Join thousands who've transformed their credit and unlocked financial freedom"
      testimonials={testimonials}
    />
  )
}