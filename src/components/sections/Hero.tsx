"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ParticleField } from "@/components/ParticleField";
import { TextScramble } from "@/components/TextScramble";
import { MagneticButton } from "@/components/MagneticButton";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Interactive particle network */}
      <ParticleField
        particleCount={70}
        connectionDistance={130}
        className="opacity-60"
      />

      {/* Subtle radial ember glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,75,49,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Ember Sphere */}
      <motion.div
        variants={scaleFade}
        initial="hidden"
        animate="visible"
        className="absolute z-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(200,75,49,0.18) 0%, rgba(139,52,34,0.06) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl"
      >
        {/* Mono Tag */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-ember/40" />
          <TextScramble
            text="The Origin of Intelligence"
            className="font-mono text-xs text-ember tracking-[0.2em] uppercase"
            duration={1000}
            delay={600}
            triggerOnView={false}
          />
          <span className="h-px w-10 bg-ember/40" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-7xl md:text-[6.5rem] leading-[0.95] tracking-tight mb-8 text-text"
        >
          Where intelligence
          <br />
          <span className="italic text-ember">begins.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="font-body text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          AI-powered automation infrastructure that transforms how industries
          operate.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <MagneticButton strength={0.25}>
            <Link
              href="/orchard"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-ember/40 hover:border-ember hover:bg-ember/5 text-text rounded-sm transition-all duration-300 no-underline ember-glow"
            >
              <span className="font-body font-medium text-sm tracking-[0.1em] uppercase flex items-center gap-3">
                Explore the Orchard
                <ArrowRight className="w-4 h-4 text-ember group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
