import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/invoice-matching-automation";
const headline = "Invoice matching automation with exception review";
const description = "Plan invoice matching automation across purchase orders, receipts, and supplier invoices. Check differences, route exceptions, and keep payment approval with people.";
const summary = "Compare each supplier invoice with its purchase order and receipt, then give mismatches a clear human review path.";

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
  title: "Invoice Matching Automation for Finance Teams | EdenCORP",
  description,
  alternates: { canonical: "/guides/invoice-matching-automation" },
  openGraph: { title: headline, description, url, type: "article" },
};

export default function InvoiceMatchingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Finance workflows</div>
          <h1>Invoice matching<br /><span>with a review path.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your matching process <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Define what must match.</h2>
          <p>Start with one supplier and bill type. Identify where purchase orders, goods receipts, and invoices arrive. Agree which identifiers, quantities, prices, and tax fields your team checks. A two-way match compares the order and invoice. A three-way match also checks the receipt.</p>
        </section>
        <section className={styles.service}>
          <h2>Show each difference.</h2>
          <p>In an illustrative flow, the workflow connects invoice lines to an order and receipt. It checks supplier identity, item, quantity, and price against agreed rules. A matched bill moves to the existing approval queue, not straight to payment.</p>
          <p>A partial delivery, missing receipt, duplicate invoice, or price change goes to a named reviewer. Show the original records and the exact difference. Let that person accept, correct, or reject the case under your policy.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep the decision trail.</h2>
          <p>Record the source files, rule result, reviewer, and final decision together. Prevent a retry from creating a second payable record. Keep payment release under a separate human approval.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test before connecting live bills.</h2>
          <p>Try fictional records for a full match, partial receipt, changed price, and duplicate bill. Compare each outcome with a manual review. These are planning cases, not client results. Eden scopes custom integration and fees in an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/guides/accounts-payable-automation">Accounts payable automation</Link></li>
            <li><Link className={styles.related} href="/guides/purchase-order-automation">Purchase order automation</Link></li>
            <li><Link className={styles.related} href="/guides/invoice-processing-automation">Invoice processing automation</Link></li>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
