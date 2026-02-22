"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Full-screen preloader — "EdenCORP" logo appears center-screen then
 * flies to the exact navbar logo position, creating the illusion of a
 * single logo sliding into place.
 *
 * The logo is exactly 2× the navbar logo dimensions. A DOM measurement
 * at t=1.4s (after the entrance animation settles) computes the pixel-
 * perfect translation and scale factor.
 *
 * When the overlay exits, a matched linear cross-fade ensures the
 * preloader logo (fading out) and navbar logo (fading in) maintain a
 * constant combined opacity of 1.0, making the handoff invisible:
 *   preloader opacity  =  1 − t/d
 *   content opacity    =  t/d
 *   combined at logo   =  1.0   (for all t)
 */

const LOAD_DURATION = 1400; // ms — logo on screen before flying
const FLY_DURATION = 950; // ms — logo flight to navbar
const CROSS_FADE = 0.5; // s — overlay exit + content reveal (linear)
const SCROLL_UNLOCK_BUFFER = 100; // ms after cross-fade before scroll

export function Preloader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"loading" | "transitioning" | "done">(
    "loading",
  );
  const logoRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<{
    x: number;
    y: number;
    scale: number;
  } | null>(null);

  useEffect(() => {
    // Hard scroll lock on both html and body
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    /* ---- Phase 1→2: measure navbar position, then fly ---- */
    const t1 = setTimeout(() => {
      // Measure AFTER entrance animation has fully settled
      const navLogo = document.querySelector("[data-nav-logo]");
      const preLogo = logoRef.current;
      if (navLogo && preLogo) {
        const nr = navLogo.getBoundingClientRect();
        // Preloader logo is centered, so its center = viewport center
        setTarget({
          x: nr.left + nr.width / 2 - window.innerWidth / 2,
          y: nr.top + nr.height / 2 - window.innerHeight / 2,
          scale: nr.width / preLogo.offsetWidth,
        });
      }
      setPhase("transitioning");
    }, LOAD_DURATION);

    /* ---- Phase 2→3: done, begin cross-fade ---- */
    const t2 = setTimeout(() => {
      setPhase("done");
    }, LOAD_DURATION + FLY_DURATION);

    /* ---- Unlock scroll after cross-fade completes ---- */
    const t3 = setTimeout(() => {
      html.style.overflow = "";
      body.style.overflow = "";
    }, LOAD_DURATION + FLY_DURATION + CROSS_FADE * 1000 + SCROLL_UNLOCK_BUFFER);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
            exit={{ opacity: 0 }}
            transition={{ duration: CROSS_FADE, ease: "linear" }}
          >
            {/* Ambient ember glow */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 360,
                height: 360,
                background:
                  "radial-gradient(circle, rgba(200,75,49,0.08) 0%, rgba(200,75,49,0.015) 50%, transparent 70%)",
                filter: "blur(60px)",
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={
                phase === "loading"
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.6 }
              }
              transition={{
                duration: phase === "loading" ? 1 : 0.6,
                ease: "easeOut",
              }}
            />

            {/* Logo — 2× navbar size, flies to measured position */}
            <motion.div
              ref={logoRef}
              className="flex items-baseline gap-1 relative z-10"
              initial={{ opacity: 0, y: 12 }}
              animate={
                phase === "loading"
                  ? { opacity: 1, scale: 1, x: 0, y: 0 }
                  : target
                    ? {
                        opacity: 1,
                        scale: target.scale,
                        x: target.x,
                        y: target.y,
                      }
                    : { opacity: 1, scale: 1, x: 0, y: 0 }
              }
              transition={
                phase === "loading"
                  ? { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                  : {
                      duration: FLY_DURATION / 1000,
                      ease: [0.62, 0.05, 0.18, 1], // smooth deceleration
                    }
              }
            >
              <motion.span
                className="font-display text-5xl text-text tracking-tight italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Eden
              </motion.span>
              <motion.span
                className="font-body font-semibold text-[1.75rem] tracking-[0.15em] uppercase text-text-secondary"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                CORP
              </motion.span>
            </motion.div>

            {/* Ember sweep line */}
            <motion.div
              className="absolute left-0 right-0 flex justify-center h-px"
              style={{ top: "54%" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-ember/40 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={
                  phase === "loading"
                    ? { width: "28%", opacity: 1 }
                    : { width: "100vw", opacity: 0 }
                }
                transition={
                  phase === "loading"
                    ? {
                        duration: 1,
                        delay: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }
                    : { duration: 0.45, ease: "easeIn" }
                }
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content mounts only after preloader completes so downstream animations are blocked until then */}
      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            key="app-content"
            className="flex-1 flex flex-col min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: CROSS_FADE, ease: "linear" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
