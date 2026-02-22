"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";
import { ParticleField } from "@/components/ParticleField";
import { MagneticButton } from "@/components/MagneticButton";

export default function ContactPage() {
  const [budget, setBudget] = useState(50);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    message: "",
  });

  const budgetDisplay = budget >= 500 ? `$${budget}k+` : `$${budget}k`;
  const budgetPercent = ((budget - 10) / (500 - 10)) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          organization: formData.org,
          budget: budgetDisplay,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="flex-1 flex items-center justify-center relative pt-28 pb-20 px-4 overflow-hidden">
      {/* Interactive particle background */}
      <ParticleField
        particleCount={40}
        connectionDistance={100}
        className="opacity-30"
      />

      {/* Subtle ember glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 40%, rgba(200,75,49,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-[580px] z-10">
        {/* Header */}
        <Reveal className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember/40" />
            <TextScramble
              text="Get in Touch"
              className="font-mono text-xs text-ember tracking-[0.2em] uppercase"
              duration={800}
            />
            <span className="h-px w-10 bg-ember/40" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl italic text-text mb-3 tracking-tight">
            Start a Conversation
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto font-light">
            Tell us about your project. We&apos;ll architect the right solution.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.15}>
          <div className="surface-card rounded-lg p-8 md:p-10 border border-border relative overflow-hidden">
            <form className="space-y-7" onSubmit={handleSubmit}>
              {/* Name + Org */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="group/input relative">
                  <label
                    className="block text-xs font-mono text-text-tertiary mb-2 uppercase tracking-wider group-focus-within/input:text-ember transition-colors"
                    htmlFor="identity"
                  >
                    Name
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-border text-text font-body placeholder-text-tertiary py-2 focus:outline-none focus:border-ember transition-all duration-300"
                    id="identity"
                    placeholder="Your name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                </div>
                <div className="group/input relative">
                  <label
                    className="block text-xs font-mono text-text-tertiary mb-2 uppercase tracking-wider group-focus-within/input:text-ember transition-colors"
                    htmlFor="org"
                  >
                    Organization
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-border text-text font-body placeholder-text-tertiary py-2 focus:outline-none focus:border-ember transition-all duration-300"
                    id="org"
                    placeholder="Company or institution"
                    type="text"
                    value={formData.org}
                    onChange={(e) => updateField("org", e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group/input relative">
                <label
                  className="block text-xs font-mono text-text-tertiary mb-2 uppercase tracking-wider group-focus-within/input:text-ember transition-colors"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full bg-transparent border-b border-border text-text font-body placeholder-text-tertiary py-2 focus:outline-none focus:border-ember transition-all duration-300"
                  id="email"
                  placeholder="you@company.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>

              {/* Budget Slider */}
              <div className="pt-2 pb-1">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-mono text-text-tertiary uppercase tracking-wider">
                    Budget
                  </label>
                  <div className="text-ember font-display italic text-xl">
                    {budgetDisplay}
                  </div>
                </div>
                <div className="relative w-full h-6 flex items-center">
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-ember to-ember-glow rounded-l-sm pointer-events-none"
                    style={{ width: `${budgetPercent}%` }}
                  />
                  <input
                    className="w-full z-10"
                    max={500}
                    min={10}
                    step={10}
                    type="range"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-mono text-text-tertiary">
                  <span>$10k</span>
                  <span>$250k</span>
                  <span>$500k+</span>
                </div>
              </div>

              {/* Message */}
              <div className="group/input relative">
                <label
                  className="block text-xs font-mono text-text-tertiary mb-2 uppercase tracking-wider group-focus-within/input:text-ember transition-colors"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-border text-text font-body placeholder-text-tertiary py-2 focus:outline-none focus:border-ember transition-all duration-300 resize-none"
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                />
              </div>

              {/* Submit */}
              <div className="pt-3">
                <AnimatePresence mode="wait">
                  {status === "sent" ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full h-12 border border-success/30 bg-success/5 rounded-sm flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-success font-mono text-sm tracking-wider uppercase">
                        Message Sent
                      </span>
                    </motion.div>
                  ) : status === "error" ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      <div className="w-full h-12 border border-error/30 bg-error/5 rounded-sm flex items-center justify-center gap-2">
                        <AlertCircle className="w-4 h-4 text-error" />
                        <span className="text-error font-mono text-sm tracking-wider uppercase">
                          Failed to Send
                        </span>
                      </div>
                      <button
                        className="w-full text-center text-xs text-ember font-mono hover:text-text transition-colors"
                        type="button"
                        onClick={() => setStatus("idle")}
                      >
                        Try Again
                      </button>
                    </motion.div>
                  ) : (
                    <MagneticButton strength={0.15} className="w-full">
                    <motion.button
                      key="submit"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="group relative w-full h-12 bg-ember hover:bg-ember-glow text-void font-body font-medium text-sm uppercase tracking-[0.1em] rounded-sm flex items-center justify-center overflow-hidden transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </motion.button>
                    </MagneticButton>
                  )}
                </AnimatePresence>
                <p className="text-center mt-4 text-[10px] text-text-tertiary font-mono tracking-wider">
                  founder@edencorp.org
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
