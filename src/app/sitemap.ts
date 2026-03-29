// Generazione sitemap.xml — elenco pagine per i motori di ricerca

import type { MetadataRoute } from "next";

const SITE_URL = "https://fabioregnaud.it";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/servizi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contatti`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
