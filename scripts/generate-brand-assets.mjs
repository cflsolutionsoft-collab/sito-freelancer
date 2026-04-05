// Script una-tantum per generare asset brand dal logo.
// Uso: `node scripts/generate-brand-assets.mjs`
//
// Genera:
// - public/images/logo.webp  (logo completo ottimizzato)
// - src/app/icon.png          (favicon 512×512, solo marchio FR)
// - src/app/apple-icon.png    (apple touch icon 180×180, solo marchio FR)
// - public/og-image.jpg       (1200×630, logo centrato su sfondo chiaro)

import sharp from "sharp";
import { existsSync } from "node:fs";

const LOGO_PATH = "public/images/Fr_Logo.png";

if (!existsSync(LOGO_PATH)) {
  console.error(`❌ Logo non trovato: ${LOGO_PATH}`);
  process.exit(1);
}

// 1. Logo completo in WebP ottimizzato (croppato dallo spazio bianco)
await sharp(LOGO_PATH)
  .trim()
  .resize(600, null, { withoutEnlargement: true })
  .webp({ quality: 85, effort: 6 })
  .toFile("public/images/logo.webp");
console.log("✓ public/images/logo.webp (croppato e ottimizzato)");

// 2. Croppo solo il marchio "FR" (parte sinistra del logo 2000×2000)
//    Il marchio occupa circa il 42% sinistro, centrato verticalmente
const frMark = sharp(LOGO_PATH)
  .extract({ left: 60, top: 330, width: 730, height: 1050 })
  .flatten({ background: "#ffffff" });

// Favicon 512×512
await frMark
  .clone()
  .resize(512, 512, { fit: "contain", background: "#ffffff" })
  .png()
  .toFile("src/app/icon.png");
console.log("✓ src/app/icon.png (512×512)");

// Apple Touch Icon 180×180
await frMark
  .clone()
  .resize(180, 180, { fit: "contain", background: "#ffffff" })
  .png()
  .toFile("src/app/apple-icon.png");
console.log("✓ src/app/apple-icon.png (180×180)");

// 3. OG Image 1200×630 — logo centrato su sfondo bianco
const logoResized = await sharp(LOGO_PATH)
  .resize(600, 300, { fit: "contain", background: "#ffffff" })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: "#ffffff",
  },
})
  .composite([{ input: logoResized, gravity: "centre" }])
  .jpeg({ quality: 90 })
  .toFile("public/og-image.jpg");
console.log("✓ public/og-image.jpg (1200×630)");

console.log("\nTutti gli asset generati.");
