import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../compare/comparison.module.css";

const description = "Plan timesheet automation for emailed sheets, missing approvals, and payroll handoffs. See which checks stay with a person before you commission a build.";

export const metadata: Metadata = {
  title: "Timesheet automation for emailed sheets | EdenCORP",
  description,
  alternates: { canonical: "/guides/timesheet-automation" },
  openGraph: {
    title: "Timesheet automation for emailed sheets",
    description,
    url: "/guides/timesheet-automation",
    type: "article",
  },
};

export default function TimesheetAutomationGuide() {
  return (
    <main className={styles.guide}>
      <article>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Eden field notes / Payroll handoffs</div>
          <h1>Timesheet automation<br /><span>with a human approval path.</span></h1>
          <p>An emailed sheet can arrive late, unsigned, or in the wrong format. A useful workflow finds those exceptions before the payroll deadline.</p>
          <Link className={styles.primary} href="/contact">Discuss your timesheet process <span aria-hidden="true">↗</span></Link>
        </header>

        <section className={styles.choice}>
          <h2>Map the handoff.</h2>
          <p>Start with one intake address, a submission deadline, and the person who approves each sheet. Record the worker, period, hours, client, and approval state. Keep the original attachment available for review.</p>
        </section>

        <section className={styles.service}>
          <h2>Separate clean sheets from exceptions.</h2>
          <p>Imagine a staffing team receiving PDF and spreadsheet timesheets by email. The workflow could log each arrival and flag missing signatures, duplicate periods, unreadable files, and late submissions. An approver checks those cases before export.</p>
          <p>This is an illustrative process, not a delivered client result. A sheet should never move to payroll only because a file arrived. Define who can correct hours and who makes the final pay decision.</p>
        </section>

        <section className={styles.choice}>
          <h2>Test the failure route.</h2>
          <p>Try one valid sample, one duplicate, one unsigned sheet, and one failed export. Check that each gets the right owner and that a retry does not create a second record. Use fictional details during planning.</p>
        </section>

        <section className={styles.choice}>
          <h2>Choose the build after the rules.</h2>
          <p>A shared inbox and checklist may be enough at low volume. A time-tracking product may fit teams that can change how workers submit hours. Custom integration can help when emailed formats and approval routes must stay. Eden scopes that work through a project proposal.</p>
        </section>

        <aside className={styles.notes} aria-label="Related guides">
          <h2>Keep planning</h2>
          <ul className={styles.sources}>
            <li><Link className={styles.related} href="/services/workflow-automation">Workflow automation services</Link></li>
            <li><Link className={styles.related} href="/guides/data-entry-automation">Data entry automation</Link></li>
            <li><Link className={styles.related} href="/how-we-work">How we work</Link></li>
          </ul>
        </aside>
      </article>
    </main>
  );
}
