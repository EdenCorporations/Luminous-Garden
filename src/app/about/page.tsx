"use client";

import Link from "next/link";
import {
  Rocket,
  Code,
  Palette,
  Plus,
  Cog,
  Lock,
  Zap,
} from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { TextScramble } from "@/components/TextScramble";
import { ParticleField } from "@/components/ParticleField";
import { MagneticButton } from "@/components/MagneticButton";
import { motion } from "motion/react";

const CAPABILITIES = [
  "AI Infrastructure",
  "Campus Automation",
  "Intelligent Tutoring",
  "Placement AI",
  "Data Sovereignty",
  "Auto-Scaling",
  "RAG Systems",
  "Career Mapping",
];

const TIMELINE = [
  {
    year: "2024",
    title: "Genesis",
    description:
      "EdenCORP founded with a singular mission — automate any industry through scalable, AI-driven infrastructure.",
    active: true,
  },
  {
    year: "2025",
    title: "First Apple",
    description:
      "PRISM launches — a serverless, AI-powered campus engine deployed across educational institutions.",
    active: true,
  },
  {
    year: "Next",
    title: "The Expansion",
    description:
      "New products across healthcare, logistics, finance, and beyond. Each one an apple of knowledge for its industry.",
    active: false,
  },
];

const PILLARS = [
  {
    icon: Zap,
    title: "Automate",
    desc: "Efficiency is the byproduct of well-designed systems. We strip away friction through intelligent automation.",
  },
  {
    icon: Cog,
    title: "Scale",
    desc: "Every solution is built for elastic growth — from one user to fifty thousand, without compromise.",
  },
  {
    icon: Lock,
    title: "Secure",
    desc: "Your data is sacrosanct. Complete data sovereignty, zero-trust architecture, and regulatory compliance.",
  },
];

const TEAM = [
  { icon: Rocket, title: "Founder", role: "Vision & Strategy", dashed: false },
  { icon: Code, title: "Engineering", role: "Infrastructure & AI", dashed: false },
  { icon: Palette, title: "Design", role: "Experience & Interface", dashed: false },
  { icon: Plus, title: "Join Us", role: "We're Growing", dashed: true },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Particle background */}
        <ParticleField
          particleCount={40}
          connectionDistance={100}
          className="opacity-40"
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200,75,49,0.05) 0%, transparent 70%)",
          }}
        />
        <Reveal className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-ember/40" />
            <TextScramble
              text="Our Story"
              className="font-mono text-xs text-ember tracking-[0.2em] uppercase"
              duration={800}
            />
            <span className="h-px w-10 bg-ember/40" />
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl italic tracking-tight mb-6 text-text leading-[0.95]">
            The <span className="text-ember">Genesis</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
            Every breakthrough begins at the origin. At EdenCORP, we build
            the intelligence that transforms industries.
          </p>
        </Reveal>
      </section>

      {/* Marquee */}
      <div className="w-full py-5 border-y border-border/50">
        <InfiniteMarquee items={CAPABILITIES} speed={20} reverse />
      </div>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl italic text-text">
              Origin Timeline
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical line — animated on scroll */}
            <motion.div
              className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="space-y-16">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.15}>
                  <div
                    className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                      } pl-16 md:pl-0`}
                    >
                      <div
                        className={`surface-card p-8 rounded-lg border ${
                          item.active
                            ? "border-border hover:border-ember/30"
                            : "border-border/50 border-dashed"
                        } transition-colors duration-300`}
                      >
                        <span
                          className={`font-display italic text-xl block mb-2 ${
                            item.active ? "text-ember" : "text-ember/40"
                          }`}
                        >
                          {item.year}
                        </span>
                        <h3
                          className={`text-xl font-display italic mb-3 ${
                            item.active ? "text-text" : "text-text-tertiary"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        className={`w-3 h-3 rounded-full ${
                          item.active ? "bg-ember" : "bg-border"
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: i * 0.2,
                        }}
                      />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="rule w-full max-w-5xl mx-auto" />

      {/* Pillars */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl italic text-text mb-3">
              Our Pillars
            </h2>
            <p className="text-text-secondary font-light">
              The foundation of everything we build.
            </p>
          </Reveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="surface-card p-8 rounded-lg border border-border group hover:border-ember/30 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-ember/10 flex items-center justify-center mb-6 border border-ember/20 group-hover:bg-ember/15 transition-colors">
                    <pillar.icon className="w-5 h-5 text-ember" />
                  </div>
                  <h4 className="text-xl font-display italic text-text mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <div className="rule w-full max-w-5xl mx-auto" />

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 md:gap-0">
            <div className="md:border-r border-border">
              <AnimatedCounter
                value={50000}
                suffix="+"
                label="Concurrent Connections Target"
              />
            </div>
            <div className="md:border-r border-border">
              <AnimatedCounter
                value={95}
                suffix="%"
                label="Automation Efficiency Goal"
              />
            </div>
            <div>
              <AnimatedCounter value={0} label="Downtime Tolerance" />
            </div>
          </div>
        </div>
      </section>

      <div className="rule w-full max-w-5xl mx-auto" />

      {/* Team */}
      <section className="py-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl italic text-text text-center">
              The Team
            </h2>
          </Reveal>
          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <StaggerItem key={member.title}>
                <div
                  className={`surface-card p-6 rounded-lg text-center group border ${
                    member.dashed
                      ? "border-dashed border-border hover:border-ember/40"
                      : "border-border hover:border-ember/30"
                  } transition-colors duration-300`}
                >
                  <div
                    className={`w-24 h-24 mx-auto mb-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      member.dashed
                        ? "border-2 border-dashed border-border group-hover:border-ember/40 bg-surface"
                        : "border border-ember/20 group-hover:border-ember/40 bg-ember/5"
                    }`}
                  >
                    <member.icon
                      className={`w-8 h-8 ${
                        member.dashed
                          ? "text-text-tertiary group-hover:text-ember transition-colors"
                          : "text-ember"
                      }`}
                    />
                  </div>
                  <h5
                    className={`text-lg font-display italic ${
                      member.dashed
                        ? "text-text-tertiary group-hover:text-text transition-colors"
                        : "text-text"
                    }`}
                  >
                    {member.title}
                  </h5>
                  <p
                    className={`text-xs font-mono tracking-wider uppercase mt-1 ${
                      member.dashed
                        ? "text-text-tertiary group-hover:text-ember transition-colors"
                        : "text-ember"
                    }`}
                  >
                    {member.role}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal className="py-16 pb-32 text-center">
        <div className="rule w-full max-w-md mx-auto mb-12" />
        <p className="text-text-secondary font-light text-lg mb-6">
          Want to be part of the origin story?
        </p>
        <MagneticButton strength={0.25}>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-ember/40 hover:border-ember hover:bg-ember/5 text-text rounded-sm transition-all duration-300 no-underline ember-glow"
          >
            <span className="font-body font-medium text-sm tracking-[0.1em] uppercase flex items-center gap-3">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ember group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </MagneticButton>
      </Reveal>
    </main>
  );
}
