import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/asset-management-automation";
const headline = "Asset management automation with accountable handoffs";
const searchTitle = "Asset Management Automation for Equipment Teams | EdenCORP";
const description = "Plan asset management automation for equipment records, handoffs, service reminders, and retirement. Keep approvals and exceptions with your team.";
const summary = "Track each piece of equipment from assignment to retirement, with a person responsible for every exception.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article", "@id": `${url}#article`, headline,
      description: summary, url, mainEntityOfPage: url,
      publisher: { "@id": "https://www.edencorp.org/#organization" },
    },
    {
      "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.edencorp.org/" },
        { "@type": "ListItem", position: 2, name: headline, item: url },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: searchTitle, description,
  alternates: { canonical: "/guides/asset-management-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function AssetManagementAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Equipment</div>
          <h1>Asset management automation<br /><span>with accountable handoffs.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your asset workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with one asset record.</h2>
          <p>Give each asset a stable ID, owner, location, status, and service date. Decide which system owns those fields before connecting forms or spreadsheets. Keep the original record when details change.</p>
        </section>
        <section className={styles.service}>
          <h2>Record every handoff.</h2>
          <p>In an illustrative flow, a request to assign equipment reaches its owner. After approval, the record shows who received it, when, and where it moved. A missing ID or unconfirmed receipt stays in a review queue.</p>
          <p>Service reminders can reach the responsible team before a due date. A completed work order updates the service history only after a person checks the result.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep retirement decisions human.</h2>
          <p>Flag damaged, lost, or unused equipment for review. A person decides whether to repair, recover, or retire it. Record the reason and approval before changing its status. Keep a manual route for unusual cases.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test a small equipment set.</h2>
          <p>Use fictional records to test a normal handoff, overdue service, and missing asset. Check that each exception has an owner. This is a planning example, not a client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/work-order-automation">Work order automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
