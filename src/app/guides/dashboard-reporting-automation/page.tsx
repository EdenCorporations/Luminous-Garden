import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Plan dashboard reporting automation around source checks, clear exceptions, and a human review before leaders act on the numbers.";
const url = "https://www.edencorp.org/guides/dashboard-reporting-automation";
const headline = "Dashboard reporting starts with trustworthy inputs.";
const summary = "Bring scattered figures into one view, then give someone the chance to check them before a decision.";
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
  title: "Dashboard reporting automation guide | EdenCORP",
  description,
  alternates: { canonical: "/guides/dashboard-reporting-automation" },
  openGraph: {
    title: "Dashboard reporting automation guide | EdenCORP",
    description,
    url: "/guides/dashboard-reporting-automation",
    type: "article",
  },
};

export default function DashboardReportingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Reporting</div>
          <h1>Dashboard reporting<br /><span>starts with trustworthy inputs.</span></h1>
          <p>Bring scattered figures into one view, then give someone the chance to check them before a decision.</p>
          <Link className={styles.primary} href="/contact">Discuss your reporting workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Define the question first.</h2>
          <p>A CEO dashboard might track orders, delivery delays, and cash due. Name each measure, its owner, its source, and when it should update. Agree what a leader should do when a measure changes.</p>
        </section>

        <section className={styles.service}>
          <h2>Check data before it joins the view.</h2>
          <p>Imagine sales in a spreadsheet, delivery updates in another system, and invoices in accounting software. A workflow could pull each source on a schedule, keep its original timestamp, and check for missing dates, duplicate orders, and mismatched totals.</p>
          <p>This is an illustrative design, not a delivered client dashboard. A failed check should hold the affected figure and tell its owner what needs review. It should not silently turn missing data into zero.</p>
        </section>

        <section className={styles.choice}>
          <h2>Make exceptions visible.</h2>
          <p>Show the last successful update beside each measure. Route an unmatched invoice or late source to a named reviewer. Keep the prior approved figure visible with its date until someone resolves the issue.</p>
        </section>

        <section className={styles.choice}>
          <h2>Keep the final call with a person.</h2>
          <p>A reviewer can confirm the figures and record corrections before the dashboard reaches leadership. Test a missing file, a duplicate row, and a source outage. Eden can scope a custom workflow around your existing tools and reporting decisions.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/google-spreadsheet-automation">Google spreadsheet automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
