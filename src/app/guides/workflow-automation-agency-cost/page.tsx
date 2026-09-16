import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Eden uses custom proposals for workflow automation. See what to include in your brief and which costs to clarify before commissioning work.";
export const metadata: Metadata = {
  title: "How much does workflow automation agency work cost? | EdenCORP",
  description,
  alternates: { canonical: "/guides/workflow-automation-agency-cost" },
  openGraph: {
    title: "How much does workflow automation agency work cost?",
    description,
    url: "/guides/workflow-automation-agency-cost",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.edencorp.org/guides/workflow-automation-agency-cost#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does automation agency work cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eden provides custom proposals for workflow automation. There is no public price list; your project needs an individual quote."
      }
    },
    {
      "@type": "Question",
      "name": "What should you send for a proposal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Describe one workflow from trigger to result. Name the apps, manual steps, frequency, and person who checks the output. Explain unusual cases, access limits, and what a successful test would show. Use fictional examples instead of private records. Share your budget and preferred timing. These are planning inputs, not an agreed fee or delivery commitment."
      }
    },
    {
      "@type": "Question",
      "name": "What costs should you clarify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask the proposal to distinguish development, integration, consulting, and support. Clarify software subscriptions, usage charges, maintenance, and future changes. Confirm which items are included and who pays each cost before agreeing."
      }
    },
    {
      "@type": "Question",
      "name": "Does the website show an estimated fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Contact budget choices describe what you can spend. The ROI calculator shows an illustrative scenario, not Eden's fees or measured customer savings."
      }
    },
    {
      "@type": "Question",
      "name": "Can you request one workflow first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Bring one bounded process to discuss. Feasibility, scope, fees, and support still need agreement in your proposal."
      }
    }
  ]
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
      }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>How much does automation agency work cost?</h1>
          <p>Eden provides custom proposals for workflow automation. There is no public price list; your project needs an individual quote.</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.service}>
          <h2>What should you send for a proposal?</h2>
          <p>Describe one workflow from trigger to result. Name the apps, manual steps, frequency, and person who checks the output.</p>
          <p>Explain unusual cases, access limits, and what a successful test would show. Use fictional examples instead of private records.</p>
          <p>Share your budget and preferred timing. These are planning inputs, not an agreed fee or delivery commitment.</p>
        </section>

        <section className={styles.choice}>
          <h2>What costs should you clarify?</h2>
          <p>Ask the proposal to distinguish development, integration, consulting, and support. Clarify software subscriptions, usage charges, maintenance, and future changes. Confirm which items are included and who pays each cost before agreeing.</p>
        </section>

        <section className={styles.choice}>
          <h2>Does the website show an estimated fee?</h2>
          <p>No. Contact budget choices describe what you can spend. The ROI calculator shows an illustrative scenario, not Eden&apos;s fees or measured customer savings.</p>
        </section>

        <section className={styles.choice}>
          <h2>Can you request one workflow first?</h2>
          <p>Yes. Bring one bounded process to discuss. Feasibility, scope, fees, and support still need agreement in your proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Plan your next step</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/when-to-hire-an-automation-agency">When to hire an automation agency</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
