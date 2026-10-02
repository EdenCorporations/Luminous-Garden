import Link from "next/link";
import AboutClient from "./AboutClient";

const buyerQuestions = [
  {
    question: "What workflows can Eden automate?",
    before: "Eden scopes ",
    linkText: "custom workflows",
    after: " across industries, from websites to connected operations. Share the manual steps and systems you want to change.",
    href: "/services/workflow-automation",
  },
  {
    question: "When should I hire Eden instead of using a workflow tool?",
    before: "Consider custom help when several systems, approvals, or exception paths must work together. A simple workflow may suit a ",
    linkText: "tool you manage yourself",
    after: ".",
    href: "/guides/automation-agency-or-zapier",
  },
  {
    question: "How does Eden plan a project?",
    before: "Bring one process and its exceptions. Eden discusses ",
    linkText: "scope, ownership, testing, fees, and support",
    after: " in an individual proposal.",
    href: "/how-we-work",
  },
];

export default function AboutPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buyerQuestions.map(({ question, before, linkText, after }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: before + linkText + after },
    })),
  };

  const faq = (
    <section className="py-20" aria-labelledby="buyer-questions-heading">
      <div className="max-w-5xl mx-auto px-6">
        <h2 id="buyer-questions-heading" className="font-display text-3xl md:text-4xl italic text-text mb-10">
          Questions before we begin
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {buyerQuestions.map(({ question, before, linkText, after, href }) => (
            <div key={question} className="surface-card p-6 rounded-lg border border-border">
              <h3 className="font-display text-xl italic text-text mb-3">{question}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {before}<Link href={href} className="underline underline-offset-4 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{linkText}</Link>{after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <AboutClient buyerQuestions={faq} />
    </>
  );
}
