// Footer con design ricco e contatti

import { Mail, MapPin, ArrowUpRight } from "lucide-react";

// Icona LinkedIn SVG inline (stile Lucide) — lucide-react 1.7.0 non la include
function LinkedInIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Sono", href: "/chi-sono" },
  { label: "Servizi", href: "/servizi" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contatti", href: "/contatti" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-foreground text-slate-300">
      {/* Decorazione gradiente */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top — Brand grande */}
        <div className="mb-12 border-b border-slate-700/50 pb-12">
          <p className="font-display text-4xl italic text-white sm:text-5xl">
            Fabio Regnaud
          </p>
          <p className="mt-3 max-w-md text-slate-400">
            Web designer freelance a Torino. Creo siti web su misura per
            piccole attività locali.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Link */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Pagine
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Contatti
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={16} className="text-primary/70" />
                <a
                  href="mailto:info@fabioregnaud.it"
                  className="transition-colors hover:text-white"
                >
                  info@fabioregnaud.it
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-primary/70" />
                <span>Torino e Canavese</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <LinkedInIcon size={16} className="text-primary/70" />
                <a
                  href="https://it.linkedin.com/in/fabio-regnaud-carcas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* CTA piccola */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Iniziamo
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Hai un&apos;idea per un progetto? Scrivimi per una consulenza
              gratuita.
            </p>
            <a
              href="/contatti"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
            >
              Scrivimi
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-slate-700/50 pt-6 text-center text-sm text-slate-600">
          <p>&copy; {currentYear} CFL di Regnaud Carcas Fabio — P.IVA 13398680010</p>
        </div>
      </div>
    </footer>
  );
}
