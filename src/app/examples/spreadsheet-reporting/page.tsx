import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./reporting.module.css";

const description = "Try Eden's working spreadsheet reporting example. Fictional sales records, duplicate checks, exception review, and formula-driven totals in a free XLSX download.";
export const metadata: Metadata = {
  title: "Working spreadsheet reporting example | EdenCORP",
  description,
  alternates: { canonical: "/examples/spreadsheet-reporting" },
  openGraph: { title: "Working spreadsheet reporting example | EdenCORP", description, url: "/examples/spreadsheet-reporting", type: "website" },
};

export default function SpreadsheetReportingExample() {
  return <main className={styles.page}>
    <header className={styles.hero}>
      <span className={styles.label}>Internal demonstration · fictional data</span>
      <h1>A report you can<br /><em>check yourself.</em></h1>
      <p>Twelve fictional sales records become a checked report. Eight enter the totals; four wait for review.</p>
      <Link href="/contact" className={styles.primary}>Discuss your spreadsheet <span aria-hidden="true">↗</span></Link>
    </header>
    <figure className={styles.preview}>
      <Image src="/examples/spreadsheet-reporting-summary.png" width={920} height={780} alt="Workbook Summary preview: 1,000 included amount, eight included records, four rows needing review, Online 540 and Retail 460." priority unoptimized />
      <figcaption>Summary preview rendered from the downloadable workbook. Amounts use fictional currency units.</figcaption>
    </figure>
    <section className={styles.download} aria-labelledby="try-workbook">
      <h2 id="try-workbook">Change one input. Watch the total.</h2>
      <p>Download the workbook, then change Input!D7 from 4 to 5. The total should move from 1,000 to 1,025.</p>
      <a href="/downloads/eden-spreadsheet-reporting.xlsx" download className={styles.downloadLink}>Download the working example (.xlsx) <span aria-hidden="true">↓</span></a>
    </section>
    <div className={styles.details}>
      <section><h2>Follow the three sheets.</h2><p><strong>Input:</strong> edit the blue cells. Each row needs an ID, week, channel, units, and unit price.</p><p><strong>Exceptions:</strong> review duplicate IDs, missing fields, and invalid values. Both copies of a duplicate stay out.</p><p><strong>Summary:</strong> formulas total accepted rows and split amounts between Online and Retail.</p></section>
      <section><h2>Know the limits.</h2><p>This internal example covers 32 rows, one reporting period, and one fictional currency. It contains no client data or measured savings.</p><p>No macros, uploads, or external connections. Formula-engine checks passed; desktop Excel compatibility has not been independently verified.</p><p>Your real workflow needs agreed rules, access, testing, and support. Eden scopes that work through an individual proposal.</p></section>
    </div>
    <nav className={styles.related} aria-label="Related guides"><Link href="/services/excel-automation">Excel automation services</Link><Link href="/how-we-work">How we work</Link></nav>
  </main>;
}
