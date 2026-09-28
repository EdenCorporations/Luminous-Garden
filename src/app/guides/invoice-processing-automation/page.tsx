import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "A practical plan for invoice processing automation: capture invoices, check duplicates, route exceptions, and keep a person in control of payment approval.";

export const metadata: Metadata = {
  title: "Invoice processing automation: checks before payment | EdenCORP",
  description,
  alternates: { canonical: "/guides/invoice-processing-automation" },
  openGraph: {
    title: "Invoice processing automation: checks before payment",
    description,
    url: "/guides/invoice-processing-automation",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Finance workflows</div>
          <h1>Invoice processing<br /><span>with a clear review step.</span></h1>
          <p>Automation can collect and sort invoices. A person still needs a clear route for duplicates, missing details, and payment approval.</p>
          <Link className={styles.primary} href="/contact">Discuss your invoice workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Map the handoffs.</h2>
          <p>Start with where invoices arrive: an inbox, form, or shared folder. Record who checks supplier details, who approves payment, and where the final record belongs. Set access rules before connecting systems.</p>
        </section>

        <section className={styles.service}>
          <h2>Picture one safe route.</h2>
          <p>In this illustrative example, an invoice enters a review queue. The workflow reads its number and supplier, checks for a duplicate, and flags missing fields. A reviewer resolves exceptions and approves the next handoff. The workflow then records the decision in the chosen system.</p>
          <p>This is a planning example, not a delivered client system. Test with fictional invoices, including a duplicate, an unreadable file, a changed amount, and a failed transfer. Keep payment release under the agreed human approval process.</p>
        </section>

        <section className={styles.choice}>
          <h2>Choose what to automate.</h2>
          <p>Built-in accounting tools may cover simple capture and routing. Custom integration may help when several systems, approval rules, or exception paths must work together. Confirm tool costs, data access, and error recovery before a build.</p>
        </section>

        <section className={styles.choice}>
          <h2>Bring a useful brief.</h2>
          <p>Share the manual steps, invoice volume, systems, review owners, and fictional examples. Eden is a custom workflow automation agency. We can scope development, integration, consulting, and support in an individual proposal. Fees and timing depend on that proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/data-entry-automation">Data entry automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How we work</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
