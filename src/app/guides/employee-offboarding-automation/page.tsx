import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/employee-offboarding-automation";
const headline = "Employee offboarding automation for HR and IT handoffs";
const description = "Plan employee offboarding automation across HR, IT, and managers. Track access removal, asset return, exceptions, and human sign-off.";
const summary = "Give every departure a named owner, a clear access list, and a checked finish.";

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
  alternates: { canonical: "/guides/employee-offboarding-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function EmployeeOffboardingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Employee offboarding</div>
          <h1>Employee offboarding automation<br /><span>with a checked finish.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your offboarding workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Set the handoff before the last day.</h2>
          <p>HR confirms the departure date and the manager names the work to transfer. IT lists each account, shared folder, device, and access owner. Agree when access should end and who can approve an exception.</p>
        </section>

        <section className={styles.service}>
          <h2>Track each step to completion.</h2>
          <p>In an illustrative flow, an approved HR change opens tasks for IT, the manager, and the asset owner. Each task has a due date and a completion record. IT checks access removal in each connected system, not just the first request.</p>
          <p>A missing account, failed removal, or delayed device return stays open for a named reviewer. Do not mark the departure complete because a notice was sent.</p>
        </section>

        <section className={styles.choice}>
          <h2>Keep decisions with people.</h2>
          <p>The manager approves file and work transfers. HR handles employment details. IT confirms access is gone. A person reviews unusual cases, including shared accounts and active work that another owner must take over.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test one departure safely.</h2>
          <p>Use fictional records to test a normal exit, an urgent exit, and a failed account removal. Check the recovery path and final sign-off. This is a planning example, not a delivered client result. Eden scopes custom work and fees through an individual proposal. <Link href="/contact">Ask Eden about your offboarding handoffs</Link>.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/guides/employee-onboarding-automation">Employee onboarding automation</Link></li>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
