// Home page — prima impressione per i potenziali clienti

import type { Metadata } from "next";
import Image from "next/image";
import {
  Globe,
  Search,
  Smartphone,
  Zap,
  Shield,
  User,
  ArrowRight,
  CalendarCheck,
  ShoppingBag,
  Sparkles,
  Clock,
  TrendingUp,
  Calculator,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import JsonLd from "@/components/ui/JsonLd";
import {
  professionalServiceSchema,
  personSchema,
  webSiteSchema,
  breadcrumbSchema,
} from "@/lib/schema";

// Metadata esplicito per la home: canonical dedicato e OG url coerente.
// Il title usa `absolute` per evitare il template "%s — Fabio Regnaud" del layout.
export const metadata: Metadata = {
  title: {
    absolute: "Fabio Regnaud — Web Designer Freelance a Torino",
  },
  description:
    "Creo siti web professionali e veloci per piccole attività a Torino. Siti vetrina, sistemi di prenotazione ed e-commerce su misura.",
  alternates: {
    canonical: "https://fabioregnaud.it",
  },
  openGraph: {
    title: "Fabio Regnaud — Web Designer Freelance a Torino",
    description:
      "Creo siti web professionali e veloci per piccole attività a Torino. Siti vetrina, sistemi di prenotazione ed e-commerce su misura.",
    url: "https://fabioregnaud.it",
  },
};

// === DATI SEZIONI ===

const vantaggi = [
  {
    icon: Clock,
    titolo: "Si carica in meno di 1 secondo",
    numero: "0.8s",
    confronto: "4-6s",
    descrizione:
      "Il 53% degli utenti abbandona un sito se non si carica entro 3 secondi. I siti a template sono appesantiti da codice inutile. I miei si caricano in meno di un secondo.",
  },
  {
    icon: TrendingUp,
    titolo: "Ti trovano su Google, davvero",
    numero: "+70%",
    confronto: "visibilità",
    descrizione:
      "Google premia i siti veloci, con codice pulito e struttura corretta. Un sito a template ha la stessa struttura di migliaia di altri — il tuo non ha motivo di emergere.",
  },
  {
    icon: Shield,
    titolo: "Il sito è tuo. Per sempre.",
    numero: "€0",
    confronto: "abbonamento",
    descrizione:
      "Con le piattaforme fai-da-te paghi un abbonamento mensile e se smetti di pagare perdi tutto. Il sito che costruisco è di tua proprietà, senza vincoli.",
  },
  {
    icon: Calculator,
    titolo: "Molto di più di un abbonamento",
    numero: "10×",
    confronto: "valore",
    descrizione:
      "Con una piattaforma fai-da-te paghi per avere accesso a uno strumento — il sito lo costruisci tu. Con me paghi una volta e ricevi un sito finito, con consulenza, testi e dashboard incluse.",
  },
  {
    icon: User,
    titolo: "Costruito insieme a te, di persona",
    numero: "1:1",
    confronto: "dedicato",
    descrizione:
      "Ci incontriamo, ascolto le tue esigenze e costruisco il sito su misura per te. Alla consegna hai anche una dashboard semplice per gestire il sito in autonomia.",
  },
  {
    icon: Zap,
    titolo: "Cresce con la tua attività",
    numero: "∞",
    confronto: "possibilità",
    descrizione:
      "Parti con un sito vetrina, poi aggiungi prenotazioni o e-commerce quando servono. Con un builder sei vincolato ai limiti della piattaforma.",
  },
];

const problemi = [
  {
    icon: Globe,
    problema: "Non hai un sito web",
    soluzione:
      "I tuoi clienti ti cercano online e non ti trovano. Ogni giorno perdi opportunità.",
  },
  {
    icon: Search,
    problema: "Hai un sito vecchio o lento",
    soluzione:
      "Un sito lento o datato allontana i clienti. Google lo penalizza e lo mostra meno nei risultati.",
  },
  {
    icon: Smartphone,
    problema: "Il tuo sito non funziona su mobile",
    soluzione:
      "Il 70% delle ricerche locali avviene da smartphone. Se il tuo sito non è ottimizzato, perdi la maggior parte dei visitatori.",
  },
];

const servizi = [
  {
    icon: Globe,
    nome: "Sito Vetrina",
    prezzo: "500",
    descrizione:
      "La tua presenza online professionale. Sito veloce, ottimizzato per Google e pronto per ricevere contatti.",
    href: "/servizi#vetrina",
  },
  {
    icon: CalendarCheck,
    nome: "Sito + Prenotazioni",
    prezzo: "800",
    descrizione:
      "Tutto del sito vetrina più un sistema di prenotazione online con calendario e notifiche automatiche.",
    href: "/servizi#prenotazioni",
  },
  {
    icon: ShoppingBag,
    nome: "E-commerce",
    prezzo: "1.000",
    descrizione:
      "Vendi i tuoi prodotti o servizi online con pagamenti sicuri tramite carta, Apple Pay e Google Pay.",
    href: "/servizi#ecommerce",
  },
];

// === COMPONENTE PAGINA ===

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={professionalServiceSchema()} />
      <JsonLd data={personSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://fabioregnaud.it" },
        ])}
      />

      {/* Hero */}
      <section className="gradient-mesh relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24 lg:px-8">
        <div className="absolute right-0 top-0 h-72 w-72 opacity-[0.07]">
          <div className="dot-grid h-full w-full" />
        </div>
        <div className="animate-float absolute -right-8 top-32 h-24 w-24 rounded-full border-2 border-primary/10 md:right-16 md:h-40 md:w-40" />
        <div className="animate-float delay-300 absolute -left-4 bottom-24 h-16 w-16 rounded-full bg-accent/10 md:left-12 md:h-24 md:w-24" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles size={14} />
              Web Designer Freelance — Torino
            </div>

            <h1 className="animate-fade-in-up delay-100 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Creo siti web che portano{" "}
              <span className="font-display italic text-primary">clienti</span>{" "}
              alla tua attività
            </h1>

            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Realizzo siti web professionali, veloci e ottimizzati per Google.
              Pensati per le piccole attività di Torino che vogliono farsi
              trovare online dai propri clienti.
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contatti" size="lg" variant="accent">
                Parliamone <ArrowRight size={18} />
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                Vedi i miei lavori
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Perché un sito su misura — SECONDA SEZIONE, risponde subito all'obiezione */}
      <SectionWrapper background="surface">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Pensavi di fartelo da solo?
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Perché un sito web su misura batte{" "}
            <span className="font-display italic">qualsiasi template</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted">
            Le piattaforme fai-da-te sembrano convenienti, ma alla lunga costano
            di più e rendono di meno. Un sito web professionale per la tua
            attività a Torino è un investimento che si ripaga.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vantaggi.map((vantaggio, i) => (
            <div
              key={vantaggio.titolo}
              className={`animate-fade-in-up group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                i === 0
                  ? ""
                  : i === 1
                    ? "delay-100"
                    : i === 2
                      ? "delay-200"
                      : i === 3
                        ? "delay-100"
                        : i === 4
                          ? "delay-200"
                          : "delay-300"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <vantaggio.icon size={20} />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">
                    {vantaggio.numero}
                  </span>
                  <p className="text-xs text-muted">{vantaggio.confronto}</p>
                </div>
              </div>
              <h3 className="font-semibold">{vantaggio.titolo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {vantaggio.descrizione}
              </p>
            </div>
          ))}
        </div>

      </SectionWrapper>

      {/* Problema / Soluzione */}
      <SectionWrapper background="gradient">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Ti suona familiare?
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Ti riconosci in una di queste{" "}
            <span className="font-display italic">situazioni?</span>
          </h2>
          <p className="mt-3 text-lg text-muted">
            Sono problemi comuni per le attività locali. Ma hanno una soluzione.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problemi.map((item, i) => (
            <div
              key={item.problema}
              className={`animate-fade-in-up group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                i === 0 ? "" : i === 1 ? "delay-100" : "delay-200"
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{item.problema}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.soluzione}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Come lavoro */}
      <SectionWrapper>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Il mio metodo
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Come{" "}
            <span className="font-display italic">lavoro</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted">
            Prima di scrivere una riga di codice, studio la tua attività
            e il mercato locale a Torino. Così il sito web non è bello e
            basta — è costruito per portarti clienti.
          </p>
        </div>
        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Linea connettore (desktop) */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          {[
            {
              step: "01",
              titolo: "Ascolto",
              descrizione:
                "Ci incontriamo di persona. Capisco la tua attività, i tuoi obiettivi e chi sono i tuoi clienti.",
            },
            {
              step: "02",
              titolo: "Analisi",
              descrizione:
                "Studio i tuoi concorrenti e il mercato locale. Così il sito si distingue da quello degli altri.",
            },
            {
              step: "03",
              titolo: "Costruzione",
              descrizione:
                "Realizzo il sito su misura per il tuo settore. Ti aggiorno durante tutto il percorso.",
            },
            {
              step: "04",
              titolo: "Consegna",
              descrizione:
                "Il sito va online con una dashboard per gestirlo e lavora in automatico anche quando tu non ci sei.",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className={`animate-fade-in-up relative text-center ${
                i === 1
                  ? "delay-100"
                  : i === 2
                    ? "delay-200"
                    : i === 3
                      ? "delay-300"
                      : ""
              }`}
            >
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/20">
                <span className="text-2xl font-bold">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold">{item.titolo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.descrizione}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Servizi preview */}
      <SectionWrapper background="surface">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Cosa posso fare per te
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Soluzioni per ogni{" "}
            <span className="font-display italic">esigenza</span>
          </h2>
          <p className="mt-3 text-lg text-muted">
            Tre pacchetti chiari con prezzi trasparenti. Senza sorprese.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servizi.map((servizio, i) => (
            <div
              key={servizio.nome}
              className={`group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                i === 1 ? "ring-2 ring-accent/30 lg:-translate-y-2" : ""
              }`}
            >
              {i === 1 && (
                <span className="mb-3 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  Più richiesto
                </span>
              )}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/20">
                <servizio.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{servizio.nome}</h3>
              <p className="mt-1 text-2xl font-bold">
                <span className="text-sm font-normal text-muted">
                  a partire da{" "}
                </span>
                <span className="text-primary">€{servizio.prezzo}</span>
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {servizio.descrizione}
              </p>
              <a
                href={servizio.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
              >
                Scopri di più{" "}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/servizi" variant="outline">
            Vedi tutti i servizi
          </Button>
        </div>
      </SectionWrapper>

      {/* Portfolio snippet */}
      <SectionWrapper background="surface">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Lavori{" "}
            <span className="font-display italic">realizzati</span>
          </h2>
          <p className="mt-3 text-lg text-muted">
            Siti web realizzati per attività locali a Torino e dintorni.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <a
            href="/portfolio"
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/doppiouno.webp"
                alt="Screenshot del sito Doppio Uno — ludoteca e associazione ludica"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Web app + prenotazioni
              </span>
              <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-primary">
                Doppio Uno — Ludoteca
              </h3>
              <p className="mt-1 text-sm text-muted">
                Piattaforma con catalogo giochi, prenotazione tavoli e
                dashboard di gestione per un&apos;associazione ludica.
              </p>
            </div>
          </a>

          <a
            href="/portfolio"
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/danordasud.webp"
                alt="Screenshot del sito Danorasud — home restaurant a Rivarolo Canavese"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Vetrina + prenotazioni + pagamenti
              </span>
              <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-primary">
                Danorasud — Home restaurant
              </h3>
              <p className="mt-1 text-sm text-muted">
                Sito con calendario serate, prenotazione online e pagamento
                integrato per un home restaurant.
              </p>
            </div>
          </a>
        </div>
        <div className="mt-10 text-center">
          <Button href="/portfolio" variant="outline">
            Vedi il portfolio completo
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA finale */}
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/10 md:h-32 md:w-32" />

          <div className="relative">
            <h2 className="font-display text-4xl italic sm:text-5xl">
              Hai un&apos;attività a Torino?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Raccontami cosa fai e insieme creiamo il sito web perfetto per
              la tua attività. La prima consulenza è gratuita e senza impegno.
            </p>
            <div className="mt-10">
              <Button href="/contatti" size="lg" variant="accent">
                Scrivimi ora <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
