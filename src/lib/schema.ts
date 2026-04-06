// Generazione structured data Schema.org per SEO

const SITE_URL = "https://fabioregnaud.it";

/**
 * Schema LocalBusiness + ProfessionalService per la homepage.
 * Descrive Fabio Regnaud come web designer freelance a Torino.
 */
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "Fabio Regnaud — Web Designer Freelance",
    description:
      "Creo siti web professionali e veloci per piccole attività a Torino e in Canavese. Siti vetrina per ristoranti, parrucchieri, centri estetici e B&B. Sistemi di prenotazione ed e-commerce su misura.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    image: `${SITE_URL}/og-image.jpg`,
    email: "info@fabioregnaud.it",
    priceRange: "€€",
    areaServed: [
      {
        "@type": "City",
        name: "Torino",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Piemonte",
        },
      },
      {
        "@type": "AdministrativeArea",
        name: "Canavese",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Piemonte",
        },
      },
      {
        "@type": "City",
        name: "Ivrea",
      },
      {
        "@type": "City",
        name: "Chivasso",
      },
      {
        "@type": "City",
        name: "Rivarolo Canavese",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Torino",
      addressRegion: "Piemonte",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.0703,
      longitude: 7.6869,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "19:00",
    },
    founder: { "@id": `${SITE_URL}/#person` },
    knowsAbout: [
      "Web Design",
      "Sviluppo Web",
      "Next.js",
      "SEO",
      "E-commerce",
      "Sistemi di prenotazione",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi Web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sito Vetrina",
            description:
              "Sito web personalizzato, responsive e ottimizzato per Google",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "500",
            priceCurrency: "EUR",
            minPrice: "500",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sito + Prenotazioni",
            description:
              "Sito vetrina con sistema di prenotazione online integrato",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "800",
            priceCurrency: "EUR",
            minPrice: "800",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce",
            description:
              "Sito con catalogo prodotti e pagamenti online sicuri",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "1000",
            priceCurrency: "EUR",
            minPrice: "1000",
          },
        },
      ],
    },
  };
}

/**
 * Schema Person per Fabio Regnaud (brand personale).
 * Collega la persona all'attività e rafforza la knowledge graph.
 */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Fabio Regnaud",
    jobTitle: "Web Designer Freelance",
    url: SITE_URL,
    email: "info@fabioregnaud.it",
    image: `${SITE_URL}/images/logo.webp`,
    worksFor: { "@id": `${SITE_URL}/#business` },
    knowsAbout: [
      "Web Design",
      "Sviluppo Web",
      "Next.js",
      "SEO",
      "E-commerce",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Torino",
      addressRegion: "Piemonte",
      addressCountry: "IT",
    },
    // TODO: aggiungere sameAs quando i profili social saranno attivi
    // sameAs: [
    //   "https://www.linkedin.com/in/fabioregnaud",
    //   "https://github.com/fabioregnaud",
    //   "https://www.instagram.com/fabioregnaud",
    // ],
  };
}

/**
 * Schema FAQPage per la pagina servizi.
 */
export function faqSchema(
  faq: Array<{ domanda: string; risposta: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.domanda,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.risposta,
      },
    })),
  };
}

/**
 * Schema BreadcrumbList per la navigazione.
 */
export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Schema ItemList per il portfolio (lista progetti realizzati).
 */
export function portfolioItemListSchema(
  progetti: Array<{ nome: string; descrizione: string; url?: string; immagine?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio — Progetti web realizzati",
    itemListElement: progetti.map((progetto, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: progetto.nome,
        description: progetto.descrizione,
        ...(progetto.url && { url: progetto.url }),
        ...(progetto.immagine && { image: `${SITE_URL}${progetto.immagine}` }),
        author: { "@id": `${SITE_URL}/#person` },
      },
    })),
  };
}

/**
 * Schema WebSite per la homepage (abilita sitelinks in SERP).
 */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fabio Regnaud — Web Designer Freelance",
    url: SITE_URL,
  };
}
