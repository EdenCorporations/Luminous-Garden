import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/contract-management-automation";
const headline = "Contract management automation with human review.";
const searchTitle = "Contract Management Automation With Human Review | EdenCORP";
const description = "Plan contract management automation for intake, approvals, signing, and renewals. See how people review terms and what Eden can scope around your tools.";
const summary = "Keep contract handoffs and renewal dates visible while people make the legal and commercial decisions.";

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
  title: searchTitle,
  description,
  alternates: { canonical: "/guides/contract-management-automation" },
  openGraph: { title: searchTitle, description, url, type: "article" },
};

export default function ContractManagementAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Contracts</div>
          <h1>Contract management automation<br /><span>with human review.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your contract workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start with one intake route.</h2>
          <p>Record who requested the contract, its type, counterparty, owner, and target date. Keep the original document in the approved system. An assigned person checks missing details before a draft moves forward.</p>
        </section>

        <section className={styles.service}>
          <h2>Make each handoff clear.</h2>
          <p>In an illustrative flow, a request goes to legal and then to the commercial owner. The workflow records the current version, decision, and next reviewer. It can remind people when a response is due.</p>
          <p>A change to terms returns to the right reviewer. No rule should approve wording, accept risk, or sign a contract on someone&apos;s behalf.</p>
        </section>

        <section className={styles.choice}>
          <h2>Track what happens after signing.</h2>
          <p>Once people approve and sign, record the final location, owner, renewal date, and notice period. Reminders give that owner time to review an extension or exit. They do not make the decision.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test exceptions before launch.</h2>
          <p>Try a missing signer, conflicting versions, a rejected clause, and a missed reminder. Each needs a visible owner and a manual route. This is a planning example, not a delivered client result or legal advice. Eden can scope the handoffs around your tools.</p>
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
