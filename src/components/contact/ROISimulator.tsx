"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Clock3, Coins, TrendingUp } from "lucide-react";

const INDUSTRY_ASSUMPTIONS = {
  education: { label: "Education", hoursPerUnit: 4.2, gainPerHour: 22, valuePerUnit: 180 },
  logistics: { label: "Logistics", hoursPerUnit: 3.8, gainPerHour: 28, valuePerUnit: 210 },
  healthcare: { label: "Healthcare", hoursPerUnit: 5.1, gainPerHour: 34, valuePerUnit: 260 },
  finance: { label: "Finance", hoursPerUnit: 3.4, gainPerHour: 39, valuePerUnit: 310 },
  manufacturing: { label: "Manufacturing", hoursPerUnit: 4.6, gainPerHour: 27, valuePerUnit: 230 },
  other: { label: "Other", hoursPerUnit: 4.0, gainPerHour: 25, valuePerUnit: 200 },
} as const;

type IndustryKey = keyof typeof INDUSTRY_ASSUMPTIONS;

function AnimatedValue({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <motion.span
      key={`${value}-${suffix}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

export function ROISimulator() {
  const [workloadVolume, setWorkloadVolume] = useState(1200);
  const [automation, setAutomation] = useState(45);
  const [budget, setBudget] = useState(160);
  const [industry, setIndustry] = useState<IndustryKey>("education");

  const result = useMemo(() => {
    const assumptions = INDUSTRY_ASSUMPTIONS[industry];
    const annualHoursSaved = Math.round(
      workloadVolume * (automation / 100) * assumptions.hoursPerUnit,
    );
    const yearlyOpsGain = Math.round(annualHoursSaved * assumptions.gainPerHour);
    const projectedRevenueLift = Math.round(
      workloadVolume * (automation / 100) * assumptions.valuePerUnit,
    );
    const paybackMonths = Math.max(3, Math.round((budget * 1000) / Math.max(1, yearlyOpsGain) * 12));
    const roi = Math.round(((yearlyOpsGain + projectedRevenueLift - budget * 1000) / (budget * 1000)) * 100);

    return {
      annualHoursSaved,
      yearlyOpsGain,
      projectedRevenueLift,
      paybackMonths,
      roi,
    };
  }, [workloadVolume, automation, budget, industry]);

  return (
    <div className="surface-card rounded-lg border border-border p-6 md:p-8 overflow-hidden relative">
      <div className="absolute -right-20 -top-16 w-56 h-56 rounded-full bg-ember/10 blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary mb-2">
          ROI Scenario Engine
        </p>
        <h3 className="font-display italic text-3xl text-text mb-2">Project your impact</h3>
        <p className="text-text-secondary text-sm font-light mb-7 max-w-lg">
          Simulate what intelligent infrastructure can unlock across your operations before we even hop on a call.
        </p>
        <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary mb-5">
          Benchmarks are directional estimates and vary by implementation context.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
          <label className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary">Industry</span>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value as IndustryKey)}
              className="w-full h-9 rounded-sm border border-border bg-void/60 px-3 text-sm text-text focus:outline-none focus:border-ember transition-colors"
            >
              {Object.entries(INDUSTRY_ASSUMPTIONS).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
            <span className="text-sm text-text">{INDUSTRY_ASSUMPTIONS[industry].label}</span>
          </label>
          <label className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary">Workload Volume</span>
            <input
              type="range"
              min={200}
              max={10000}
              step={100}
              value={workloadVolume}
              onChange={(e) => setWorkloadVolume(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm text-text">{workloadVolume.toLocaleString()}</span>
          </label>
          <label className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary">Automation Scope</span>
            <input
              type="range"
              min={10}
              max={90}
              step={5}
              value={automation}
              onChange={(e) => setAutomation(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm text-text">{automation}%</span>
          </label>
          <label className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary">Implementation Budget (USD)</span>
            <input
              type="range"
              min={40}
              max={500}
              step={10}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm text-text">${budget}k</span>
          </label>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="border border-border rounded-sm bg-void/60 p-3">
            <div className="flex items-center gap-2 mb-2 text-text-tertiary">
              <Clock3 className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider">Annual Hours Saved</span>
            </div>
            <p className="font-display italic text-xl text-text"><AnimatedValue value={result.annualHoursSaved} /></p>
          </div>
          <div className="border border-border rounded-sm bg-void/60 p-3">
            <div className="flex items-center gap-2 mb-2 text-text-tertiary">
              <Coins className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider">Efficiency Gain / Year</span>
            </div>
            <p className="font-display italic text-xl text-text">$<AnimatedValue value={result.yearlyOpsGain} /></p>
          </div>
          <div className="border border-border rounded-sm bg-void/60 p-3">
            <div className="flex items-center gap-2 mb-2 text-text-tertiary">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider">Economic Lift</span>
            </div>
            <p className="font-display italic text-xl text-text">$<AnimatedValue value={result.projectedRevenueLift} /></p>
          </div>
          <div className="border border-border rounded-sm bg-void/60 p-3">
            <div className="flex items-center gap-2 mb-2 text-text-tertiary">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider">Projected ROI</span>
            </div>
            <p className="font-display italic text-xl text-ember"><AnimatedValue value={result.roi} suffix="%" /></p>
          </div>
        </div>

        <div className="rounded-sm border border-ember/30 bg-ember/5 p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-text-tertiary mb-1">
              Breakeven Estimate
            </p>
            <p className="text-text text-sm">
              <span className="font-display italic text-xl text-ember mr-2">
                <AnimatedValue value={result.paybackMonths} />
              </span>
              months to operational payback
            </p>
          </div>
          <motion.div
            className="w-20 h-1 rounded-full bg-border overflow-hidden"
            initial={false}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-ember-dim to-ember"
              animate={{ width: `${Math.max(8, Math.min(100, 100 - result.paybackMonths * 5))}%` }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
