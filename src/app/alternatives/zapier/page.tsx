import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const title = "Zapier alternatives: tools or custom automation?";
const description = "Compare Make, n8n, keeping Zapier, and custom workflow development. Find where Eden's automation services fit your requirements.";
const url = "https://www.edencorp.org/alternatives/zapier";
const faqs = [
  { question: "Is Eden a software tool?", answer: "No. Eden is an automation agency offering custom development, integration, consulting, and support through project proposals." },
  { question: "Do we need to replace Zapier?", answer: "That depends on your workflow and current tools. Keep what meets your requirements; test the specific gap before switching." },
];
const sources = [
  ["Make product", "https://www.make.com/en/product"],
  ["n8n hosting options", "https://docs.n8n.io/choose-how-to-use-n8n"],
  ["Zapier workflows", "https://zapier.com/workflows"],
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: title, description, mainEntityOfPage: url, datePublished: "2026-09-09", dateModified: "2026-09-09", author: { "@type": "Organization", name: "EdenCORP", url: "https://www.edencorp.org" }, citation: sources.map((s) => s[1]) },
    { "@type": "Service", name: "Eden custom workflow automation", serviceType: "Custom development, integration, consulting, and support", provider: { "@type": "Organization", name: "EdenCORP", url: "https://www.edencorp.org" }, url: "https://www.edencorp.org/contact" },
    { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

export const metadata: Metadata = {
  title: `${title} | EdenCORP`, description,
  alternates: { canonical: "/alternatives/zapier" },
  openGraph: { title, description, url, type: "article" },
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>Zapier alternatives</h1>
          <div className={styles.subtitle}>Tools or custom automation?</div>
          <p>Start with the workflow you need, then decide whether to switch tools or commission the work.</p>
          <Link href="/contact" className={styles.primary}>Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.options} aria-labelledby="choices">
          <h2 id="choices">Four routes to consider</h2>
          <div className={styles.row}>
            <h3>Make</h3>
            <div><span className={styles.label}>Visual workflow builder</span><p>Connect app modules on a visual canvas. Use HTTP requests for public APIs. Consider it for visual workflow design.</p></div>
          </div>
          <div className={styles.row}>
            <h3>n8n</h3>
            <div><span className={styles.label}>Cloud or self-hosted</span><p>Choose managed n8n Cloud or your own deployment. Self-hosting gives your team responsibility for infrastructure and maintenance.</p></div>
          </div>
          <div className={styles.row}>
            <h3>Keep Zapier</h3>
            <div><span className={styles.label}>Use what already fits</span><p>Zapier connects app triggers and actions in hosted workflows. Keep it when its supported actions meet your needs.</p></div>
          </div>
          <div className={`${styles.row} ${styles.service}`}>
            <h3>Custom work</h3>
            <div><span className={styles.label}>Commission a service</span><p>Eden offers development, integration, consulting, and support. Bring your process, current tools, and requirements for a project proposal. Eden builds custom workflow automation around the scope agreed for your project.</p></div>
          </div>
        </section>

        <section className={styles.questions} aria-label="Common questions">
          {faqs.map(({ question, answer }) => <div key={question}><h2>{question}</h2><p>{answer}</p></div>)}
        </section>
        <aside className={styles.notes} aria-label="Sources and related reading">
          <p>Sources checked September 9, 2026.</p>
          <ul>{sources.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          <nav aria-label="Related guides"><Link href="/compare/zapier-vs-make">Zapier vs Make</Link><Link href="/compare/n8n-vs-zapier">n8n vs Zapier</Link><Link href="/compare/eden-vs-zapier">Eden vs Zapier</Link><Link href="/guides/when-to-hire-an-automation-agency">When to hire an automation agency</Link></nav>
        </aside>
      </article>
    </main>
  );
}
