# SEO Tecnico + Structured Data — Checklist Completa

> Tutte le tecniche per l'indicizzazione e la visibilità tecnica di un sito home restaurant su Next.js / Vercel / Firestore.

---

## 1. Rendering Strategy

### 1.1 SSG (Static Site Generation)
Pagine generate come HTML statico al momento del build. Il crawler riceve HTML completo immediatamente, zero dipendenza da JavaScript. Velocità massima (servito da CDN). Ideale per homepage, chi siamo, blog post, pagine legali.

### 1.2 ISR (Incremental Static Regeneration)
Pagine statiche che si rigenerano automaticamente dopo un intervallo configurabile (`revalidate`). Combina velocità di SSG con aggiornamento automatico. Ideale per menù settimanale, calendario eventi, pagina recensioni.

### 1.3 SSR (Server-Side Rendering)
Pagine generate al momento della richiesta. HTML completo ma generato on-demand. Da usare solo dove necessario: checkout/prenotazione con Stripe, dashboard privata dello chef.

### 1.4 Verifica rendering con Search Console
Usare "Controllo URL → Visualizza pagina sottoposta a scansione" in Google Search Console per confrontare HTML raw e rendering completo, assicurandosi che il contenuto principale sia visibile senza JS.

---

## 2. Crawlability & Indexability

### 2.1 robots.txt
File che indica ai crawler quali aree del sito possono o non possono scansionare. In Next.js si genera programmaticamente con `app/robots.ts`. Bloccare `/api/`, `/dashboard/`, `/checkout/`, `/_next/`. Non bloccare mai CSS/JS. Includere sempre il riferimento alla sitemap.

### 2.2 Sitemap XML
File che elenca tutte le pagine del sito con priorità e data di ultima modifica. In Next.js si genera con `app/sitemap.ts`. Include sia pagine statiche che dinamiche (blog, eventi da Firestore). Va inviata a Google Search Console subito dopo il lancio.

### 2.3 Meta robots tag
Tag HTML che controlla l'indicizzazione a livello di singola pagina. `index, follow` per le pagine pubbliche; `noindex, nofollow` per checkout, thank you page, termini e privacy. In Next.js si configura tramite la Metadata API.

### 2.4 Direttive max-image-preview e max-snippet
Direttive nel meta robots che dicono a Google di mostrare anteprime grandi e snippet completi nei risultati. `max-image-preview: large` e `max-snippet: -1` aumentano il CTR, soprattutto per contenuti food dove le immagini contano.

---

## 3. Core Web Vitals & Performance

### 3.1 LCP (Largest Contentful Paint)
Tempo di caricamento dell'elemento più grande visibile. Target: < 2.5s. Per home restaurant è quasi sempre la hero image. Usare `next/image` con `priority={true}` per l'immagine above-the-fold. Specificare sempre `width`, `height` e `sizes`.

### 3.2 INP (Interaction to Next Paint)
Misura la reattività alle interazioni utente. Target: < 200ms. Minimizzare il JS client-side usando Server Components di default. Usare `'use client'` solo dove necessario (form, gallery, calendario). Scegliere librerie JS leggere.

### 3.3 CLS (Cumulative Layout Shift)
Misura la stabilità visiva della pagina. Target: < 0.1. Specificare sempre dimensioni per immagini e video. Riservare spazio per contenuti dinamici (skeleton). Usare `next/font` con `display: swap` per evitare spostamenti causati dai font.

### 3.4 Ottimizzazione immagini con next/image
Componente di Next.js che gestisce automaticamente conversione WebP/AVIF, resize responsivo, lazy loading. Per le immagini hero usare `priority={true}`. Specificare sempre `sizes` per servire la dimensione corretta a ogni viewport.

### 3.5 Ottimizzazione font con next/font
Caricamento ottimizzato dei font che elimina FOIT (Flash of Invisible Text) e FOUT (Flash of Unstyled Text). I font vengono self-hosted automaticamente, eliminando richieste esterne a Google Fonts. Usare `display: 'swap'`.

### 3.6 Bundle analysis
Monitorare la dimensione del bundle JS con `@next/bundle-analyzer` per evitare dipendenze pesanti inutili. Per un sito home restaurant il bundle deve essere minimale.

### 3.7 Headers di caching
Configurare cache headers in `next.config.js` per asset statici (immagini, font) con `Cache-Control: public, max-age=31536000, immutable`. Vercel gestisce automaticamente il caching edge per le pagine.

### 3.8 Strumenti di misurazione
- **PageSpeed Insights** — test di laboratorio + dati reali
- **Google Search Console** → Core Web Vitals — dati dal campo
- **Lighthouse** in Chrome DevTools — audit locale dettagliato
- **Web Vitals extension** per Chrome — monitoraggio in sviluppo

---

## 4. URL Architecture

### 4.1 Struttura URL semantica
URL parlanti, corti e contenenti la keyword principale. Esempio: `/blog/pasta-fatta-in-casa-ricetta-nonna` invece di `/blog/post-123`. Definire una struttura logica coerente per tutto il sito (/, /menu, /chi-siamo, /prenota, /eventi, /blog, /galleria, /contatti, /recensioni).

### 4.2 Convenzioni URL
Sempre lowercase, parole separate da trattini. Mai underscore, mai camelCase. Scegliere una convenzione per il trailing slash (con o senza) e mantenerla coerente tramite `trailingSlash` in `next.config.js`.

### 4.3 Canonical URL
Tag che indica a Google la versione "ufficiale" di una pagina, prevenendo problemi di contenuto duplicato. Ogni pagina deve avere un canonical che punta a sé stessa. In Next.js si configura con `alternates.canonical` nella Metadata API.

### 4.4 Redirect www vs non-www e HTTP vs HTTPS
Scegliere una versione canonica (es. `www.nomeristorante.it` o `nomeristorante.it`) e fare redirect 301 dell'altra. HTTPS è obbligatorio — Vercel lo gestisce automaticamente. Evitare catene di redirect (mai 2+ redirect in sequenza).

---

## 5. Structured Data / Schema.org

### 5.1 Schema Restaurant (LocalBusiness / FoodEstablishment)
Blocco fondamentale che descrive il ristorante: nome, indirizzo, coordinate GPS, telefono, orari, tipo di cucina, fascia di prezzo, link ai social, rating aggregato. Va nella homepage. Usare `@id` con fragment per referenziare l'entità da altri blocchi schema.

### 5.2 Schema Menu + MenuItem
Descrive il menù con sezioni (antipasti, primi, ecc.) e singoli piatti. Per home restaurant con menù degustazione, strutturare come menù singolo a prezzo fisso con i piatti elencati dentro. Può includere informazioni su diete speciali e valori nutrizionali.

### 5.3 Schema FoodEvent
Descrive le singole cene/eventi con data, ora, prezzo, disponibilità, capacità massima. Particolarmente potente perché Google mostra gli eventi nei risultati con rich snippet visivi (data, prezzo, stato). Referenzia il Restaurant tramite `@id`.

### 5.4 Schema Recipe
Per i post blog con ricette. Abilita rich snippet molto visibili (foto, tempo di preparazione, ingredienti, rating). Include prepTime, cookTime, ingredienti, istruzioni step-by-step, categoria, cucina, keyword.

### 5.5 Schema Review + AggregateRating
Descrive le recensioni dei clienti con autore, data, testo, voto. AggregateRating riassume il punteggio medio e il numero di recensioni. Attenzione: Google richiede che le recensioni siano reali e verificabili — mai inventarle.

### 5.6 Schema FAQPage
Struttura domande e risposte frequenti in modo che Google possa mostrarle direttamente nei risultati. Ottimo per catturare traffico long-tail su domande tipo "come funziona un home restaurant", "si può prenotare per allergici", ecc.

### 5.7 Schema BreadcrumbList
Descrive la struttura di navigazione del sito. Google la usa per mostrare i breadcrumb nei risultati di ricerca, migliorando la leggibilità e il CTR del listing.

### 5.8 Componente JsonLd riutilizzabile
Componente React che inietta blocchi JSON-LD nelle pagine. Centralizzare la logica di generazione schema in `lib/schema.ts` con funzioni parametriche — la struttura è sempre la stessa, cambiano solo i dati del cliente.

### 5.9 Validazione structured data
- **Google Rich Results Test** — verifica validità e mostra anteprima rich snippet
- **Schema Markup Validator** (validator.schema.org) — validazione tecnica rigorosa
- **Search Console** → Miglioramenti — errori e warning dallo schema in produzione

---

## 6. Mobile-First Indexing

### 6.1 Viewport meta tag
Tag che controlla come la pagina si adatta allo schermo mobile. Next.js lo include di default. Verificare che sia presente e corretto.

### 6.2 Font leggibili
Minimo 16px per il body text su mobile. Font più piccoli penalizzano usabilità e possono impattare il ranking.

### 6.3 Target tap adeguati
Pulsanti e link devono avere almeno 48x48px di area cliccabile con spazio sufficiente tra elementi adiacenti per evitare tap accidentali.

### 6.4 Contenuto visibile al mobile
Non nascondere contenuto SEO-importante in accordion o tab che sono chiusi di default su mobile. Google potrebbe dare peso ridotto a quel testo.

### 6.5 No interstitial invasivi
Popup a schermo intero su mobile sono penalizzati da Google. Se si usano popup (es. per mailing list), devono essere facili da chiudere e non coprire il contenuto principale.

### 6.6 Mobile-Friendly Test
Usare lo strumento di Google per verificare che il sito superi tutti i controlli mobile. Testare anche su dispositivi reali, non solo in emulazione.

---

## 7. Internazionalizzazione (hreflang)

### 7.1 Tag hreflang
Tag HTML che indica a Google le versioni linguistiche alternative di una pagina. Ogni pagina tradotta deve avere hreflang che punta a tutte le altre versioni, inclusa sé stessa. Include anche `x-default` per utenti con lingua non coperta.

### 7.2 Struttura URL multilingua
Con Next.js App Router e i18n, le route si strutturano con prefisso lingua: `/it/menu`, `/en/menu`. Ogni versione è una pagina separata con il proprio URL.

### 7.3 hreflang nella sitemap
Oltre ai tag HTML nelle pagine, includere le relazioni hreflang anche nella sitemap XML per rafforzare il segnale e garantire coerenza.

### 7.4 Priorità di traduzione
Per home restaurant: tradurre prima homepage, menù, prenotazione e chi siamo (obbligatorio se si vogliono turisti). Poi eventi e FAQ. Blog solo per i post più rilevanti.

### 7.5 Keyword research in lingua target
Le ricerche in inglese differiscono significativamente dall'italiano. Keyword come "private dining experience [city]", "home restaurant [city]", "authentic Italian cooking class" hanno volumi decenti e bassa competizione.

---

## 8. Crawl Budget & Log Analysis

### 8.1 Evitare URL infiniti
Attenzione a parametri query che generano pagine duplicate (filtri, ordinamento). Usare canonical o noindex per varianti non significative.

### 8.2 Redirect diretti (no chain)
Ogni redirect deve essere un singolo 301, mai catene di 2+ redirect. Le catene rallentano il crawling e disperdono link equity.

### 8.3 Monitoraggio errori 404
Controllare regolarmente in Search Console → Indicizzazione → Pagine gli errori 404 e correggerli con redirect 301 se le pagine sono state spostate, o confermare il 404 se la pagina è stata rimossa intenzionalmente.

### 8.4 Log analysis (avanzato)
Strumenti come Screaming Frog Log Analyzer o Botify permettono di vedere quali pagine Googlebot visita e con che frequenza. Per un singolo sito piccolo è overkill; diventa utile gestendo molti siti cliente.

---

## 9. Template Riutilizzabile — Riepilogo

### Da implementare una volta nel boilerplate
- `app/robots.ts` — generazione dinamica basata su config cliente
- `app/sitemap.ts` — generazione automatica da struttura pagine + Firestore
- `components/JsonLd.tsx` — componente riutilizzabile per structured data
- `lib/schema.ts` — funzioni generazione schema (Restaurant, FoodEvent, Menu, Recipe, FAQ, Breadcrumb, Review)
- `next.config.js` — trailing slash, headers caching, redirect
- Componente Image wrapper con default ottimizzati per food photography
- Setup `next/font` con font del template
- Meta tag e Open Graph template nel layout
- Configurazione hreflang nel layout (attivabile per cliente)
- Componente Breadcrumb con schema automatico

### Da personalizzare per ogni cliente (30-60 min)
- Dati Restaurant (nome, indirizzo, coordinate, telefono, orari, tipo cucina)
- Immagini e logo
- Testi pagine principali
- Slug delle pagine dinamiche
- Keyword target e meta description personalizzati
- Profili social (sameAs nello schema)
- Configurazione hreflang e lingue attive
