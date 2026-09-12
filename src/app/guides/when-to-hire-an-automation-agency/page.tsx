import type { Metadata } from "next";
import Link from "next/link";
import { BuyerPageSchema } from "@/components/BuyerPageSchema";
import styles from "../../compare/comparison.module.css";

export const metadata: Metadata = {
  title: "When to hire an automation agency | EdenCORP",
  description: "Decide when to hire an automation agency or build a workflow yourself. Compare ownership, exceptions, testing, and support before choosing outside help.",
  alternates: { canonical: "/guides/when-to-hire-an-automation-agency" },
  openGraph: {
    title: "When to hire an automation agency",
    description: "A practical guide to choosing outside workflow delivery or building it yourself.",
    url: "/guides/when-to-hire-an-automation-agency",
    type: "article",
  },
};

const rows = [
  ["Time", "Someone can build, test, and maintain it.", "Your team needs help delivering the workflow."],
  ["Exceptions", "You can test failures and unusual cases.", "You need help mapping handoffs and recovery."],
  ["Ownership", "You can manage access and future changes.", "You want a defined handover and support scope."],
];

const faq = {
  "question": "Can you start with one small workflow?",
  "answer": "Try a limited process with a clear result and a manual fallback. If you can test it safely, building independently may suit you. More apps alone do not make an agency necessary."
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <BuyerPageSchema path="/guides/when-to-hire-an-automation-agency" description="Eden offers custom workflow development, integration, and consulting. Bring one process to discuss. Feasibility, fees, and support depend on your individual proposal." faqs={[faq]} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>When to hire an automation agency</h1>
          <p>Consider an agency when your team needs help designing, testing, or maintaining a workflow. Build it yourself when someone can own those tasks and the process is clear.</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <table className={styles.comparison}>
          <caption className="sr-only">Choosing who delivers your workflow</caption>
          <thead><tr><th scope="col">Decision</th><th scope="col">Build yourself</th><th scope="col">Consider an agency</th></tr></thead>
          <tbody>{rows.map(([label, independent, agency]) => (
            <tr key={label}><th scope="row">{label}</th><td>{independent}</td><td>{agency}</td></tr>
          ))}</tbody>
        </table>

        <section className={styles.choice}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </section>

        <section className={styles.service}>
          <h2>What should you agree before hiring?</h2>
          <p>Write down the trigger, expected result, exceptions, and who checks failures. Agree data access, acceptance tests, documentation, and who handles changes after delivery.</p>
          <p>Eden offers custom workflow development, integration, and consulting. Bring one process to discuss. Feasibility, fees, and support depend on your individual proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related comparisons">
          <h2>Compare Eden with your tool</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/compare/eden-vs-zapier">Eden vs Zapier</Link></li>
            <li><Link className={styles.related} href="/compare/eden-vs-make">Eden vs Make</Link></li>
            <li><Link className={styles.related} href="/compare/eden-vs-n8n">Eden vs n8n</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
