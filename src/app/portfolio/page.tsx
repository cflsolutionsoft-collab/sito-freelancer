// Pagina portfolio — progetti realizzati per clienti reali

import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema, portfolioItemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Progetti web realizzati per attività locali a Torino. Siti vetrina, sistemi di prenotazione e soluzioni su misura.",
  alternates: {
    canonical: "https://fabioregnaud.it/portfolio",
  },
  openGraph: {
    title: "Portfolio — Fabio Regnaud",
    description:
      "Progetti web realizzati per attività locali a Torino. Siti vetrina, sistemi di prenotazione e soluzioni su misura.",
    url: "https://fabioregnaud.it/portfolio",
  },
};

// === DATI PROGETTI ===

const progetti = [
  {
    id: "doppiouno",
    nome: "Doppio Uno",
    tipo: "Web app + prenotazioni",
    descrizione:
      "Piattaforma web per un'associazione ludica con centinaia di giochi da tavolo. I visitatori esplorano il catalogo giochi, consultano eventi e aperture straordinarie. I soci prenotano tavoli scegliendo data, orario e gioco da una mappa interattiva della sala. Lo staff gestisce giochi, tavoli, sale e prenotazioni da un pannello admin con permessi personalizzati.",
    problema:
      "L'associazione non aveva modo di mostrare il proprio catalogo giochi online né di gestire le prenotazioni dei tavoli in modo organizzato.",
    soluzione:
      "Una web app con catalogo giochi ricercabile, sistema di prenotazione tavoli con mappa visuale della sala e una dashboard admin completa con gestione ruoli e permessi per lo staff.",
    url: "https://www.doppiouno.it",
    immagine: "/images/doppiouno.webp",
    tecnologie: [
      "Web app personalizzata",
      "Catalogo giochi",
      "Prenotazione tavoli",
      "Mappa sala interattiva",
      "Dashboard multi-ruolo",
    ],
    colore: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: "danorasud",
    nome: "Danorasud",
    tipo: "Vetrina + prenotazioni + pagamenti",
    descrizione:
      "Piattaforma completa per un home restaurant a Rivarolo Canavese. I clienti consultano il calendario delle serate, prenotano il proprio posto con un flusso guidato e pagano direttamente online. Il sito lavora in automatico: invia email di conferma ai clienti, notifica lo chef ad ogni nuova prenotazione e aggiorna la disponibilità in tempo reale. Lo chef gestisce tutto da una dashboard dedicata.",
    problema:
      "Il ristorante gestiva le prenotazioni manualmente via telefono e messaggi, con il rischio di overbooking, nessun sistema per raccogliere i pagamenti in anticipo e troppo tempo perso a rispondere a richieste fuori orario.",
    soluzione:
      "Un sito con calendario serate, prenotazione a step (data, persone, menu, pagamento) e un sistema di automazioni che fa tutto il lavoro operativo: email di conferma, notifiche, ricevute, aggiornamento disponibilità. Lo chef si concentra solo sulla cucina.",
    url: "https://www.danordasud.it",
    immagine: "/images/danordasud.webp",
    tecnologie: [
      "Sito personalizzato",
      "Prenotazione online",
      "Pagamenti Stripe",
      "Dashboard gestione",
      "Email automatiche",
    ],
    colore: "from-indigo-500/10 to-violet-500/10",
  },
];

// === COMPONENTE PAGINA ===

export default function Portfolio() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://fabioregnaud.it" },
          { name: "Portfolio", url: "https://fabioregnaud.it/portfolio" },
        ])}
      />
      <JsonLd
        data={portfolioItemListSchema(
          progetti.map((p) => ({
            nome: p.nome,
            descrizione: p.descrizione,
            url: p.url,
            immagine: p.immagine,
          }))
        )}
      />

      {/* Intestazione */}
      <section className="gradient-mesh relative overflow-hidden px-4 pb-8 pt-12 sm:px-6 md:pb-12 md:pt-20 lg:px-8">
        <div className="absolute left-0 top-0 h-64 w-64 opacity-[0.05]">
          <div className="dot-grid h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Portfolio
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Siti web{" "}
            <span className="font-display italic text-primary">realizzati</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Progetti web realizzati per attività locali a Torino e dintorni.
            Ogni sito è costruito su misura per risolvere problemi concreti.
          </p>
        </div>
      </section>

      {/* Progetti */}
      <SectionWrapper background="surface">
        <div className="space-y-16">
          {progetti.map((progetto, i) => (
            <article
              key={progetto.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Screenshot */}
              <div
                className={`relative aspect-video overflow-hidden bg-gradient-to-br ${progetto.colore} md:aspect-[21/9]`}
              >
                {progetto.immagine ? (
                  <Image
                    src={progetto.immagine}
                    alt={`Screenshot del sito ${progetto.nome}`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 1152px"
                    priority={i === 0}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted">
                    Screenshot {progetto.nome}
                  </div>
                )}
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />
              </div>

              {/* Dettagli */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {progetto.tipo}
                  </span>
                  {progetto.url && (
                    <a
                      href={progetto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary-light px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      Visita il sito <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <h2 className="mt-3 text-2xl font-bold lg:text-3xl">
                  {progetto.nome}
                </h2>

                <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                  {progetto.descrizione}
                </p>

                {/* Problema e soluzione */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-red-200/60 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800">
                      Il problema
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-red-700/80">
                      {progetto.problema}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-green-200/60 bg-green-50/50 p-5">
                    <p className="text-sm font-bold text-green-800">
                      La soluzione
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-green-700/80">
                      {progetto.soluzione}
                    </p>
                  </div>
                </div>

                {/* Tag tecnologie */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {progetto.tecnologie.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute right-12 top-12 h-24 w-24 rounded-full border border-white/10" />

          <div className="relative">
            <h2 className="font-display text-4xl italic sm:text-5xl">
              Vuoi un risultato simile?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Raccontami la tua attività e insieme realizziamo il sito web
              perfetto per te. La prima consulenza è gratuita.
            </p>
            <Button
              href="/contatti"
              size="lg"
              variant="accent"
              className="mt-10"
            >
              Contattami <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
