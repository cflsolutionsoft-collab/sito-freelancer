// Script una-tantum per convertire le PNG del portfolio in WebP.
// Uso: `node scripts/convert-images-to-webp.mjs`
// Dopo l'esecuzione si possono rimuovere i PNG originali manualmente.

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";

const IMAGES_DIR = new URL("../public/images/", import.meta.url).pathname;
// Su Windows Node ritorna "/C:/..." — normalizziamo togliendo lo slash iniziale
const dir = process.platform === "win32" ? IMAGES_DIR.slice(1) : IMAGES_DIR;

const files = await readdir(dir);
const pngs = files.filter((f) => f.toLowerCase().endsWith(".png"));

if (pngs.length === 0) {
  console.log("Nessuna PNG trovata in public/images/");
  process.exit(0);
}

for (const file of pngs) {
  const input = join(dir, file);
  const output = join(dir, `${parse(file).name}.webp`);

  const before = (await stat(input)).size;
  await sharp(input).webp({ quality: 85, effort: 6 }).toFile(output);
  const after = (await stat(output)).size;

  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `✓ ${file} → ${parse(file).name}.webp  (${(before / 1024).toFixed(
      0
    )}KB → ${(after / 1024).toFixed(0)}KB, -${saved}%)`
  );
}

console.log(`\nConvertiti ${pngs.length} file. Aggiorna i riferimenti nel codice e rimuovi le PNG originali.`);
