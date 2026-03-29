// Generazione structured data Schema.org per SEO

const SITE_URL = "https://fabioregnaud.it";

/**
 * Schema ProfessionalService per la homepage.
 * Descrive Fabio Regnaud come web designer freelance a Torino.
 */
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: "Fabio Regnaud — Web Designer Freelance",
    description:
      "Creo siti web professionali e veloci per piccole attività a Torino. Siti vetrina, sistemi di prenotazione ed e-commerce su misura.",
    url: SITE_URL,
    // TODO: aggiungere logo e immagine quando disponibili
    // logo: `${SITE_URL}/images/logo.png`,
    // image: `${SITE_URL}/images/og-image.jpg`,
    priceRange: "€€",
    areaServed: {
      "@type": "City",
      name: "Torino",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Piemonte",
      },
    },
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
    // TODO: aggiungere email e telefono reali
    // email: "fabio@example.com",
    // telephone: "+39XXXXXXXXXX",
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
