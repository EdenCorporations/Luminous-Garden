"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowCursor } from "@/components/GlowCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Preloader } from "@/components/Preloader";

/**
 * Client-side layout wrapper. Handles all interactive/animated
 * layout concerns: preloader, scroll-to-top, cursor glow.
 */
export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <Preloader>
      <Navbar />
      <ScrollProgress />
      <GlowCursor />
      {children}
      <Footer />
      <ScrollToTop />
    </Preloader>
  );
}
