"use client";

import { Reveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function ProblemSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
      {/* Left: The Big Stat */}
      <Reveal className="order-2 md:order-1">
        <div className="relative flex flex-col items-center md:items-start">
          <span className="font-display text-[8rem] sm:text-[10rem] md:text-[12rem] leading-none tracking-tight text-text/5">
            40%
          </span>
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center">
            <AnimatedCounter
              value={40}
              suffix="%"
              duration={2.5}
              className="!text-left text-[8rem] sm:text-[10rem] md:text-[12rem] leading-none"
            />
          </div>
          <p className="font-mono text-xs text-text-tertiary uppercase tracking-[0.15em] mt-4 text-center md:text-left">
            Average annual resource loss across unoptimized industries
          </p>
        </div>
      </Reveal>

      {/* Right: Problem Statement */}
      <Reveal delay={0.15} className="order-1 md:order-2 flex flex-col justify-center">
        <div className="mb-8">
          <span className="inline-block font-mono text-xs text-ember tracking-[0.15em] uppercase mb-6">
            The Problem
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-[1.1] text-text">
            Inefficiency is the
            <br />
            <span className="italic text-ember">silent drain.</span>
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-lg">
            Legacy systems create compounding friction — tangled data flows,
            manual bottlenecks, wasted budgets. The cost isn&apos;t always
            visible, but it&apos;s always there.
          </p>
        </div>

        {/* Stat Card */}
        <div className="surface-card p-8 rounded-sm relative overflow-hidden">
          <h4 className="font-display text-3xl md:text-4xl text-text mb-2">
            Built to eliminate it.
          </h4>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            Every EdenCORP product is an apple of knowledge — a concentrated
            gift of intelligence designed to uproot inefficiency in a specific
            domain.
          </p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-border">
            <div className="h-full w-[60%] bg-gradient-to-r from-ember to-ember-glow" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
