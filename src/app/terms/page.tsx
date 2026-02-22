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
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-text-secondary font-body leading-relaxed">
          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using EdenCORP&apos;s services, website, and
              automation platforms (collectively, the &quot;Services&quot;), you
              agree to be bound by these Terms of Service. If you do not agree to
              these terms, do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              2. Services Description
            </h2>
            <p>
              EdenCORP provides AI-driven automation solutions across multiple
              industries, including but not limited to education, healthcare,
              logistics, and enterprise operations. Our Services include custom
              automation development, integration, consulting, and ongoing
              platform support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              3. User Responsibilities
            </h2>
            <p className="mb-4">When using our Services, you agree to:</p>
            <ul className="list-none space-y-3 ml-4">
              {[
                "Provide accurate and complete information when requested",
                "Maintain the confidentiality of your account credentials",
                "Use the Services only for lawful purposes",
                "Not attempt to reverse-engineer, decompile, or disassemble any part of our platform",
                "Not interfere with or disrupt the Services or servers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-ember mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content, software, algorithms, designs, and documentation
              provided through our Services are the intellectual property of
              EdenCORP unless otherwise specified in a written agreement.
              Custom solutions developed for clients are subject to the
              licensing terms outlined in individual project contracts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              5. Payment Terms
            </h2>
            <p>
              Payment terms, schedules, and pricing are agreed upon in
              individual project proposals and contracts. All fees are
              non-refundable unless otherwise stated. Late payments may incur
              additional charges as specified in your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              6. Service Level Agreement
            </h2>
            <p>
              We strive to maintain 99.9% uptime for all deployed solutions.
              Specific SLA terms, including response times and support
              availability, are defined in individual client agreements.
              Scheduled maintenance windows will be communicated in advance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, EdenCORP shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or business
              opportunities, arising from your use of the Services, even if
              advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              8. Termination
            </h2>
            <p>
              Either party may terminate the service relationship with written
              notice as specified in individual contracts. Upon termination, we
              will provide a transition period for data export and migration.
              Sections regarding intellectual property, limitation of liability,
              and confidentiality survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              9. Dispute Resolution
            </h2>
            <p>
              Any disputes arising from these terms shall first be attempted to
              be resolved through good-faith negotiation. If unresolved, disputes
              will be submitted to binding arbitration in accordance with
              applicable laws in the jurisdiction specified in your service
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Material
              changes will be communicated at least 30 days in advance. Continued
              use of our Services after changes constitutes acceptance of the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display italic text-text mb-4">
              11. Contact
            </h2>
            <p>
              Questions about these terms? Reach out through our{" "}
              <Link
                href="/contact"
                className="text-ember hover:text-text transition-colors underline underline-offset-4"
              >
                contact page
              </Link>
              .
            </p>
          </section>

          {/* Divider */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-text-tertiary font-mono">
              These terms constitute the entire agreement between you and
              EdenCORP regarding use of our Services, superseding any prior
              agreements.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
