import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const url = "https://www.edencorp.org/guides/customer-feedback-automation";
const headline = "Customer feedback automation with human review";
const description = "Plan customer feedback automation across surveys, inboxes, and forms. Route themes to an owner, review sensitive cases, and close the loop without sending guessed replies.";
const summary = "Bring feedback into one review path, so useful signals reach the right person and customers hear what happens next.";

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
  title: "Customer Feedback Automation With Human Review | EdenCORP",
  description,
  alternates: { canonical: "/guides/customer-feedback-automation" },
  openGraph: { title: headline, description, url, type: "article" },
};

export default function CustomerFeedbackAutomationGuide() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Customer feedback</div>
          <h1>Customer feedback<br /><span>with a review path.</span></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your feedback workflow <span aria-hidden="true">↗</span></Link>
        </header>
        <section className={styles.choice}>
          <h2>Choose the signals.</h2>
          <p>Start with the feedback your team already receives through surveys, forms, reviews, or an inbox. Name the source and the person who may use it. Collect only the details needed to understand and answer the issue.</p>
        </section>
        <section className={styles.service}>
          <h2>Give each theme an owner.</h2>
          <p>In an illustrative flow, a new response enters a shared queue. Agreed rules group it by product area or request type. The workflow flags repeats and sends each item to a named owner with its original wording.</p>
          <p>A low rating is a signal, not a diagnosis. Keep unclear comments, private details, and urgent concerns in human review. Let the owner correct the category before anyone acts.</p>
        </section>
        <section className={styles.choice}>
          <h2>Close the loop.</h2>
          <p>Record who reviewed the feedback, what changed, and whether a reply is needed. A person checks any customer response before it goes out. Share only what the team can support, and keep an open item visible until its next step is clear.</p>
        </section>
        <section className={styles.choice}>
          <h2>Test a narrow handoff.</h2>
          <p>Try fictional responses for a clear request, a duplicate, and a sensitive complaint. Check the owner and reply path for each. These are planning cases, not client results. Eden scopes custom connections and fees in an individual proposal.</p>
        </section>
        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/guides/customer-support-automation">Customer support automation</Link></li>
            <li><Link className={styles.related} href="/guides/crm-workflow-automation">CRM workflow automation</Link></li>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
