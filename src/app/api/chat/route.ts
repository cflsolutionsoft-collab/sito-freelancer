// API route per l'assistente AI del sito.
// Riceve una conversazione dal ChatWidget e la inoltra a Claude Haiku 4.5
// server-side, cosi' la API key Anthropic non e' mai esposta al client.

import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chatPrompt";

// Modello scelto: Haiku 4.5 — veloce, economico, adatto a FAQ conversazionali.
const MODEL = "claude-haiku-4-5-20251001";

// Limiti di sicurezza per controllare costi e abusi.
const MAX_MESSAGES_PER_CONVERSATION = 20;
const MAX_MESSAGE_LENGTH = 500;
const MAX_TOKENS_RESPONSE = 500;

// Un messaggio della conversazione, come atteso dall'API Anthropic.
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
}

// Client Anthropic inizializzato con la chiave dall'ambiente.
// Se la chiave manca, l'errore viene intercettato dal try/catch della route.
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequestBody;

    // Validazione struttura base.
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Formato richiesta non valido." },
        { status: 400 }
      );
    }

    // Validazione lunghezza conversazione.
    if (body.messages.length === 0) {
      return NextResponse.json(
        { error: "Nessun messaggio da inviare." },
        { status: 400 }
      );
    }

    if (body.messages.length > MAX_MESSAGES_PER_CONVERSATION) {
      return NextResponse.json(
        {
          error:
            "Conversazione troppo lunga. Per continuare, scrivi direttamente a Fabio dalla pagina contatti.",
          limitReached: true,
        },
        { status: 400 }
      );
    }

    // Validazione ogni singolo messaggio.
    // Nota: il limite di lunghezza si applica solo ai messaggi dell'utente.
    // Le risposte dell'assistente sono gia' limitate da max_tokens nella chiamata
    // API e rimangono nella cronologia inviata ad ogni turno successivo.
    for (const msg of body.messages) {
      if (msg.role !== "user" && msg.role !== "assistant") {
        return NextResponse.json(
          { error: "Ruolo messaggio non valido." },
          { status: 400 }
        );
      }
      if (typeof msg.content !== "string" || !msg.content.trim()) {
        return NextResponse.json(
          { error: "Messaggio vuoto non consentito." },
          { status: 400 }
        );
      }
      if (msg.role === "user" && msg.content.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
          {
            error: `Il tuo messaggio e' troppo lungo (max ${MAX_MESSAGE_LENGTH} caratteri).`,
          },
          { status: 400 }
        );
      }
    }

    // L'ultimo messaggio deve essere dell'utente, altrimenti non ha senso chiamare l'AI.
    const lastMessage = body.messages[body.messages.length - 1];
    if (lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "L'ultimo messaggio deve essere dell'utente." },
        { status: 400 }
      );
    }

    // Chiamata a Claude Haiku 4.5.
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS_RESPONSE,
      system: CHAT_SYSTEM_PROMPT,
      messages: body.messages,
    });

    // Estraiamo il testo dalla risposta: le risposte testuali sono blocchi
    // di tipo "text". Concatenazione sicura anche se il modello ritorna piu' blocchi.
    const replyText = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!replyText) {
      console.error("[API chat] Risposta vuota dal modello");
      return NextResponse.json(
        { error: "Risposta non disponibile. Riprova tra poco." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("[API chat] Errore:", error);
    return NextResponse.json(
      {
        error:
          "Si e' verificato un errore. Riprova tra poco o scrivi direttamente dalla pagina contatti.",
      },
      { status: 500 }
    );
  }
}
