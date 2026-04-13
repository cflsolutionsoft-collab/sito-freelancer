// Pagina Privacy Policy — informativa GDPR

import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del GDPR per il sito fabioregnaud.it.",
  alternates: {
    canonical: "https://fabioregnaud.it/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  return (
    <>
      {/* Intestazione */}
      <section className="gradient-mesh relative overflow-hidden px-4 pb-8 pt-12 sm:px-6 md:pb-12 md:pt-20 lg:px-8">
        <div className="relative mx-auto max-w-3xl text-center">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
          />
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Informativa
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted">
            Come raccolgo, uso e proteggo i tuoi dati personali ai sensi del
            Regolamento (UE) 2016/679 (GDPR).
          </p>
          <p className="mt-2 text-sm text-muted">
            Ultimo aggiornamento: 13 aprile 2026
          </p>
        </div>
      </section>

      {/* Contenuto policy */}
      <SectionWrapper background="surface">
        <div className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-foreground/90">
          {/* 1. Titolare */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">1. Titolare del trattamento</h2>
            <div className="mt-4 space-y-1">
              <p>
                <strong>CFL di Regnaud Carcas Fabio</strong>
              </p>
              <p>Via Formia 10 — 10035 Mazzè (TO)</p>
              <p>P.IVA 13398680010</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@fabioregnaud.it"
                  className="text-primary underline hover:text-primary-dark"
                >
                  info@fabioregnaud.it
                </a>
              </p>
            </div>
            <p className="mt-4 text-muted">
              Il titolare è il soggetto responsabile delle decisioni sulle
              finalità e modalità del trattamento dei tuoi dati personali.
            </p>
          </section>

          {/* 2. Dati raccolti */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">2. Dati raccolti</h2>
            <h3 className="mt-4 font-semibold">
              a) Dati forniti volontariamente dall&apos;utente
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
              <li>
                <strong className="text-foreground">Modulo di contatto:</strong>{" "}
                nome e cognome, indirizzo email, tipo di attività (facoltativo),
                contenuto del messaggio
              </li>
              <li>
                <strong className="text-foreground">
                  Assistente virtuale AI (chat):
                </strong>{" "}
                contenuto dei messaggi inviati durante la conversazione
              </li>
            </ul>
            <h3 className="mt-6 font-semibold">
              b) Dati raccolti automaticamente
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
              <li>
                Log tecnici di sistema: indirizzo IP, tipo di browser, pagine
                visitate, data e ora di accesso, durata della visita — raccolti
                per motivi di sicurezza e funzionamento
              </li>
            </ul>
          </section>

          {/* 3. Finalità e base giuridica */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              3. Finalità e base giuridica del trattamento
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 font-semibold">Finalità</th>
                    <th className="py-2 font-semibold">
                      Base giuridica (GDPR)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">
                      Rispondere alla richiesta di contatto e fornire
                      informazioni, preventivi o consulenza
                    </td>
                    <td className="py-3">
                      Misure precontrattuali (art. 6.1.b)
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">
                      Gestione dell&apos;assistente virtuale AI per orientare
                      sui servizi
                    </td>
                    <td className="py-3">
                      Legittimo interesse del titolare (art. 6.1.f)
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">
                      Sicurezza del sito, prevenzione abusi, log tecnici
                    </td>
                    <td className="py-3">Legittimo interesse (art. 6.1.f)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      Adempimento di obblighi legali (es. fatturazione)
                    </td>
                    <td className="py-3">Obbligo di legge (art. 6.1.c)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Servizi terzi */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              4. Servizi terzi utilizzati (responsabili del trattamento)
            </h2>
            <p className="mt-4 text-muted">
              Il sito si avvale dei seguenti fornitori, nominati Responsabili
              del trattamento ai sensi dell&apos;art. 28 GDPR:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p>
                  <strong>Vercel Inc.</strong> — Stati Uniti
                </p>
                <p className="text-sm text-muted">
                  Hosting del sito e log tecnici.{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Informativa
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Resend (Resend, Inc.)</strong> — Stati Uniti
                </p>
                <p className="text-sm text-muted">
                  Invio delle email del modulo di contatto (notifica al
                  titolare e conferma all&apos;utente).{" "}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Informativa
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Anthropic, PBC</strong> — Stati Uniti
                </p>
                <p className="text-sm text-muted">
                  Elaborazione dei messaggi dell&apos;assistente virtuale AI
                  tramite il modello Claude. I contenuti della conversazione
                  vengono inviati ai server di Anthropic per generare la
                  risposta.{" "}
                  <a
                    href="https://www.anthropic.com/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Informativa
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* 5. Trasferimento extra-UE */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              5. Trasferimento dei dati fuori dall&apos;Unione Europea
            </h2>
            <p className="mt-4 text-muted">
              I servizi indicati al punto 4 hanno sede negli{" "}
              <strong className="text-foreground">Stati Uniti</strong>. Il
              trasferimento dei dati avviene sulla base delle{" "}
              <strong className="text-foreground">
                Clausole Contrattuali Standard (SCC)
              </strong>{" "}
              approvate dalla Commissione Europea, che garantiscono un livello
              di protezione adeguato ai sensi del GDPR.
            </p>
          </section>

          {/* 6. Conservazione */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">6. Periodo di conservazione</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 font-semibold">Tipo di dato</th>
                    <th className="py-2 font-semibold">Conservazione</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">
                      Email ricevute dal modulo di contatto
                    </td>
                    <td className="py-3">
                      24 mesi dall&apos;ultimo contatto, poi cancellazione
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Log della chat AI</td>
                    <td className="py-3">
                      Non conservati dal titolare; Anthropic può conservarli
                      secondo la propria policy
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Log tecnici del server</td>
                    <td className="py-3">
                      Massimo 30 giorni (gestiti da Vercel)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      Dati relativi a clienti con contratto firmato
                    </td>
                    <td className="py-3">
                      Per la durata del contratto + 10 anni (obblighi fiscali)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Diritti */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">7. Diritti dell&apos;utente</h2>
            <p className="mt-4 text-muted">
              In qualità di interessato hai il diritto di:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-muted">
              <li>
                <strong className="text-foreground">Accesso</strong> ai tuoi
                dati (art. 15)
              </li>
              <li>
                <strong className="text-foreground">Rettifica</strong> di dati
                inesatti (art. 16)
              </li>
              <li>
                <strong className="text-foreground">Cancellazione</strong>{" "}
                (&quot;diritto all&apos;oblio&quot;, art. 17)
              </li>
              <li>
                <strong className="text-foreground">Limitazione</strong> del
                trattamento (art. 18)
              </li>
              <li>
                <strong className="text-foreground">Portabilità</strong> dei
                dati (art. 20)
              </li>
              <li>
                <strong className="text-foreground">Opposizione</strong> al
                trattamento (art. 21)
              </li>
              <li>
                <strong className="text-foreground">Revoca del consenso</strong>{" "}
                in qualsiasi momento, quando applicabile
              </li>
              <li>
                <strong className="text-foreground">Reclamo</strong> presso il{" "}
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary-dark"
                >
                  Garante per la protezione dei dati personali
                </a>
              </li>
            </ul>
            <p className="mt-4">
              <strong>Come esercitare i diritti:</strong> scrivi a{" "}
              <a
                href="mailto:info@fabioregnaud.it"
                className="text-primary underline hover:text-primary-dark"
              >
                info@fabioregnaud.it
              </a>
              . Riceverai risposta entro 30 giorni.
            </p>
          </section>

          {/* 8. AI specifica */}
          <section className="rounded-2xl border border-primary/30 bg-primary-light/30 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              8. Assistente virtuale AI — informativa specifica
            </h2>
            <p className="mt-4 text-muted">
              Il sito include un assistente virtuale basato su intelligenza
              artificiale (modello Claude di Anthropic). Prima di utilizzarlo,
              tieni presente che:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-muted">
              <li>
                Le conversazioni sono elaborate da un sistema automatico,{" "}
                <strong className="text-foreground">
                  non da un operatore umano
                </strong>
              </li>
              <li>
                I contenuti dei messaggi vengono trasmessi ai server di
                Anthropic negli Stati Uniti
              </li>
              <li>
                Si raccomanda di{" "}
                <strong className="text-foreground">
                  non inserire dati personali propri o di terzi
                </strong>{" "}
                (nomi completi, indirizzi, numeri di telefono, dati sanitari,
                dati di pagamento) non necessari alla conversazione
              </li>
              <li>
                Le risposte dell&apos;assistente sono informative e non
                costituiscono consulenza professionale vincolante
              </li>
            </ul>
          </section>

          {/* 9. Modulo contatto */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">9. Modulo di contatto</h2>
            <p className="mt-4 text-muted">
              I dati inseriti nel modulo (nome, email, tipo di attività,
              messaggio) sono trattati esclusivamente per rispondere alla
              richiesta. Non sono utilizzati per finalità di marketing e non
              sono ceduti a terzi al di fuori dei responsabili indicati al
              punto 4.
            </p>
            <p className="mt-3 text-muted">
              Il consenso al trattamento, prestato mediante apposita casella di
              spunta al momento dell&apos;invio, può essere revocato in
              qualsiasi momento scrivendo a{" "}
              <a
                href="mailto:info@fabioregnaud.it"
                className="text-primary underline hover:text-primary-dark"
              >
                info@fabioregnaud.it
              </a>
              .
            </p>
          </section>

          {/* 10. Cookie */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">10. Cookie</h2>
            <p className="mt-4 text-muted">
              Il sito utilizza esclusivamente{" "}
              <strong className="text-foreground">cookie tecnici</strong>{" "}
              necessari al funzionamento (nessun cookie di profilazione,
              nessun analytics, nessun pixel pubblicitario). Per questo motivo
              non è richiesto un banner di consenso cookie ai sensi delle Linee
              Guida del Garante del 10 giugno 2021.
            </p>
            <p className="mt-3 text-muted">
              Eventuali cookie tecnici impostati da Vercel (hosting) hanno
              scopo esclusivo di funzionamento e sicurezza.
            </p>
          </section>

          {/* 11. Modifiche */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">11. Modifiche alla policy</h2>
            <p className="mt-4 text-muted">
              Il titolare si riserva di modificare la presente informativa in
              qualsiasi momento. Le modifiche saranno pubblicate su questa
              pagina con indicazione della data di aggiornamento. In caso di
              cambiamenti sostanziali verrà richiesto nuovamente il consenso
              quando necessario.
            </p>
          </section>

          {/* 12. Contatti */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">12. Contatti</h2>
            <p className="mt-4 text-muted">
              Per qualsiasi domanda sul trattamento dei tuoi dati:{" "}
              <a
                href="mailto:info@fabioregnaud.it"
                className="text-primary underline hover:text-primary-dark"
              >
                info@fabioregnaud.it
              </a>
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}
