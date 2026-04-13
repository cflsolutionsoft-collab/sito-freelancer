// API route per invio email dal form contatti tramite Resend

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Indirizzo mittente (dominio verificato su Resend)
const EMAIL_FROM = "Fabio Regnaud <info@fabioregnaud.it>";
// Indirizzo dove ricevere le richieste
const EMAIL_TO = "cfl.solution.soft@gmail.com";

interface ContattoBody {
  nome: string;
  email: string;
  attivita?: string;
  messaggio: string;
  privacy: boolean; // consenso informativa privacy
  website?: string; // campo honeypot
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContattoBody;

    // Anti-spam: se il campo honeypot è compilato, è un bot
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Validazione campi obbligatori
    if (!body.nome?.trim() || !body.email?.trim() || !body.messaggio?.trim()) {
      return NextResponse.json(
        { error: "Compila tutti i campi obbligatori." },
        { status: 400 }
      );
    }

    // Validazione email base
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Indirizzo email non valido." },
        { status: 400 }
      );
    }

    // Consenso privacy obbligatorio
    if (!body.privacy) {
      return NextResponse.json(
        { error: "È necessario accettare l'informativa privacy." },
        { status: 400 }
      );
    }

    const { nome, email, attivita, messaggio } = body;
    const consensoTimestamp = new Date().toISOString();

    // Email di notifica a Fabio
    const notifica = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Nuova richiesta da ${nome}`,
      html: `
        <h2>Nuova richiesta dal sito</h2>
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${attivita ? `<p><strong>Tipo di attività:</strong> ${escapeHtml(attivita)}</p>` : ""}
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(messaggio).replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="font-size:12px;color:#666">Consenso privacy prestato il ${consensoTimestamp}</p>
      `,
    });

    if (notifica.error) {
      console.error("[API contatti] Errore notifica:", notifica.error);
      return NextResponse.json(
        { error: "Errore nell'invio del messaggio. Riprova più tardi." },
        { status: 500 }
      );
    }

    // Email di conferma al cliente
    const conferma = await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "Ho ricevuto il tuo messaggio — Fabio Regnaud",
      html: `
        <p>Ciao ${escapeHtml(nome)},</p>
        <p>grazie per avermi scritto! Ho ricevuto il tuo messaggio e ti rispondo entro 24 ore.</p>
        <p>Nel frattempo, se vuoi puoi dare un'occhiata ai miei <a href="https://fabioregnaud.it/servizi">servizi</a> o al <a href="https://fabioregnaud.it/portfolio">portfolio</a>.</p>
        <p>A presto,<br>Fabio Regnaud<br>Web Designer Freelance — Torino e Canavese<br><a href="https://fabioregnaud.it">fabioregnaud.it</a></p>
      `,
    });

    if (conferma.error) {
      console.error("[API contatti] Errore conferma:", conferma.error);
      // La notifica è andata a buon fine, non blocchiamo l'utente
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API contatti] Errore invio email:", error);
    return NextResponse.json(
      { error: "Errore nell'invio del messaggio. Riprova più tardi." },
      { status: 500 }
    );
  }
}

// Previene XSS nell'HTML delle email
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
