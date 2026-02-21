"use client";

import * as React from "react";
import { motion } from "framer-motion";

/**
 * Animated EdenCORP logo for Next.js implementation.
 * Features:
 * - Decrypt/scramble text animation on load
 * - Rotating gradient SVG arcs
 * - Cycling gradient on text
 *
 * Colors adapted for EdenCORP brand:
 * - Primary: #FFD700 (gold)
 * - Secondary: #FFA500 (amber)
 * - Accent: #0A0A0A (void)
 */

interface AnimatedLogoProps {
  text?: string;
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  text = "EdenCORP",
  className = "",
}) => {
  const [displayText, setDisplayText] = React.useState("");
  const [isAnimating, setIsAnimating] = React.useState(true);

  React.useEffect(() => {
    let iteration = 0;
    const frameRate = 24;
    const speed = 0.5;
    let shouldAnimate = true;

    const interval = setInterval(() => {
      if (!shouldAnimate) return;

      setDisplayText(() => {
        const result = text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[
              Math.floor(Math.random() * 26)
            ];
          })
          .join("");

        iteration += speed;

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        return result;
      });
    }, 1000 / frameRate);

    return () => {
      shouldAnimate = false;
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 200 200"
          className="text-gold"
          style={{ overflow: "visible" }}
        >
          <style>
            {`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>

          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700">
                <animate
                  attributeName="stop-color"
                  values="#FFD700; #FFA500; #FFD700; #FFC107; #FFD700"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#FFA500">
                <animate
                  attributeName="stop-color"
                  values="#FFA500; #FFD700; #FFC107; #FFA500; #FFA500"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          {[
            { radius: 60, rotation: 0, duration: 30 },
            { radius: 70, rotation: 45, duration: 25 },
            { radius: 80, rotation: 90, duration: 20 },
            { radius: 90, rotation: 135, duration: 15 },
          ].map((arc, index) => (
            <path
              key={index}
              d={`M ${100 - arc.radius} 100 a ${arc.radius} ${arc.radius} 0 0 1 ${arc.radius * 2} 0`}
              stroke="url(#logoGradient)"
              strokeWidth="2"
              fill="none"
              style={{
                transformOrigin: "100px 100px",
                transform: `rotate(${arc.rotation}deg)`,
                animation: `spin ${arc.duration}s infinite linear`,
              }}
            />
          ))}

          <circle
            cx="100"
            cy="100"
            r="35"
            fill="url(#logoGradient)"
            opacity="0.2"
          />
        </svg>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-2xl font-bold tracking-tight font-display">
          <span
            className="bg-gradient-to-r from-gold via-amber to-gold bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient 8s ease infinite",
            }}
          >
            {isAnimating ? displayText : text}
          </span>
        </h1>
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
