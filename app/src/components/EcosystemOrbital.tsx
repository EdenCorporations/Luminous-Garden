"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap, Search, Hammer, TrendingUp, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    content: "Locate data roots buried deep within legacy soil. Our discovery engine maps your existing infrastructure to identify optimization pathways.",
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
    content: "Graft new logic onto existing infrastructure. We construct scalable, AI-driven systems that integrate seamlessly with your campus ecosystem.",
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
    content: "Accelerate growth with automated nutrient delivery. Elastic serverless architecture that expands from 1 to 5,000+ concurrent users instantly.",
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
    content: "Protect the harvest with adaptive biometric shields. Complete data sovereignty and institutional compliance with zero-trust architecture.",
    category: "Protection",
    icon: Shield,
    relatedIds: [1, 3],
    status: "pending",
    energy: 40,
  },
];

export function EcosystemOrbital() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
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
        // Center view
        const idx = ecosystemData.findIndex((i) => i.id === id);
        const target = (idx / ecosystemData.length) * 360;
        setRotationAngle(270 - target);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const nodePos = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 160;
    const rad = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(rad),
      y: radius * Math.sin(rad),
      zIndex: Math.round(100 + 50 * Math.cos(rad)),
      opacity: Math.max(0.4, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2)),
    };
  };

  const isRelated = (id: number) => {
    if (!activeNodeId) return false;
    return ecosystemData.find((i) => i.id === activeNodeId)?.relatedIds.includes(id) || false;
  };

  const statusStyle = (s: string) => {
    if (s === "completed") return "text-white bg-black border-white";
    if (s === "in-progress") return "text-black bg-white border-black";
    return "text-white bg-black/40 border-white/50";
  };

  return (
    <section className="reveal w-full max-w-7xl mx-auto px-6 py-24 pb-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-2">
            The Ecosystem
          </h2>
          <p className="font-body text-gray-400 max-w-md">
            Our organic intelligence implementation cycle — click nodes to
            explore each phase.
          </p>
        </div>
        <a
          className="hidden md:flex items-center gap-2 text-gold font-bold uppercase text-sm tracking-widest hover:opacity-80 transition-opacity mt-6 md:mt-0"
          href="/orchard"
        >
          View Full Orchard
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Orbital Visualization */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className="relative w-full h-[500px] md:h-[550px] flex items-center justify-center overflow-hidden rounded-xl glass-panel"
      >
        <div
          ref={orbitRef}
          className="absolute w-full h-full flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Central core */}
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-gold via-amber to-primary-dim animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-18 h-18 rounded-full border border-white/20 animate-ping opacity-70" />
            <div
              className="absolute w-22 h-22 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-md" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-80 h-80 rounded-full border border-white/10" />

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
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  zIndex: isExp ? 200 : pos.zIndex,
                  opacity: isExp ? 1 : pos.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy aura */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulse ? "animate-pulse" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isExp
                      ? "bg-gold text-black border-gold shadow-lg shadow-gold/30 scale-150"
                      : isRel
                      ? "bg-gold/50 text-black border-gold animate-pulse"
                      : "bg-void text-white border-white/40"
                  }`}
                >
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div
                  className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isExp ? "text-gold scale-125" : "text-white/70"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExp && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-gold/30 shadow-xl shadow-gold/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-gold/50" />
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-xs ${statusStyle(item.status)}`}>
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-xs font-mono text-white/50">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-white">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80">
                      <p>{item.content}</p>
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center">
                            <Zap size={10} className="mr-1" />
                            Energy Level
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-gold to-amber"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={10} className="text-white/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
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
                                  className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relId);
                                  }}
                                >
                                  {rel?.title}
                                  <ArrowRight size={8} className="ml-1 text-white/60" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 md:hidden text-center">
        <a
          className="inline-flex items-center gap-2 text-gold font-bold uppercase text-sm tracking-widest hover:opacity-80 transition-opacity"
          href="/orchard"
        >
          View Full Orchard
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
