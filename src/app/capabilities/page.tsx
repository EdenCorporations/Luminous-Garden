import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const description = "Eden is an online custom workflow automation agency. See the work it can scope, how projects are agreed, and how to contact the team.";

export const metadata: Metadata = {
  title: "Custom workflow automation capabilities | EdenCORP",
  description,
  alternates: { canonical: "/capabilities" },
  openGraph: { title: "Custom workflow automation capabilities | EdenCORP", description, url: "/capabilities", type: "website" },
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.edencorp.org/capabilities#service",
  name: "Custom workflow automation",
  description,
  serviceType: "Custom workflow development, integration, consulting, and support",
  url: "https://www.edencorp.org/capabilities",
  provider: { "@id": "https://www.edencorp.org/#organization" },
};

export default function CapabilitiesPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service).replace(/</g, "\\u003c") }} />
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.label}>EdenCORP / capabilities</span>
          <h1>Bring the workflow.<br /><em>We&apos;ll scope the build.</em></h1>
          <p>Eden is an online custom workflow automation agency. We discuss your current steps, design a specific solution, and agree the work in a proposal.</p>
          <Link href="/contact" className={styles.primary}>Discuss your workflow <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.diagram} aria-label="Illustrative workflow from request to checked result">
          <span className={styles.diagramTitle}>An example, not a client result</span>
          <div><b>01</b><span>Request arrives</span></div>
          <div><b>02</b><span>Missing details go to a person</span></div>
          <div><b>03</b><span>Approved work moves forward</span></div>
          <div><b>04</b><span>Result gets checked</span></div>
        </div>
      </header>

      <section className={styles.scope} aria-labelledby="scope-title">
        <span className={styles.label}>What we can scope</span>
        <h2 id="scope-title">Work around your process.</h2>
        <div className={styles.columns}>
          <div><h3>Build</h3><p>Custom development for repeated work, including intake, approvals, reporting, and handoffs.</p></div>
          <div><h3>Connect</h3><p>Integrations between your tools, subject to access, data quality, and each tool&apos;s limits.</p></div>
          <div><h3>Advise &amp; support</h3><p>Consulting and support can form part of an individual proposal. Support terms depend on the agreed scope.</p></div>
        </div>
      </section>

      <section className={styles.engagement} aria-labelledby="engagement-title">
        <span className={styles.label}>Working with Eden</span>
        <h2 id="engagement-title">Start with a real bottleneck.</h2>
        <p>Tell us what starts the work, where it slows down, and who must approve the result. Use a fictional example instead of private records.</p>
        <p>We work online. Each project has its own proposal, fixed-scope milestones, price, timing, and agreed responsibilities. Eden is not a registered entity.</p>
      </section>

      <nav className={styles.related} aria-label="Related reading">
        <Link href="/how-we-work">How we work <span aria-hidden="true">↗</span></Link>
        <Link href="/guides/approval-workflow-automation">Approval workflow guide <span aria-hidden="true">↗</span></Link>
      </nav>
    </main>
  );
}
