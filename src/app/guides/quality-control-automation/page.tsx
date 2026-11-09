import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/quality-control-automation";
const headline = "Quality control automation with human sign-off";
const searchTitle = "Quality Control Automation for Operations Teams | EdenCORP";
const description = "Plan quality control automation for inspection intake, exception review, and approved release. See a practical workflow for operations teams.";
const summary = "Make inspection results easier to track while keeping release decisions with your team.";

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
  alternates: { canonical: "/guides/quality-control-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function QualityControlAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Operations workflows</div>
          <h1>Quality control automation<br /><span>with human sign-off.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your inspection workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with one inspection.</h2>
          <p>Choose a repeatable check with a clear owner. Record the item, inspection date, checklist version, and result. Agree which records are required before work moves forward.</p>
        </section>
        <section className={styles.service}>
          <h2>Route exceptions for review.</h2>
          <p>In an illustrative flow, a submitted result enters a shared record. A missing answer or failed check creates a review task for the responsible person. The system keeps the original result and its review history.</p>
          <p>A reviewer decides whether to accept the result, request another check, or hold the item. Automation can show the queue and reminders; it must not silently approve an exception.</p>
        </section>
        <section className={styles.choice}>
          <h2>Release only after approval.</h2>
          <p>Show the inspection result, reviewer, decision, and time in one place. Connect an approved decision to the next operational step only after the team defines that rule. Keep a manual route if a system is unavailable.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test before changing real work.</h2>
          <p>Try fictional records with a pass, a failed check, and missing details. Confirm each item reaches the right person and no held item moves forward. This is a planning example, not a client result. Eden scopes work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/approval-workflow-automation">Approval workflow automation</Link></li>
            <li><Link className={styles.related} href="/guides/work-order-automation">Work order automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
