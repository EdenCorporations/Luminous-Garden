import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/orchard", "/prism", "/contact", "/privacy", "/terms", "/compare/zapier-vs-make", "/compare/n8n-vs-zapier", "/alternatives/zapier"].map((path) => ({
    url: `https://www.edencorp.org${path}`,
    ...((path.startsWith("/compare/") || path.startsWith("/alternatives/")) ? { lastModified: "2026-09-09" } : {}),
  }));
}
