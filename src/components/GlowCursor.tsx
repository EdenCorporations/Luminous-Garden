"use client";

import { useEffect, useRef } from "react";

interface GlowCursorProps {
  /** Color in CSS format. Default ember */
  color?: string;
  /** Size of the glow in pixels */
  size?: number;
  /** Opacity of the glow (0-1) */
  opacity?: number;
}

export function GlowCursor({
  color = "200, 75, 49",
  size = 400,
  opacity = 0.07,
}: GlowCursorProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef<number>(0);
  const currentRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      posRef.current = { x: -1000, y: -1000 };
    };

    // Smooth lerp loop — no React re-renders
    const loop = () => {
      const target = posRef.current;
      const current = currentRef.current;

      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      glow.style.transform = `translate(${current.x - size / 2}px, ${current.y - size / 2}px)`;

      // Fade in/out based on whether mouse is on page
      const isVisible = target.x > -500;
      glow.style.opacity = isVisible ? String(opacity) : "0";

      frameRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    frameRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [size, opacity]);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-40"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(${color}, 0.5) 0%, rgba(${color}, 0.15) 30%, transparent 70%)`,
        opacity: 0,
        transition: "opacity 0.3s ease",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
