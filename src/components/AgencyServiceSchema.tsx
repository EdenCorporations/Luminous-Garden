export function AgencyServiceSchema({ path }: { path: "/" | "/how-we-work" }) {
  const url = `https://www.edencorp.org${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.edencorp.org/#service",
    name: "Eden custom workflow automation",
    serviceType: "Custom workflow automation",
    description: "Eden builds custom workflow automation for organizations entirely online. Scope and pricing are agreed in each proposal. Handover and support follow the proposal.",
    url: "https://www.edencorp.org/",
    mainEntityOfPage: url,
    provider: { "@id": "https://www.edencorp.org/#organization" },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  }} />;
}
