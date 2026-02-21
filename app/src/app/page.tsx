import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { EcosystemOrbital } from "@/components/EcosystemOrbital";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center">
      <HeroSection />
      <ProblemSection />
      <EcosystemOrbital />
    </main>
  );
}
