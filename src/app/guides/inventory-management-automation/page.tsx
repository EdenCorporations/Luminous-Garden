import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/inventory-management-automation";
const headline = "Inventory management automation with clear exceptions.";
const description = "Plan inventory management automation for stock changes, low-stock alerts, and exceptions. See an illustrative workflow with human review.";
const summary = "Keep stock records in step with real movements, and give every mismatch a person to check.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline,
      description: summary,
      url,
      mainEntityOfPage: url,
      publisher: { "@id": "https://www.edencorp.org/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.edencorp.org/" },
        { "@type": "ListItem", position: 2, name: headline, item: url },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: `${headline} | EdenCORP`,
  description,
  alternates: { canonical: "/guides/inventory-management-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function InventoryManagementAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Inventory</div>
          <h1>Inventory management automation<br /><span>with clear exceptions.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your inventory workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Choose the stock record first.</h2>
          <p>Name the system that owns each item, location, and quantity. Record how goods arrive, move, and leave. If two tools show different counts, choose which record leads before connecting them.</p>
        </section>

        <section className={styles.service}>
          <h2>Record each movement once.</h2>
          <p>In an illustrative flow, a received item creates a stock movement with its source, time, and owner. The workflow updates the stock record and confirms the result. A low-stock alert can then reach the person who orders more.</p>
          <p>Keep adjustments and returns separate from new receipts. A missing item code or failed update should stop the handoff and show what needs review.</p>
        </section>

        <section className={styles.choice}>
          <h2>Give mismatches a human owner.</h2>
          <p>Test duplicate scans, late updates, stock below zero, and a count that differs from the shelf. Route each exception to a named person with the source record. People approve corrections and purchase decisions.</p>
        </section>

        <section className={styles.choice}>
          <h2>Start with one location.</h2>
          <p>Use a small set of items to compare recorded changes with a physical count. Track missed and duplicate movements before adding more locations. This is a planning example, not a delivered client result. Eden can scope the workflow around your systems.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/automation-project-checklist">Automation project checklist</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
