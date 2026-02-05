import { cn } from "@/lib/utils";

interface StoryImage {
  src: string;
  alt: string;
}

interface StoriesMarqueeProps {
  images?: StoryImage[];
  className?: string;
}

const defaultPlaceholders: StoryImage[] = [
  { src: "/placeholder.svg", alt: "Testimonial story 1" },
  { src: "/placeholder.svg", alt: "Testimonial story 2" },
  { src: "/placeholder.svg", alt: "Testimonial story 3" },
  { src: "/placeholder.svg", alt: "Testimonial story 4" },
  { src: "/placeholder.svg", alt: "Testimonial story 5" },
  { src: "/placeholder.svg", alt: "Testimonial story 6" },
  { src: "/placeholder.svg", alt: "Testimonial story 7" },
  { src: "/placeholder.svg", alt: "Testimonial story 8" },
];

export default function StoriesMarquee({ 
  images = defaultPlaceholders,
  className 
}: StoriesMarqueeProps) {
  // Double images for seamless loop - reduced from 3x for better performance
  const doubledImages = [...images, ...images];

  return (
    <section 
      className={cn(
        "w-screen overflow-hidden bg-background",
        className
      )}
    >
      {/* Usage instructions comment for editor */}
      {/* Upload your Instagram Story screenshots here. Drag to reorder. No captions will be shown. The strip scrolls automatically and loops. */}
      
      <div className="relative pb-8 pt-8 md:pt-12">
        <div
          className="flex gap-6 w-max animate-stories-scroll"
          style={{
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {doubledImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[22rem] sm:h-[28rem] lg:h-[34rem] w-auto aspect-[9/16] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover object-center rounded-2xl shadow-sm"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
