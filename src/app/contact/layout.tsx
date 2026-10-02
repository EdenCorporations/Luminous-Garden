import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      {children}
      <section className="w-full px-4 pb-20" aria-labelledby="contact-questions-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="contact-questions-heading" className="font-display text-3xl md:text-4xl italic text-text mb-8">
            Before you send a message
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-t border-border pt-5">
              <h3 className="font-display text-xl italic text-text mb-3">How is a project priced?</h3>
              <div className="text-text-secondary text-sm leading-relaxed">
                We review your workflow, then give you a <Link href="/guides/workflow-automation-agency-cost" className="underline underline-offset-4 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">proposal with scope, milestones, and fees</Link>.
                The budget slider is your input, not a quote.
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <h3 className="font-display text-xl italic text-text mb-3">How long will the work take?</h3>
              <div className="text-text-secondary text-sm leading-relaxed">
                Timing depends on the workflow and the scope we agree in the proposal.
                We discuss the <Link href="/how-we-work" className="underline underline-offset-4 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">stages and schedule</Link> before work begins.
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <h3 className="font-display text-xl italic text-text mb-3">Will I speak with a person?</h3>
              <div className="text-text-secondary text-sm leading-relaxed">
                Yes. We review your inquiry and follow up personally to discuss your workflow.
                You can also use the Email support link above if you need help.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
