"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowCursor } from "@/components/GlowCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Preloader } from "@/components/Preloader";
import { usePathname } from "next/navigation";

/**
 * Client-side layout wrapper. Handles all interactive/animated
 * layout concerns: preloader, scroll-to-top, cursor glow.
 */
export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Search guides must render their article in the initial server response.
  // Keep the original loading sequence on all existing routes.
  if (pathname.startsWith("/compare/")) {
    return <><Navbar /><div className="flex-1 flex flex-col min-h-screen">{children}<Footer /></div><ScrollToTop /></>;
  }
  return (
    <>
      <Navbar />
      <Preloader>
      <ScrollProgress />
      <GlowCursor />
      {children}
      <Footer />
      <ScrollToTop />
      </Preloader>
    </>
  );
}
