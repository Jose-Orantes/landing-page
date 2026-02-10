import VideoPlayer from "./VideoPlayer";
import StoriesMarquee from "./StoriesMarquee";
import TypeformEmbed from "./TypeformEmbed";
const HeroSection = () => {
  // Placeholder images for future testimonials - add your images to /stories/ folder
  // const testimonialImages = [
  //   { src: "/stories/story-1.jpg", alt: "Success story 1" },
  //   { src: "/stories/story-2.jpg", alt: "Success story 2" },
  //   // Add more images here...
  // ];

  return <section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-20 sm:pt-24 md:pt-28">
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
          Get Your <span className="highlight">Free</span> Credit Analysis & <span className="highlight">Remove Negatives</span> Holding You Back To Start Getting Approved In As Little As 45 Days
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
        <StoriesMarquee />
      </div>
    </section>;
};
export default HeroSection;