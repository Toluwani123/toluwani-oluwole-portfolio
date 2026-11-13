# Toluwani Oluwole — portfolio

Astro + TypeScript, static output, custom CSS. Built locally in a separate copy on `build/signal-path-portfolio`. The original Vite source is preserved in Git history and the untouched sibling checkout.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Build performs type checks, generates 16 HTML pages plus sitemap, and audits internal links, public content, metadata, color contrast and gzip budgets. `docs/build-metrics.json` records the latest measurements. See [Render settings](RENDER.md), [verification](BUILD-REPORT.md) and the [revised design spec](portfolio-design-spec.md).

## Editing content

- `src/data/projects.ts`: ten typed project records, architecture nodes, case-study text, aliases, optional repo/demo/photo/audio/video.
- `src/data/experience.ts`: confirmed chronology and the future-facing LuMATH line.
- `src/styles/global.css`: typography, paper/bench palette, covers and motion.
- `src/components/OptionalMedia.astro`: conditional photo hotspots, audio and video. Data only additions need no component edits.

No project assets are invented. Photos need `src`, `alt`, `caption`, `width`, `height`; hotspots take `label`, `owner` (`I built this` or `Team built this`), `text`, and x/y percentages. Place files under `public/media/`. Audio takes `src`, `caption`, `transcript`. Video takes `src`, optional `poster`, `caption`, `transcript`, and `captions` for spoken material. Playback is opt-in. Keep required captions and ownership details accurate. These media files are rendered only for the matching project when its optional record exists.

The About headshot is `public/media/headshot.webp`. Before build, `scripts/prepare-headshot.mjs` detects raster files by bytes from `../newestresumes` (or `HEADSHOT_SOURCE_DIR`) and makes an oriented, 480×600 WebP, displayed at 240×300 desktop. Once in this repo, it works without the source folder. If no image exists, the portrait block is absent.

## Motion and resilience

HTML contains all page content. Small native scripts enhance filters/URL Back, copy feedback, menu Escape, path drawing and case progress. No application runtime. Motion respects the OS preference, including changes during a visit. Native cross-document view transitions use CSS only, with ordinary navigation fallback. Optional media components use native controls without scripts.

Instrument Sans is self-hosted as a Latin WOFF2 variable font; license in `public/fonts/InstrumentSans-OFL.txt`. The source font came from the official Google Fonts repository. Social image/favicon are original code-generated graphics.

Public phone numbers appear only inside the unchanged PDF downloads. Do not put private source documents in `public/`.

When replacing reviewed résumés, keep the three clean filenames in `public/resumes/`. Also copy the software PDF to `public/Resume.pdf` so the legacy download stays identical. Build again to refresh the displayed file sizes and verification metrics.
