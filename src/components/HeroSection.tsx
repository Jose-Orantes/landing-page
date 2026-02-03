import VideoPlayer from "./VideoPlayer";
import { BGPattern } from "@/components/ui/bg-pattern";
import StoriesMarquee from "./StoriesMarquee";
import TypeformEmbed from "./TypeformEmbed";
const HeroSection = () => {
  const testimonialImages = [{
    src: "/stories/story-5.jpg",
    alt: "American Express card approved with $33,000 credit limit"
  }, {
    src: "/stories/story-6.jpg",
    alt: "88 point increase in 1 month - $20,000 card approved"
  }, {
    src: "/stories/story-2.jpg",
    alt: "728 credit score with 89 points gained in 30 days"
  }, {
    src: "/stories/story-9.jpg",
    alt: "Credit limit increased from $15,000 to $33,000 with American Express"
  }, {
    src: "/stories/story-10.jpg",
    alt: "789 FICO score with Equifax at 785 showing excellent credit"
  }, {
    src: "/stories/story-7.jpg",
    alt: "$584 in credit card rewards - Good credit pays you back"
  }, {
    src: "/stories/story-3.jpg",
    alt: "798 credit score - 36 point jump in just 12 days"
  }, {
    src: "/stories/story-1.jpg",
    alt: "2 collections removed - Credit score increased from 660 to 753"
  }, {
    src: "/stories/story-8.jpg",
    alt: "794 credit score equals effortless approvals and $20,000 credit limit"
  }, {
    src: "/stories/story-4.jpg",
    alt: "Credit scores 785 TransUnion and 801 Equifax - Excellent rating"
  }];
  return <section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-20 sm:pt-24 md:pt-28">
      <BGPattern variant="dots" mask="fade-edges" size={40} fill="rgba(0, 0, 0, 0.25)" className="absolute inset-0 z-0" />
      
      {/* Full-width Banner Strip */}
      <div className="w-full max-w-4xl mx-auto flex justify-center mb-4 sm:mb-6 mt-0 relative z-10 animate-fade-in px-4 sm:px-6" style={{
      animationDelay: '0.1s',
      animationDuration: '0.8s',
      animationFillMode: 'both'
    }}>
        <div className="inline-flex items-center space-x-2.5 border border-[#057BFF]/30 rounded-full bg-[#057BFF]/10 p-1 text-sm text-gray-800">
          <div className="bg-white border border-[#057BFF]/30 rounded-2xl px-3 py-1">
            <p className="text-[#057BFF] font-medium">Attention</p>
          </div>
          <p className="pr-3 text-xs sm:text-sm">Anyone With Collections, Charge-Offs, or Negatives Holding Their Credit Back</p>
        </div>
      </div>

      <div className="max-w-4xl w-full mx-auto text-center relative z-10 px-4 sm:px-6">
        {/* Main Headline */}
        <h1 className="headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight animate-fade-in" style={{
        animationDelay: '0.3s',
        animationDuration: '0.8s',
        animationFillMode: 'both'
      }}>
          Get Your <span className="highlight">Free</span> Credit Analysis & <span className="highlight">Remove Negatives</span> Holding You Back To Start Getting Approved In As Little As 30 Days
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 sm:mb-12 text-muted-foreground animate-fade-in" style={{
        animationDelay: '0.5s',
        animationDuration: '0.8s',
        animationFillMode: 'both'
      }}>
          We'll review your credit report and create a custom plan to remove inaccurate negative items using law based disputes even if you've been denied before
        </p>

        {/* Video Player */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <VideoPlayer />
        </div>

        {/* Typeform Embed */}
        <div id="book-call" className="w-full max-w-2xl mx-auto mb-6 bg-white rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden">
          <TypeformEmbed className="min-h-[450px] sm:min-h-[400px] w-full" />
        </div>
        {/* Stories Marquee Heading */}
        <div className="mt-20 sm:mt-24 md:mt-32 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center max-w-3xl mx-auto tracking-tight">Real Results. Real Transformations.</h2>
        </div>

      </div>

      {/* Stories Marquee */}
      <div className="w-full">
        <StoriesMarquee images={testimonialImages} />
      </div>
    </section>;
};
export default HeroSection;