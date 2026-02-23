"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Activity, AlertTriangle, Database, Shield, Users } from "lucide-react";

type NodeState = {
  id: string;
  x: number;
  y: number;
  load: number;
  status: "healthy" | "warning";
};

const BASE_NODES: NodeState[] = [
  { id: "A1", x: 14, y: 24, load: 68, status: "healthy" },
  { id: "B2", x: 46, y: 18, load: 82, status: "healthy" },
  { id: "C3", x: 76, y: 24, load: 74, status: "healthy" },
  { id: "D4", x: 23, y: 58, load: 88, status: "healthy" },
  { id: "E5", x: 54, y: 56, load: 92, status: "warning" },
  { id: "F6", x: 82, y: 64, load: 63, status: "healthy" },
];

function miniSpark(seed: number) {
  return Array.from({ length: 24 }, (_, i) => {
    const wave = Math.sin((i + seed) * 0.5) * 0.28 + 0.5;
    const noise = (Math.cos((i + seed * 3) * 0.31) + 1) * 0.08;
    return Math.max(0.12, Math.min(0.96, wave + noise));
  });
}

export function ControlRoomBoard() {
  const [tick, setTick] = useState(0);
  const [activeIncident, setActiveIncident] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => setTick((value) => value + 1), 1300);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIncident((value) => (value % 3) + 1);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const nodes = useMemo(() => {
    return BASE_NODES.map((node, index) => {
      const pulse = Math.sin((tick + index * 2) * 0.7) * 8;
      const load = Math.max(42, Math.min(98, node.load + pulse));
      return {
        ...node,
        load: Math.round(load),
        status: load > 90 ? "warning" as const : node.status,
      };
    });
  }, [tick]);

  const throughput = 4200 + Math.round(Math.sin(tick * 0.35) * 240 + Math.cos(tick * 0.2) * 120);
  const latency = 11 + Math.round((Math.sin(tick * 0.45) + 1) * 2);
  const failover = 99.97 + Math.sin(tick * 0.2) * 0.02;

  return (
    <div className="surface-card rounded-lg border border-border p-6 space-y-6 overflow-hidden relative">
      <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full pointer-events-none bg-ember/10 blur-3xl" />

      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary mb-2">
            PRISM Control Room
          </p>
          <h3 className="font-display italic text-2xl text-text">Campus Digital Twin</h3>
        </div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-success/30 bg-success/10">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] font-mono text-success uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 relative z-10">
        <div className="rounded-sm border border-border bg-void/60 p-3">
          <div className="flex items-center gap-2 text-text-tertiary mb-2">
            <Users className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Active Users</span>
          </div>
          <p className="text-xl font-display italic text-text">{throughput.toLocaleString()}</p>
        </div>
        <div className="rounded-sm border border-border bg-void/60 p-3">
          <div className="flex items-center gap-2 text-text-tertiary mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Latency</span>
          </div>
          <p className="text-xl font-display italic text-text">{latency}ms</p>
        </div>
        <div className="rounded-sm border border-border bg-void/60 p-3">
          <div className="flex items-center gap-2 text-text-tertiary mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Failover</span>
          </div>
          <p className="text-xl font-display italic text-text">{failover.toFixed(2)}%</p>
        </div>
      </div>

      <div className="rounded-sm border border-border bg-void/50 p-4 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary">Campus Node Topology</span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-ember">Adaptive Load Routing</span>
        </div>
        <div className="relative h-44 rounded-sm border border-border/70 bg-void/70 overflow-hidden">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    node.status === "warning" ? "bg-warning" : "bg-ember"
                  }`}
                />
                <motion.div
                  className={`absolute inset-0 rounded-full ${
                    node.status === "warning" ? "bg-warning/40" : "bg-ember/40"
                  }`}
                  animate={{ scale: [1, 2.1, 1], opacity: [0.4, 0.05, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-text-tertiary whitespace-nowrap">
                  {node.id} · {node.load}%
                </div>
              </div>
            </motion.div>
          ))}

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5]].map(([a,b], index) => (
              <motion.line
                key={`${a}-${b}`}
                x1={BASE_NODES[a].x}
                y1={BASE_NODES[a].y}
                x2={BASE_NODES[b].x}
                y2={BASE_NODES[b].y}
                stroke="rgba(200,75,49,0.35)"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.2"
                animate={{ opacity: [0.25, 0.7, 0.25] }}
                transition={{ duration: 2 + index * 0.2, repeat: Infinity }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4 relative z-10">
        <div className="rounded-sm border border-border bg-void/60 p-4">
          <div className="flex items-center gap-2 text-text-tertiary mb-3">
            <Database className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Service Throughput Streams</span>
          </div>
          <div className="space-y-3">
            {["Tutor Requests", "RAG Retrieval", "Placement Engine"].map((label, index) => {
              const bars = miniSpark(index + tick);
              return (
                <div key={label}>
                  <div className="flex justify-between mb-1 text-[10px] font-mono text-text-tertiary">
                    <span>{label}</span>
                    <span className="text-ember">{(bars[bars.length - 1] * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex items-end gap-[2px] h-8">
                    {bars.map((value, barIndex) => (
                      <motion.span
                        key={barIndex}
                        className="flex-1 rounded-[1px] bg-gradient-to-t from-ember-dim/70 to-ember"
                        animate={{ height: `${Math.max(16, value * 100)}%` }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-sm border border-border bg-void/60 p-4">
          <div className="flex items-center gap-2 text-text-tertiary mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Incident Timeline</span>
          </div>
          <div className="space-y-3">
            {[
              "Queue saturation auto-balanced",
              "Edge cache warmed for midterms",
              "Anomaly scan completed",
            ].map((event, index) => (
              <motion.div
                key={event}
                className={`p-2.5 rounded-sm border text-xs font-mono ${
                  activeIncident === index + 1
                    ? "border-ember/60 bg-ember/10 text-text"
                    : "border-border text-text-secondary"
                }`}
                animate={activeIncident === index + 1 ? { x: [0, 2, 0] } : { x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {event}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
