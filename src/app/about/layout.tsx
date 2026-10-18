import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EdenCORP | Chennai Workflow Automation Team",
  description:
    "Meet EdenCORP, a Chennai-based team that builds custom workflow automation online. Eden has no registered entity. See how projects are scoped by proposal.",
  alternates: { canonical: "/about" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
