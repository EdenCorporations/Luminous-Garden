"use client";

import { AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="reveal relative w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
      {/* Left: Abstract Chaos Visual */}
      <div className="relative order-2 md:order-1">
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-red-900/10 blur-3xl rounded-full" />

          {/* Chaos Visual */}
          <div className="relative w-full h-full border border-white/5 rounded-lg overflow-hidden bg-obsidian/50 p-6 flex items-center justify-center">
            {/* Abstract SVG Lines */}
            <svg
              className="w-full h-full opacity-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="noise">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves={3}
                    stitchTiles="stitch"
                  />
                </filter>
              </defs>
              <rect
                width="100%"
                height="100%"
                filter="url(#noise)"
                opacity="0.4"
              />
              <path
                d="M0,100 Q50,0 100,100 T200,100"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
              <path
                d="M0,80 Q50,180 100,80 T200,80"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
              <path
                d="M0,120 Q30,20 150,120 T200,120"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
              <path
                d="M20,0 Q120,100 20,200"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
            </svg>

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6">
              <h3 className="font-mono text-xs text-red-400 uppercase tracking-widest mb-1">
                Status: Unrefined
              </h3>
              <p className="font-display text-gray-500 text-lg">
                Legacy Chaos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: The Weed of Inefficiency */}
      <div className="order-1 md:order-2 flex flex-col justify-center">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs uppercase tracking-wider mb-4">
            Problem Detection
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
            The Weed of <br />
            <span className="text-white">Inefficiency</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Unchecked data overgrowth chokes innovation. Traditional systems
            create tangled roots that drain resources before they yield results.
          </p>
        </div>

        {/* Glass Stat Card */}
        <div className="glass-panel p-6 rounded relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h4 className="font-display font-bold text-5xl md:text-6xl text-white mb-2">
            40%
          </h4>
          <p className="font-mono text-sm text-gray-400 uppercase tracking-wider border-l-2 border-red-500 pl-3">
            Annual Resource Loss
          </p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
            <div className="h-full w-[40%] bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
