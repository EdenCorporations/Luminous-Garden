import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/order-processing-automation";
const headline = "Order processing automation with human checks.";
const description = "Plan order processing automation for customer orders, stock checks, and handoffs. See an illustrative flow with clear human review.";
const summary = "Move a customer order from intake to fulfillment without losing the exceptions that need a person.";

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
  alternates: { canonical: "/guides/order-processing-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function OrderProcessingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Sales orders</div>
          <h1>Order processing automation<br /><span>with human checks.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your order workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with the customer order.</h2>
          <p>Choose where orders enter: a form, an inbox, or a sales system. Name the record that owns the order number, customer details, items, and requested date. This guide covers customer sales orders, not approvals to buy from suppliers.</p>
        </section>
        <section className={styles.service}>
          <h2>Check before handoff.</h2>
          <p>In an illustrative flow, a new order starts checks for required fields, duplicate numbers, and stock. A valid order reaches the team that confirms it. The workflow records each result before sending an approved order to fulfillment.</p>
          <p>If stock is short or a customer detail conflicts, stop the handoff. Show the original order and the failed check to a named person. Do not promise a delivery date from an unconfirmed stock count.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep changes visible.</h2>
          <p>Test edits, cancellations, split shipments, and a failed system update. Record who approved each change and which teams need the new version. People decide exceptions and customer promises.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test one order type first.</h2>
          <p>Compare the new route with the current process for a small sample. Check missing orders, duplicate handoffs, and unresolved exceptions before adding more order types. This is a planning example, not a delivered client result. Eden can scope work around your systems.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/inventory-management-automation">Inventory management automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
