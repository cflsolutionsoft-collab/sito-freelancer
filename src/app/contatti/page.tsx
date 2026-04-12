// Pagina contatti — metadata SEO + contenuto client

import type { Metadata } from "next";
import ContattiContent from "./ContattiContent";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contattami per un preventivo gratuito. Realizzo siti web per piccole attività a Torino e in Canavese. Rispondo entro 24 ore.",
  alternates: {
    canonical: "https://fabioregnaud.it/contatti",
  },
};

export default function Contatti() {
  return <ContattiContent />;
}
