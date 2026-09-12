import type { Metadata } from "next";
import Link from "next/link";
import styles from "../comparison.module.css";

export const metadata: Metadata = {
  title: "Eden vs Make: visual workflow building or custom delivery? | EdenCORP",
  description: "Compare Eden's custom automation service with Make. Choose who designs branching workflows, handles failures, and maintains your integrations.",
  alternates: { canonical: "/compare/eden-vs-make" },
  openGraph: {
    title: "Eden vs Make: visual workflow building or custom delivery?",
    description: "Choose by delivery responsibility, ongoing ownership, and the workflow you need.",
    url: "/compare/eden-vs-make",
    type: "article",
  },
};

const rows = [
  ["Design", "Custom workflow development and integration scoped around your process.", "Build scenarios with modules; routers and filters split the flow by conditions."],
  ["Recover", "Define failure handling and support responsibilities in your project proposal.", "Enable incomplete executions to store unfinished runs for retry or manual resolution."],
  ["Handover", "Agree documentation, access, and future changes before delivery.", "Assign someone to maintain scenario logic and resolve failed runs."],
];

export default function Page() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>Eden <span>vs</span> Make</h1>
          <div className={styles.subtitle}>Visual workflow building or custom delivery?</div>
          <p>Choose Eden for outside help designing and delivering a workflow. Choose Make when your team wants to build branching scenarios.</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <table className={styles.comparison}>
          <caption className="sr-only">Eden and Make: delivery responsibilities</caption>
          <thead><tr><th scope="col">Decision</th><th scope="col">Eden</th><th scope="col">Make</th></tr></thead>
          <tbody>{rows.map(([label, eden, competitor]) => (
            <tr key={label}><th scope="row">{label}</th><td>{eden}</td><td>{competitor}</td></tr>
          ))}</tbody>
        </table>

        <section className={styles.choice}>
          <h2>Who will own the branching logic?</h2>
          <p>Make suits a team ready to configure routes, map data, and test different outcomes. Eden suits organizations that want outside development and integration help. The decision is who does the work, not whether branching automation is possible.</p>
        </section>

        <section className={styles.service}>
          <h2>Check the fit before committing</h2>
          <p>In Make, test filters and fallback routes with real edge cases. Incomplete executions need enabling; recovery still needs an owner.</p>
          <p>With Eden, bring one process and its exceptions. Agree acceptance checks, ownership, and support in an individual proposal. Fees and feasibility depend on scope.</p>
        </section>

        <aside className={styles.notes} aria-label="Sources and related reading">
          <p>Sources checked <time dateTime="2026-09-12">September 12, 2026</time>. Plan details can change.</p>
          <ul className={styles.sources}>
            <li><a href="https://help.make.com/router">Make routers</a></li>
            <li><a href="https://help.make.com/incomplete-executions">Make incomplete executions</a></li>
          </ul>
          <Link className={styles.related} href="/compare/zapier-vs-make">Read next: Zapier vs Make <span aria-hidden="true">→</span></Link>
        </aside>
      </article>
    </main>
  );
}
