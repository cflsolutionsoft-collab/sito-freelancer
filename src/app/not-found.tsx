// Pagina 404 — mostrata quando l'URL richiesto non esiste

import type { Metadata } from "next";
import { Home, Mail, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  description:
    "La pagina che cercavi non esiste o è stata spostata. Torna alla home o scrivimi se non trovi quello che cerchi.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <SectionWrapper background="gradient">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Errore 404
        </p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl">
          Questa pagina{" "}
          <span className="font-display italic text-primary">non esiste</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Forse hai sbagliato indirizzo, oppure la pagina è stata spostata.
          Nessun problema: puoi tornare alla home o scrivermi direttamente.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/" size="lg">
            <Home size={18} /> Torna alla home
          </Button>
          <Button href="/contatti" variant="secondary" size="lg">
            <Mail size={18} /> Scrivimi
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
