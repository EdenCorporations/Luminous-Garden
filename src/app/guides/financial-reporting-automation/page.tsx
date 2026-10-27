import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/financial-reporting-automation";
const headline = "Financial reporting automation for month-end handoffs.";
const description = "Plan financial reporting automation for month-end close: collect source figures, check exceptions, and keep final report approval with your finance lead.";
const summary = "Give your finance lead a clear path from source records to a reviewed monthly report.";

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
  title: `${headline} | EdenCORP`, description,
  alternates: { canonical: "/guides/financial-reporting-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function FinancialReportingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Finance workflows</div>
          <h1>Financial reporting automation<br /><span>for month-end handoffs.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your reporting workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Define the monthly handoff.</h2>
          <p>Name the finance lead who owns the report, each source owner, and the close date. List the figures needed for the monthly pack and where each comes from. Agree which version counts as final.</p>
        </section>
        <section className={styles.service}>
          <h2>Collect figures with their context.</h2>
          <p>In an illustrative flow, bring approved sales, expense, and cash records into a reporting workspace. Keep the source date, file version, and owner beside each figure. Compare totals with the source before preparing the report.</p>
          <p>Missing files, duplicate rows, late adjustments, and mismatched totals go to a named reviewer. Hold the affected figure until that person confirms a correction. Do not turn a missing value into zero.</p>
        </section>
        <section className={styles.choice}>
          <h2>Leave approval with finance.</h2>
          <p>Prepare a draft pack with open exceptions and the last approved figures. The finance lead checks changes, records adjustments, and approves the final report before it goes to leadership. Keep an audit trail of each handoff.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test one reporting cycle.</h2>
          <p>Use fictional records to test a late file, a changed total, and a failed import. Check how the team recovers before automating the next cycle. This is a planning example, not a delivered client result. Eden scopes work and fees through an individual proposal. <Link href="/contact">Ask Eden about your monthly reporting handoff</Link>.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/dashboard-reporting-automation">Dashboard reporting automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
