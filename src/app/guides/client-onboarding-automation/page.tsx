import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/client-onboarding-automation";
const headline = "Client onboarding automation with a clear handoff";
const description = "Plan client onboarding automation from signed scope to kickoff. See an illustrative intake, exception, and human approval flow.";
const summary = "Move a new client from agreed scope to a ready kickoff, with each handoff visible to the right person.";

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
  alternates: { canonical: "/guides/client-onboarding-automation" },
  openGraph: { title: `${headline} | EdenCORP`, description, url, type: "article" },
};

export default function ClientOnboardingAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Client onboarding</div>
          <h1>Client onboarding automation<br /><span>with a clear handoff.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your onboarding workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start with the agreed scope.</h2>
          <p>Choose a clear trigger, such as an approved proposal or signed agreement. Name who confirms the scope, owns the client record, and hands work to delivery. Keep the kickoff date and open questions in one visible place.</p>
        </section>

        <section className={styles.service}>
          <h2>Show each next step.</h2>
          <p>In an illustrative process, a signed agreement opens an intake checklist. The client supplies contacts and required files. The workflow assigns a delivery owner and prepares a kickoff note for that person to review before it goes out.</p>
          <p>This is a planning example, not a delivered client result. A sent request does not mean the intake is complete. Show what is missing, who owns it, and when the team can proceed.</p>
        </section>

        <section className={styles.choice}>
          <h2>Pause when facts do not match.</h2>
          <p>Missing files, conflicting dates, or a scope change should stop only the affected step. Send the issue to a named reviewer. Keep their decision beside the request so the next person sees what changed.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test the handoff before launch.</h2>
          <p>Try a complete intake, a late file, and a changed scope. Check that a person can approve the kickoff and finish urgent work if a tool fails. Eden can scope custom connections when your process crosses systems.</p>
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
