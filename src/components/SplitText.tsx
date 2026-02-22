"use client";

import { motion } from "motion/react";

interface SplitTextProps {
  children: string;
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration per character (seconds) */
  charDuration?: number;
  /** Stagger between characters (seconds) */
  stagger?: number;
  /** Animate on scroll into view instead of on mount */
  triggerOnView?: boolean;
  /** Only play once */
  once?: boolean;
}

/**
 * Per-character stagger animation for headlines.
 * Each character slides up from below with slight delay.
 */
export function SplitText({
  children,
  className = "",
  delay = 0,
  charDuration = 0.5,
  stagger = 0.03,
  triggerOnView = false,
  once = true,
}: SplitTextProps) {
  // Split text into words, preserving spaces
  const words = children.split(" ");

  const containerProps = triggerOnView
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once, amount: 0.5 },
      }
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
      };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      {...containerProps}
      aria-label={children}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-pre">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={`${wordIdx}-${charIdx}`}
              className="inline-block"
              variants={{
                hidden: {
                  y: "100%",
                  opacity: 0,
                  rotateX: -90,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: {
                    duration: charDuration,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              style={{ transformOrigin: "bottom" }}
            >
              {char}
            </motion.span>
          ))}
          {wordIdx < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
