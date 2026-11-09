import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/compliance-workflow-automation";
const headline = "Compliance workflow automation with review in the loop";
const searchTitle = "Compliance Workflow Automation for Evidence Handoffs | EdenCORP";
const description = "Plan a compliance workflow that gathers evidence, routes gaps to owners, and keeps final review with your team. See a practical starting process.";
const summary = "Bring policy evidence, missing items, and reviewer decisions into one clear handoff.";

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
  alternates: { canonical: "/guides/compliance-workflow-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function ComplianceWorkflowAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Compliance</div>
          <h1>Compliance workflows<br /><span>with review in the loop.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your evidence workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with one recurring review.</h2>
          <p>Choose a company policy, the evidence it needs, and the person who approves the final record. Note where each item lives and when it must be checked. Keep the policy owner responsible for its meaning.</p>
        </section>
        <section className={styles.service}>
          <h2>Gather evidence with its source.</h2>
          <p>In an illustrative flow, a scheduled request asks system owners for access records and signed policy acknowledgments. The workflow records each source, owner, and date. A missing file or stale record stays visible instead of appearing complete.</p>
          <p>Route each gap to the person who can resolve it. Let that person add evidence or explain why an item does not apply. Keep the original record alongside any correction.</p>
        </section>
        <section className={styles.choice}>
          <h2>Put decisions with people.</h2>
          <p>A reviewer checks the evidence and records a decision before a report moves on. The workflow can remind owners and track status. It cannot decide whether your organization meets a law, standard, or contract.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test the exceptions first.</h2>
          <p>Try fictional cases with a complete record, a missing item, and an outdated file. Confirm that each reaches the right reviewer. These examples are planning cases, not client results. Eden scopes custom systems and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/guides/document-processing-automation">Document processing automation</Link></li>
            <li><Link className={styles.related} href="/guides/approval-workflow-automation">Approval workflow automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
