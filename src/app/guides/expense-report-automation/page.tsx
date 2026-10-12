import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Plan expense report automation around receipt checks, duplicate claims, human approval, and a clear handoff to accounting.";

export const metadata: Metadata = {
  title: "Expense report automation with human approval | EdenCORP",
  description,
  alternates: { canonical: "/guides/expense-report-automation" },
  openGraph: {
    title: "Expense report automation with human approval | EdenCORP",
    description,
    url: "/guides/expense-report-automation",
    type: "article",
  },
};

export default function ExpenseReportAutomationGuide() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Expense reports</div>
          <h1>Expense report automation<br /><span>with room for a human decision.</span></h1>
          <p>Collect each claim once, flag missing facts, and send the right report to the right reviewer.</p>
          <Link className={styles.primary} href="/contact">Discuss your expense workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start with the claim.</h2>
          <p>Record the employee, date, merchant, amount, currency, purpose, project, and receipt. Keep the original file with the claim. Ask which fields your accounting team actually needs before building a form.</p>
        </section>

        <section className={styles.service}>
          <h2>Let exceptions interrupt the route.</h2>
          <p>Imagine a team that receives expense sheets and receipt photos by email. A workflow could group each submission, then flag a missing receipt, a repeated merchant and amount, or a claim outside the team&apos;s stated policy.</p>
          <p>This is an illustrative design, not a delivered client result. A flag asks for review; it does not prove that a claim is wrong. Keep a person responsible for resolving unclear items.</p>
        </section>

        <section className={styles.choice}>
          <h2>Keep approval and payment separate.</h2>
          <p>Send the checked report to its named approver. Record the decision, the reason for a rejection, and any corrected version. Only approved items should move to accounting. A payment or reimbursement still follows the organization&apos;s own controls.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test the awkward cases.</h2>
          <p>Try a duplicate submission, a missing receipt, two currencies, and an absent approver. Agree who fixes each case and how the claimant hears back. If your existing expense tool already covers these steps, use it. Eden can scope custom connections when several systems leave gaps.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/approval-workflow-automation">Approval workflow automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
