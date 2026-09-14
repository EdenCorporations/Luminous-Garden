import type { Metadata } from "next";
import Link from "next/link";
import styles from "./hub.module.css";

export const metadata: Metadata = {
  title: "Workflow automation comparisons and guides | EdenCORP",
  description: "Compare Eden, Zapier, Make, and n8n. Explore delivery, ownership, and support before choosing a workflow tool or custom automation help.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "Workflow automation comparisons and guides",
    description: "Choose your tools. Decide who builds and maintains the workflow.",
    url: "/compare",
    type: "website",
  },
};

const resources = [
  { href: "/services/workflow-automation", title: "Workflow automation services", description: "Scope a custom project, including human checks, testing, and handover." },
  { href: "/compare/eden-vs-zapier", title: "Eden vs Zapier", description: "Custom delivery or building with Zapier: compare who builds, maintains, and supports the workflow." },
  { href: "/compare/eden-vs-make", title: "Eden vs Make", description: "Compare outside development with building in Make, including testing and ongoing ownership." },
  { href: "/compare/eden-vs-n8n", title: "Eden vs n8n", description: "Consider delivery responsibility, hosting choices, and who manages changes after launch." },
  { href: "/compare/zapier-vs-make", title: "Zapier vs Make", description: "Compare two workflow tools by setup, branching, and how usage is counted." },
  { href: "/compare/n8n-vs-zapier", title: "n8n vs Zapier", description: "Compare hosting and workflow ownership before choosing where your automation runs." },
  { href: "/alternatives/zapier", title: "Zapier alternatives", description: "Explore other workflow tools and when custom automation help may fit your process." },
];

export default function ComparisonHub() {
  return (
    <main className={styles.hub}>
      <header className={styles.hero}>
        <div className={styles.eyebrow}>Eden field notes</div>
        <h1>Choose how your<br /><em>workflow gets built.</em></h1>
        <p>Compare tools, delivery, and ownership. Start with who will build and maintain your workflow, then explore the options.</p>
      </header>
      <nav aria-label="Automation comparisons and guides" className={styles.resources}>
        <div className={styles.featured}>
          <div>
            <span className={styles.eyebrow}>Start here</span>
            <h2>Build it yourself<br />or bring in help?</h2>
            <p>Check your team&apos;s time, testing needs, and handover expectations before hiring an agency.</p>
          </div>
          <Link className={styles.primary} href="/guides/when-to-hire-an-automation-agency">When to hire an automation agency <span aria-hidden="true">↗</span></Link>
        </div>
        <h2 className={styles.listHeading}>Explore your options</h2>
        <ul className={styles.list}>
          {resources.map((resource, index) => (
            <li key={resource.href}>
              <Link className={styles.resource} href={resource.href}>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{resource.title}</h3><p>{resource.description}</p></div>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
