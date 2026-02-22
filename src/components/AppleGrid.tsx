"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface AppleItem {
  title: string;
  subtitle: string;
  description: string;
  status: "live" | "coming-soon";
  href?: string;
}

interface AppleGridProps {
  items: AppleItem[];
  className?: string;
}

function AppleCard({ item, index }: { item: AppleItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const isLive = item.status === "live";

  return (
    <motion.div
      ref={ref}
      className="relative group"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative surface-card rounded-lg p-6 md:p-8 border transition-colors duration-300 cursor-pointer ${
          isLive
            ? "border-border hover:border-ember/40"
            : "border-border/50 opacity-50"
        }`}
      >
        {/* Glow layer on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200, 75, 49, 0.06), transparent 40%)",
          }}
          animate={{ opacity: isHovered && isLive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Status dot */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono tracking-widest uppercase text-text-tertiary">
            {item.subtitle}
          </span>
          <motion.div
            className={`w-2 h-2 rounded-full ${
              isLive ? "bg-ember" : "bg-border"
            }`}
            animate={
              isLive && isHovered
                ? {
                    boxShadow: [
                      "0 0 0 0 rgba(200, 75, 49, 0.4)",
                      "0 0 0 8px rgba(200, 75, 49, 0)",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-display italic text-text mb-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Bottom bar */}
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-ember/30 to-transparent"
          animate={isHovered && isLive ? { opacity: 1 } : { opacity: 0.3 }}
          transition={{ duration: 0.4 }}
        />

        {isLive && (
          <motion.div
            className="mt-4 flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-ember"
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span>Explore</span>
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              animate={isHovered ? { x: 3 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        )}

        {!isLive && (
          <div className="mt-4 text-xs font-mono tracking-wider uppercase text-text-tertiary">
            Coming Soon
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function AppleGrid({ items, className = "" }: AppleGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${className}`}
    >
      {items.map((item, i) => (
        <AppleCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}
