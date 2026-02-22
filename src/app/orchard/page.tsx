"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  GitBranch,
  Sun,
  Shield,
  Network,
  CircleDashed,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ScrollReveal";
import { AppleGrid } from "@/components/AppleGrid";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { TextScramble } from "@/components/TextScramble";
import { MagneticButton } from "@/components/MagneticButton";

const categories = [
  "All Products",
  "AI Suite",
  "Workflow",
  "Infrastructure",
  "Security",
  "Analytics",
];

const products = [
  { id: "prism", label: "PRISM", subtitle: "The Apple of Education", desc: "Next-gen campus ecosystem. AI-driven student success engine with elastic serverless infrastructure, intelligent tutoring, and placement intelligence.", category: "AI Suite", status: "live" as const, icon: GraduationCap, flagship: true },
  { id: "nexus", label: "NEXUS", subtitle: "The Apple of Logistics", desc: "Supply chain & logistics automation — route optimization, warehouse intelligence, and predictive demand analysis.", category: "Workflow", status: "dev" as const, icon: GitBranch, flagship: false },
  { id: "solace", label: "SOLACE", subtitle: "The Apple of Healthcare", desc: "Healthcare workflow optimization — patient flow management, diagnostic assistance, and compliance automation.", category: "Workflow", status: "dev" as const, icon: Sun, flagship: false },
  { id: "aegis", label: "AEGIS", subtitle: "The Apple of Security", desc: "Enterprise security intelligence — threat detection, access governance, and automated incident response.", category: "Security", status: "dev" as const, icon: Shield, flagship: false },
  { id: "mesh", label: "MESH", subtitle: "The Apple of Integration", desc: "Multi-system integration fabric — unified APIs, data transformation, and cross-platform orchestration.", category: "Infrastructure", status: "dev" as const, icon: Network, flagship: false },
  { id: "pulse", label: "PULSE", subtitle: "The Apple of Analytics", desc: "Real-time analytics & monitoring — live dashboards, anomaly detection, and predictive insights.", category: "Analytics", status: "dev" as const, icon: CircleDashed, flagship: false },
];

const INDUSTRIES = [
  "Education",
  "Healthcare",
  "Logistics",
  "Finance",
  "Security",
  "Analytics",
  "Manufacturing",
  "Government",
];

export default function OrchardPage() {
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeFilter === "All Products" || p.category === activeFilter;
    const matchesSearch = searchQuery === "" || p.label.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const flagshipProduct = filtered.find((p) => p.flagship);
  const otherProducts = filtered.filter((p) => !p.flagship);

  // Convert filtered non-flagship products to AppleGrid format
  const appleItems = otherProducts.map((p) => ({
    title: p.label,
    subtitle: p.subtitle,
    description: p.desc,
    status: p.status === "live" ? ("live" as const) : ("coming-soon" as const),
  }));

  return (
    <>
      <div className="h-20" />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <Reveal className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-4">
                <TextScramble
                  text="Product Suite"
                  className="font-mono text-xs text-ember tracking-[0.15em] uppercase"
                  duration={800}
                />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text mb-4 tracking-tight leading-[0.95]">
                The Orchard
              </h1>
              <p className="text-text-secondary text-lg md:text-xl font-light max-w-xl">
                Each product is an apple of knowledge — a concentrated gift of
                intelligence for a specific industry.
              </p>
            </div>
            {/* Search */}
            <div className="relative group w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary group-focus-within:text-ember transition-colors" />
              <input
                className="w-full bg-surface border border-border rounded-sm py-2.5 pl-10 pr-4 text-sm text-text focus:outline-none focus:border-ember/50 transition-all font-mono placeholder:text-text-tertiary"
                placeholder="Search products..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </Reveal>

        {/* Marquee */}
        <div className="mb-12 py-4 border-y border-border/30">
          <InfiniteMarquee items={INDUSTRIES} speed={20} separator="◆" />
        </div>

        {/* Filter Bar */}
        <Reveal delay={0.1} className="mb-12">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-6 py-2 rounded-sm text-sm font-body font-medium tracking-wide transition-all whitespace-nowrap border ${
                  activeFilter === cat
                    ? "bg-ember text-void border-ember font-semibold"
                    : "bg-transparent text-text-secondary border-border hover:border-ember/40 hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Flagship Card — PRISM */}
        <AnimatePresence mode="popLayout">
          {flagshipProduct && (
            <motion.div
              key="flagship"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <Link href="/prism" className="no-underline block">
                <article className="group relative surface-card rounded-lg overflow-hidden border border-border hover:border-ember/40 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Visual */}
                    <div className="md:w-2/5 relative flex items-center justify-center p-12 md:p-16">
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,75,49,0.06) 0%, transparent 70%)",
                        }}
                      />
                      <motion.div
                        className="relative w-32 h-32 md:w-40 md:h-40"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 60,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="absolute inset-0 rounded-full border border-ember/20 group-hover:border-ember/40 transition-colors" />
                        <div className="absolute inset-4 rounded-full border border-border group-hover:border-ember/20 transition-colors" />
                        <div className="absolute inset-8 rounded-full border border-border/50" />
                        {/* Orbiting dot */}
                        <motion.div
                          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-ember"
                          style={{ filter: "blur(0.5px)" }}
                        />
                      </motion.div>
                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-3 rounded-lg bg-ember/10 border border-ember/20 text-ember">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center md:border-l border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs text-ember/60 tracking-[0.2em] uppercase">
                          {flagshipProduct.subtitle}
                        </span>
                        <span className="font-mono text-[10px] text-ember border border-ember/30 px-2 py-0.5 rounded-sm bg-ember/5">
                          FLAGSHIP
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display italic text-text mb-3 group-hover:text-ember transition-colors">
                        {flagshipProduct.label}
                      </h2>
                      <p className="text-text-secondary font-light leading-relaxed mb-6 max-w-lg">
                        {flagshipProduct.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-success" />
                          <span className="text-xs font-mono text-text-tertiary uppercase tracking-wider">
                            Live
                          </span>
                        </div>
                        <span className="flex items-center gap-2 text-sm font-medium text-text-secondary group-hover:text-ember transition-colors">
                          Deep Dive
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Apple Grid — Other products */}
        <AnimatePresence mode="popLayout">
          {appleItems.length > 0 ? (
            <motion.div
              key="grid"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AppleGrid items={appleItems} />
            </motion.div>
          ) : filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-text-tertiary font-mono text-sm">
                No products match your search.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Bottom CTA */}
        <Reveal className="mt-20 mb-8 text-center">
          <div className="rule w-full max-w-md mx-auto mb-12" />
          <p className="text-text-secondary font-light text-lg mb-6">
            Have an industry that needs intelligence?
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
      </main>
    </>
  );
}
