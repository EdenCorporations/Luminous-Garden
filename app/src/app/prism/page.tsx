import Link from "next/link";
import { ArrowRight, TrendingUp, Terminal } from "lucide-react";

export default function PrismPage() {
  return (
    <main className="flex-grow pt-24 relative">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-electric-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="py-20 max-w-3xl reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold font-mono text-xs uppercase tracking-widest">
              Next-Gen Campus Ecosystem
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            PRISM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Deep Dive
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-body font-light max-w-2xl leading-relaxed">
            Transforming campus digital infrastructure into a scalable,
            AI-driven student success engine. Zero downtime. Intelligent
            tutoring. Gamified growth.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pb-32">
          {/* Left: Narrative Column */}
          <div className="lg:w-1/3 flex flex-col relative">
            {/* Vertical Timeline Track */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden lg:block ml-[19px]" />

            {/* Step 1 */}
            <div className="group reveal relative pl-0 lg:pl-16 py-12 lg:py-24 opacity-100 transition-opacity duration-500">
              <div className="hidden lg:flex absolute left-0 top-24 size-10 rounded-full border border-gold/30 bg-[#0A0A0A] items-center justify-center z-10 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                <div className="size-3 bg-gold rounded-full animate-pulse" />
              </div>
              <div className="glass-card p-8 rounded-xl border-l-4 border-l-gold lg:border-l lg:border-white/10 lg:group-hover:border-gold/50">
                <span className="font-mono text-gold text-xs mb-3 block">
                  01. ELASTIC INFRASTRUCTURE
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  The Serverless Pivot
                </h2>
                <p className="text-gray-400 font-body leading-relaxed mb-6">
                  Auto-scaling architecture that expands instantly — whether 1
                  student logs in or 5,000 simultaneously. No more crashing on
                  results day. Zero downtime, fast load times, always.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Auto-Scale", "Serverless", "Zero Downtime"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group reveal relative pl-0 lg:pl-16 py-12 lg:py-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="hidden lg:flex absolute left-0 top-24 size-10 rounded-full border border-white/10 bg-[#0A0A0A] items-center justify-center z-10 group-hover:border-gold/30 transition-colors">
                <div className="size-3 bg-white/20 rounded-full group-hover:bg-gold transition-colors" />
              </div>
              <div className="glass-card p-8 rounded-xl border-l-4 border-l-transparent lg:border-l lg:border-white/10 lg:group-hover:border-gold/50">
                <span className="font-mono text-white/50 text-xs mb-3 block group-hover:text-gold transition-colors">
                  02. AI ACADEMIC SUITE
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Grounded AI Tutoring
                </h2>
                <p className="text-gray-400 font-body leading-relaxed mb-6">
                  An AI tutor grounded in your college&apos;s own syllabus and
                  notes using RAG (Retrieval Augmented Generation). No
                  hallucinations — just curriculum. Plus &quot;Audio-Learn&quot;
                  converts PDFs into engaging audio discussions for revision on
                  the go.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-transparent to-gold/80" />
                  </div>
                  <span className="font-mono text-xs text-gold">
                    RAG-Powered
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group reveal relative pl-0 lg:pl-16 py-12 lg:py-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="hidden lg:flex absolute left-0 top-24 size-10 rounded-full border border-white/10 bg-[#0A0A0A] items-center justify-center z-10 group-hover:border-gold/30 transition-colors">
                <div className="size-3 bg-white/20 rounded-full group-hover:bg-gold transition-colors" />
              </div>
              <div className="glass-card p-8 rounded-xl border-l-4 border-l-transparent lg:border-l lg:border-white/10 lg:group-hover:border-gold/50">
                <span className="font-mono text-white/50 text-xs mb-3 block group-hover:text-gold transition-colors">
                  03. PLACEMENT ENGINE
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Roadmap to Hire
                </h2>
                <p className="text-gray-400 font-body leading-relaxed mb-6">
                  Students pick a target company. The Placement Research Agent
                  scans current requirements, interview patterns, and skills —
                  then generates a personalized career roadmap. Directly improves
                  placement statistics.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-wider hover:text-white transition-colors no-underline"
                >
                  Learn More{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Mockup Stage (Sticky) */}
          <div className="hidden lg:block lg:w-2/3 relative">
            <div className="sticky top-24 h-[calc(100vh-120px)] flex items-center justify-center">
              {/* Dashboard Mockup Container */}
              <div className="w-full h-full max-h-[700px] glass-panel rounded-xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
                {/* Window Controls */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                  <div className="size-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="size-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="size-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  <div className="ml-auto flex items-center gap-2">
                    <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-white/50">
                      PRISM_CAMPUS_V1.0 CONNECTED
                    </span>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-4 text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                >
                  {/* WIDGET 1: Terminal */}
                  <div className="col-span-4 row-span-6 bg-obsidian/80 rounded border border-gold/50 shadow-[0_0_20px_rgba(255,215,0,0.1)] flex flex-col relative overflow-hidden animate-pulse-glow">
                    <div className="absolute top-0 right-0 p-2 opacity-50">
                      <Terminal className="w-4 h-4 text-gold" />
                    </div>
                    <div className="p-3 border-b border-white/5 bg-white/5 flex justify-between items-center">
                      <h3 className="font-mono text-xs text-gold">
                        CAMPUS_LOG
                      </h3>
                      <span className="text-[10px] text-gray-400">LIVE</span>
                    </div>
                    <div className="p-4 font-mono text-[10px] text-gray-400 overflow-hidden leading-relaxed">
                      <div className="flex gap-2">
                        <span className="text-white/30">10:42:01</span>
                        <span className="text-green-400">
                          &gt;&gt; SCALE_EVENT
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/30">10:42:02</span>
                        <span>USERS: 1 → 5,000</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/30">10:42:03</span>
                        <span className="text-gold">
                          &gt;&gt; AUTO_SCALING [OK]
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/30">10:42:05</span>
                        <span>RESULTS_DAY LOAD PEAK</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/30">10:42:05</span>
                        <span className="text-green-400">
                          &gt;&gt; ZERO DOWNTIME
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/30">10:42:06</span>
                        <span className="text-gold">
                          &gt;&gt; AI_TUTOR ACTIVE
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/30">10:42:08</span>
                        <span>PLACEMENT_AGENT READY</span>
                      </div>
                      <div className="mt-2 p-2 bg-white/5 border border-white/5 rounded text-center text-white/60">
                        UPTIME: 100%
                      </div>
                    </div>
                    {/* Scanning line effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent h-[20%] w-full animate-[scan_3s_linear_infinite] pointer-events-none" />
                  </div>

                  {/* WIDGET 2: Graph */}
                  <div className="col-span-8 row-span-4 bg-obsidian/60 rounded border border-white/10 flex flex-col">
                    <div className="p-3 border-b border-white/5 flex justify-between items-center">
                      <h3 className="font-mono text-xs text-white/70">
                        STUDENT_ENGAGEMENT
                      </h3>
                      <div className="flex gap-2">
                        <span className="size-2 rounded-full bg-[#2D5BFF]" />
                        <span className="size-2 rounded-full bg-white/20" />
                      </div>
                    </div>
                    <div className="flex-1 relative p-4 flex items-end justify-between gap-1 overflow-hidden">
                      {[40, 55, 45, 60, 75, 65, 80, 70, 85, 95, 80, 90].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="w-[5%] rounded-sm"
                            style={{
                              height: `${h}%`,
                              backgroundColor: `rgba(45, 91, 255, ${0.2 + i * 0.06})`,
                              boxShadow:
                                i >= 8 ? "0 0 10px #2D5BFF" : undefined,
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* WIDGET 3: Placement Rate */}
                  <div className="col-span-5 row-span-2 bg-obsidian/60 rounded border border-white/10 flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="absolute top-2 left-3">
                      <h3 className="font-mono text-[10px] text-white/50 uppercase">
                        Placement Rate
                      </h3>
                    </div>
                    <div className="text-4xl font-bold text-white tracking-tighter">
                      +95%
                    </div>
                    <div className="text-xs text-green-400 font-mono mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      ENGAGED
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                      <div className="w-[75%] h-full bg-green-500" />
                    </div>
                  </div>

                  {/* WIDGET 4: Concurrent Users */}
                  <div className="col-span-3 row-span-2 bg-obsidian/60 rounded border border-white/10 flex flex-col p-3">
                    <h3 className="font-mono text-[10px] text-white/50 uppercase mb-2">
                      Concurrent Users
                    </h3>
                    <div className="flex-1 flex items-center justify-center relative">
                      <div className="size-16 rounded-full border-4 border-white/10 border-t-gold flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-white">
                          5K+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
