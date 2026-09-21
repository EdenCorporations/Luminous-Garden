import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/how-we-work", "/about", "/orchard", "/prism", "/contact", "/privacy", "/terms",
    "/compare/zapier-vs-make", "/compare/n8n-vs-zapier", "/alternatives/zapier",
    "/compare/eden-vs-zapier", "/compare/eden-vs-make", "/compare/eden-vs-n8n",
    "/guides/when-to-hire-an-automation-agency", "/compare", "/services/workflow-automation",
    "/guides/workflow-automation-agency-cost",
    "/guides/automation-agency-or-zapier",
    "/services/excel-automation",
  ];
  // These pages gained article markup or a resource link on September 13.
  const updatedSeptember13 = new Set([
    "/compare", "/compare/eden-vs-zapier", "/compare/eden-vs-make",
    "/compare/eden-vs-n8n", "/guides/when-to-hire-an-automation-agency",
  ]);
  return routes.map((path) => ({
    url: `https://www.edencorp.org${path}`,
    ...(path === "/how-we-work" ? { lastModified: "2026-09-18" } : {}),
    ...((path.startsWith("/compare/") || path.startsWith("/alternatives/") || path.startsWith("/guides/"))
      ? { lastModified: "2026-09-12" } : {}),
    ...(updatedSeptember13.has(path) ? { lastModified: "2026-09-13" } : {}),
    ...(["/compare", "/services/workflow-automation"].includes(path) ? { lastModified: "2026-09-14" } : {}),
    ...(path === "/guides/workflow-automation-agency-cost" ? { lastModified: "2026-09-15" } : {}),
    ...(path === "/guides/automation-agency-or-zapier" ? { lastModified: "2026-09-16" } : {}),
    ...(["/services/excel-automation", "/services/workflow-automation", "/compare"].includes(path) ? { lastModified: "2026-09-21" } : {}),
  }));
}
