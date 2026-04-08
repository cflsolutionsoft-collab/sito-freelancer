"use client";

// Header con navigazione responsive, menu mobile e stile editoriale

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Sono", href: "/chi-sono" },
  { label: "Servizi", href: "/servizi" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo con font serif */}
        <a href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            FR
          </span>
          <span className="font-display text-xl italic text-foreground transition-colors group-hover:text-primary">
            Fabio Regnaud
          </span>
        </a>

        {/* Navigazione desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button href="/contatti" size="default" variant="accent">
            Parliamone
          </Button>
        </nav>

        {/* Pulsante menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-surface md:hidden"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile con animazione */}
      {menuOpen && (
        <nav className="animate-fade-in-up border-t border-border/60 bg-background px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button href="/contatti" variant="accent" className="mt-2 w-full">
              Parliamone
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
