"use client";

import { useState, useRef } from "react";
import { ArrowRight, Fingerprint, Building, AtSign, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [budget, setBudget] = useState(50);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const budgetDisplay = budget >= 500 ? `$${budget}k+` : `$${budget}k`;
  const budgetPercent = ((budget - 10) / (500 - 10)) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex-grow flex items-center justify-center relative pt-28 pb-20 px-4 overflow-hidden">
      {/* Ambient Background Effects */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 top-0 left-1/4 -translate-x-1/2 -translate-y-1/4"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, rgba(10, 10, 10, 0) 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 bottom-0 right-1/4 translate-x-1/2 translate-y-1/4 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, rgba(10, 10, 10, 0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* The Gateway Container */}
      <div className="relative w-full max-w-[600px] z-10">
        {/* Header Text */}
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            SECURE CONNECTION ESTABLISHED
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">
            Initialize Gateway
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Calibrate your requirements below. Our architects will construct
            your ecosystem.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-panel rounded-sm p-8 md:p-10 shadow-glow relative overflow-hidden group reveal">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/50" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/50" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/50" />

          <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
            {/* Identity Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group/input relative">
                <label
                  className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider group-focus-within/input:text-gold transition-colors"
                  htmlFor="identity"
                >
                  Identity // Name
                </label>
                <input
                  className="w-full bg-transparent border-b border-slate-700 text-white font-mono placeholder-slate-700 py-2 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all duration-300"
                  id="identity"
                  name="from_name"
                  placeholder="Enter identification"
                  type="text"
                  required
                />
                <Fingerprint className="absolute right-0 bottom-2 w-4 h-4 text-slate-700 group-focus-within/input:text-gold transition-colors" />
              </div>
              <div className="group/input relative">
                <label
                  className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider group-focus-within/input:text-gold transition-colors"
                  htmlFor="org"
                >
                  Organization
                </label>
                <input
                  className="w-full bg-transparent border-b border-slate-700 text-white font-mono placeholder-slate-700 py-2 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all duration-300"
                  id="org"
                  name="organization"
                  placeholder="Entity name"
                  type="text"
                />
                <Building className="absolute right-0 bottom-2 w-4 h-4 text-slate-700 group-focus-within/input:text-gold transition-colors" />
              </div>
            </div>

            {/* Signal Frequency */}
            <div className="group/input relative">
              <label
                className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider group-focus-within/input:text-gold transition-colors"
                htmlFor="email"
              >
                Signal Frequency // Email
              </label>
              <input
                className="w-full bg-transparent border-b border-slate-700 text-white font-mono placeholder-slate-700 py-2 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all duration-300"
                id="email"
                name="reply_to"
                placeholder="user@domain.com"
                type="email"
                required
              />
              <AtSign className="absolute right-0 bottom-2 w-4 h-4 text-slate-700 group-focus-within/input:text-gold transition-colors" />
            </div>

            {/* Budget Calibration Slider */}
            <div className="pt-4 pb-2">
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Resource Allocation
                </label>
                <div className="text-gold font-mono text-xl font-bold tracking-tight">
                  {budgetDisplay}
                </div>
              </div>
              <div className="relative w-full h-6 flex items-center">
                {/* Fill Bar */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-gold to-amber rounded-l-sm pointer-events-none"
                  style={{ width: `${budgetPercent}%` }}
                />
                <input
                  className="w-full z-10"
                  name="budget"
                  max={500}
                  min={10}
                  step={10}
                  type="range"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-600 uppercase">
                <span>$10k</span>
                <span>$250k</span>
                <span>$500k+</span>
              </div>
            </div>

            {/* Hidden budget display value for EmailJS template */}
            <input type="hidden" name="budget_display" value={budgetDisplay} />

            {/* Transmission Data */}
            <div className="group/input relative">
              <label
                className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider group-focus-within/input:text-gold transition-colors"
                htmlFor="message"
              >
                Transmission Data // Message
              </label>
              <textarea
                className="w-full bg-transparent border-b border-slate-700 text-white font-mono placeholder-slate-700 py-2 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all duration-300 resize-none"
                id="message"
                name="message"
                placeholder="Describe ecosystem requirements..."
                rows={3}
                required
              />
            </div>

            {/* Action */}
            <div className="pt-4">
              {status === "sent" ? (
                <div className="w-full h-12 border border-green-500/30 bg-green-500/10 rounded-sm flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-mono text-sm font-bold uppercase tracking-wider">
                    Transmission Complete
                  </span>
                </div>
              ) : status === "error" ? (
                <div>
                  <div className="w-full h-12 border border-red-500/30 bg-red-500/10 rounded-sm flex items-center justify-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-mono text-sm font-bold uppercase tracking-wider">
                      Transmission Failed
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="w-full text-center text-xs font-mono text-slate-500 hover:text-gold transition-colors"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <button
                  className="group relative w-full h-12 bg-gold hover:bg-[#ffe033] text-black font-display font-bold text-sm uppercase tracking-[0.05em] rounded-sm flex items-center justify-center overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status === "sending"}
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Initiate Sequence
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
              )}
              <p className="text-center mt-4 text-[10px] text-slate-600 font-mono">
                DIRECT LINE: FOUNDER@EDENCORP.ORG // DATA SECURE
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Background Grid Decoration */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </main>
  );
}
