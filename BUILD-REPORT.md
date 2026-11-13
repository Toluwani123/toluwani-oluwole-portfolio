# Local build report — November 13, 2026

The revised spec and static Astro + TypeScript portfolio are in this copy on `build/signal-path-portfolio`. **Nothing was pushed or deployed.** The original checkout and live site were not changed.

## Delivered

Home, Work, ten distinct case studies, About, Résumé, Contact and 404 (16 HTML pages), plus sitemap, original favicon/social image, self-hosted font and per-page metadata. Home follows the requested project/experience/capability order. Hardware gets the dark bench band; project covers have individual paths/tints. Signal-path drawing, node feedback, card rules, section emphasis, case reading progress and native cross-document view transitions have static/reduced-motion fallbacks.

Work filtering supports shared query URLs and browser Back; all ten cards remain usable without JS. Contact has visible email/mailto and textual copy success/failure. Optional ownership hotspots, captioned audio and video accept project data and render only with real media. No hardware photos, RecConnect screenshots or AI-generator sample outputs were invented.

Three newest PDFs were copied unchanged under clean names. `/Resume.pdf` is byte-identical to the software résumé. Legacy Home anchors remain.

**Missing input:** no headshot image exists in `newestresumes/`; file-type inspection found only three PDFs and the master Markdown. About omits the portrait block. The 240×300 layout and 480×600 WebP preparation are implemented; adding the actual image to the source folder and rebuilding will include it. This is the only requested asset not delivered.

## Measured verification

| Check | Result |
| --- | --- |
| `npm run build` | Pass: Astro checks report 0 errors/warnings/hints; 16 static pages |
| Public HTML audit | No prohibited status markers, placeholder URLs, incorrect degree wording, mobile/AI budgeting stack claims or phone number |
| Internal links/assets, PDF alias, actual 404 | Pass |
| Responsive overflow | Zero on every page at 320 / 390 / 768 / 1024 / 1440px (80 page/width combinations) |
| axe-core WCAG rules | Zero violations across 16 pages; not a full AA certification |
| Interaction checks | 19/19 pass: filters/query/history/focus, copy success/failure, keyboard skip/Menu/Escape, node explanation, no-JS menu, case contents, PDF and 404 |
| No-JS | Six representative routes checked; content/navigation preserved; all ten Work cards visible |
| Reduced motion | Zero animations, fully drawn hero and static contents; preference changes tested |
| JavaScript | 1,391 bytes gzip (1.36 KiB) per first load |
| CSS | 6,789 bytes gzip (6.63 KiB) |
| Largest HTML | 4,390 bytes gzip (4.29 KiB) |
| Conservative initial asset budget | At most 45,292 bytes (44.23 KiB), including font/favicon/touch icon; PDF/social downloads excluded |
| Lighthouse observed transfer | Home 43,899 bytes; capstone 42,754 bytes |
| Mobile Lighthouse, three sequential Home runs | 100 / 100 / 100 performance; median LCP 0.767s, CLS 0, TBT 0ms |
| Mobile Lighthouse, capstone | 100 performance, LCP 0.761s, CLS 0, TBT 6ms |
| Lighthouse accessibility / best practices / SEO | 100 / 100 / 100 on Home and capstone |

Home's earlier isolated first-process Lighthouse score was 86 (unattributed blocking; LCP 0.757s, CLS 0). The three repeat navigations above investigate that variability and do not erase it. A prior concurrent run was contaminated by other browser work and was discarded. These are local, simulated-mobile lab measurements; field INP/Core Web Vitals and Render CDN behavior have not been measured.

Computed contrast: amber ink/paper 6.29:1; amber/bench 6.90:1; bench text/bench 15.73:1; green/paper 6.77:1; essential border/paper 3.92:1. The remaining token pairs are in the metrics JSON.

Evidence: [build sizes and contrast](docs/build-metrics.json), [browser checks](docs/browser-qa.json), [final target/focus checks](docs/final-focused-checks.json), [QA method](docs/qa-method.md), [Home repeat performance](docs/home-performance-repeat.json), [Home Lighthouse](docs/lighthouse-home.json), [capstone Lighthouse](docs/lighthouse-capstone.json), [screenshots](docs/qa/).

## Links and verification limits

GitHub profile and all three retained repository URLs returned HTTP 200. The Samthafs, SprintBudget and RateMyApartments URLs also returned 200 and were opened read-only in isolated Chrome. Samthafs and SprintBudget identify their products; RateMyApartments presents a login screen. These are landing-page checks, not validation of backend behavior or signed-in workflows. LinkedIn returned 999, so its supplied profile URL is retained without claiming live verification. No mail was sent and no external form was submitted.

The in-app browser execution tool failed before setup. Browser QA used installed Chrome 157 in a separate headless profile instead. Full screen-reader review, other browser engines, Render redirects and post-deployment routing remain untested. Optional media code compiles, but no real project photo/audio/video was available to inspect or play.

## Content interpretation

Positioning and headings are editorial synthesis of the supplied material. Diagrams are newly drawn architecture explanations, not original build artifacts. RecConnect contributions come from the master content; internal endpoints/data/concurrency mechanisms are omitted. Capstone completion and ownership follow the confirmed facts, with final protocol details kept at block level. Samthafs/RateMyApartments studies use modest existing-source descriptions; unknown dates and exact subsystem ownership are omitted. The current Samthafs site is not equated with the 2022 internship deliverable. IT Help Central has a compact About-only entry.

## Résumé discrepancies — PDFs unchanged

### Per-file audit

The three newest PDFs were copied byte-for-byte. No PDF was edited. The website's HTML follows the user's confirmed BUILD facts. These are content discrepancies to fix in the source PDFs, not assertions that the PDFs were independently fact-checked.

| PDF / location | Disagreement with confirmed facts |
| --- | --- |
| All three newest PDFs — Education | Degree title differs from the confirmed **B.S. in Computer Engineering**. Replace the longer source title. |
| All three — Education | GPA is **3.56/4.0**; confirmed public GPA is **3.6**. |
| All three — Sheet Music to Sound Reader heading | **Sep 2026–Present** implies ongoing work; confirmed **Completed, Fall 2026**. |
| Embedded — capstone first bullet | “Architecting” uses ongoing tense. Completed embedded work should use past tense. |
| Hybrid — capstone first bullet | “Architecting” likewise conflicts with completion. |
| Software — all three capstone bullets | “Building,” “Validating” and “Architecting” imply ongoing work. The first bullet describes recognition/OMR without clearly limiting personal ownership; use **we** for the whole system and **I** for receiving, validating, parsing, scheduling, synthesis and DAC output on MSP432. Recognition is team work. |
| All three — Touchscreen WAV Audio Player, DMA bullet | Numeric CPU-overhead reduction is not to be presented as an established benchmark. Describe DMA ping-pong buffering reducing CPU work qualitatively. |
| Embedded and hybrid — Autonomous Warehouse Rover, second bullet | Numeric demo-success percentage should become the bounded qualitative statement that the rover completed its demo task. |
| Software — MangaMorph AI, first bullet | Claims rebuilding manga text layouts. Confirmed scope is Japanese-text OCR extraction and translation into English. |
| Software — MangaMorph AI, second bullet | Claims real-time editing/preview. Confirmed scope does not include this. Unit/integration-test language is in the résumé, but no test artifacts were supplied for independent validation. |

The three newest PDFs agree with the confirmed expected graduation and minors. None labels honors. Their included internship/lab/tutoring dates agree. Omitted roles and a missing future title are normal résumé selection, not automatically false claims. Phone numbers are allowed inside the unchanged PDFs and are absent from site HTML.

### Older résumé in the untouched original checkout

The previous `toluwani-oluwole-portfolio/public/Resume.pdf` is not republished. Its disagreements are also recorded for completeness:

- Education: adds **Honors**; confirmed no honors. GPA **3.5** versus confirmed **3.6**. Degree itself is Computer Engineering, which agrees; label graduation as **expected** December 2026 rather than implying awarded.
- ECE Lab Operations Assistant: starts **February 2025** versus confirmed **February 2026**.
- C/C++ Tutor: **August 2025–February 2025** versus confirmed **August 2025–February 2026**; the old range ends before it starts.
- IT Help Central: **June 2024–current** versus confirmed **July 2024–February 2026**.
- MangaMorph AI and SprintBudget project headings: **July 2025–Present** versus the completed-project treatment requested for the new site.
- MangaMorph: translated-page presentation and real-time editing/preview go beyond confirmed extraction and translation scope. Avoid implied translation-accuracy claims.

The old Word document is not a copied résumé PDF and is not republished. Old/source claims were not used to override the confirmed BUILD facts.

## Render and handoff

Use the existing **Render Static Site**, build **`npm ci && npm run build`**, publish **`dist`**. No server adapter/start command. [RENDER.md](RENDER.md) documents the physical `/Resume.pdf` alias, optional 301 rules, old-anchor behavior and removing an obsolete SPA rewrite. Fragments never reach Render; old `/#about`, `/#skills`, `/#projects`, `/#contact` work via retained HTML IDs.

The source is committed locally on `build/signal-path-portfolio`. Review and push this branch from this copy yourself when ready. Supply the missing headshot and update the source PDFs if you want their contents corrected before launch. Keep `node_modules`, `dist`, `.astro` and environment files out of Git. The local preview used for QA was stopped after verification.
