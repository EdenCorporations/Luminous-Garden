type FAQ = { question: string; answer: string };

export function BuyerPageSchema({ path, description, faqs }: {
  path: string;
  description: string;
  faqs: FAQ[];
}) {
  const url = `https://www.edencorp.org${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Eden custom workflow automation",
        description,
        serviceType: "Custom workflow development, integration, and consulting",
        url,
        provider: { "@id": "https://www.edencorp.org/#organization" },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  }} />;
}
