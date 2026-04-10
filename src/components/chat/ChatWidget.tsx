"use client";

// Widget chat AI fluttuante in basso a destra.
// Bottone flottante che apre un pannello di conversazione con l'assistente AI.
// Tutta la logica sta nel client: lo stato della conversazione vive nel browser
// e ogni nuovo messaggio dell'utente viene inviato a /api/chat insieme allo storico.

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Ruolo e contenuto di un messaggio in conversazione.
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Messaggio di benvenuto mostrato quando si apre la chat.
const WELCOME_MESSAGE =
  "Ciao! Sono l'assistente di Fabio. Posso aiutarti a capire se un sito su misura fa per te. Chiedimi quello che vuoi.";

// Limite caratteri messaggio utente (deve coincidere con MAX_MESSAGE_LENGTH nella route).
const MAX_INPUT_LENGTH = 500;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limitReached, setLimitReached] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll automatico all'ultimo messaggio quando ne arrivano di nuovi.
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus automatico sull'input quando si apre la chat.
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Chiudi la chat con Esc.
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || limitReached) return;

    // Aggiunge subito il messaggio dell'utente alla conversazione.
    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.limitReached) {
          setLimitReached(true);
        }
        setError(data.error || "Errore nella risposta. Riprova.");
        return;
      }

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error("[ChatWidget] Errore fetch:", err);
      setError(
        "Impossibile contattare l'assistente. Controlla la connessione e riprova."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Invio per inviare, Shift+Invio per andare a capo.
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Bottone flottante */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Chiudi chat" : "Apri chat con l'assistente"}
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2",
          "bg-gradient-to-br from-primary to-primary-dark shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40",
          isOpen && "scale-90 opacity-0 pointer-events-none"
        )}
      >
        <MessageCircle size={24} />
      </button>

      {/* Pannello chat */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat con l'assistente di Fabio"
          aria-modal="false"
          className="fixed bottom-5 right-5 z-50 flex h-[min(600px,calc(100vh-2.5rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-fade-in-up"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-gradient-to-br from-primary to-primary-dark px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <MessageCircle size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Assistente di Fabio
                </p>
                <p className="text-xs text-white/80 leading-tight">
                  Risponde in pochi secondi
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Chiudi chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <X size={18} />
            </button>
          </div>

          {/* Area messaggi */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-surface-warm px-4 py-4">
            {/* Messaggio di benvenuto sempre mostrato */}
            <MessageBubble role="assistant" content={WELCOME_MESSAGE} />

            {messages.map((msg, i) => (
              <MessageBubble key={i} role={msg.role} content={msg.content} />
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-muted">
                <Loader2 size={14} className="animate-spin" />
                <span>Sta scrivendo...</span>
              </div>
            )}

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-border bg-card px-3 py-3">
            {limitReached ? (
              <a
                href="/contatti"
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Scrivi a Fabio dalla pagina contatti
              </a>
            ) : (
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Scrivi la tua domanda..."
                  rows={1}
                  maxLength={MAX_INPUT_LENGTH}
                  disabled={isLoading}
                  className="flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  aria-label="Invia messaggio"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md"
                >
                  <Send size={16} />
                </button>
              </div>
            )}

            {/* Disclaimer AI */}
            <p className="mt-2 text-[11px] leading-tight text-muted">
              Risposte generate con AI (Claude Haiku). Per parlare direttamente
              con Fabio usa la{" "}
              <a
                href="/contatti"
                className="text-primary underline hover:text-primary-dark"
              >
                pagina contatti
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// Singola bolla di messaggio, stile differente per utente e assistente.
function MessageBubble({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  const isUser = role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm",
          isUser
            ? "rounded-br-sm bg-primary text-white"
            : "rounded-bl-sm border border-border bg-card text-foreground"
        )}
      >
        {content}
      </div>
    </div>
  );
}
