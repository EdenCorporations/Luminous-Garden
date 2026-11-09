import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/claims-processing-automation";
const headline = "Claims processing automation with human decisions";
const searchTitle = "Claims Processing Automation for Operations Teams | EdenCORP";
const description = "Plan claims processing automation for intake, missing details, review queues, and human decisions. See a practical workflow for your team.";
const summary = "Bring claim documents and next steps into one record, while your team keeps every decision.";

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
  alternates: { canonical: "/guides/claims-processing-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function ClaimsProcessingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Claims workflows</div>
          <h1>Claims processing automation<br /><span>with human decisions.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your claims workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Collect the claim.</h2>
          <p>Record the claim ID, source, date, and required documents. Put each item in one case record. Route missing details to a person before review begins.</p>
        </section>
        <section className={styles.service}>
          <h2>Prepare a review queue.</h2>
          <p>In an illustrative flow, agreed rules flag duplicate IDs, missing files, and mismatched fields. Show the reason for each flag. Keep the original submission and every later change.</p>
          <p>Assign each case to the right reviewer. Show its owner, due date, and current hold. Reminders can surface delays without changing a decision.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep decisions with people.</h2>
          <p>A reviewer checks the evidence and decides what happens next. Record their decision and reason. Move a case forward only after that approval. Keep a manual path for unusual cases.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test the exceptions.</h2>
          <p>Try fictional cases with a complete file, a missing document, and a repeated ID. Check each route before using real claims. This is a planning example, not a client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/document-processing-automation">Document processing automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
