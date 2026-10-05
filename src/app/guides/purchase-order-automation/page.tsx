import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Plan purchase order automation around approvals, missing details, and handover. See an illustrative request path before you commission a build.";

export const metadata: Metadata = {
  title: "Purchase order automation with approval checks | EdenCORP",
  description,
  alternates: { canonical: "/guides/purchase-order-automation" },
  openGraph: {
    title: "Purchase order automation with approval checks | EdenCORP",
    description,
    url: "/guides/purchase-order-automation",
    type: "article",
  },
};

export default function PurchaseOrderAutomationGuide() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Purchase approvals</div>
          <h1>Purchase order automation<br /><span>with a clear approval path.</span></h1>
          <p>A request can be complete yet still need a spending decision. Map who approves it before any order reaches a supplier.</p>
          <Link className={styles.primary} href="/contact">Discuss your purchase workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start with the request.</h2>
          <p>Record the requester, item, quantity, supplier, cost, department, and needed date. Set spending limits and name a backup approver. Keep the original request available.</p>
        </section>

        <section className={styles.service}>
          <h2>Route the exception.</h2>
          <p>Imagine a team collecting purchase requests through a form and email. A workflow could flag missing quotes, duplicate requests, and costs above a team&apos;s limit. A person reviews those cases before approval.</p>
          <p>This is an illustrative process, not a delivered client result. The system should record who approved each request and stop if the right approver is unavailable.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test the handoff.</h2>
          <p>Try a complete request, a duplicate, a missing quote, and a failed transfer to the purchasing system. Check that retries do not create a second order. Keep supplier sending behind the agreed approval step.</p>
        </section>

        <section className={styles.choice}>
          <h2>Choose the right build.</h2>
          <p>An existing purchasing tool may cover standard approvals. Custom work may help when requests cross forms, inboxes, and other systems. Eden scopes the route, tests, access, handover, and support through a project proposal.</p>
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
