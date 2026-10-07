// Rebuilds the printable portfolio deliverables:
//   1. Andrey-Caburnay-Portfolio.html — self-contained copy (images embedded)
//   2. Andrey-Caburnay-Portfolio.pdf  — ready-to-print softcopy (also copied
//      into public/ so the website's Download button always serves the
//      latest version)
//
// Usage:  npm run build:pdf   (runs automatically before `npm run build`)
//
// If no headless browser is available, the step is skipped with a warning
// instead of failing the build — the last generated PDF stays in place.
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const IMAGES = {
  'src/assets/portrait.jpg': 'image/jpeg',
  'src/assets/shots/gad-hero.png': 'image/png',
  'src/assets/shots/dtr-2.jpg': 'image/jpeg',
};

const CHROME_PATHS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];

// Inline images — only inside src="..." attributes, never in comments/text.
let html = readFileSync('portfolio-printable.html', 'utf8');
html = html.replace(/src="(src\/assets\/[^"]+)"/g, (attr, path) => {
  const mime = IMAGES[path];
  if (!mime) return attr;
  return `src="data:${mime};base64,${readFileSync(path).toString('base64')}"`;
});
writeFileSync('Andrey-Caburnay-Portfolio.html', html);
console.log(`✔ Andrey-Caburnay-Portfolio.html written (${html.length} chars)`);

const PDF_NAME = 'Andrey-Caburnay-Portfolio.pdf';
const browser = CHROME_PATHS.find((p) => existsSync(p));

if (!browser) {
  console.warn(`⚠ No Chrome/Edge found — skipped PDF regeneration. ${PDF_NAME} in public/ is unchanged.`);
} else {
  try {
    const cwd = process.cwd().replace(/\\/g, '/');
    execFileSync(
      browser,
      [
        '--headless',
        '--disable-gpu',
        '--no-pdf-header-footer',
        '--virtual-time-budget=10000',
        `--print-to-pdf=${cwd}/${PDF_NAME}`,
        `file:///${cwd}/Andrey-Caburnay-Portfolio.html`,
      ],
      { stdio: 'inherit' },
    );

    // Sync the fresh PDF into public/ for the website's Download button.
    mkdirSync('public', { recursive: true });
    copyFileSync(PDF_NAME, `public/${PDF_NAME}`);
    console.log(`✔ ${PDF_NAME} written (portfolio root + public/)`);
  } catch (err) {
    console.warn(`⚠ PDF regeneration failed (${err.message}) — ${PDF_NAME} in public/ is unchanged.`);
  }
}
