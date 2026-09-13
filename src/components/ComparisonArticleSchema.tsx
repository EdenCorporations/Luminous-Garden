/** Describes the existing Home > comparison hub > article navigation. */
export function ComparisonArticleSchema({ path, headline }: {
  path: string;
  headline: string;
}) {
  const origin = "https://www.edencorp.org";
  const url = `${origin}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline,
        url,
        mainEntityOfPage: url,
        publisher: { "@id": `${origin}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name: "Comparisons and guides", item: `${origin}/compare` },
          { "@type": "ListItem", position: 3, name: headline, item: url },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  }} />;
}
