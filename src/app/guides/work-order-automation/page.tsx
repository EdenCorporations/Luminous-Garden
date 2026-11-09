import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/work-order-automation";
const headline = "Work order automation with clear maintenance handoffs";
const searchTitle = "Work Order Automation for Maintenance Teams | EdenCORP";
const description = "Plan work order automation for maintenance requests, assignment, job updates, and human sign-off. See a practical workflow for your team.";
const summary = "Give each maintenance request an owner, a job record, and a checked closeout.";

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
  alternates: { canonical: "/guides/work-order-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function WorkOrderAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Maintenance workflows</div>
          <h1>Work order automation<br /><span>with clear handoffs.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your work orders <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with a request.</h2>
          <p>Record the asset or location, fault, requester, and time. Ask for the details a technician needs. Send incomplete requests to a person before assigning work.</p>
        </section>
        <section className={styles.service}>
          <h2>Assign and track the job.</h2>
          <p>In an illustrative flow, agreed rules suggest a team from the job type and location. A manager checks urgency, available staff, and safety needs before assigning the order.</p>
          <p>The assigned person records progress, parts used, and any hold. If a repair needs approval or extra parts, the order waits with a named owner.</p>
        </section>
        <section className={styles.choice}>
          <h2>Close after a check.</h2>
          <p>Show the work completed, time, parts, and any remaining fault. A supervisor reviews the result before closing the order. Keep the history linked to the asset for future requests.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test the exceptions.</h2>
          <p>Use fictional requests for a routine repair, a missing asset, and an urgent fault. Check that each reaches the right person and a held order stays open. This is a planning example, not a client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/quality-control-automation">Quality control automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
