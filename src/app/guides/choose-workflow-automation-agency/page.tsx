import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/choose-workflow-automation-agency";
const headline = "How to choose a workflow automation agency";
const description = "Compare workflow automation agencies by scope, exception handling, tests, handover, and support. Use these questions before asking Eden for a proposal.";

export const metadata: Metadata = {
  title: `${headline} | EdenCORP`,
  description,
  alternates: { canonical: "/guides/choose-workflow-automation-agency" },
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

export default function ChooseAutomationAgencyGuide() {
  return <main className={styles.guide}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <article>
      <header className={styles.hero}>
        <div className={styles.eyebrow}>Eden field notes / Choosing a partner</div>
        <h1>Choose the agency.<br /><span>Keep the workflow yours.</span></h1>
        <p>A good proposal makes the work, handover, and limits clear before you commit.</p>
        <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
      </header>
      <section className={styles.choice}>
        <h2>Show the real process.</h2>
        <p>Give each agency one workflow, its trigger, the tools involved, and the result you need. Ask how they would handle missing data, duplicate requests, and failed connections. Use fictional examples instead of private records.</p>
      </section>
      <section className={styles.service}>
        <h2>Compare the delivery plan.</h2>
        <p>Ask who maps the steps, builds the connections, tests exceptions, and approves the result. A useful proposal names each milestone and its acceptance check.</p>
        <p>Check who controls tool access and data. Ask what documentation you receive and how your team can run the workflow after handover.</p>
      </section>
      <section className={styles.choice}>
        <h2>Check the full cost.</h2>
        <p>Request a written scope, fee, timing, software costs, and support terms. Ask how changes outside the agreed work are priced. Compare proposals against the same workflow, not a headline price.</p>
      </section>
      <section className={styles.choice}>
        <h2>Start with one bounded result.</h2>
        <p>Eden works online and quotes fixed-scope milestones through an individual proposal. There is no public price list. Tell us where a manual handoff breaks; we can discuss scope and feasibility without assuming every process needs automation.</p>
      </section>
      <aside className={styles.notes} aria-label="Related guides">
        <h2>Plan your next step</h2>
        <ul className={styles.sources}>
          <li><Link className={styles.related} href="/guides/workflow-automation-agency-cost">What a project costs</Link></li>
          <li><Link className={styles.related} href="/guides/when-to-hire-an-automation-agency">When to hire an agency</Link></li>
          <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
        </ul>
      </aside>
    </article>
  </main>;
}
