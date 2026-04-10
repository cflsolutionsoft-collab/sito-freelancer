"use client";

// Componente client che anima i figli quando entrano nel viewport.
// Usa IntersectionObserver (nativo) per evitare listener pesanti sullo scroll.
// Rispetta `prefers-reduced-motion` lato CSS — se l'utente ha le animazioni
// disabilitate, i contenuti appaiono subito nello stato finale.

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none" | "scalex";

interface RevealProps {
  children: ReactNode;
  /** Direzione di ingresso (default "up") */
  direction?: Direction;
  /** Ritardo in millisecondi (default 0) */
  delay?: number;
  /** Durata animazione in millisecondi (default 1000) */
  duration?: number;
  /** Se true (default) anima solo la prima volta */
  once?: boolean;
  /** Soglia di intersezione (0-1, default 0.15) */
  threshold?: number;
  /** Classe aggiuntiva da applicare al wrapper */
  className?: string;
  /** Tag HTML da usare per il wrapper (default "div") */
  as?: "div" | "section" | "article" | "span" | "li";
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1000,
  once = true,
  threshold = 0.15,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        threshold,
        // Inizia un filo prima che l'elemento sia completamente visibile
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  // Lo stile inline serve solo per delay/duration dinamici
  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  } as const;

  return (
    <Tag
      // I tipi union dei ref di elementi HTML diversi non sono compatibili tra loro,
      // quindi usiamo un cast "any" controllato qui — il runtime è sicuro perché
      // l'unico utilizzo è observer.observe() che accetta qualsiasi Element.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={style}
      className={cn(
        "reveal",
        `reveal-${direction}`,
        visible && "is-visible",
        className
      )}
    >
      {children}
    </Tag>
  );
}
