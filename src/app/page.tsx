import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { EcosystemOrbital } from "@/components/EcosystemOrbital";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { Reveal } from "@/components/ScrollReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    url: "https://www.edencorp.org/",
    siteName: "EdenCORP",
    title: "Eden: Workflow automation agency for organizations",
    description: "Eden builds custom workflow automation for organizations. Scope and pricing are agreed through individual proposals.",
    images: [{ url: "/social/eden-home.png", width: 1200, height: 630, alt: "EdenCORP workflow automation agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden: Workflow automation agency for organizations",
    description: "Custom workflow automation, delivered online through individual proposals.",
    images: ["/social/eden-home.png"],
  },
  title: "Eden: Workflow automation agency for organizations",
  description: "Eden builds custom workflow automation for organizations. Services include development, integrations, consulting, and support through individual proposals.",
};

const INDUSTRIES = [
  "Education",
  "Logistics",
  "Healthcare",
  "Finance",
  "Agriculture",
  "Energy",
  "Manufacturing",
  "Government",
  "Defense",
  "Retail",
];

export default function Home() {
  return (
    <main className="relative w-full flex flex-1 flex-col items-center overflow-hidden">
      <HeroSection />
      <div className="w-full py-6 border-y border-border/50">
        <InfiniteMarquee items={INDUSTRIES} speed={25} />
      </div>
      <ProblemSection />
      <div className="rule w-full max-w-7xl mx-auto" />
      <EcosystemOrbital />

      {/* Closing CTA */}
      <Reveal className="w-full max-w-7xl mx-auto px-6 pt-4 pb-32 text-center">
        <div className="rule w-full max-w-md mx-auto mb-8" />
        <h2 className="font-display text-3xl md:text-4xl italic text-text mb-4">
          Ready to grow?
        </h2>
        <p className="text-text-secondary font-light text-lg mb-8 max-w-md mx-auto">
          Tell us about your workflow. We discuss scope, then agree a proposal before building. Handover and support follow your proposal.{" "}
          <Link href="/how-we-work" className="underline underline-offset-4 hover:text-text">How we work</Link>
        </p>
        <MagneticButton strength={0.25}>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-ember/40 hover:border-ember hover:bg-ember/5 text-text rounded-sm transition-all duration-300 no-underline ember-glow"
          >
            <span className="font-body font-medium text-sm tracking-[0.1em] uppercase flex items-center gap-3">
              Get in Touch
              <ArrowRight className="w-4 h-4 text-ember group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </MagneticButton>
      </Reveal>
    </main>
  );
}
