import type { Metadata } from "next";
import Link from "next/link";
import { BuyerPageSchema } from "@/components/BuyerPageSchema";
import styles from "../comparison.module.css";

export const metadata: Metadata = {
  title: "Eden vs n8n: workflow delivery and hosting choices | EdenCORP",
  description: "Compare Eden's custom workflow delivery with n8n Cloud and self-hosting. Separate building your automation from managing its infrastructure.",
  alternates: { canonical: "/compare/eden-vs-n8n" },
  openGraph: {
    title: "Eden vs n8n: workflow delivery and hosting choices",
    description: "Choose by delivery responsibility, ongoing ownership, and the workflow you need.",
    url: "/compare/eden-vs-n8n",
    type: "article",
  },
};

const rows = [
  ["Delivery", "Custom development, integration, and consulting through an individual proposal.", "Use a workflow platform with Cloud and self-hosted deployment options."],
  ["Hosting", "Agree deployment, access, and operating responsibilities within the project scope.", "Cloud manages infrastructure; self-hosting puts deployment and maintenance with you."],
  ["Ownership", "Define handover, documentation, and ongoing support before work starts.", "Your team chooses the deployment and the plan or edition it needs."],
];

const faq = {
  "question": "Who owns hosting and workflow delivery?",
  "answer": "n8n Cloud suits teams that want infrastructure managed for them. Self-hosting suits teams with resources to manage their own deployment. Eden suits buyers seeking help delivering the workflow itself. Hiring an agency does not automatically settle where the system runs."
};

export default function Page() {
  return (
    <main className={styles.guide}>
      <BuyerPageSchema path="/compare/eden-vs-n8n" description={rows[0][1]} faqs={[faq]} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>Eden <span>vs</span> n8n</h1>
          <div className={styles.subtitle}>Choose your builder and your hosting owner</div>
          <p>Choose Eden when you need outside workflow development. Choose n8n when your team wants a workflow tool with hosting choices.</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <table className={styles.comparison}>
          <caption className="sr-only">Eden and n8n: delivery responsibilities</caption>
          <thead><tr><th scope="col">Decision</th><th scope="col">Eden</th><th scope="col">n8n</th></tr></thead>
          <tbody>{rows.map(([label, eden, competitor]) => (
            <tr key={label}><th scope="row">{label}</th><td>{eden}</td><td>{competitor}</td></tr>
          ))}</tbody>
        </table>

        <section className={styles.choice}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </section>

        <section className={styles.service}>
          <h2>Check the fit before committing</h2>
          <p>For n8n, check required features against the chosen plan or edition. Self-hosting gives deployment control and adds operating responsibilities.</p>
          <p>With Eden, agree where data lives, who controls access, and who handles changes after handover. Request a scoped quote. No hosting arrangement or support level is implied.</p>
        </section>

        <aside className={styles.notes} aria-label="Sources and related reading">
          <p>Sources checked <time dateTime="2026-09-12">September 12, 2026</time>. Plan details can change.</p>
          <ul className={styles.sources}>
            <li><a href="https://docs.n8n.io/choose-how-to-use-n8n">n8n deployment choices</a></li>
            <li><a href="https://docs.n8n.io/deploy/host-n8n">n8n self-hosting</a></li>
          </ul>
          <Link className={styles.related} href="/compare/n8n-vs-zapier">Read next: n8n vs Zapier <span aria-hidden="true">→</span></Link>
        </aside>
      </article>
    </main>
  );
}
