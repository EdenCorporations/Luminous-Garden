import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/customer-support-automation";
const headline = "Customer support automation with a human reply";
const description = "Plan customer support automation for intake, triage, exceptions, and a reviewed reply. See an illustrative workflow for your team.";
const summary = "Give each request an owner and a next step, while your team keeps control of the answer.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline,
      description: summary,
      url,
      mainEntityOfPage: url,
      publisher: { "@id": "https://www.edencorp.org/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.edencorp.org/" },
        { "@type": "ListItem", position: 2, name: headline, item: url },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: `${headline} | EdenCORP`,
  description,
  alternates: { canonical: "/guides/customer-support-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function CustomerSupportAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Customer support</div>
          <h1>Customer support automation<br /><span>with a human reply.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your support workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start at intake.</h2>
          <p>Choose where requests enter: a form, shared inbox, or another system. Capture the question, contact route, and order or account reference only when needed. Keep private details in approved tools.</p>
        </section>

        <section className={styles.service}>
          <h2>Route the next step.</h2>
          <p>In an illustrative flow, a new request is checked for missing details and duplicates. A simple rule assigns a team owner by topic. The owner sees the request and its source before deciding what to do.</p>
          <p>This is a planning example, not a delivered client result. An assigned ticket is not a resolved issue. Track who owns the reply and whether the customer has heard back.</p>
        </section>

        <section className={styles.choice}>
          <h2>Hold exceptions for people.</h2>
          <p>Billing disputes, uncertain answers, and urgent cases should go to a person. Give them the source details and a clear way to change the route. Do not send a guessed answer.</p>
        </section>

        <section className={styles.choice}>
          <h2>Review the reply.</h2>
          <p>Let a support owner check the answer and send it through the usual channel. Test a normal request, a duplicate, and a missing reference before launch. Eden can scope the handoffs and tool connections around your process.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/automation-project-checklist">Automation project checklist</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
