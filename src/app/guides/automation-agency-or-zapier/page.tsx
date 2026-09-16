import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Choose between building a Zapier workflow yourself and commissioning an automation agency. Compare delivery, ownership, testing, and proposal scope.";

export const metadata: Metadata = {
  title: "Automation agency or Zapier: who owns the work? | EdenCORP",
  description,
  alternates: { canonical: "/guides/automation-agency-or-zapier" },
  openGraph: {
    title: "Automation agency or Zapier?",
    description,
    url: "/guides/automation-agency-or-zapier",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>Automation agency or Zapier?</h1>
          <p>Build with Zapier when your team can own setup, testing, and maintenance. Consider an agency when you need help delivering those tasks.</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>What does Zapier provide?</h2>
          <p>Zapier connects apps through workflows called Zaps. A trigger starts one or more actions. Check that your apps support the steps you need, then test the complete process.</p>
        </section>

        <section className={styles.service}>
          <h2>What would you commission?</h2>
          <p>For example, a new inquiry could create a customer record and notify its owner. This is a proposed workflow, not a delivered-client result.</p>
          <p>Agree who handles duplicate entries, failed steps, and manual recovery. Define acceptance tests, documentation, account access, and support before commissioning work.</p>
        </section>

        <section className={styles.choice}>
          <h2>Does hiring replace the tool?</h2>
          <p>Not necessarily. An agency may build with a workflow tool. Agree the technology and account ownership in your proposal. Hiring help does not guarantee better results.</p>
        </section>

        <section className={styles.choice}>
          <h2>How does Eden scope the work?</h2>
          <p>Eden offers custom development, integration, consulting, and support through individual proposals. Bring one workflow to discuss. Confirm feasibility, fees, software costs, handover, and ongoing support. No entity is registered.</p>
        </section>

        <aside className={styles.notes} aria-label="Sources and related guides">
          <h2>Compare your options</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/compare/eden-vs-zapier">Eden vs Zapier</Link></li>
            <li><Link className={styles.related} href="/alternatives/zapier">Zapier alternatives</Link></li>
            <li><a className={styles.related} href="https://help.zapier.com/hc/en-us/articles/8496309697421-What-is-a-Zap">Zapier: What is a Zap?</a></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
