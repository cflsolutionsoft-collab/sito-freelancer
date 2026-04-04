// Pagina servizi — pacchetti, confronto Wix, manutenzione e FAQ

import type { Metadata } from "next";
import {
  Globe,
  CalendarCheck,
  ShoppingBag,
  Code,
  Check,
  ArrowRight,
  ChevronDown,
  Wrench,
  X,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import JsonLd from "@/components/ui/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Siti vetrina, sistemi di prenotazione ed e-commerce su misura per piccole attività a Torino. Prezzi trasparenti a partire da €500.",
  alternates: {
    canonical: "https://fabioregnaud.it/servizi",
  },
  openGraph: {
    title: "Servizi — Fabio Regnaud",
    description:
      "Siti vetrina, sistemi di prenotazione ed e-commerce su misura per piccole attività a Torino. Prezzi trasparenti a partire da €500.",
    url: "https://fabioregnaud.it/servizi",
  },
};

// === DATI ===

const pacchetti = [
  {
    id: "vetrina",
    icon: Globe,
    nome: "Sito Vetrina",
    prezzo: "500",
    descrizione:
      "La tua presenza online professionale, veloce e ottimizzata per Google.",
    ideale:
      "Ristoranti, parrucchieri, artigiani, fotografi, consulenti, studi professionali.",
    include: [
      "Sito personalizzato, responsive e veloce",
      "5-8 pagine: Home, Chi siamo, Servizi, Galleria, Contatti",
      "Ottimizzazione SEO per le ricerche locali",
      "Form di contatto funzionante",
      "Pulsante WhatsApp integrato",
      "Hosting e dominio personalizzato",
      "Manutenzione gratuita il primo anno",
    ],
  },
  {
    id: "prenotazioni",
    icon: CalendarCheck,
    nome: "Sito + Prenotazioni",
    prezzo: "800",
    evidenziato: true,
    descrizione:
      "Tutto del sito vetrina più un sistema di prenotazione online integrato.",
    ideale:
      "Ristoranti, parrucchieri, estetiste, centri benessere, studi medici, personal trainer.",
    include: [
      "Tutto del pacchetto Sito Vetrina",
      "Calendario prenotazioni con disponibilità in tempo reale",
      "Notifiche automatiche al titolare e al cliente",
      "Pagamento anticipato opzionale per ridurre i no-show",
      "Pannello semplice per gestire le prenotazioni",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    nome: "E-commerce",
    prezzo: "1.000",
    descrizione: "Per chi vuole vendere prodotti o servizi direttamente online.",
    ideale:
      "Negozi locali, artigiani con prodotti propri, attività con servizi acquistabili in anticipo.",
    include: [
      "Sito con catalogo prodotti",
      "Pagamenti sicuri: carta, Apple Pay, Google Pay",
      "Gestione ordini e notifiche automatiche",
      "Pannello di amministrazione semplice",
      "Hosting e dominio personalizzato",
      "Manutenzione gratuita il primo anno",
    ],
  },
  {
    id: "su-misura",
    icon: Code,
    nome: "Web App Su Misura",
    prezzo: null,
    descrizione:
      "Per esigenze più complesse: gestionali, aree riservate, piattaforme multi-utente, integrazioni.",
    ideale:
      "Attività con esigenze specifiche che vanno oltre i pacchetti standard.",
    include: [
      "Analisi delle esigenze e consulenza gratuita",
      "Progettazione su misura",
      "Sviluppo con tecnologie moderne e scalabili",
      "Formazione sull'utilizzo",
      "Manutenzione e assistenza personalizzata",
    ],
  },
];

const confronto = [
  {
    aspetto: "Velocità",
    template: "Siti spesso lenti, penalizzati su Google",
    suMisura: "Siti ultra-veloci, premiati da Google nei risultati di ricerca",
  },
  {
    aspetto: "SEO",
    template: "Limitato dai vincoli della piattaforma",
    suMisura: "Codice ottimizzato per il massimo posizionamento locale",
  },
  {
    aspetto: "Personalizzazione",
    template: "Vincolato ai template disponibili",
    suMisura: "Costruito esattamente come serve alla tua attività",
  },
  {
    aspetto: "Proprietà",
    template: "Dipende dall'abbonamento alla piattaforma",
    suMisura: "Il sito è tuo, per sempre, senza vincoli",
  },
  {
    aspetto: "Assistenza",
    template: "Chatbot e ticket di supporto generico",
    suMisura: "Parli direttamente con me, referente unico",
  },
  {
    aspetto: "Costo in 3 anni",
    template: "€900+ di abbonamento, senza proprietà",
    suMisura: "€740 tutto incluso, il sito resta tuo",
  },
];

const faq = [
  {
    domanda: "Quanto tempo ci vuole per avere il sito pronto?",
    risposta:
      "Un sito vetrina richiede in media 2-3 settimane. Un sito con prenotazioni o e-commerce 3-4 settimane. I tempi dipendono anche dalla velocità con cui mi fornisci testi e immagini.",
  },
  {
    domanda: "Cosa devo preparare io?",
    risposta:
      "Testi, foto della tua attività e il logo. Se non hai tutto pronto, ti guido io su cosa serve e come ottenerlo. Non devi essere tecnico per lavorare con me.",
  },
  {
    domanda: "Posso aggiornare il sito da solo?",
    risposta:
      "Le modifiche ordinarie (testi, foto, orari) sono incluse nel piano di manutenzione — me le chiedi e le faccio io entro 48-72 ore. Così non devi preoccuparti di nulla.",
  },
  {
    domanda: "Cosa succede se non rinnovo la manutenzione?",
    risposta:
      "Il sito resta tuo e continua a funzionare. Semplicemente non avrai più le modifiche incluse e l'assistenza dedicata. Puoi riattivare il piano quando vuoi.",
  },
  {
    domanda: "Posso partire con il sito vetrina e aggiungere le prenotazioni dopo?",
    risposta:
      "Assolutamente sì. Molti clienti partono con il sito vetrina e aggiungono funzionalità quando servono. Il preventivo per l'aggiunta viene fatto separatamente.",
  },
];

// === COMPONENTE PAGINA ===

export default function Servizi() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://fabioregnaud.it" },
          { name: "Servizi", url: "https://fabioregnaud.it/servizi" },
        ])}
      />

      {/* Intestazione */}
      <section className="gradient-mesh relative overflow-hidden px-4 pb-8 pt-12 sm:px-6 md:pb-12 md:pt-20 lg:px-8">
        <div className="absolute right-0 top-0 h-64 w-64 opacity-[0.05]">
          <div className="dot-grid h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Servizi
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Soluzioni su misura per la tua{" "}
            <span className="font-display italic text-primary">attività</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Siti costruiti su misura, non template tutti uguali. Prezzi chiari e
            trasparenti, senza sorprese.
          </p>
        </div>
      </section>

      {/* Pacchetti */}
      <SectionWrapper background="surface">
        <div className="grid gap-8 lg:grid-cols-2">
          {pacchetti.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`group flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8 ${
                pkg.evidenziato
                  ? "border-accent/30 bg-card ring-2 ring-accent/20"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {pkg.evidenziato && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  Più richiesto
                </span>
              )}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/20">
                <pkg.icon size={22} />
              </div>
              <h2 className="text-xl font-bold">{pkg.nome}</h2>
              {pkg.prezzo ? (
                <p className="mt-1">
                  <span className="text-sm text-muted">a partire da </span>
                  <span className="text-3xl font-bold text-primary">
                    €{pkg.prezzo}
                  </span>
                </p>
              ) : (
                <p className="mt-1 text-3xl font-bold text-primary">
                  Su preventivo
                </p>
              )}
              <p className="mt-3 text-muted">{pkg.descrizione}</p>
              <p className="mt-3 text-sm">
                <span className="font-semibold">Ideale per: </span>
                <span className="text-muted">{pkg.ideale}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.include.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contatti"
                variant={pkg.evidenziato ? "accent" : "outline"}
                className="mt-6 w-full"
              >
                Richiedi preventivo <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Confronto con piattaforme fai-da-te */}
      <SectionWrapper background="gradient">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Il confronto
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Perché non un sito{" "}
            <span className="font-display italic">fai-da-te?</span>
          </h2>
          <p className="mt-3 text-lg text-muted">
            Con una piattaforma a template hai un sito. Con me hai uno strumento
            che lavora per portarti clienti.
          </p>
        </div>
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="p-4 font-semibold"></th>
                <th className="p-4 font-semibold text-muted">
                  Piattaforme fai-da-te
                </th>
                <th className="p-4 font-semibold text-primary">
                  Sito su misura
                </th>
              </tr>
            </thead>
            <tbody>
              {confronto.map((riga) => (
                <tr
                  key={riga.aspetto}
                  className="border-b border-border last:border-0"
                >
                  <td className="p-4 font-medium">{riga.aspetto}</td>
                  <td className="p-4 text-muted">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100">
                      <X size={12} className="text-red-500" />
                    </span>
                    {riga.template}
                  </td>
                  <td className="p-4">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check size={12} className="text-green-600" />
                    </span>
                    {riga.suMisura}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Manutenzione */}
      <SectionWrapper background="surface">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/20">
              <Wrench size={24} />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Manutenzione{" "}
              <span className="font-display italic">inclusa</span>
            </h2>
            <p className="mt-3 text-lg text-muted">
              Non ti lascio solo dopo la consegna. Il primo anno è compreso nel
              prezzo.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Primo anno */}
            <div className="rounded-2xl border border-accent/30 bg-card p-6 ring-2 ring-accent/20 transition-shadow hover:shadow-lg">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                Incluso
              </span>
              <p className="mt-3 text-sm font-semibold text-accent">
                Primo anno
              </p>
              <p className="mt-1 text-3xl font-bold">Gratuita</p>
              <p className="mt-1 text-sm text-muted">
                Inclusa in tutti i pacchetti
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  2 modifiche ordinarie al mese
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  Aggiornamenti tecnici e di sicurezza
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  Hosting incluso
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  Risposta entro 48-72 ore lavorative
                </li>
              </ul>
            </div>

            {/* Dal secondo anno */}
            <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              <p className="mt-3 text-sm font-semibold text-muted">
                Dal secondo anno
              </p>
              <p className="mt-1 text-3xl font-bold">
                €20
                <span className="text-lg font-normal text-muted">/mese</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                Rinnovabile liberamente
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  Stesse condizioni del primo anno
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  Nessun vincolo, disdici quando vuoi
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  Il sito resta tuo anche se non rinnovi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Domande{" "}
              <span className="font-display italic">frequenti</span>
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faq.map((item) => (
              <details
                key={item.domanda}
                className="group rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium">
                  {item.domanda}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                  {item.risposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="surface">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-4xl italic sm:text-5xl">
              Non sai quale pacchetto fa per te?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Scrivimi e ne parliamo insieme, senza impegno. Ti aiuto a capire
              la soluzione migliore per la tua attività.
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
