import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eden: Workflow automation for organizations | Orchard",
  description: "Explore Eden's workflow automation catalog, including PRISM for education and planned offerings for other industries. Discuss a custom project with Eden.",
  alternates: { canonical: "/orchard" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
