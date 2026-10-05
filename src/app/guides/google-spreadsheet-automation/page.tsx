import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Plan Google Sheets automation for recurring reports. See an illustrative intake, exception review, and approval flow before choosing a build.";

export const metadata: Metadata = {
  title: "Google spreadsheet automation for reporting | EdenCORP",
  description,
  alternates: { canonical: "/guides/google-spreadsheet-automation" },
  openGraph: {
    title: "Google spreadsheet automation for reporting | EdenCORP",
    description,
    url: "/guides/google-spreadsheet-automation",
    type: "article",
  },
};

export default function GoogleSpreadsheetAutomationGuide() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Spreadsheet reporting</div>
          <h1>Google Sheets automation<br /><span>with a review step.</span></h1>
          <p>A report that starts in a shared sheet still needs clear inputs, checks, and someone who approves the result.</p>
          <Link className={styles.primary} href="/contact">Discuss your reporting workflow <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Start with a repeatable input.</h2>
          <p>List the source, required columns, report date, and owner of each row. Google Forms can collect structured entries into Sheets. For imported files, agree how names, dates, and IDs should match before adding automation.</p>
        </section>

        <section className={styles.service}>
          <h2>Route exceptions before the report.</h2>
          <p>Imagine a team combining weekly project updates in one Google Sheet. An Apps Script workflow could flag blank IDs, duplicate rows, and totals that differ from the source. A reviewer checks those rows before the summary is shared.</p>
          <p>This is an illustrative design, not a delivered client result. Keep the original input and record who changed a flagged row. Let a person approve the final report.</p>
        </section>

        <section className={styles.choice}>
          <h2>Choose the smallest useful build.</h2>
          <p>A formula or built-in macro may cover a simple repeat task. Apps Script can run on a form submission or a schedule when the rules are stable. Test missing data, duplicate imports, and failed runs before turning it on.</p>
        </section>

        <section className={styles.choice}>
          <h2>Bring Eden the real handoff.</h2>
          <p>Share fictional sample rows, the report you need, and the person who approves it. Eden can scope the data checks, access, handover, and support in a custom proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/examples/spreadsheet-reporting">Working spreadsheet example</Link></li>
            <li><Link className={styles.related} href="/services/excel-automation">Spreadsheet automation services</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How Eden works</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
