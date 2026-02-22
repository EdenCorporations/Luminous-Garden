import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { EcosystemOrbital } from "@/components/EcosystemOrbital";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";

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
    </main>
  );
}
