"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="reveal relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-void-gradient z-0" />
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />

      {/* Orb Simulation */}
      <div className="absolute z-10 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] pointer-events-none">
        <div className="orb-core w-full h-full animate-breathe" />
        <div className="absolute inset-0 animate-spin-slow opacity-50">
          <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] border border-gold/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] border border-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2 rotate-45" />
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_#FFD700]" />
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-amber rounded-full" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mt-20">
        {/* System Online Tag */}
        <div className="flex items-center gap-2 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          <span className="h-px w-8 bg-gold/50" />
          <span className="font-mono text-xs text-gold uppercase tracking-widest">
            System Online
          </span>
          <span className="h-px w-8 bg-gold/50" />
        </div>

        {/* Heading */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-[-0.04em] leading-none mb-6 text-white drop-shadow-2xl">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            the Garden
          </span>
        </h1>

        {/* Description */}
        <p className="font-body text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-10 font-light leading-relaxed">
          Automating every industry, one system at a time. We find the friction
          and engineer it away.
        </p>

        {/* CTA */}
        <Link
          href="/orchard"
          className="group relative flex items-center justify-center px-8 py-4 bg-transparent border border-gold/40 hover:border-gold text-white rounded overflow-hidden transition-all duration-300 shadow-glow-gold hover:shadow-[0_0_40px_-5px_rgba(255,215,0,0.3)] no-underline"
        >
          <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative font-display font-bold text-sm tracking-widest uppercase flex items-center gap-2">
            Enter Ecosystem
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[10px] tracking-widest uppercase">
          Scroll to Cultivate
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
