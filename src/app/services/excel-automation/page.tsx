import type { Metadata } from "next";
import Link from "next/link";
import { BuyerPageSchema } from "@/components/BuyerPageSchema";
import styles from "../workflow-automation/service.module.css";

const description = "Excel automation services from Eden. Scope repeated spreadsheet reporting, data checks, exception handling, and handover around your team's workflow.";
const priceAnswer = "Eden prices each project through an individual proposal. Agree the workbook scope, software costs, delivery, and support before work starts.";

export const metadata: Metadata = {
  title: "Excel automation services | EdenCORP",
  description,
  alternates: { canonical: "/services/excel-automation" },
  openGraph: { title: "Excel automation services | EdenCORP", description, url: "/services/excel-automation", type: "website" },
};

export default function ExcelAutomationServices() {
  return <main className={styles.page}>
    <BuyerPageSchema path="/services/excel-automation" description={description} faqs={[{ question: "What does a project cost?", answer: priceAnswer }]} />
    <header className={styles.hero}>
      <span className={styles.label}>Spreadsheet workflows · Eden</span>
      <h1>Excel automation<br /><em>services.</em></h1>
      <p>Still rebuilding the same spreadsheet report? Eden scopes custom automation for repeated imports, checks, and reports around your team&apos;s process.</p>
      <Link href="/contact" className={styles.primary}>Discuss your spreadsheet <span aria-hidden="true">↗</span></Link>
    </header>
    <section className={styles.example} aria-labelledby="report-example">
      <span className={styles.label}>Illustrative workflow · not a client result</span>
      <h2 id="report-example">From monthly files to one review.</h2>
      <ol className={styles.flow}>
        <li><span>01 / Input</span>Monthly exports</li>
        <li><span>02 / Check</span>Columns and dates</li>
        <li><span>03 / Combine</span>Match record IDs</li>
        <li><span>04 / Review</span>Report and exceptions</li>
      </ol>
      <p className={styles.exception}>A missing ID goes to an exception list, instead of silently entering the report.</p>
      <p>Keep source files unchanged. Agree how corrected files replace earlier versions, so a second run cannot silently double the totals.</p>
    </section>
    <div className={styles.details}>
      <section><h2>What should you automate?</h2><p>Start with a recurring task whose inputs and expected output are clear. Examples include combining exports, checking missing fields, and preparing a review workbook.</p><p>If the calculation rules change each week, agree those rules first. A one-off calculation may only need a formula.</p></section>
      <section><h2>Test the awkward cases.</h2><ul className={styles.checklist}><li>Duplicate IDs and missing columns.</li><li>Dates or amounts in the wrong format.</li><li>A corrected file and a repeated run.</li><li>Totals that differ from the approved sample.</li></ul><p>Name who reviews exceptions and who can release the final report.</p></section>
      <section><h2>Bring a safe sample.</h2><p>Share fictional rows, column names, and the output you want. Tell us your Excel version, file location, frequency, and approval steps.</p><p>We assess access and tool constraints before proposing an approach. Agree the handover instructions and who maintains it.</p></section>
      <section><h2>What does a project cost?</h2><p>{priceAnswer}</p></section>
    </div>
    <nav className={styles.related} aria-label="Related guides"><Link href="/examples/spreadsheet-reporting">Working spreadsheet example</Link><Link href="/services/workflow-automation">Workflow automation services</Link><Link href="/how-we-work">How we work</Link><Link href="/guides/workflow-automation-agency-cost">Workflow automation agency costs</Link></nav>
  </main>;
}
