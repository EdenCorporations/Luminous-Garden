import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Plan data entry automation that checks duplicates, missing fields, and failed transfers before records reach your business systems.";

export const metadata: Metadata = {
  title: "Data entry automation: a practical review plan | EdenCORP",
  description,
  alternates: { canonical: "/guides/data-entry-automation" },
  openGraph: {
    title: "Data entry automation: a practical review plan",
    description,
    url: "/guides/data-entry-automation",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Repeated work</div>
          <h1>Data entry automation<br /><span>without silent mistakes.</span></h1>
          <p>Moving data between forms, files, and business systems can save retyping. The hard part is deciding what happens when a record is incomplete or arrives twice.</p>
          <Link className={styles.primary} href="/contact">Discuss one data entry workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start with the destination.</h2>
          <p>Pick one source and one destination. List the fields the destination requires, who owns each field, and what counts as a valid record. If the source already offers a direct export or integration, test that route before adding another tool.</p>
        </section>

        <section className={styles.service}>
          <h2>Write the exception rules first.</h2>
          <p>Imagine a web form feeding a customer list. A missing email should wait for review. A repeated record should not create a second customer. A failed transfer should leave the source intact and alert the person responsible.</p>
          <p>This is an illustrative workflow, not a client result. Test a small set of fictional records: one valid, one missing a required field, one duplicate, and one retry after failure. Check the destination after every run.</p>
        </section>

        <section className={styles.choice}>
          <h2>Choose the simplest build.</h2>
          <p>A built-in integration may suit a stable source and a simple field map. A workflow tool may suit several connected apps. Custom work can help when formats, approvals, or recovery rules need more control. Confirm access, software costs, and maintenance before choosing.</p>
        </section>

        <section className={styles.choice}>
          <h2>Bring a safe sample.</h2>
          <p>Share fictional rows, the current manual steps, the systems involved, and the person who approves exceptions. Eden can scope development, integration, consulting, and support through an individual proposal. Fees and delivery depend on that proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/examples/spreadsheet-reporting">Working spreadsheet example</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How we work</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
