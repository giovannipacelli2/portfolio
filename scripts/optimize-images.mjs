// Converts the original screenshots in assets-src/aureas/ (kept out of git) to
// WebP in src/assets/aureas/, and writes sizes.json with each image's final
// width/height so <img> can reserve its space (no layout shift).
// Run after adding or replacing a source image:
//   npm run optimize:images
//
// maxWidth: the project page shows them at ~704 CSS px; 1400 covers 2x retina.
// Only the generated .webp is imported by the app; the originals stay local.
import sharp from "sharp";
import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "assets-src/aureas");
const outDir = path.join(root, "src/assets/aureas");
const maxWidth = 1400;

mkdirSync(outDir, { recursive: true });

const sizes = {};
let totalBefore = 0;
let totalAfter = 0;

for (const file of readdirSync(srcDir).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort()) {
  const name = path.parse(file).name;
  const outPath = path.join(outDir, `${name}.webp`);
  const before = statSync(path.join(srcDir, file)).size;

  const info = await sharp(path.join(srcDir, file))
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);

  sizes[name] = { width: info.width, height: info.height };
  totalBefore += before;
  totalAfter += info.size;
  console.log(
    `${path.relative(root, outPath)}  ${info.width}x${info.height}  ${(before / 1024).toFixed(0)}KB -> ${(info.size / 1024).toFixed(0)}KB`,
  );
}

writeFileSync(path.join(outDir, "sizes.json"), `${JSON.stringify(sizes, null, 2)}\n`);

console.log(
  `\nTotal: ${(totalBefore / 1024).toFixed(0)}KB -> ${(totalAfter / 1024).toFixed(0)}KB`,
);
