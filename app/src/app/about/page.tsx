import {
  Leaf,
  Rocket,
  Code,
  Palette,
  Plus,
  Cog,
  Lock,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="reveal relative min-h-screen flex items-center justify-center pt-20 bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.08),transparent_40%)]">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">
            The{" "}
            <span className="text-gold" style={{ textShadow: "0 0 10px rgba(255, 215, 0, 0.3)" }}>
              Roots
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every garden begins with a single seed. At EdenCORP, we&apos;re
            building the future of campus technology — starting with PRISM.
          </p>
          <div className="mt-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gold/20 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000" />
              <div className="relative w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center bg-[#0A0A0A]">
                <Leaf className="w-10 h-10 text-gold animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Timeline */}
      <section className="reveal py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold mb-20 text-center">
            Origin Story <span className="text-gold">Timeline</span>
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

            <div className="space-y-24">
              {/* 2024 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 text-right order-2 md:order-1">
                  <div className="glass-panel p-8 rounded-xl hover:border-gold/40 transition-all duration-500">
                    <span className="text-gold font-display font-bold text-xl block mb-2">
                      2024
                    </span>
                    <h3 className="text-2xl font-bold mb-3">The Seed</h3>
                    <p className="text-slate-400 leading-relaxed">
                      EdenCORP founded with a mission to revolutionize campus
                      ecosystems through scalable, AI-driven infrastructure.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center order-1 md:order-2">
                  <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(255,215,0,0.15)] ring-4 ring-gold/20" />
                </div>
                <div className="w-full md:w-1/2 md:pl-16 hidden md:block order-3" />
              </div>

              {/* 2025 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 hidden md:block order-1" />
                <div className="relative z-10 flex items-center justify-center order-1 md:order-2">
                  <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(255,215,0,0.15)] ring-4 ring-gold/20" />
                </div>
                <div className="w-full md:w-1/2 md:pl-16 order-2 md:order-3">
                  <div className="glass-panel p-8 rounded-xl hover:border-gold/40 transition-all duration-500">
                    <span className="text-gold font-display font-bold text-xl block mb-2">
                      2025
                    </span>
                    <h3 className="text-2xl font-bold mb-3">PRISM Sprout</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Building and launching PRISM — a serverless, AI-powered
                      student success engine for higher education.
                    </p>
                  </div>
                </div>
              </div>

              {/* Future */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 text-right order-2 md:order-1">
                  <div className="glass-panel p-8 rounded-xl hover:border-gold/40 transition-all duration-500 border-dashed">
                    <span className="text-gold/50 font-display font-bold text-xl block mb-2">
                      Next
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-white/60">
                      The Canopy
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Expanding the ecosystem with new products and
                      partnerships. The orchard is just beginning to grow.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center order-1 md:order-2">
                  <div className="w-4 h-4 rounded-full bg-gold/30 ring-4 ring-gold/10" />
                </div>
                <div className="w-full md:w-1/2 md:pl-16 hidden md:block order-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="reveal py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Our <span className="text-gold">Soil</span>
            </h2>
            <p className="text-slate-400">
              The foundation of everything we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Cultivate",
                desc: "We focus on organic growth patterns, ensuring every implementation scales naturally within its environment.",
              },
              {
                icon: Cog,
                title: "Automate",
                desc: "Efficiency is the byproduct of well-designed systems. We strip away friction through intelligent automation.",
              },
              {
                icon: Lock,
                title: "Security",
                desc: "Your data is sacrosanct. Our infrastructure ensures complete data sovereignty and institutional compliance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-panel p-10 rounded-lg group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-8 border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="reveal py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-3 gap-12 md:gap-0">
              {[
                { value: "5K+", label: "CONCURRENT USERS TARGET" },
                { value: "95%", label: "PLACEMENT RATE GOAL" },
                { value: "0", label: "DOWNTIME TOLERANCE" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={i < 2 ? "md:border-r border-white/10" : ""}
                >
                  <div
                    className="font-display text-5xl md:text-6xl font-bold text-gold mb-2"
                    style={{ textShadow: "0 0 10px rgba(255, 215, 0, 0.3)" }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-slate-400 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="reveal py-24 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold mb-16 text-center">
            The <span className="text-gold">Gardeners</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                title: "Founder",
                role: "Vision & Strategy",
                dashed: false,
              },
              {
                icon: Code,
                title: "Engineering",
                role: "Infrastructure & AI",
                dashed: false,
              },
              {
                icon: Palette,
                title: "Design",
                role: "Experience & Interface",
                dashed: false,
              },
              {
                icon: Plus,
                title: "Join Us",
                role: "We're Growing",
                dashed: true,
              },
            ].map((member) => (
              <div
                key={member.title}
                className={`glass-panel p-6 rounded-lg text-center group ${
                  member.dashed
                    ? "border-dashed border-gold/20 hover:border-gold/40 transition-colors"
                    : ""
                }`}
              >
                <div
                  className={`w-32 h-32 mx-auto mb-6 rounded-full p-1 overflow-hidden relative transition-colors duration-500 ${
                    member.dashed
                      ? "border-2 border-dashed border-gold/20 group-hover:border-gold/50"
                      : "border-2 border-gold/30 group-hover:border-gold"
                  }`}
                >
                  <div
                    className={`w-full h-full rounded-full flex items-center justify-center ${
                      member.dashed ? "bg-gold/5" : "bg-gold/10"
                    }`}
                  >
                    <member.icon
                      className={`w-12 h-12 ${
                        member.dashed
                          ? "text-gold/50 group-hover:text-gold transition-colors"
                          : "text-gold"
                      }`}
                    />
                  </div>
                </div>
                <h5
                  className={`text-lg font-bold ${
                    member.dashed
                      ? "text-white/60 group-hover:text-white transition-colors"
                      : ""
                  }`}
                >
                  {member.title}
                </h5>
                <p
                  className={`text-sm font-medium mb-4 ${
                    member.dashed
                      ? "text-gold/50 group-hover:text-gold transition-colors"
                      : "text-gold"
                  }`}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
