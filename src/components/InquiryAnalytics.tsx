"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { captureInquiryEvent } from "@/lib/analytics";

export function InquiryAnalytics() {
  const pathname = usePathname();
  const previous = useRef<string | null>(null);
  useEffect(() => {
    if (pathname === previous.current) return;
    previous.current = pathname;
    captureInquiryEvent("$pageview", pathname);
  }, [pathname]);
  return null;
}
