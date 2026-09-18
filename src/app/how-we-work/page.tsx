import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const description = "How Eden works with clients online: inquiry, scope, proposal, build, handover, and proposal-dependent support for custom workflow automation.";
export const metadata: Metadata = {
  title: "How we work | EdenCORP",
  description,
  alternates: { canonical: "/how-we-work" },
  openGraph: { title: "How we work | EdenCORP", description, url: "/how-we-work", type: "website" },
};

const stages = [
  { title: "Inquiry", text: "Describe the workflow you want to change, the tools involved, and where manual work slows you down. Use fictional examples instead of private records." },
  { title: "Scope", text: "Discuss the trigger, steps, expected output, and decisions that need a person. Tool access and integration limits shape what is feasible." },
  { title: "Proposal", text: "Eden uses proposal-only pricing with fixed-scope milestones. Agree the deliverables, price, timing, and responsibilities in the individual proposal and contract before work begins." },
  { title: "Build", text: "Custom development and integrations follow the agreed scope. Define checks for normal runs and failures, including where a person takes over." },
  { title: "Handover", text: "Set the handover requirements in your proposal: what you receive, who controls access, and how the agreed result will be checked." },
  { title: "Support", text: "Support depends on your proposal. Agree maintenance responsibilities, any ongoing fees, and how future changes will be handled." },
];

export default function HowWeWork() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <h1>How we work<br /><em>with you.</em></h1>
        <p>Eden is a custom workflow automation agency. We work entirely online, with each project defined through its own proposal.</p>
        <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
      </header>
      <ol className={styles.stages} aria-label="Project stages">
        {stages.map((stage, index) => (
          <li key={stage.title}>
            <span className={styles.number} aria-hidden="true">0{index + 1}</span>
            <div><h2>{stage.title}</h2><p>{stage.text}</p></div>
          </li>
        ))}
      </ol>
      {/* Keep room within the page budget for the separately scoped internal-prototype evidence section. */}
      <nav className={styles.related} aria-label="Related reading">
        <Link href="/services/workflow-automation">Workflow automation services</Link>
        <Link href="/about">About Eden</Link>
      </nav>
    </main>
  );
}
