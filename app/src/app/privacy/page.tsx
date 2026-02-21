import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="flex-grow pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold font-mono text-xs uppercase tracking-widest">
              Legal
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-400 font-mono text-sm">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="reveal space-y-12 text-gray-300 font-body leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              EdenCORP collects information you provide directly when you use our
              services, including:
            </p>
            <ul className="list-none space-y-3 ml-4">
              {[
                "Contact information (name, email, organization)",
                "Project requirements and budget details submitted through our contact form",
                "Usage data and analytics from our platform interactions",
                "Technical data such as IP address, browser type, and device information",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-none space-y-3 ml-4">
              {[
                "Provide, maintain, and improve our automation services",
                "Respond to inquiries and communicate about projects",
                "Analyze usage patterns to optimize platform performance",
                "Ensure security and prevent unauthorized access",
                "Comply with legal obligations and enforce our terms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              3. Data Protection
            </h2>
            <p>
              We implement industry-standard security measures including
              encryption at rest and in transit, zero-trust architecture, and
              regular security audits. Your data is stored on secure,
              SOC 2-compliant infrastructure with redundancy across multiple
              regions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share data with
              trusted service providers who assist in operating our platform,
              subject to strict confidentiality agreements. We may also disclose
              information when required by law or to protect our rights and
              safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              5. Data Retention
            </h2>
            <p>
              We retain your information for as long as necessary to provide our
              services and fulfill the purposes outlined in this policy. You may
              request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-none space-y-3 ml-4">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your data",
                "Object to or restrict processing of your data",
                "Data portability — receive your data in a structured format",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              7. Cookies
            </h2>
            <p>
              We use essential cookies to ensure proper functionality of our
              platform. We do not use third-party tracking cookies. Analytics
              data is collected in aggregate and does not personally identify
              individual users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-4">
              8. Contact
            </h2>
            <p>
              For privacy-related inquiries or to exercise your data rights,
              reach out through our{" "}
              <Link
                href="/contact"
                className="text-gold hover:text-white transition-colors underline underline-offset-4"
              >
                contact gateway
              </Link>
              .
            </p>
          </section>

          {/* Divider */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 font-mono">
              This policy may be updated periodically. We will notify you of
              material changes through our platform or via email.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
