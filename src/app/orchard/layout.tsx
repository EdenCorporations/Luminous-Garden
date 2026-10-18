import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Orchard | EdenCORP Automation Catalog",
  description: "Explore EdenCORP's Orchard catalog. PRISM is a campus automation offering; other industry concepts are planned. Discuss a custom workflow project with Eden.",
  alternates: { canonical: "/orchard" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
