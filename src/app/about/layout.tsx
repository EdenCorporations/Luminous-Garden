import { entityDescription } from "@/lib/entity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Eden: Workflow automation agency for organizations",
  description: entityDescription,
  alternates: { canonical: "/about" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
