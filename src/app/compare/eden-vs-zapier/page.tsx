import type { Metadata } from "next";
import Link from "next/link";
import { BuyerPageSchema } from "@/components/BuyerPageSchema";
import styles from "../comparison.module.css";

export const metadata: Metadata = {
  title: "Eden vs Zapier: custom delivery or build it yourself? | EdenCORP",
  description: "Compare Eden's custom workflow service with building in Zapier. Decide who will build, maintain, and support your automation.",
  alternates: { canonical: "/compare/eden-vs-zapier" },
  openGraph: {
    title: "Eden vs Zapier: custom delivery or build it yourself?",
    description: "Choose by delivery responsibility, ongoing ownership, and the workflow you need.",
    url: "/compare/eden-vs-zapier",
    type: "article",
  },
};

const rows = [
  ["Build", "Custom development, integration, and consulting through a project proposal.", "Connect a trigger to actions in a Zap workflow."],
  ["Maintain", "Agree support, handover, and change responsibilities in your proposal.", "Your team or hired specialist manages workflows and reviews failed runs."],
  ["Budget", "Project fees and ongoing support need an individual quote.", "Check plan features, task allowances, and usage charges."],
];

const faq = {
  "question": "Who should build it?",
  "answer": "Zapier suits teams with time to configure, test, and maintain their workflow. Eden suits organizations seeking outside development and integration help. An agency and a tool can work together; hiring help does not always mean replacing your tools."
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <BuyerPageSchema path="/compare/eden-vs-zapier" description={rows[0][1]} faqs={[faq]} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>Eden <span>vs</span> Zapier</h1>
          <div className={styles.subtitle}>Custom delivery or build it yourself?</div>
          <p>Choose Eden when you want a custom workflow project. Choose Zapier when your team wants to build with its tools.</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <table className={styles.comparison}>
          <caption className="sr-only">Eden and Zapier: delivery responsibilities</caption>
          <thead><tr><th scope="col">Decision</th><th scope="col">Eden</th><th scope="col">Zapier</th></tr></thead>
          <tbody>{rows.map(([label, eden, zapier]) => (
            <tr key={label}><th scope="row">{label}</th><td>{eden}</td><td>{zapier}</td></tr>
          ))}</tbody>
        </table>

        <section className={styles.choice}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </section>

        <section className={styles.service}>
          <h2>Check the fit before committing</h2>
          <p>In Zapier, verify your exact app triggers and actions, plan features, and app limits. Test a failed step too.</p>
          <p>With Eden, agree scope, access, acceptance checks, ownership, and support before work starts. Feasibility depends on your systems. No savings or delivery timeline is guaranteed here.</p>
        </section>

        <aside className={styles.notes} aria-label="Sources and related reading">
          <p>Sources checked <time dateTime="2026-09-12">September 12, 2026</time>. Plan details can change.</p>
          <ul className={styles.sources}>
            <li><a href="https://help.zapier.com/hc/en-us/articles/22234847450893-Zap-workflows-quick-start-guide">Zapier workflow guide</a></li>
            <li><a href="https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits">Zapier limits</a></li>
            <li><a href="https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history">Zapier run history</a></li>
          </ul>
          <Link className={styles.related} href="/alternatives/zapier">Read next: Zapier alternatives <span aria-hidden="true">→</span></Link>
        </aside>
      </article>
    </main>
  );
}
