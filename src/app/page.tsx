// Home page — prima impressione per i potenziali clienti

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
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

// === DATI SEZIONI ===

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

const vantaggi = [
  {
    icon: Zap,
    titolo: "Velocità reale",
    descrizione:
      "I siti che costruisco sono significativamente più veloci di quelli fatti con Wix o WordPress. Google premia la velocità con più visibilità.",
  },
  {
    icon: Search,
    titolo: "Trovi più clienti su Google",
    descrizione:
      "Codice pulito e struttura ottimizzata per il posizionamento nelle ricerche locali a Torino.",
  },
  {
    icon: Shield,
    titolo: "Il sito è tuo",
    descrizione:
      "Nessun abbonamento a piattaforme. Il sito ti appartiene e non dipende da servizi di terze parti.",
  },
  {
    icon: User,
    titolo: "Parli con me, non con un call center",
    descrizione:
      "Un referente unico che conosce il tuo progetto. Risposte rapide, senza ticket o tempi d'attesa.",
  },
];

// === COMPONENTE PAGINA ===

export default function Home() {
  return (
    <>
      {/* Hero con gradient mesh e elementi decorativi */}
      <section className="gradient-mesh relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24 lg:px-8">
        {/* Decorazioni geometriche */}
        <div className="absolute right-0 top-0 h-72 w-72 opacity-[0.07]">
          <div className="dot-grid h-full w-full" />
        </div>
        <div className="animate-float absolute -right-8 top-32 h-24 w-24 rounded-full border-2 border-primary/10 md:right-16 md:h-40 md:w-40" />
        <div className="animate-float delay-300 absolute -left-4 bottom-24 h-16 w-16 rounded-full bg-accent/10 md:left-12 md:h-24 md:w-24" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
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
              Siti professionali, veloci e ottimizzati per Google. Pensati per le
              piccole attività di Torino che vogliono farsi trovare online.
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

      {/* Problema / Soluzione */}
      <SectionWrapper background="surface">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Ti suona familiare?
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Ti riconosci in una di queste{" "}
            <span className="font-display italic">situazioni?</span>
          </h2>
          <p className="mt-3 text-lg text-muted">
            Sono problemi comuni, ma hanno una soluzione semplice.
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

      {/* Servizi preview */}
      <SectionWrapper background="gradient">
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
                <span className="text-sm font-normal text-muted">a partire da </span>
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
            Alcuni dei progetti che ho realizzato per attività come la tua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Progetto 1 — Danorasud */}
          <a
            href="/portfolio"
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              {/* Placeholder per screenshot */}
              <div className="flex h-full items-center justify-center text-sm text-muted">
                Screenshot danorasud.it
              </div>
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Sito vetrina
              </span>
              <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-primary">
                Danorasud — Sito chiesa
              </h3>
              <p className="mt-1 text-sm text-muted">
                Sito vetrina moderno e responsive per una comunità religiosa locale.
              </p>
            </div>
          </a>

          {/* Progetto 2 — Doppio Uno Ludoteca */}
          <a
            href="/portfolio"
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              {/* Placeholder per screenshot */}
              <div className="flex h-full items-center justify-center text-sm text-muted">
                Screenshot doppiounoludoteca.it
              </div>
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Vetrina + prenotazioni
              </span>
              <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-primary">
                Doppio Uno — Ludoteca e ristorante
              </h3>
              <p className="mt-1 text-sm text-muted">
                Sito con sistema di prenotazione online e pagamenti integrati.
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

      {/* Blocco fiducia — Perché scegliere me */}
      <SectionWrapper background="gradient">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Perché un sito su misura
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Con Wix hai un sito.<br />
              Con me hai uno{" "}
              <span className="font-display italic text-primary">strumento</span>{" "}
              che lavora per te.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un sito costruito su misura non è solo più bello — è più veloce,
              si posiziona meglio su Google e ti appartiene davvero.
            </p>
          </div>
          <div className="space-y-6">
            {vantaggi.map((vantaggio) => (
              <div
                key={vantaggio.titolo}
                className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-sm">
                  <vantaggio.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{vantaggio.titolo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {vantaggio.descrizione}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA finale */}
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          {/* Decorazioni */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/10 md:h-32 md:w-32" />

          <div className="relative">
            <h2 className="font-display text-4xl italic sm:text-5xl">
              Hai un&apos;attività a Torino?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Raccontami cosa fai e insieme troviamo la soluzione migliore per
              portare la tua attività online. La prima consulenza è gratuita e
              senza impegno.
            </p>
            <div className="mt-10">
              <Button
                href="/contatti"
                size="lg"
                variant="accent"
              >
                Scrivimi ora <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
