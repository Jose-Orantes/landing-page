import { useEffect, useRef } from "react";

interface TypeformEmbedProps {
  formId?: string;
  className?: string;
}

const TypeformEmbed = ({ 
  formId = "01K7FT8VK4KA5KVBA490SWG9TE", 
  className = "" 
}: TypeformEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger Typeform to re-scan for embeds after component mounts
    if (window.tf && typeof window.tf.load === "function") {
      window.tf.load();
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      data-tf-live={formId}
      data-tf-inline-on-mobile
      className={className}
    />
  );
};

// Extend Window interface for Typeform
declare global {
  interface Window {
    tf?: {
      load: () => void;
    };
  }
}

export default TypeformEmbed;
