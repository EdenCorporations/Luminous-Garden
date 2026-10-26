import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/accounts-receivable-automation";
const headline = "Accounts receivable automation with clear exceptions.";
const description = "Plan accounts receivable automation across invoice delivery, payment matching, overdue review, and human decisions. See an illustrative workflow.";
const summary = "Connect the steps from an approved invoice to a matched payment, while giving disputed and overdue items a clear owner.";

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
  alternates: { canonical: "/guides/accounts-receivable-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function AccountsReceivableAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Finance workflows</div>
          <h1>Accounts receivable automation<br /><span>with clear exceptions.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your receivables workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start at the approved invoice.</h2>
          <p>Map where the sales order, delivered work, invoice, due date, and customer record live. Name who can approve a correction. Accounts receivable starts when your organization asks to be paid; accounts payable handles bills your organization owes.</p>
        </section>
        <section className={styles.service}>
          <h2>Match the payment, then check the gap.</h2>
          <p>In an illustrative flow, send an approved invoice through the agreed channel and record its delivery status. When a payment arrives, compare its reference, customer, amount, and currency with the open invoice before marking it paid.</p>
          <p>A short payment, duplicate transfer, missing reference, or disputed charge goes to a named reviewer with the source records. Keep the invoice open until that person decides how to allocate or correct the payment.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep follow-up under human control.</h2>
          <p>Use the agreed due date to create a review queue, not an automatic demand. A person checks prior messages, disputes, and promised payment dates before approving any customer reminder. Record the decision and next review date.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test one invoice type first.</h2>
          <p>Try fictional records for a full payment, a partial payment, and a disputed invoice. Check the accounting handoff and the manual recovery path when a system update fails. This is a planning example, not a delivered client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/invoice-processing-automation">Invoice processing automation</Link></li>
            <li><Link className={styles.related} href="/guides/purchase-order-automation">Purchase order automation</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
