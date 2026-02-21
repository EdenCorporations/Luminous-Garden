"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Cpu,
  ArrowRight,
  GitBranch,
  Sun,
  Shield,
  Network,
  CircleDashed,
  Search,
  Clock,
} from "lucide-react";

const categories = [
  "All Products",
  "AI Suite",
  "Workflow",
  "Infrastructure",
  "Security",
  "Analytics",
];

export default function OrchardPage() {
  const [activeFilter, setActiveFilter] = useState("All Products");

  return (
    <>
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber/10 blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Nav Spacer */}
      <div className="h-24" />

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <section className="reveal mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight leading-none">
                The Orchard
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light max-w-xl">
                Our suite of AI-driven automation solutions. Browse the catalog —
                starting with PRISM, our flagship campus intelligence engine.
              </p>
            </div>
            {/* Search */}
            <div className="relative group w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-gold transition-colors" />
              <input
                className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all font-mono placeholder:text-white/20"
                placeholder="Search products..."
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="reveal mb-12">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-display font-medium tracking-wide transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-white text-black font-bold border border-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    : "glass-panel text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: PRISM — Flagship LIVE */}
          <Link href="/prism" className="no-underline">
            <article className="group relative h-[400px] flex flex-col glass-panel rounded-sm transition-all duration-500 hover:border-gold/50 hover:bg-obsidian/80 hover:shadow-glow overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-gold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs text-gold/80 border border-gold/30 px-2 py-1 rounded bg-gold/5">
                    FLAGSHIP
                  </div>
                </div>
                {/* Visual */}
                <div className="flex-grow flex items-center justify-center relative py-4">
                  <div className="w-32 h-32 relative">
                    <div
                      className="absolute inset-0 border border-gold/30 rounded-full animate-spin-slow group-hover:border-gold/60 transition-colors"
                      style={{ borderStyle: "dashed" }}
                    />
                    <div
                      className="absolute inset-4 border border-white/20 rounded-full animate-spin-reverse-slow group-hover:border-white/40 transition-colors"
                      style={{
                        animationDuration: "20s",
                        borderWidth: "1px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    PRISM
                  </h3>
                  <p className="text-sm text-gray-400 font-body leading-relaxed mb-4 line-clamp-2">
                    Next-gen campus ecosystem. AI-driven student success
                    engine with elastic serverless infrastructure, intelligent
                    tutoring, and placement intelligence.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">
                        Status
                      </span>
                      <span className="text-xs text-white font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        LIVE
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-gold transition-colors group-hover:translate-x-1 duration-300">
                      Deep Dive
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* Coming Soon Cards */}
          {[
            { icon: GitBranch, label: "NEXUS", desc: "Supply chain & logistics automation" },
            { icon: Sun, label: "SOLACE", desc: "Healthcare workflow optimization" },
            { icon: Shield, label: "AEGIS", desc: "Enterprise security intelligence" },
            { icon: Network, label: "MESH", desc: "Multi-system integration fabric" },
            { icon: CircleDashed, label: "PULSE", desc: "Real-time analytics & monitoring" },
          ].map((item, i) => (
            <article
              key={i}
              className="group relative h-[400px] flex flex-col glass-panel rounded-sm transition-all duration-500 overflow-hidden cursor-default opacity-50"
            >
              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-white/30">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs text-white/30 border border-white/10 px-2 py-1 rounded bg-white/5">
                    COMING SOON
                  </div>
                </div>
                <div className="flex-grow flex items-center justify-center relative py-4">
                  <div className="w-32 h-32 relative flex items-center justify-center opacity-30">
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-2 rounded-full border border-white/5" />
                    <div className="w-16 h-16 rounded-full bg-white/5 blur-md" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-display font-bold text-white/40 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-white/20 font-body leading-relaxed mb-4 line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-white/20 font-mono">
                        Status
                      </span>
                      <span className="text-xs text-white/30 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        IN DEVELOPMENT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Pagination / Load More */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-2 px-8 py-3 bg-transparent border border-white/20 text-white/40 font-display font-bold text-sm tracking-wider uppercase rounded-sm cursor-default">
            <Clock className="w-4 h-4" />
            More Products Coming Soon
          </button>
        </div>
      </main>
    </>
  );
}
