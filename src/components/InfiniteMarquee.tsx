"use client";

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
  reverse?: boolean;
}

export function InfiniteMarquee({
  items,
  speed = 30,
  separator = "·",
  className = "",
  reverse = false,
}: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const firstSet = containerRef.current.querySelector(
        "[data-marquee-content]"
      );
      if (firstSet) {
        setContentWidth(firstSet.scrollWidth);
      }
    }
  }, [items]);

  const duration = contentWidth / speed;

  const renderContent = () => (
    <span data-marquee-content className="inline-flex items-center gap-8 pr-8">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-8 whitespace-nowrap">
          <span className="text-sm font-mono tracking-widest uppercase text-text-secondary">
            {item}
          </span>
          <span className="text-ember/40 text-xs">{separator}</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        ref={containerRef}
        className="inline-flex"
        animate={
          contentWidth > 0
            ? {
                x: reverse ? [0, contentWidth] : [0, -contentWidth],
              }
            : undefined
        }
        transition={
          contentWidth > 0
            ? {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration,
                  ease: "linear",
                },
              }
            : undefined
        }
      >
        {renderContent()}
        {renderContent()}
        {renderContent()}
      </motion.div>
    </div>
  );
}
