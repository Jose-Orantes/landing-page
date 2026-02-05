"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
export const Timeline = ({
  data
}: {
  data: TimelineEntry[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (!ref.current) return;
    
    let timeoutId: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver((entries) => {
      // Debounce to batch multiple resize events
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          for (const entry of entries) {
            setHeight(entry.contentRect.height);
          }
        });
      }, 100);
    });
    
    resizeObserver.observe(ref.current);
    
    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, []);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 50%"]
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  return <div className="w-full font-sans relative" ref={containerRef}>

      <div ref={ref} className="relative max-w-4xl mx-auto pb-20">
        {data.map((item, index) => {
          const ballProgress = data.length > 1 ? index / (data.length - 1) : 0;
          const ballOpacity = useTransform(
            scrollYProgress,
            [Math.max(0, ballProgress - 0.2), Math.min(1, ballProgress + 0.1)],
            [0.4, 1]
          );
          const ballScale = useTransform(
            scrollYProgress,
            [Math.max(0, ballProgress - 0.2), Math.min(1, ballProgress + 0.1)],
            [0.9, 1.05]
          );
          
          return <div key={index} className="flex justify-start pt-16 md:pt-32 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs md:w-full transform-gpu">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-white border border-[#057bff] flex items-center justify-center">
                <motion.div
                  style={{ opacity: ballOpacity, scale: ballScale }}
                  className="h-4 w-4 rounded-full bg-gradient-to-br from-[#057bff] to-[#0456b8] shadow-lg shadow-[#057bff]/50 transform-gpu"
                />
              </div>
              <h3 className="hidden md:block headline text-2xl sm:text-3xl lg:text-4xl md:pl-20 font-bold text-foreground">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block headline text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold text-foreground">
                {item.title}
              </h3>
              <div className="text-muted-foreground">{item.content}</div>
            </div>
          </div>;
        })}
        <div style={{
        height: height + "px"
      }} className="absolute left-8 top-0 overflow-hidden w-[2px] from-transparent via-neutral-700 to-transparent">
          <motion.div style={{
          height: heightTransform,
          opacity: opacityTransform
        }} className="absolute inset-x-0 top-0 w-[2px] bg-[#057bff] rounded-full" />
        </div>
      </div>

      
    </div>;
};