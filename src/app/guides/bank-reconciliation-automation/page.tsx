import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/bank-reconciliation-automation";
const headline = "Bank reconciliation automation with a clear review trail";
const searchTitle = "Bank Reconciliation Automation for Finance Teams | EdenCORP";
const description = "Plan bank reconciliation automation that matches statement lines to ledger entries, flags exceptions, and keeps final approval with your finance team.";
const summary = "Match statement lines to your ledger, show what needs attention, and keep the final sign-off with your team.";

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
  alternates: { canonical: "/guides/bank-reconciliation-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function BankReconciliationAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Finance workflows</div>
          <h1>Bank reconciliation<br /><span>with a clear review trail.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your reconciliation workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with the records.</h2>
          <p>Choose one bank account and one closing period. Identify the statement, ledger, and person who signs off. Agree how dates, references, amounts, and fees should line up before any matching starts.</p>
        </section>
        <section className={styles.service}>
          <h2>Match lines, then show the gaps.</h2>
          <p>In an illustrative flow, the system imports statement lines and ledger entries. It proposes matches using agreed rules and records why each pair fits. It leaves uncertain pairs open for review.</p>
          <p>A duplicate, missing entry, bank fee, or timing difference goes into an exception list with its source records. A finance owner checks the cause and records any adjustment. The system does not post an adjustment on its own.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep closeout with people.</h2>
          <p>A reviewer checks unresolved items, the matched balance, and the adjustment record. They approve the close or return it for correction. Keep the original statement and the review trail available for the next period.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test one period first.</h2>
          <p>Try fictional records with a clean match, a duplicate, and a missing deposit. Compare the proposed results with manual review before using real financial data. These are planning cases, not client results. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/financial-reporting-automation">Financial reporting automation</Link></li>
            <li><Link className={styles.related} href="/guides/accounts-receivable-automation">Accounts receivable automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
