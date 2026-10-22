import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/recruitment-workflow-automation";
const headline = "Recruitment workflow automation with human decisions";
const description = "Plan recruitment workflow automation for request intake, candidate handoffs, exceptions, and recruiter decisions. See an illustrative staffing workflow.";
const summary = "Move hiring requests and candidate updates between people without handing hiring decisions to software.";

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
  alternates: { canonical: "/guides/recruitment-workflow-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function RecruitmentWorkflowAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Recruitment</div>
          <h1>Recruitment workflow automation<br /><span>with human decisions.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your hiring workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Capture the request.</h2>
          <p>Start with a hiring request from a client or team. Record the role, required skills, deadline, owner, and approved contact route. Ask a recruiter to confirm the brief before sourcing begins.</p>
        </section>

        <section className={styles.service}>
          <h2>Keep each handoff visible.</h2>
          <p>In an illustrative flow, an application enters the existing applicant system. A rule flags missing documents and sends an acknowledgment. The recruiter sees the application, source, and next action in one place.</p>
          <p>When a recruiter approves a shortlist, the workflow can pass it to a client contact and track feedback. It should not rank candidates or decide who advances on its own.</p>
        </section>

        <section className={styles.choice}>
          <h2>Stop at exceptions.</h2>
          <p>Duplicate profiles, unclear consent, changed role requirements, or a missing reply need a named person. Show the record and its history so the recruiter can correct the route. Keep candidate details in approved systems.</p>
        </section>

        <section className={styles.choice}>
          <h2>Leave hiring decisions with people.</h2>
          <p>A recruiter and hiring manager review interviews, offers, and rejections. Test a normal application, a duplicate, and an incomplete request before launch. This is a planning example, not a delivered client result. Eden can scope the handoffs around your tools.</p>
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
