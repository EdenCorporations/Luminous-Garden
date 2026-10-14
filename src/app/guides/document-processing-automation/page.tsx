import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/document-processing-automation";
const headline = "Document processing needs a check before handoff.";
const description = "Plan document processing automation for incoming files, field checks, exceptions, and human review before records move downstream.";
const summary = "Turn incoming documents into checked records without hiding unreadable files or uncertain fields.";

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
  title: "Document processing automation guide | EdenCORP",
  description,
  alternates: { canonical: "/guides/document-processing-automation" },
  openGraph: {
    title: "Document processing automation guide | EdenCORP",
    description,
    url: "/guides/document-processing-automation",
    type: "article",
  },
};

export default function DocumentProcessingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Documents</div>
          <h1>Document processing<br /><span>needs a check before handoff.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your document workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start with the files you receive.</h2>
          <p>List each document type, where it arrives, the fields you need, and the record it should update. For example, a supplier form might arrive by email before anyone can add the supplier to an internal system.</p>
        </section>

        <section className={styles.service}>
          <h2>Extract, then check.</h2>
          <p>An illustrative workflow could save the original file, read the supplier name and account details, then compare them with required fields and existing records. Keep the source file and the extracted values together so a reviewer can trace each entry.</p>
          <p>This is a planning example, not a delivered client system. An unreadable scan, missing tax field, or duplicate supplier should stop the transfer and show the reason. Never treat an uncertain reading as a confirmed fact.</p>
        </section>

        <section className={styles.choice}>
          <h2>Give exceptions an owner.</h2>
          <p>Route held files to a named person with the original attached. That person can correct a field, request a clearer file, or reject the entry. Record the decision before any downstream update.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test the handoff.</h2>
          <p>Try a clear file, a duplicate, and an unreadable scan. Check what happens if the receiving system is unavailable. Eden can scope a custom workflow around your documents, systems, review rules, and proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/invoice-processing-automation">Invoice processing automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
