"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  /** Duration in ms for the full scramble-to-reveal */
  duration?: number;
  /** Delay before starting in ms */
  delay?: number;
  /** Trigger on scroll into view */
  triggerOnView?: boolean;
  /** Play once or every time it enters view */
  once?: boolean;
  /** HTML tag to render */
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
}

export function TextScramble({
  text,
  className = "",
  duration = 1200,
  delay = 0,
  triggerOnView = true,
  once = true,
  as: Tag = "span",
}: TextScrambleProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const [displayText, setDisplayText] = useState("");
  const hasPlayed = useRef(false);

  const scramble = useCallback(() => {
    const length = text.length;
    const steps = 20; // number of scramble iterations
    const revealInterval = duration / length;
    let revealed = 0;
    let step = 0;

    const interval = setInterval(() => {
      step++;

      // Gradually reveal characters left to right
      const charsToReveal = Math.floor((step / steps) * length);
      if (charsToReveal > revealed) {
        revealed = charsToReveal;
      }

      let result = "";
      for (let i = 0; i < length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < revealed) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(result);

      if (revealed >= length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, revealInterval);

    return () => clearInterval(interval);
  }, [text, duration]);

  useEffect(() => {
    // Initialize with scrambled text
    setDisplayText(
      text
        .split("")
        .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join("")
    );
  }, [text]);

  useEffect(() => {
    if (!triggerOnView) {
      const timer = setTimeout(scramble, delay);
      return () => clearTimeout(timer);
    }

    if (isInView && !hasPlayed.current) {
      hasPlayed.current = true;
      const timer = setTimeout(scramble, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, triggerOnView, delay, scramble]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLSpanElement & HTMLHeadingElement & HTMLParagraphElement & HTMLDivElement>}
      className={`${className}`}
      aria-label={text}
    >
      {displayText}
    </Tag>
  );
}
