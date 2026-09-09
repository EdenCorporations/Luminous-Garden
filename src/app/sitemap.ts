import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/orchard", "/prism", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `https://www.edencorp.org${path}`,
  }));
}
