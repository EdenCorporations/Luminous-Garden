import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/about", "/orchard", "/prism", "/contact", "/privacy", "/terms",
    "/compare/zapier-vs-make", "/compare/n8n-vs-zapier", "/alternatives/zapier",
    "/compare/eden-vs-zapier", "/compare/eden-vs-make", "/compare/eden-vs-n8n",
    "/guides/when-to-hire-an-automation-agency",
  ];
  return routes.map((path) => ({
    url: `https://www.edencorp.org${path}`,
    ...((path.startsWith("/compare/") || path.startsWith("/alternatives/") || path.startsWith("/guides/"))
      ? { lastModified: "2026-09-12" } : {}),
  }));
}
