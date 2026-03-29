// Layout pagina contatti — metadata e structured data

import type { Metadata } from "next";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Scrivimi per un preventivo gratuito. Creo siti web per piccole attività a Torino. Rispondo entro 24 ore.",
  alternates: {
    canonical: "https://fabioregnaud.it/contatti",
  },
  openGraph: {
    title: "Contatti — Fabio Regnaud",
    description:
      "Scrivimi per un preventivo gratuito. Creo siti web per piccole attività a Torino.",
    url: "https://fabioregnaud.it/contatti",
  },
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://fabioregnaud.it" },
          { name: "Contatti", url: "https://fabioregnaud.it/contatti" },
        ])}
      />
      {children}
    </>
  );
}
