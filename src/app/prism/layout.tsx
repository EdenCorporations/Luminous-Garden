import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/prism" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
