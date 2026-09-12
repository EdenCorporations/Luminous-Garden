import Link from "next/link";
import styles from "./comparison.module.css";

type Guide = {
  slug: string; title: string; names: string[]; subtitle: string; intro: string;
  rows: string[][]; guidanceTitle: string; guidance: string; serviceTitle: string;
  service: string; question: string; sources: string[][]; related: string; relatedLabel: string;
};

export function ComparisonGuide({ guide }: { guide: Guide }) {
  const url = `https://www.edencorp.org/compare/${guide.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.intro,
    mainEntityOfPage: url,
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    author: { "@type": "Organization", name: "EdenCORP", url: "https://www.edencorp.org" },
    citation: guide.sources.map((source) => source[1]),
  };

  return (
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Workflow automation</div>
          <h1>{guide.names[0]} <span>vs</span> {guide.names[1]}</h1>
          <div className={styles.subtitle}>{guide.subtitle}</div>
          <p>{guide.intro}</p>
        </header>

        <table className={styles.comparison}>
          <caption className="sr-only">{guide.title}</caption>
          <thead><tr><th scope="col">Decision</th><th scope="col">{guide.names[0]}</th><th scope="col">{guide.names[1]}</th></tr></thead>
          <tbody>{guide.rows.map(([label, left, right]) => (
            <tr key={label}><th scope="row">{label}</th><td>{left}</td><td>{right}</td></tr>
          ))}</tbody>
        </table>

        <section className={styles.choice}>
          <h2>{guide.guidanceTitle}</h2>
          <p>{guide.guidance}</p>
        </section>

        <section className={styles.service}>
          <div className={styles.eyebrow}>Custom automation by Eden</div>
          <h2>{guide.serviceTitle}</h2>
          <p>{guide.service}</p>
          <p>{guide.question}</p>
          <Link className={styles.primary} href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </section>

        <aside className={styles.notes} aria-label="Sources and related reading">
          <p>Sources checked <time dateTime="2026-09-09">September 9, 2026</time>. Plan details can change.</p>
          <ul className={styles.sources}>{guide.sources.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          <nav aria-label="Related guides" className={styles.sources}>
          <Link className={styles.related} href={`/compare/${guide.related}`}>Read next: {guide.relatedLabel} <span aria-hidden="true">→</span></Link>
            {guide.names.map((name) => <Link key={name} className={styles.related} href={`/compare/eden-vs-${name.toLowerCase()}`}>Eden vs {name}</Link>)}
            <Link className={styles.related} href="/guides/when-to-hire-an-automation-agency">When to hire an automation agency</Link>
          </nav>
        </aside>
      </article>
    </main>
  );
}
