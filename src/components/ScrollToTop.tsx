"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating scroll-to-top button. Appears after scrolling 400px.
 * Ember-glowing circle with spring animation.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-surface border border-border hover:border-ember/50 flex items-center justify-center text-text-secondary hover:text-ember transition-colors duration-200 cursor-pointer shadow-lg"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={
        visible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.5, y: 20 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onClick={scrollUp}
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(200,75,49,0.15)" }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to top"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ArrowUp className="w-4 h-4" />
    </motion.button>
  );
}
