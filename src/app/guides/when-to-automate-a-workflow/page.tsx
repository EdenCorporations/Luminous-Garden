import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/when-to-automate-a-workflow";
const headline = "When is a manual workflow worth automating?";
const description = "Decide whether to automate a manual workflow. Check frequency, clear rules, exceptions, ownership, and the cost of mistakes before requesting a proposal.";

export const metadata: Metadata = {
  title: `${headline} | EdenCORP`,
  description,
  alternates: { canonical: "/guides/when-to-automate-a-workflow" },
  openGraph: { title: headline, description, url, type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline, description, url, mainEntityOfPage: url, publisher: { "@id": "https://www.edencorp.org/#organization" } },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.edencorp.org/" },
      { "@type": "ListItem", position: 2, name: headline, item: url },
    ] },
  ],
};

export default function WhenToAutomateGuide() {
  return <main className={styles.guide}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <article>
      <header className={styles.hero}>
        <div className={styles.eyebrow}>Eden field notes / Workflow readiness</div>
        <h1>Automate the handoff.<br /><span>Keep the judgment.</span></h1>
        <p>Start when repeated work has a clear trigger, a known result, and someone to check exceptions.</p>
        <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
      </header>
      <section className={styles.choice}>
        <h2>Find the repeat.</h2>
        <p>List the steps your team repeats each week. Note how often they happen, the time they take, and where work waits for another person. Use observed records when possible; estimates are a starting point.</p>
      </section>
      <section className={styles.service}>
        <h2>Test the rules.</h2>
        <p>A good first candidate has a clear input, a repeatable rule, and an output your team can verify. Write down the exceptions before choosing software.</p>
        <p>Keep sensitive decisions and unusual cases with a named person. A workflow that changes every time may need a clearer process first.</p>
      </section>
      <section className={styles.choice}>
        <h2>Count the full effort.</h2>
        <p>Compare the time and errors you can actually observe with build, software, review, and maintenance costs. Do not treat an illustrative savings estimate as a result or a quote.</p>
      </section>
      <section className={styles.choice}>
        <h2>Try one safe case.</h2>
        <p>Describe a normal run, a missing input, and a failed handoff. Decide who approves the output and how work continues when a connection fails. Eden can scope a custom solution through a proposal with fixed milestones; fees and support depend on that agreement.</p>
      </section>
      <aside className={styles.notes} aria-label="Related guides">
        <h2>Keep planning</h2>
        <ul className={styles.sources}>
          <li><Link className={styles.related} href="/guides/automation-project-checklist">Automation project checklist</Link></li>
          <li><Link className={styles.related} href="/guides/choose-workflow-automation-agency">Choose an automation agency</Link></li>
          <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
        </ul>
      </aside>
    </article>
  </main>;
}
