import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/sales-quotation-automation";
const headline = "Sales quotation automation with human approval";
const searchTitle = "Sales Quotation Automation for Sales Teams | EdenCORP";
const description = "Plan sales quotation automation from request to approval. Check prices and terms, flag exceptions, and let a person release each customer quote.";
const summary = "Give sales teams a clear path from a quote request to a checked customer proposal.";

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
  alternates: { canonical: "/guides/sales-quotation-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function SalesQuotationAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Sales workflows</div>
          <h1>Sales quotation automation<br /><span>with human approval.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your quote handoff <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Capture the request once.</h2>
          <p>Start with the customer, items or services, quantities, requested date, and sales owner. Keep the source request beside the quote record so a reviewer can check what changed.</p>
        </section>
        <section className={styles.service}>
          <h2>Check before drafting.</h2>
          <p>In an illustrative flow, the system checks required fields and draws approved item details from the source your team maintains. It flags missing prices, unusual discounts, expired terms, and tax questions for a named owner.</p>
          <p>The draft can then carry the checked items and terms into your quote template. A changed scope returns to review. The workflow does not decide which commercial terms to offer.</p>
        </section>
        <section className={styles.choice}>
          <h2>Approve what the customer sees.</h2>
          <p>A sales lead checks the final total, terms, and recipient before release. Record the approver and version sent. If an exception remains open, hold the quote until a person resolves it.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test the handoff with sample quotes.</h2>
          <p>Use fictional requests for a standard quote, a missing price, and a changed discount. Check where each case stops and how it returns to the sales owner. This is a planning example, not a delivered client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/order-processing-automation">Order processing automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
