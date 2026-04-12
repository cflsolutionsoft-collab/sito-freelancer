"use client";

// Contenuto pagina contatti — form, WhatsApp, email e zona servita

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/ui/Reveal";

export default function ContattiContent() {
  const [invio, setInvio] = useState<"idle" | "invio" | "successo" | "errore">(
    "idle"
  );

  const [errore, setErrore] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setInvio("invio");
    setErrore("");

    const formData = new FormData(e.currentTarget);
    const body = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      attivita: formData.get("attivita") as string,
      messaggio: formData.get("messaggio") as string,
      website: formData.get("website") as string,
    };

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Errore nell'invio del messaggio.");
      }

      setInvio("successo");
    } catch (err) {
      setInvio("errore");
      setErrore(
        err instanceof Error
          ? err.message
          : "Errore nell'invio del messaggio. Riprova più tardi."
      );
    }
  }

  const inputClasses =
    "mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all duration-200 placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/30";

  return (
    <>
      {/* Intestazione */}
      <section className="gradient-mesh relative overflow-hidden px-4 pb-8 pt-12 sm:px-6 md:pb-12 md:pt-20 lg:px-8">
        <div className="absolute right-0 bottom-0 h-48 w-48 opacity-[0.05]">
          <div className="dot-grid h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contatti" }]} />
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-wider text-accent">
            Contatti
          </p>
          <h1 className="animate-fade-in-up delay-100 mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Parliamo del tuo{" "}
            <span className="wavy-underline always-on font-display italic text-primary">
              progetto
            </span>
          </h1>
          <p className="animate-fade-in-up delay-200 mt-4 text-lg text-muted">
            Cerchi un web designer freelance a Torino o nel Canavese? Scrivimi
            per raccontarmi la tua idea. Rispondo entro 24 ore e la prima
            consulenza è gratuita.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <SectionWrapper background="surface">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {invio === "successo" ? (
                <div className="animate-fade-in-up py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Messaggio inviato!</h2>
                  <p className="mt-2 text-muted">
                    Grazie per avermi scritto. Ti rispondo entro 24 ore.
                  </p>
                  <Button
                    href="/"
                    variant="secondary"
                    className="mt-6"
                  >
                    Torna alla home
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Nome */}
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium"
                      >
                        Nome e cognome{" "}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className={inputClasses}
                        placeholder="Mario Rossi"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClasses}
                        placeholder="mario@example.com"
                      />
                    </div>
                  </div>

                  {/* Tipo attività */}
                  <div>
                    <label
                      htmlFor="attivita"
                      className="block text-sm font-medium"
                    >
                      Tipo di attività
                    </label>
                    <input
                      type="text"
                      id="attivita"
                      name="attivita"
                      className={inputClasses}
                      placeholder="Ristorante, Parrucchiere, Studio medico..."
                    />
                  </div>

                  {/* Messaggio */}
                  <div>
                    <label
                      htmlFor="messaggio"
                      className="block text-sm font-medium"
                    >
                      Messaggio <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      required
                      rows={5}
                      className={`${inputClasses} resize-y`}
                      placeholder="Raccontami brevemente di cosa hai bisogno..."
                    />
                  </div>

                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    variant="accent"
                    className="w-full animate-glow-pulse"
                    disabled={invio === "invio"}
                  >
                    {invio === "invio" ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        Invia messaggio <Send size={16} />
                      </>
                    )}
                  </Button>

                  {invio === "errore" && errore && (
                    <p className="text-center text-sm text-red-600">
                      {errore}
                    </p>
                  )}

                  <p className="text-center text-xs text-muted">
                    I campi con <span className="text-accent">*</span> sono
                    obbligatori. Non condivido i tuoi dati con nessuno.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="space-y-4">
            <Reveal direction="left" delay={0}>
            {/* WhatsApp */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted">Risposta rapida</p>
                </div>
              </div>
              <a
                href="https://wa.me/39XXXXXXXXXX?text=Ciao%20Fabio,%20vorrei%20informazioni%20per%20un%20sito%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-md hover:shadow-green-600/20"
              >
                Scrivimi su WhatsApp
              </a>
            </div>
            </Reveal>

            <Reveal direction="left" delay={100}>
            {/* Email */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:info@fabioregnaud.it"
                    className="text-sm text-primary hover:underline"
                  >
                    info@fabioregnaud.it
                  </a>
                </div>
              </div>
            </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
            {/* Zona servita */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Zona servita</p>
                  <p className="text-sm text-muted">Torino e Canavese</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">
                Torino, Ivrea, Chivasso, Rivarolo Canavese e tutto il Canavese.
                Per i progetti online, lavoro anche con attività in tutta Italia.
              </p>
            </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
            {/* Tempi di risposta */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Tempi di risposta</p>
                  <p className="text-sm text-muted">Entro 24 ore</p>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
