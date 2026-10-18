import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | EdenCORP",
  description: "Read EdenCORP's website and inquiry terms. Project scope, pricing, ownership, and support are set in individual agreements, not by this website.",
  alternates: { canonical: "/terms" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
