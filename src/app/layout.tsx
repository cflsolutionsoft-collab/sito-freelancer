import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ErrorBoundary from "@/components/layout/ErrorBoundary";
import "./globals.css";

const SITE_URL = "https://fabioregnaud.it";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fabio Regnaud — Web Designer Freelance a Torino e in Canavese",
    template: "%s — Fabio Regnaud",
  },
  description:
    "Creo siti web professionali e veloci per piccole attività a Torino e in Canavese. Siti vetrina, sistemi di prenotazione ed e-commerce su misura.",
  authors: [{ name: "Fabio Regnaud" }],
  creator: "Fabio Regnaud",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: "Fabio Regnaud — Web Designer Freelance",
    title: "Fabio Regnaud — Web Designer Freelance a Torino e in Canavese",
    description:
      "Creo siti web professionali e veloci per piccole attività a Torino e in Canavese. Siti vetrina, sistemi di prenotazione ed e-commerce su misura.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Fabio Regnaud — Web Designer Freelance a Torino e in Canavese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Regnaud — Web Designer Freelance a Torino e in Canavese",
    description:
      "Creo siti web professionali e veloci per piccole attività a Torino e in Canavese.",
  },
  // TODO: decommentare e inserire i codici di verifica quando disponibili
  // verification: {
  //   google: "codice-verifica-google-search-console",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ErrorBoundary>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
