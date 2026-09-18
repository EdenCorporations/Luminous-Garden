import type { Metadata } from "next";
import Link from "next/link";
import { BuyerPageSchema } from "@/components/BuyerPageSchema";
import styles from "./service.module.css";

const description = "Custom workflow automation services from Eden. Scope integrations, manual handoffs, testing, and support around your organization's process.";
const priceAnswer = "Eden quotes each project through an individual proposal. Scope, tool fees, delivery timing, and support terms need agreement before work begins.";
export const metadata: Metadata = {
  title: "Workflow automation services | EdenCORP",
  description,
  alternates: { canonical: "/services/workflow-automation" },
  openGraph: { title: "Workflow automation services | EdenCORP", description, url: "/services/workflow-automation", type: "website" },
};

export default function WorkflowAutomationServices() {
  return <main className={styles.page}>
    <BuyerPageSchema path="/services/workflow-automation" description={description} faqs={[{ question: "How much does it cost?", answer: priceAnswer }]} />
    <header className={styles.hero}>
      <span className={styles.label}>Custom development · Eden</span>
      <h1>Workflow automation<br /><em>services.</em></h1>
      <p>Eden builds custom automation around your organization&apos;s manual work. Bring the process; we can discuss development, integrations, consulting, and support.</p>
      <Link href="/contact" className={styles.primary}>Discuss your workflow <span aria-hidden="true">↗</span></Link>
    </header>
    <section className={styles.example} aria-labelledby="example-title">
      <span className={styles.label}>Illustrative workflow · not a client result</span>
      <h2 id="example-title">An enquiry needs an owner.</h2>
      <ol className={styles.flow}>
        <li><span>01 / Trigger</span>New enquiry</li>
        <li><span>02 / Check</span>Required fields</li>
        <li><span>03 / Action</span>Assign owner</li>
        <li><span>04 / Output</span>Record next step</li>
      </ol>
      <p className={styles.exception}>Missing details? Route to human review before assignment.</p>
      <p>Test duplicate enquiries, missing fields, and an unavailable destination. Keep a manual route when the automated handoff cannot finish.</p>
    </section>
    <div className={styles.details}>
      <section><h2>Start with one process.</h2><p>Repeated reporting, approval requests, website enquiries, and transfers between systems are possible starting points. These examples do not limit Eden&apos;s scope.</p><p>Tool access, data quality, and integration limits determine what is feasible. Describe your current steps before choosing software.</p></section>
      <section><h2>Define what done means.</h2><ul className={styles.checklist}><li>Name the trigger, systems, and expected output.</li><li>Agree which decisions stay with a person.</li><li>Set tests for normal runs and failures.</li><li>Specify access, handover, and maintenance responsibilities.</li></ul><p>Use these points in the project brief so both sides can assess the same result.</p></section>
      <section><h2>How much does it cost?</h2><p>{priceAnswer}</p></section>
      <section><h2>Bring a useful brief.</h2><p>Tell us what starts the work, how often it happens, and who checks the result. Include a fictional example instead of private records.</p></section>
    </div>
    <nav className={styles.related} aria-label="Related guides"><Link href="/guides/when-to-hire-an-automation-agency">When to hire an automation agency</Link><Link href="/compare">Comparisons and guides</Link><Link href="/how-we-work">How we work</Link></nav>
  </main>;
}
