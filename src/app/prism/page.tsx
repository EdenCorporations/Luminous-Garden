"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";
import { LiveTerminal } from "@/components/LiveTerminal";
import { TextScramble } from "@/components/TextScramble";
import { MagneticButton } from "@/components/MagneticButton";

const TERMINAL_LINES = [
  { text: "prism init --campus production", type: "command" as const, delay: 400 },
  { text: "Connecting to PRISM infrastructure...", type: "info" as const, delay: 100 },
  { text: "✓ Serverless cluster initialized", type: "success" as const, delay: 300 },
  { text: "✓ Auto-scaling policy applied (1 → 5,000 users)", type: "success" as const, delay: 200 },
  { text: "prism deploy --ai-tutor --rag-engine", type: "command" as const, delay: 600 },
  { text: "Deploying AI Academic Suite...", type: "info" as const, delay: 100 },
  { text: "✓ RAG engine loaded (syllabus-grounded)", type: "success" as const, delay: 400 },
  { text: "✓ Audio-Learn module active", type: "success" as const, delay: 200 },
  { text: "✓ Placement Research Agent ready", type: "success" as const, delay: 200 },
  { text: "prism status --all", type: "command" as const, delay: 500 },
  { text: "UPTIME: 100% | LATENCY: 12ms | USERS: 4,892 active", type: "output" as const, delay: 100 },
  { text: "All systems operational.", type: "success" as const, delay: 200 },
];

function AnimatedBar({ width, delay, label, value }: { width: string; delay: number; label: string; value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-xs font-mono">
        <span className="text-text-secondary">{label}</span>
        <span className="text-ember">{value}</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-ember-dim to-ember rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

const FEATURES = [
  {
    number: "01",
    title: "Elastic Infrastructure",
    description:
      "Auto-scaling architecture that expands instantly — whether 1 student logs in or 5,000 simultaneously. Zero downtime, always.",
    tags: ["Auto-Scale", "Serverless", "Zero Downtime"],
  },
  {
    number: "02",
    title: "AI Academic Suite",
    description:
      "An AI tutor grounded in your college's own syllabus using RAG. No hallucinations — just curriculum. Plus Audio-Learn for revision on the go.",
    tags: ["RAG-Powered", "Syllabus-Grounded", "Audio-Learn"],
  },
  {
    number: "03",
    title: "Placement Engine",
    description:
      "Students pick a target company. The agent scans requirements, interview patterns, and skills — then generates a personalized career roadmap.",
    tags: ["Career AI", "Skill Mapping", "Interview Prep"],
  },
];

export default function PrismPage() {
  return (
    <main className="flex-1 pt-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal className="py-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ember/40" />
            <TextScramble
              text="The Apple of Education"
              className="text-ember font-mono text-xs uppercase tracking-[0.2em]"
              duration={800}
            />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display italic tracking-tight text-text mb-6 leading-[0.95]">
            PRISM
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Campus digital infrastructure transformed into a scalable,
            AI-driven student success engine.
          </p>
        </Reveal>

        <div className="rule w-full" />

        {/* Two-column: Features + Dashboard */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 py-20">
          {/* Left: Feature list */}
          <div className="lg:w-1/2 space-y-16">
            <StaggerReveal>
              {FEATURES.map((feature) => (
                <StaggerItem key={feature.number}>
                  <div className="group pb-16 border-b border-border/50 last:border-0">
                    <span className="text-xs font-mono text-ember/60 tracking-[0.2em] mb-3 block">
                      {feature.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display italic text-text mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-text-secondary font-light leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-sm bg-surface border border-border text-[10px] font-mono text-text-tertiary uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          {/* Right: Dashboard (sticky) */}
          <div className="lg:w-1/2 relative">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto space-y-6 no-scrollbar">
              {/* Live Terminal */}
              <LiveTerminal
                lines={TERMINAL_LINES}
                title="prism-campus-v1.0"
                typingSpeed={30}
              />

              {/* Metrics Panel */}
              <Reveal delay={0.3}>
                <div className="surface-card rounded-lg p-6 border border-border space-y-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-text-tertiary uppercase tracking-wider">
                      System Metrics
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      <span className="text-[10px] font-mono text-success">
                        LIVE
                      </span>
                    </div>
                  </div>
                  <AnimatedBar label="Uptime" value="100%" width="100%" delay={0.2} />
                  <AnimatedBar label="Student Engagement" value="94.7%" width="94.7%" delay={0.4} />
                  <AnimatedBar label="Placement Rate" value="89%" width="89%" delay={0.6} />
                  <AnimatedBar label="AI Tutor Accuracy" value="97.2%" width="97.2%" delay={0.8} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="rule w-full" />

        {/* CTA */}
        <Reveal className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display italic text-text mb-4">
            Ready to transform your campus?
          </h2>
          <p className="text-text-secondary font-light mb-8 max-w-md mx-auto">
            Every institution deserves intelligent infrastructure.
          </p>
          <MagneticButton strength={0.25}>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-ember/40 hover:border-ember hover:bg-ember/5 text-text rounded-sm transition-all duration-300 no-underline ember-glow"
            >
              <span className="font-body font-medium text-sm tracking-[0.1em] uppercase flex items-center gap-3">
                Get in Touch
                <ArrowRight className="w-4 h-4 text-ember group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </MagneticButton>
        </Reveal>
      </div>
    </main>
  );
}
