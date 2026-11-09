import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/procurement-automation";
const headline = "Procurement automation with clear approval handoffs";
const searchTitle = "Procurement Automation for Approval Handoffs | EdenCORP";
const description = "Plan procurement automation from purchase request to approved order and invoice match. Keep supplier checks, exceptions, and final decisions with your team.";
const summary = "Connect purchase requests, supplier checks, orders, and invoice review without losing the person who owns each decision.";

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
  alternates: { canonical: "/guides/procurement-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function ProcurementAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Procurement</div>
          <h1>Procurement automation<br /><span>with clear handoffs.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your procurement workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Map one request from start to finish.</h2>
          <p>Start with who requests a purchase, who approves its budget, and who checks the supplier. Record the systems that hold those decisions. A shared form can collect details, but it must not replace an approval.</p>
        </section>
        <section className={styles.service}>
          <h2>Move the record, not the decision.</h2>
          <p>In an illustrative flow, an approved request becomes a purchase order. The workflow passes its ID and approved amount to purchasing. A changed amount, missing supplier check, or duplicate order stops for a named reviewer.</p>
          <p>When an invoice arrives, match it against the order and receipt. Route any mismatch to the owner who can resolve it. Finance releases payment only after its own review.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep an audit trail people can use.</h2>
          <p>Record who approved each step, when it happened, and what changed. Let teams see the current owner and next action. Keep sensitive supplier and payment details in approved systems, with access limited to the right roles.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test a narrow process first.</h2>
          <p>Use fictional records for a normal order, a duplicate, and an invoice mismatch. Confirm each case reaches the right person. These are planning examples, not client results. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/guides/vendor-onboarding-automation">Vendor onboarding automation</Link></li>
            <li><Link className={styles.related} href="/guides/purchase-order-automation">Purchase order automation</Link></li>
            <li><Link className={styles.related} href="/guides/accounts-payable-automation">Accounts payable automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
