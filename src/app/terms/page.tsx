import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="flex-1 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ember/40" />
            <span className="text-ember font-mono text-xs uppercase tracking-[0.2em]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-text mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-text-tertiary font-mono text-sm">
            Last updated: September 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-text-secondary font-body leading-relaxed">
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">1. Website scope</h2>
            <p>These terms describe EdenCORP&apos;s public website and project inquiry process. This website presents Eden&apos;s custom workflow automation services.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">2. Services description</h2>
            <p>Eden offers custom automation development, integration, consulting, and support. Project scope is discussed individually. Website examples describe possible work, not proof that every capability is deployed.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">3. Using the inquiry form</h2>
            <p>Provide contact details and a project description so Eden can discuss your request. Do not submit passwords, confidential records, or another person&apos;s sensitive information. Do not misuse or disrupt the website.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">4. Project ownership</h2>
            <p>Ownership and licensing for custom work belong in the individual project agreement. This website does not establish ownership terms for a future project.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">5. Budgets and payment</h2>
            <p>The budget slider records your proposed budget. Submitting the form does not make a payment or purchase a service. Pricing, payment schedules, and refund terms belong in your project agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">6. Service expectations</h2>
            <p>Website simulations and calculator outputs illustrate scenarios. They are not measured client outcomes or uptime guarantees. Support availability and service levels belong in the individual project agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">7. Project risk and liability</h2>
            <p>Responsibility for project risks and any limits of liability need to be addressed in the individual project agreement. This website does not specify those limits.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">8. Ending a project</h2>
            <p>Cancellation, handover, and data export arrangements belong in the individual project agreement. This website does not promise a transition period.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">9. Questions and disputes</h2>
            <p>Contact <a href="mailto:edencorp-org@mail.tin.computer" className="underline underline-offset-4 break-all hover:text-text">edencorp-org@mail.tin.computer</a> about website or project questions. This website does not specify arbitration, governing law, or a court jurisdiction.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">10. Updates</h2>
            <p>Check this page for the current website terms. Changes to project agreements are handled separately.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">11. Contact and privacy</h2>
            <p>Email <a href="mailto:edencorp-org@mail.tin.computer" className="underline underline-offset-4 break-all hover:text-text">edencorp-org@mail.tin.computer</a> for help. Read the <Link href="/privacy" className="underline underline-offset-4 hover:text-text">privacy policy</Link> for details about inquiry processing, analytics, and data requests.</p>
          </section>
          <div className="pt-8 border-t border-border"><p className="text-sm text-text-tertiary font-mono">These website terms do not replace an individual project agreement.</p></div>
        </div>
      </div>
    </main>
  );
}
