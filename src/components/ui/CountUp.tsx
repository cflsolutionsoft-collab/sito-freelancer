"use client";

// Componente che anima un numero da 0 al valore target quando entra nel viewport.
// Accetta un testo tipo "0.8s", "+70%", "10×" — estrae prefisso, numero e suffisso,
// anima il numero e mantiene il resto statico. Se il valore non è animabile
// (es. "∞", "1:1", "€0") viene mostrato tal quale.

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Valore da mostrare, può includere prefissi/suffissi (es. "+70%") */
  value: string;
  /** Durata animazione in millisecondi (default 1400) */
  duration?: number;
  /** Classe aggiuntiva */
  className?: string;
}

/** Estrae prefisso, numero e suffisso da una stringa tipo "+70%" o "0.8s". */
function parseValue(value: string): {
  prefix: string;
  number: number | null;
  suffix: string;
  decimals: number;
} {
  const match = value.match(/^(\D*?)([\d]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: value, number: null, suffix: "", decimals: 0 };

  const [, prefix, numStr, suffix] = match;
  const number = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return { prefix, number, suffix, decimals };
}

export default function CountUp({
  value,
  duration = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  const parsed = parseValue(value);
  // Non animare se: nessun numero, numero zero, o contiene caratteri ambigui (es. "1:1")
  const canAnimate =
    parsed.number !== null &&
    parsed.number !== 0 &&
    !parsed.suffix.includes(":");

  // Trigger quando entra in viewport
  useEffect(() => {
    if (!canAnimate) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [canAnimate]);

  // Animazione via requestAnimationFrame — parte solo quando started=true
  useEffect(() => {
    if (!started || !canAnimate || parsed.number === null) return;

    const target = parsed.number;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing ease-out cubic per un arrivo morbido
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(target * eased);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCurrent(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, canAnimate, parsed.number, duration]);

  if (!canAnimate) {
    return <span className={className}>{value}</span>;
  }

  const display = current.toFixed(parsed.decimals);

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
