import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EdenCORP | Custom Workflow Automation Agency",
  description:
    "Meet Eden, a Chennai-based team building custom workflow automations online. See how we scope projects, work by proposal, and handle handover.",
  alternates: { canonical: "/about" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
