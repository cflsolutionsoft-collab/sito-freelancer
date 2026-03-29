// Generazione robots.txt — indica ai crawler cosa scansionare

import type { MetadataRoute } from "next";

const SITE_URL = "https://fabioregnaud.it";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
