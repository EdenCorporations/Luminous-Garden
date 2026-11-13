import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/data-validation-automation";
const headline = "Data validation automation with a human review path";
const description = "Plan data validation automation that checks records against clear rules, routes exceptions to people, and keeps a review trail before data moves on.";
const summary = "Check incoming records against agreed rules, show exceptions, and let your team decide what gets corrected.";

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
  title: "Data Validation Automation for Business Records | EdenCORP", description,
  alternates: { canonical: "/guides/data-validation-automation" },
  openGraph: { title: headline, description, url, type: "article" },
};

export default function DataValidationAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Data workflows</div>
          <h1>Data validation<br /><span>before records move on.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your data workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Choose one handoff.</h2>
          <p>Start where a file, form, or system passes records to another team. Name the source, destination, owner, and fields that must be present. Agree what a valid value means before writing a rule.</p>
        </section>
        <section className={styles.service}>
          <h2>Check rules before transfer.</h2>
          <p>In an illustrative flow, an incoming supplier file is checked for missing identifiers, wrong date formats, duplicate rows, and values outside agreed ranges. Valid rows can move to the next step with a record of each check.</p>
          <p>Questionable rows wait in an exception list with the original value and the rule they failed. A person checks the source, corrects the record, or rejects it. The system does not invent a replacement value.</p>
        </section>
        <section className={styles.choice}>
          <h2>Make retries safe.</h2>
          <p>Keep the original input, check result, reviewer decision, and transfer status together. If a transfer fails, retry only the approved rows and avoid creating duplicates. Show the owner what still needs attention.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test with fictional rows.</h2>
          <p>Try one valid row, one missing field, one duplicate, and one corrected exception. Compare each output with a manual check before using real records. These are planning cases, not client results. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/data-entry-automation">Data entry automation</Link></li>
            <li><Link className={styles.related} href="/guides/document-processing-automation">Document processing automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
