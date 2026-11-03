import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/vendor-onboarding-automation";
const headline = "Vendor onboarding automation with clear approvals.";
const description = "Plan vendor onboarding automation for procurement teams. Check supplier details, route exceptions, and approve each handoff before purchasing begins.";
const summary = "Give procurement one clear route from a supplier request to an approved vendor record.";

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
  alternates: { canonical: "/guides/vendor-onboarding-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function VendorOnboardingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Procurement workflows</div>
          <h1>Vendor onboarding automation<br /><span>with clear approvals.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your vendor handoff <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with a complete request.</h2>
          <p>Name the person requesting the supplier, the goods or service needed, and the procurement owner. List the checks your team requires before a vendor can receive a purchase order. Keep private supplier records in approved systems.</p>
        </section>
        <section className={styles.service}>
          <h2>Route each check to its owner.</h2>
          <p>In an illustrative flow, a request opens tasks for procurement and finance. Each owner checks the details they control, records a decision, and returns missing information to the requester. A completed form does not count as approval.</p>
          <p>A duplicate vendor, changed bank detail, or missing document pauses the affected step. A named reviewer decides how to resolve it. The workflow keeps that decision with the source record.</p>
        </section>
        <section className={styles.choice}>
          <h2>Release the vendor record deliberately.</h2>
          <p>Procurement confirms the approved supplier and finance confirms the payment details before the record becomes available for purchasing. Keep the approval date and owner visible. Send later changes through the same checks.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test one supplier type first.</h2>
          <p>Use fictional records for a normal request, a duplicate, and a changed payment detail. Check where each case stops and who can restart it. This is a planning example, not a delivered client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/purchase-order-automation">Purchase order automation</Link></li>
            <li><Link className={styles.related} href="/guides/accounts-payable-automation">Accounts payable automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
