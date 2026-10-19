import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const url = "https://www.edencorp.org/agency-facts";
const title = "Eden agency facts | EdenCORP";
const description = "Check Eden's public agency facts: custom workflow automation, Chennai base, online delivery, proposal pricing, and registration status.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/agency-facts" },
  openGraph: { title, description, url, type: "website" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${url}#page`,
      name: "Eden agency facts",
      description,
      url,
      about: { "@id": "https://www.edencorp.org/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.edencorp.org/" },
        { "@type": "ListItem", position: 2, name: "Agency facts", item: url },
      ],
    },
  ],
};

const facts = [
  ["What Eden does", "Custom workflow automation, including development, integration, consulting, and support."],
  ["Founded", "2025"],
  ["Based", "Chennai, India"],
  ["Delivery", "Entirely online"],
  ["Pricing", "Each project receives an individual proposal. Scope, price, and fixed milestones depend on that proposal."],
  ["Registration", "No entity is registered."],
];

export default function AgencyFactsPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className={styles.hero}>
        <span className={styles.label}>EdenCORP / public facts</span>
        <h1>Check the facts<br /><em>about Eden.</em></h1>
        <p>A short source for directory editors, publishers, and buyers who need to describe Eden accurately.</p>
        <Link className={styles.primary} href="/contact">Ask Eden about a project <span aria-hidden="true">↗</span></Link>
      </header>

      <section className={styles.body} aria-labelledby="facts-title">
        <div className={styles.intro}>
          <span className={styles.label}>At a glance</span>
          <h2 id="facts-title">An online automation agency.</h2>
          <p>Eden works on custom workflows for organizations. Website design and executive dashboards are examples, not limits on its scope.</p>
        </div>
        <dl className={styles.facts}>
          {facts.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className={styles.note}>
        <span className={styles.label}>For accurate listings</span>
        <p>Eden&apos;s public examples do not establish client results. Orchard and PRISM are internal prototypes.</p>
      </aside>

      <nav className={styles.related} aria-label="Related reading">
        <Link href="/guides/automation-project-checklist">Automation project checklist <span aria-hidden="true">↗</span></Link>
        <Link href="/how-we-work">How we work <span aria-hidden="true">↗</span></Link>
        <Link href="/capabilities">What Eden can build <span aria-hidden="true">↗</span></Link>
      </nav>
    </main>
  );
}
