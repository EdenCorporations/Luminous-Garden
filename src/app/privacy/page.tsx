import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-text-tertiary font-mono text-sm">
            Last updated: September 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-text-secondary font-body leading-relaxed">
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">1. Information we collect</h2>
            <p>The inquiry form collects your name, email, organization, budget, and project message. Your browser holds these fields while you complete the form.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">2. How inquiries are processed</h2>
            <p>When you submit, your browser sends these fields to EmailJS for email processing. The form is configured to request delivery through an email service. The destination inbox and receipt have not yet been verified. The website has no application database for storing inquiries.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">3. Hosting and security</h2>
            <p>Vercel hosts this website. Hosting and email providers process technical request data, which can include IP addresses and browser information. The website uses HTTPS. This notice makes no claim of security certification or regular security audits.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">4. Service providers</h2>
            <p>EmailJS processes form submissions. Vercel provides hosting, Web Analytics, and Speed Insights. Tin manages the support mailbox and Eden&apos;s PostHog analytics project. PostHog events are sent to its US ingestion endpoint. These providers process data under their own terms and policies.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">5. Storage and deletion</h2>
            <p>Form details may remain in email systems after submission. This notice does not specify a verified retention period or promise automatic deletion. To request deletion, email <a href="mailto:edencorp-org@mail.tin.computer" className="underline underline-offset-4 break-all hover:text-text">edencorp-org@mail.tin.computer</a> and identify your inquiry. Do not include passwords or sensitive records.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">6. Data requests</h2>
            <p>You can ask about access, correction, or deletion through <a href="mailto:edencorp-org@mail.tin.computer" className="underline underline-offset-4 break-all hover:text-text">edencorp-org@mail.tin.computer</a>. Your applicable rights depend on the laws that cover your situation. This notice does not set a response deadline.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">7. Analytics and cookies</h2>
            <p>PostHog tracks page views, form starts, submission attempts, and send results. Events include the page path and temporary browser identifiers. Eden&apos;s configuration excludes form contents, persistent storage, user profiles, and session recordings. Vercel Web Analytics measures visits, and Speed Insights measures page performance. These analytics tools are configured without tracking cookies. Providers still receive technical data needed to handle network requests.</p>
          </section>
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">8. Contact</h2>
            <p>For privacy questions or data requests, email <a href="mailto:edencorp-org@mail.tin.computer" className="underline underline-offset-4 break-all hover:text-text">edencorp-org@mail.tin.computer</a>. You can also use the <Link href="/contact" className="underline underline-offset-4 hover:text-text">contact page</Link>.</p>
          </section>
          <div className="pt-8 border-t border-border"><p className="text-sm text-text-tertiary font-mono">This notice describes the public website. Check this page for the current notice.</p></div>
        </div>
      </div>
    </main>
  );
}
