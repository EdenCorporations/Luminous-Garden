"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Link as LinkIcon, Zap, Search, Hammer, TrendingUp, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ScrollReveal";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

const ecosystemData: TimelineItem[] = [
  {
    id: 1,
    title: "FIND",
    date: "Phase 01",
    content: "Map your existing infrastructure to identify optimization pathways. Our discovery engine locates the friction points that drain resources.",
    category: "Discovery",
    icon: Search,
    relatedIds: [2, 4],
    status: "completed",
    energy: 95,
  },
  {
    id: 2,
    title: "BUILD",
    date: "Phase 02",
    content: "Construct scalable, AI-driven systems that integrate seamlessly with your operations — any industry, any scale.",
    category: "Construction",
    icon: Hammer,
    relatedIds: [1, 3],
    status: "in-progress",
    energy: 75,
  },
  {
    id: 3,
    title: "SCALE",
    date: "Phase 03",
    content: "Elastic serverless architecture that expands from 1 to 5,000+ concurrent users instantly. Growth without friction.",
    category: "Growth",
    icon: TrendingUp,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 4,
    title: "SECURE",
    date: "Phase 04",
    content: "Complete data sovereignty and regulatory compliance with zero-trust architecture. Protection at every layer.",
    category: "Protection",
    icon: Shield,
    relatedIds: [1, 3],
    status: "pending",
    energy: 40,
  },
];

export function EcosystemOrbital() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const rotationRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const related = ecosystemData.find((i) => i.id === id)?.relatedIds || [];
        const pulse: Record<number, boolean> = {};
        related.forEach((r) => (pulse[r] = true));
        setPulseEffect(pulse);
        const idx = ecosystemData.findIndex((i) => i.id === id);
        const target = (idx / ecosystemData.length) * 360;
        rotationRef.current = 270 - target;
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  const nodePos = useCallback((index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationRef.current) % 360;
    const radius = 160;
    const rad = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(rad),
      y: radius * Math.sin(rad),
      zIndex: Math.round(100 + 50 * Math.cos(rad)),
      opacity: Math.max(0.4, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2)),
    };
  }, []);

  // Auto-rotation via rAF — zero React re-renders
  useEffect(() => {
    if (!autoRotate) return;
    let frameId: number;
    let lastTime = 0;

    const loop = (time: number) => {
      if (lastTime) {
        const dt = time - lastTime;
        rotationRef.current = (rotationRef.current + dt * 0.006) % 360;

        ecosystemData.forEach((item, idx) => {
          const el = nodeRefs.current[item.id];
          if (!el) return;
          const pos = nodePos(idx, ecosystemData.length);
          el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
          el.style.zIndex = String(pos.zIndex);
          el.style.opacity = String(pos.opacity);
        });
      }
      lastTime = time;
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [autoRotate, nodePos]);

  const isRelated = (id: number) => {
    if (!activeNodeId) return false;
    return ecosystemData.find((i) => i.id === activeNodeId)?.relatedIds.includes(id) || false;
  };

  const statusStyle = (s: string) => {
    if (s === "completed") return "text-text bg-surface border-ember/50";
    if (s === "in-progress") return "text-void bg-ember border-ember";
    return "text-text-secondary bg-surface border-border";
  };

  return (
    <Reveal className="w-full max-w-7xl mx-auto px-6 py-24 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-3 text-text">
            The Ecosystem
          </h2>
          <p className="font-body text-text-secondary max-w-md">
            Our intelligence implementation cycle — click nodes to explore each
            phase.
          </p>
        </div>
        <a
          className="hidden md:flex items-center gap-2 text-ember font-medium uppercase text-sm tracking-[0.1em] hover:opacity-80 transition-opacity mt-6 md:mt-0"
          href="/orchard"
        >
          View the Orchard
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Orbital Visualization */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className="relative w-full h-[500px] md:h-[550px] flex items-center justify-center overflow-hidden rounded-sm surface-card"
      >
        <div
          ref={orbitRef}
          className="absolute w-full h-full flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Central core */}
          <div className="absolute z-10 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-ember via-ember-glow to-ember-dim flex items-center justify-center"
            >
              <div className="w-7 h-7 rounded-full bg-text/80" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-20 h-20 rounded-full border border-ember/30"
            />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-80 h-80 rounded-full border border-border" />

          {/* Nodes */}
          {ecosystemData.map((item, index) => {
            const pos = nodePos(index, ecosystemData.length);
            const isExp = expandedItems[item.id];
            const isRel = isRelated(item.id);
            const isPulse = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute cursor-pointer"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  zIndex: isExp ? 200 : pos.zIndex,
                  opacity: isExp ? 1 : pos.opacity,
                  transition: "transform 0.15s linear, opacity 0.3s ease",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy aura */}
                <motion.div
                  animate={isPulse ? { scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] } : {}}
                  transition={isPulse ? { duration: 1.5, repeat: Infinity } : {}}
                  className="absolute rounded-full"
                  style={{
                    background: `radial-gradient(circle, rgba(200,75,49,0.2) 0%, rgba(200,75,49,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node circle */}
                <motion.div
                  animate={{
                    scale: isExp ? 1.4 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                    isExp
                      ? "bg-ember text-void border-ember"
                      : isRel
                      ? "bg-ember/40 text-void border-ember"
                      : "bg-surface text-text border-border"
                  }`}
                  style={isExp ? { boxShadow: "0 0 20px rgba(200,75,49,0.3)" } : {}}
                >
                  <Icon size={16} />
                </motion.div>

                {/* Label */}
                <div
                  className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider font-mono transition-all duration-300 ${
                    isExp ? "text-ember" : "text-text-secondary"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                <AnimatePresence>
                  {isExp && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-20 left-1/2 -translate-x-1/2"
                    >
                      <Card className="w-64 bg-surface border-border shadow-xl overflow-visible">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-ember/50" />
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <Badge className={`px-2 text-xs ${statusStyle(item.status)}`}>
                              {item.status === "completed"
                                ? "COMPLETE"
                                : item.status === "in-progress"
                                ? "IN PROGRESS"
                                : "PENDING"}
                            </Badge>
                            <span className="text-xs font-mono text-text-tertiary">
                              {item.date}
                            </span>
                          </div>
                          <CardTitle className="text-sm mt-2 text-text">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-text-secondary">
                          <p>{item.content}</p>
                          <div className="mt-4 pt-3 border-t border-border">
                            <div className="flex justify-between items-center text-xs mb-1">
                              <span className="flex items-center text-text-secondary">
                                <Zap size={10} className="mr-1" />
                                Energy Level
                              </span>
                              <span className="font-mono text-text-secondary">{item.energy}%</span>
                            </div>
                            <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.energy}%` }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                className="h-full bg-gradient-to-r from-ember to-ember-glow rounded-full"
                              />
                            </div>
                          </div>
                          {item.relatedIds.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-border">
                              <div className="flex items-center mb-2">
                                <LinkIcon size={10} className="text-text-tertiary mr-1" />
                                <h4 className="text-xs uppercase tracking-wider font-medium text-text-tertiary">
                                  Connected Nodes
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {item.relatedIds.map((relId) => {
                                  const rel = ecosystemData.find((i) => i.id === relId);
                                  return (
                                    <Button
                                      key={relId}
                                      variant="outline"
                                      size="sm"
                                      className="flex items-center h-6 px-2 py-0 text-xs rounded-sm border-border bg-transparent hover:bg-surface-hover text-text-secondary hover:text-text"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleItem(relId);
                                      }}
                                    >
                                      {rel?.title}
                                      <ArrowRight size={8} className="ml-1 text-text-tertiary" />
                                    </Button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 md:hidden text-center">
        <a
          className="inline-flex items-center gap-2 text-ember font-medium uppercase text-sm tracking-[0.1em] hover:opacity-80 transition-opacity"
          href="/orchard"
        >
          View the Orchard
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </Reveal>
  );
}
