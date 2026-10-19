import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/employee-onboarding-automation";
const headline = "Employee onboarding automation with a clear handoff";
const description = "Plan employee onboarding automation across HR, IT, and managers. See a practical handoff, exception route, and human access approval.";
const summary = "Give each new hire a clear path from accepted offer to ready first day, without losing the human checks.";

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
  alternates: { canonical: "/guides/employee-onboarding-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function EmployeeOnboardingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Employee onboarding</div>
          <h1>Employee onboarding automation<br /><span>with a clear handoff.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your onboarding workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Map the handoffs first.</h2>
          <p>Start at the accepted offer. Name the owner of each step: HR collects required details, IT prepares approved access, and the manager confirms the role and start date. Record where each request begins and which system holds its status.</p>
        </section>

        <section className={styles.service}>
          <h2>Show what a workflow could do.</h2>
          <p>In an illustrative process, HR marks an offer accepted. A workflow checks the start date and role, opens equipment and account requests, and gives each owner a due date. The manager reviews the access list before IT grants permissions.</p>
          <p>This is a planning example, not a delivered client result. The workflow should show a pending item and its owner, not declare the employee ready because an email was sent.</p>
        </section>

        <section className={styles.choice}>
          <h2>Stop on missing or changed facts.</h2>
          <p>A changed start date, unclear role, missing form, or duplicate request should pause the affected step. Send it to a named reviewer. Keep the previous value and the decision so HR and IT can see what changed.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test the first day.</h2>
          <p>Try a normal hire, a delayed start, and an IT system outage. Confirm that a person can finish urgent steps manually. If your HR system already handles these handoffs, use it. Eden can scope custom connections when work crosses tools.</p>
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
