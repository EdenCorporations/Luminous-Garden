import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/accounts-payable-automation";
const headline = "Accounts payable automation with human approval.";
const description = "Plan accounts payable automation from invoice intake and purchase-order matching to exception review and payment handoff. See an illustrative workflow.";
const summary = "Connect the steps from an incoming invoice to an approved payment handoff, with a person in charge of exceptions and release.";

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
  alternates: { canonical: "/guides/accounts-payable-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function AccountsPayableAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Finance workflows</div>
          <h1>Accounts payable automation<br /><span>with human approval.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your payable workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Map the whole payable route.</h2>
          <p>List where invoices arrive, where purchase orders and receipts live, and who approves a bill. Name the accounting record and the person who authorizes payment. This route covers more than reading an invoice.</p>
        </section>
        <section className={styles.service}>
          <h2>Check before approval.</h2>
          <p>In an illustrative flow, a new invoice is checked for missing fields and duplicate numbers. Where relevant, compare its supplier, amount, and items with the purchase order and receipt. Record each match before routing the bill to a reviewer.</p>
          <p>A price difference, missing receipt, or changed supplier detail stops the automatic handoff. Give a named person the source records and the reason for the hold. Do not infer that a match means payment is approved.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep payment release with a person.</h2>
          <p>After review, record the approval and prepare the handoff to the agreed accounting or payment system. A person checks the final payee, amount, and due date before release. Test a rejected bill and a failed system update too.</p>
        </section>
        <section className={styles.choice}>
          <h2>Start with one bill type.</h2>
          <p>Try fictional records for a normal bill, a duplicate, and a mismatch. Compare the results with your current process before expanding. This is a planning example, not a delivered client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/invoice-processing-automation">Invoice processing automation</Link></li>
            <li><Link className={styles.related} href="/guides/purchase-order-automation">Purchase order automation</Link></li>
            <li><Link className={styles.related} href="/guides/accounts-receivable-automation">Accounts receivable automation</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
