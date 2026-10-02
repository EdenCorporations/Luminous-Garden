import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
};

const buyerQuestions = [
  {
    question: "How is a project priced?",
    before: "We review your workflow, then give you a ",
    linkText: "proposal with scope, milestones, and fees",
    after: ". The budget slider is your input, not a quote.",
    href: "/guides/workflow-automation-agency-cost",
  },
  {
    question: "How long will the work take?",
    before: "Timing depends on the workflow and the scope we agree in the proposal. We discuss the ",
    linkText: "stages and schedule",
    after: " before work begins.",
    href: "/how-we-work",
  },
  {
    question: "Will I speak with a person?",
    before: "Yes. We review your inquiry and follow up personally to discuss your workflow. You can also use the Email support link above if you need help.",
    linkText: "",
    after: "",
    href: "",
  },
];

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buyerQuestions.map(({ question, before, linkText, after }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: before + linkText + after },
    })),
  };

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      {children}
      <section className="w-full px-4 pb-20" aria-labelledby="contact-questions-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="contact-questions-heading" className="font-display text-3xl md:text-4xl italic text-text mb-8">
            Before you send a message
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {buyerQuestions.map(({ question, before, linkText, after, href }) => (
              <div key={question} className="border-t border-border pt-5">
                <h3 className="font-display text-xl italic text-text mb-3">{question}</h3>
                <div className="text-text-secondary text-sm leading-relaxed">
                  {before}{href ? <Link href={href} className="underline underline-offset-4 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{linkText}</Link> : null}{after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
