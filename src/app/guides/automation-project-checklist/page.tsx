import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const url = "https://www.edencorp.org/guides/automation-project-checklist";
const headline = "Automation project checklist";
const summary = "Map a manual workflow, its exceptions, and the people who must approve a result before asking for automation.";

export const metadata: Metadata = {
  title: `${headline} | EdenCORP`,
  description: summary,
  alternates: { canonical: "/guides/automation-project-checklist" },
  openGraph: { title: `${headline} | EdenCORP`, description: summary, url, type: "article" },
};

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

const checks = [
  ["Name the trigger", "What starts the work? Record the input, its source, and who owns it."],
  ["Trace the handoffs", "List each tool and person involved. Mark where information is copied or re-entered."],
  ["Mark exceptions", "Name missing, duplicate, or changed inputs. Decide who should resolve each case."],
  ["Keep human decisions", "Identify approvals and sensitive access that a person must control."],
  ["Define the result", "Describe the output, who checks it, and what happens when a run fails."],
];

export default function AutomationProjectChecklist() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <span className={styles.label}>Eden field notes / project planning</span>
          <h1>Map the work<br /><em>before you automate it.</em></h1>
          <p>{summary}</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.content} aria-labelledby="checklist-title">
          <div className={styles.intro}>
            <span className={styles.label}>Five checks</span>
            <h2 id="checklist-title">Automation project checklist</h2>
            <p>Use this before scoping a project. A rough map is enough to start a useful conversation.</p>
          </div>
          <ol className={styles.checks}>
            {checks.map(([title, text], index) => (
              <li key={title}>
                <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <aside className={styles.example}>
          <span className={styles.label}>Illustrative example</span>
          <h2>An invoice arrives by email.</h2>
          <p>A proposed workflow reads its fields, flags a missing purchase order, and asks a person to review it. Payment stays with the authorized approver. This is a planning example, not a client result.</p>
        </aside>

        <nav className={styles.related} aria-label="Related reading">
          <Link href="/how-we-work">How Eden scopes and delivers work <span aria-hidden="true">↗</span></Link>
          <Link href="/agency-facts">Eden agency facts <span aria-hidden="true">↗</span></Link>
        </nav>
      </article>
    </main>
  );
}
