import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Plan approval workflow automation around clear owners, missing details, and a human final decision. See an illustrative request path.";

export const metadata: Metadata = {
  title: "Approval workflow automation with human review | EdenCORP",
  description,
  alternates: { canonical: "/guides/approval-workflow-automation" },
  openGraph: {
    title: "Approval workflow automation with human review | EdenCORP",
    description,
    url: "/guides/approval-workflow-automation",
    type: "article",
  },
};

export default function ApprovalWorkflowAutomationGuide() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Approval workflows</div>
          <h1>Approval workflow automation<br /><span>without losing the human decision.</span></h1>
          <p>Move requests to the right person, with the facts they need. Keep the final decision visible and under human control.</p>
          <Link className={styles.primary} href="/contact">Discuss your approval workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Capture one complete request.</h2>
          <p>Ask who made the request, what needs approval, the reason, the amount or scope, and the deadline. Save the original record so reviewers can check it.</p>
        </section>

        <section className={styles.service}>
          <h2>Route by rule. Pause on exceptions.</h2>
          <p>Imagine a team receiving software access requests by email and form. A workflow could route routine requests to the named owner and flag missing details, duplicate entries, or unusual access.</p>
          <p>This is an illustrative process, not a delivered client result. A person decides whether to grant access. If the owner is away, the request waits for a named backup.</p>
        </section>

        <section className={styles.choice}>
          <h2>Record the decision and handoff.</h2>
          <p>Keep who approved or declined, when they decided, and what changed. Notify the requester after the decision. Test a missing owner, a rejected request, and a failed handoff before launch.</p>
        </section>

        <section className={styles.choice}>
          <h2>Choose the right build.</h2>
          <p>Existing tools may cover a single team. Custom work can connect requests across inboxes, forms, and internal systems. Eden scopes the route, tests, access, and support in a project proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/purchase-order-automation">Purchase order automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
