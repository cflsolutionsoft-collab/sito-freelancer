// Pagina Chi Sono — la storia, le passioni e il metodo di lavoro

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Cpu, Heart, Code, Lightbulb } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/ui/Reveal";
import LinkedInBadge from "@/components/ui/LinkedInBadge";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Chi Sono",
  description:
    "Sono Fabio Regnaud, web designer freelance a Torino e in Canavese. Insegnante di informatica da 10 anni, creo siti web su misura per piccole attività locali.",
  alternates: {
    canonical: "https://fabioregnaud.it/chi-sono",
  },
  openGraph: {
    title: "Chi Sono — Fabio Regnaud",
    description:
      "Sono Fabio Regnaud, web designer freelance a Torino e in Canavese. Insegnante di informatica da 10 anni, creo siti web su misura per piccole attività locali.",
    url: "https://fabioregnaud.it/chi-sono",
  },
};

export default function ChiSono() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://fabioregnaud.it" },
          { name: "Chi Sono", url: "https://fabioregnaud.it/chi-sono" },
        ])}
      />

      {/* Hero con foto */}
      <section className="gradient-mesh relative overflow-hidden px-4 pb-12 pt-12 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
        <div className="absolute right-0 top-0 h-72 w-72 opacity-[0.07]">
          <div className="dot-grid h-full w-full" />
        </div>
        {/* Alone sfumato decorativo */}
        <div className="animate-pulse-soft absolute -bottom-10 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Testo */}
            <div>
              <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-wider text-accent">
                Chi sono
              </p>
              <h1 className="animate-fade-in-up delay-100 mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Ciao, sono{" "}
                <span className="wavy-underline always-on font-display italic text-primary">
                  Fabio
                </span>
              </h1>
              <p className="animate-fade-in-up delay-200 mt-6 text-lg leading-relaxed text-muted">
                Web designer freelance a Torino e in Canavese, insegnante di
                informatica da 10 anni. Creo siti web su misura per piccole
                attività che vogliono farsi trovare online dai propri clienti.
              </p>
              <div className="animate-fade-in-up delay-300 mt-8">
                <Button
                  href="/contatti"
                  size="lg"
                  variant="accent"
                  className="animate-glow-pulse"
                >
                  Parliamo del tuo progetto <ArrowRight size={18} />
                </Button>
              </div>
            </div>

            {/* Foto */}
            <div className="animate-fade-in-up delay-200 relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image
                  src="/images/fabio.png"
                  alt="Fabio Regnaud — Web Designer Freelance"
                  width={500}
                  height={625}
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
              </div>
              {/* Decorazione */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* La mia storia */}
      <SectionWrapper background="surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Tutto è iniziato con un{" "}
              <span className="wavy-underline font-display italic">
                Commodore 64
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                La mia passione per l&apos;informatica è nata da bambino, quando
                mio padre mi regalò il primo Commodore 64. Da lì non ho più
                smesso di chiedermi come funzionano le cose — e di provare a
                costruirle.
              </p>
              <p>
                Da 10 anni insegno informatica, e questo mi ha insegnato
                qualcosa di fondamentale: saper spiegare le cose in modo
                semplice. Quando lavoro con un cliente, non parlo di codice
                o di tecnologia — parlo di risultati, di obiettivi, di come
                far funzionare la sua attività online.
              </p>
              <p>
                Ho iniziato a lavorare come freelance perché volevo mettere
                le mie competenze al servizio di chi ne ha davvero bisogno:
                le piccole attività locali. Quelle gestite da persone che
                lavorano ogni giorno con passione ma non hanno il tempo (o
                la voglia) di pensare al sito web.
              </p>
            </div>
          </Reveal>

          {/* Foto al lavoro */}
          <Reveal delay={200}>
            <div className="reveal-zoom mt-10 overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src="/images/fabio-programma.png"
                alt="Fabio Regnaud al lavoro — sviluppo web alla scrivania"
                width={900}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Cosa mi appassiona */}
      <SectionWrapper>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Non solo{" "}
            <span className="wavy-underline font-display italic">
              siti web
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Lo sviluppo web è il mio lavoro, ma la curiosità per la tecnologia
            va ben oltre.
          </p>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {[
            {
              icon: Code,
              titolo: "Sviluppo web",
              testo:
                "Costruire soluzioni che funzionano davvero. La parte che preferisco? Vedere il volto del cliente quando il suo sito va online.",
            },
            {
              icon: Cpu,
              titolo: "IoT e robotica",
              testo:
                "Realizzo progetti con Arduino, ESP32 e schede elettroniche. È la stessa curiosità del Commodore 64 — capire come funzionano le cose e costruirne di nuove.",
            },
            {
              icon: Lightbulb,
              titolo: "Insegnamento",
              testo:
                "10 anni di esperienza in aula mi hanno insegnato a spiegare concetti complessi in modo semplice. Lo stesso approccio che uso con i miei clienti.",
            },
            {
              icon: Heart,
              titolo: "Famiglia",
              testo:
                "Papà di due bambini — una femminuccia di 4 anni e un maschietto di 8 che già si interessa ai miei progetti. La prossima generazione di maker è in buone mani.",
            },
          ].map((item, i) => (
            <Reveal key={item.titolo} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold">{item.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.testo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Come lavoro — i miei valori */}
      <SectionWrapper background="surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              I miei{" "}
              <span className="wavy-underline font-display italic">
                valori
              </span>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {[
              {
                titolo: "Semplicità",
                testo:
                  "Per me un lavoro fatto bene è quando il risultato è semplice ma funzionale. Non aggiungo complessità inutile — ogni elemento del sito ha uno scopo preciso.",
              },
              {
                titolo: "Onestà",
                testo:
                  "Non prometto risultati impossibili. Se durante i primi incontri capisco che esiste già una soluzione migliore per il tuo caso — anche non realizzata da me — te lo dico. Preferisco un cliente soddisfatto a un progetto forzato.",
              },
              {
                titolo: "Ascolto",
                testo:
                  'Ogni progetto parte dalle tue esigenze, non dalle mie. Il mio obiettivo è che alla fine tu dica: "Ha capito esattamente quello che mi serviva."',
              },
            ].map((valore, i) => (
              <Reveal
                key={valore.titolo}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 80}
              >
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  <h3 className="font-semibold text-primary">{valore.titolo}</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {valore.testo}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Badge LinkedIn */}
      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Rimaniamo in contatto
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Trovami anche su{" "}
              <span className="wavy-underline font-display italic">
                LinkedIn
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
              Se preferisci conoscermi attraverso il mio percorso professionale,
              dai un&apos;occhiata al mio profilo.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <LinkedInBadge />
          </Reveal>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="animate-pulse-soft absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="animate-pulse-soft absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-4xl italic sm:text-5xl">
                Ti piace il mio approccio?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
                Raccontami la tua attività e vediamo insieme come posso
                aiutarti. La prima consulenza è gratuita e senza impegno.
              </p>
              <Button
                href="/contatti"
                size="lg"
                variant="accent"
                className="mt-10 animate-glow-pulse"
              >
                Contattami <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
