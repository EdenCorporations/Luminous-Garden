import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { TextScramble } from "@/components/TextScramble";
import { MagneticButton } from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <main className="flex-1 relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Sparse particle background */}
      <ParticleField
        particleCount={25}
        connectionDistance={100}
        className="opacity-40"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200,75,49,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Big 404 */}
        <h1 className="font-display text-[10rem] sm:text-[14rem] md:text-[18rem] leading-none tracking-tight text-text/5 select-none">
          404
        </h1>

        {/* Overlay gradient 404 */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          <span className="font-display text-[10rem] sm:text-[14rem] md:text-[18rem] leading-none tracking-tight text-gradient-ember">
            404
          </span>
        </div>

        {/* Tagline */}
        <div className="mt-[-2rem] sm:mt-[-3rem]">
          <TextScramble
            text="This path doesn't exist in the garden."
            className="font-mono text-sm text-text-secondary tracking-wide"
            duration={1200}
          />
        </div>

        {/* CTA */}
        <div className="mt-10">
          <MagneticButton strength={0.25}>
            <Link
              href="/"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-ember/40 hover:border-ember hover:bg-ember/5 text-text rounded-sm transition-all duration-300 no-underline ember-glow"
            >
              <span className="font-body font-medium text-sm tracking-[0.1em] uppercase flex items-center gap-3">
                Return to Origin
                <ArrowRight className="w-4 h-4 text-ember group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </MagneticButton>
        </div>
      </div>
    </main>
  );
}
