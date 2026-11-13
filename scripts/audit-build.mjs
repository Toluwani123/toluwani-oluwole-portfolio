import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import path from "node:path";
const root = "dist";
const walk = async (dir) =>
  (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat();
const all = await walk(root),
  htmls = all.filter((f) => f.endsWith(".html"));
const issues = [];
const metrics = [];
for (const file of htmls) {
  const html = await readFile(file, "utf8");
  const text = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ");
  const banned =
    /\b(pending|coming soon|demo to be added|yourhandle|example\.com)\b|\[NEEDED\]|Electrical and Computer Engineering|React Native|OpenAI|806[\s()\-]*224[\s\-]*9344|tel:/i;
  if (banned.test(html)) issues.push(`${file}: forbidden public text`);
  if ((html.match(/<h1\b/g) || []).length !== 1)
    issues.push(`${file}: expected one H1`);
  for (const key of ["description", "og:image", "canonical"])
    if (!html.includes(key)) issues.push(`${file}: missing ${key}`);
  const deps = new Set();
  for (const match of html.matchAll(
    /(?:src|href)="([^"?#]+)(?:[?#][^"]*)?"/g,
  )) {
    const url = match[1];
    if (url.startsWith("/") && !url.startsWith("//")) {
      const asset = path.join(root, decodeURIComponent(url));
      try {
        const info = await stat(asset);
        if (info.isDirectory()) await stat(path.join(asset, "index.html"));
      } catch {
        issues.push(`${file}: missing ${url}`);
      }
      if (/\.(css|js|woff2|png|webp|svg)$/.test(url)) deps.add(asset);
    }
  }
  let js = 0,
    css = 0,
    transfer = gzipSync(html).length;
  for (const dep of deps) {
    const bytes = await readFile(dep);
    const compressed = gzipSync(bytes).length;
    transfer += /\.(woff2|png|webp)$/.test(dep) ? bytes.length : compressed;
    if (dep.endsWith(".js")) js += compressed;
    if (dep.endsWith(".css")) css += compressed;
  }
  // The WOFF2 comes from CSS; preload makes it explicit in HTML.
  const result = {
    route: file.slice(4),
    htmlGzip: gzipSync(html).length,
    jsGzip: js,
    cssGzip: css,
    initialBytes: transfer,
  };
  metrics.push(result);
  if (
    js > 80 * 1024 ||
    css > 25 * 1024 ||
    result.htmlGzip > 60 * 1024 ||
    transfer > 500 * 1024
  )
    issues.push(`${file}: performance budget exceeded`);
  if (!text.trim()) issues.push(`${file}: empty text`);
}
const lum = (c) => {
  const n = parseInt(c.slice(1), 16);
  return [0.2126, 0.7152, 0.0722].reduce((a, w, i) => {
    const v = ((n >> ((2 - i) * 8)) & 255) / 255;
    return a + w * (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  }, 0);
};
const pairs = [
  ["Ink/paper", "#19211E", "#F7F7F2", 4.5],
  ["Muted/paper", "#58615B", "#F7F7F2", 4.5],
  ["Green/paper", "#21614E", "#F7F7F2", 4.5],
  ["White/green", "#FFFFFF", "#21614E", 4.5],
  ["Amber/paper", "#8B4B08", "#F7F7F2", 4.5],
  ["Bench text/bench", "#E9EEE9", "#0F1512", 4.5],
  ["Amber/bench", "#E08A2E", "#0F1512", 4.5],
  ["Green/bench", "#A7D4B8", "#0F1512", 4.5],
  ["Border/paper", "#747E75", "#F7F7F2", 3],
  ["Bench muted", "#C1CBC2", "#0F1512", 4.5],
  ["Bench diagram muted", "#C1CBC2", "#1C2922", 4.5],
  ["Owned label/bench node", "#A7D4B8", "#20382B", 4.5],
  ["Bench border", "#637C6C", "#1C2922", 3],
];
const contrast = pairs.map(([pair, fg, bg, min]) => {
  const x = lum(fg),
    y = lum(bg);
  const ratio = (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  if (ratio < min) issues.push(`${pair}: contrast ${ratio}`);
  return { pair, ratio: Number(ratio.toFixed(2)), minimum: min };
});
await writeFile(
  "docs/build-metrics.json",
  JSON.stringify({ pages: metrics, contrast, issues }, null, 2) + "\n",
);
console.log(
  `${htmls.length} HTML pages; max gzip JS ${Math.max(...metrics.map((x) => x.jsGzip))} B; CSS ${Math.max(...metrics.map((x) => x.cssGzip))} B; initial transfer ${Math.max(...metrics.map((x) => x.initialBytes))} B.`,
);
if (issues.length) {
  console.error(issues.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    "Static links, content, metadata, contrast and transfer budgets pass.",
  );
