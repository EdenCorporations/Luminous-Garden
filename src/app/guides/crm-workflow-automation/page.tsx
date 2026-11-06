import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/crm-workflow-automation";
const headline = "CRM workflow automation with clear ownership";
const searchTitle = "CRM Workflow Automation for Sales Teams | EdenCORP";
const description = "Plan CRM workflow automation for lead intake, record checks, owner assignment, and sales handoffs. Keep customer decisions with your team.";
const summary = "Turn a new lead into a checked CRM record and a clear next action.";

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
  alternates: { canonical: "/guides/crm-workflow-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function CrmWorkflowAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Sales workflows</div>
          <h1>CRM workflow automation<br /><span>with clear ownership.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your CRM handoff <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Start with one lead record.</h2>
          <p>Capture the source, contact details, requested service, and time received. Check for an existing record before creating another one. Keep the original request for the sales owner to review.</p>
        </section>
        <section className={styles.service}>
          <h2>Route the next step.</h2>
          <p>In an illustrative flow, agreed rules suggest an owner by service or region. Missing details, duplicate matches, and unclear requests go to a person instead of an automatic assignment.</p>
          <p>Once an owner accepts the record, the CRM can set a follow-up date and show the next task. A person still decides what to say and whether the lead is a fit.</p>
        </section>
        <section className={styles.choice}>
          <h2>Keep the handoff visible.</h2>
          <p>Record who owns the lead, when they accepted it, and which step comes next. Flag overdue work for review. Do not send customer messages or change deal stages without the team’s agreed approval rule.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test exceptions before launch.</h2>
          <p>Use fictional leads with complete details, a duplicate, and a missing owner. Check each route and the human review queue. This is a planning example, not a delivered client result. Eden scopes custom work and fees through an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/sales-quotation-automation">Sales quotation automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
