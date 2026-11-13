# Toluwani Oluwole — Portfolio Design Specification

Date: November 13, 2026  
Status: Revised for the authorized local build, November 13, 2026. Publishing is excluded.  
Design source: `portfolio-design-spec.md`. Build checkout: `toluwani-oluwole-portfolio-build/`, branch `build/signal-path-portfolio`. Original checkout is preserved.

## Scope, evidence, and reading convention

This specification defines the authorized Astro + TypeScript static rebuild. The user’s BUILD instructions and confirmed facts supersede older source material. Work locally in a copy on a new branch; do not push, deploy, or modify the live Render site. Keep the evidence standards, information architecture, and ownership boundaries below.

### Inputs read

| ID | Actual source | Reading scope |
|---|---|---|
| R | [portfolio-reference-research.md](portfolio-reference-research.md) | Entire report, all five analyses, limitations, and synthesis |
| M | [Portfolio master content](newestresumes/Toluwani_Oluwole_Portfolio_Master_Content.md) | Entire document, including verification notes and proposed copy |
| E | [Embedded résumé](<newestresumes/NewFnlEmbedded_SureAttend_v2 (1).pdf>) | All text on its one page, plus embedded hyperlinks |
| S | [Software résumé](<newestresumes/NewFnlSwe_SureAttend_v2 (1).pdf>) | All text on its one page, plus embedded hyperlinks |
| H | [Hybrid résumé](<newestresumes/Newfnlhybrid_SureAttend_v2 (1).pdf>) | All text on its one page, plus embedded hyperlinks |
| C | [Existing portfolio](toluwani-oluwole-portfolio/) | All application components, entry points, styles, configuration, README, dependency manifests, and asset inventory |
| O-PDF | [Existing downloadable résumé](toluwani-oluwole-portfolio/public/Resume.pdf) | Entire one-page document |
| O-DOCX | [Existing Word résumé](<toluwani-oluwole-portfolio/public/Main Resume.docx>) | Entire document text, footer, and external hyperlink relationships |

Every substantive file in `newestresumes/` was readable. PDF text was extracted with the installed macOS PDFKit framework; no packages were installed and no extracted files were created. The résumé PDFs are immutable inputs to this build. Finder metadata is not treated as portfolio content.

The code audit is at commit `2defedbad354259f9a3fa71c8a8a1319c1c8a2a9`. It is a source audit; the site was not installed, started, or tested in a browser. Existing external project links are recorded from source and are **not** declared live or functional merely because a URL exists.

**Fact handling:** source IDs indicate where a statement is documented, not independent verification. Proposed headlines, section names, layout rules, and rankings are design decisions. `[NEEDED]` identifies missing facts, evidence, permissions, or assets. These markers belong in editorial planning and must never leak onto public pages. Conflicting claims remain explicit in section 10; the design does not silently choose a winner.

---

## 1. Persona & positioning

### Who Tolu is

Toluwani Oluwole, preferred short name Tolu, is completing an Computer Engineering degree at Texas Tech University, with Computer Science and Mathematics minors and expected graduation in December 2026 according to M/E/S/H. His documented work spans full-stack products, backend APIs, Python AI infrastructure, microcontroller audio systems, and FPGA/robotics projects.

The common thread is **making components work together predictably**: user-scoped API behavior at SureAttend, interface boundaries and migrations at LuMATH, authentication/check-in state in RecConnect, and transport/timing/audio boundaries in the capstone. That thread gives the portfolio coherence without pretending all projects belong to one specialization.

### Audience and priority

1. **Recruiters for graduate software engineering roles:** identify role fit, graduation timing, recent experience, résumé, and contact within a short scan.
2. **Hiring managers and engineers:** evaluate personal contribution, technical decisions, tests, limitations, and evidence through case studies.
3. **Embedded/systems teams:** find hardware projects without having to infer competence from web work.

Consulting inquiries remain possible through Contact, but the primary message is employment-oriented. Do not lead with a founder/executive title, a general agency pitch, or internship-only copy. The LuMATH leadership title is future-facing only: “Incoming Co-Founder & Chief Intelligence Officer, beginning after graduation.”

### One-sentence positioning

**Toluwani Oluwole is a software engineer with a computer engineering foundation, building full-stack products, AI infrastructure, and embedded systems with attention to interfaces, testing, and dependable behavior.**

This is an editorial synthesis of documented experience, not a claim of seniority or expertise in every listed discipline.

### Public-facing introduction: chosen direction

- Wordmark: **Toluwani Oluwole**.
- Hero H1: **Software engineer. Systems perspective.**
- Supporting draft: **I’m Tolu, completing my engineering degree at Texas Tech. My work connects web products, AI infrastructure, and embedded devices through clear interfaces and careful testing.**
- Context line: **Texas Tech University · Expected December 2026**; degree details appear on About and Résumé.
- Opportunity line: **Exploring graduate software engineering opportunities.** This expresses the recruiting goal without inventing a start date or work-authorization status.
- Primary action: **Explore my work** → `/work/`.
- Secondary action: **View résumé** → `/resume/`.

Use B.S. in Computer Engineering, minors in Computer Science and Mathematics, GPA 3.6, no honors, expected December 2026. Location: Dallas, Texas. Public email: oluwoletoluwani@gmail.com. Phone appears only in unchanged résumé PDFs. Do not automatically change “expected” to “graduated” when the calendar reaches December.

### Tone of voice

Direct, thoughtful, technically specific, and modest about scope. Use first person for contribution and plural language for team delivery. Prefer “I implemented the receiving and playback subsystem” over “I built the complete recognition platform.” Explain a technical term briefly when it first matters. Use concrete verbs: designed, implemented, tested, isolated, measured, integrated.

Avoid unsupported superlatives, “expert” labels, percentages of proficiency, vague innovation claims, and claims that a dependency proves an implemented feature. Public copy should sound like an engineer explaining real work to a colleague.

---

## 2. Concept & design principles

### Core concept: An engineering portfolio organized around interfaces and evidence

The site is an editorial engineering index: generous light surfaces, a precise numbered project order, quiet rules, large functional typography, and well-captioned artifacts. Each project answers the same three questions quickly: **What was the problem? What did I own? What demonstrates the result?**

The visual signature is a signal-path diagram paired with oversized typography and a narrow section-index column. Section numbers and artifact references behave like navigational furniture in a technical document. A short green rule marks a selected item or a section boundary. This is a typographic/detail system, not a simulated terminal, circuit-board wallpaper, fake blueprint, or branded laboratory interface.

The concept belongs to Tolu because his strongest stories concern interfaces across software layers and hardware boundaries. The diagrams are explanations of those stories, not ornamental engineering imagery.

### Seven principles

1. **Lead with relevance.** Software engineering, December 2026 graduation context, selected work, and résumé are visible before a long biography.
2. **Make ownership unmistakable.** Every case study has an early “My contribution” block; team boundaries appear beside the system diagram.
3. **Give evidence visual priority.** Real interfaces, devices, artifacts, and tests carry more weight than tool logos or adjectives.
4. **Offer three reading depths.** Card summary → 30-second case-study overview → optional technical depth. Essential context is never hidden in an accordion.
5. **Treat hardware as first-class work.** A working device, documented test, and clear ownership are legitimate evidence without a public repository.
6. **Keep interaction accountable.** Immediate content, native scrolling, meaningful focus states, and mandatory reduced-motion support. Controls exist only when functional.
7. **Keep the collection maintainable.** One project record, explicit scope/status, reusable page structure, and a small number of deliberate highlights.

### Originality and reference lessons

- From R’s Jameson analysis: adopt selective emphasis and clear role attribution, not its serif system, grain, or loader.
- From Tamal: connect capabilities to proof; avoid accumulating cursor, tilt, carousel, and entrance effects.
- From Laercio: use controlled reading widths and a coherent palette; do not duplicate its warm-red monospaced visual identity.
- From Mahesh: make recruiting intent obvious; do not reproduce verification decoration, disabled theme controls, or timed loading.
- From Aarab: explain decisions and limitations; do not add its command palette, marquees, WebGL, or large personal archive.

**3D decision:** no 3D renders or WebGL. Tolu’s signal paths, interface contracts and documented tests provide substantive differentiation; project photos may be added when available. Rotatable board models would add cost without better explaining his contribution.

---

## 3. Information architecture

### Sitemap

```text
/                         Home: relevance, selected evidence, experience preview
/work/                    Complete work index and category filtering
/work/[project-slug]/     Reusable case study; software or hardware content variant
/about/                   Experience, capabilities, education, working approach
/resume/                  Accessible HTML summary + reviewed résumé PDF links
/contact/                 Direct email, copy address, professional profiles
/404.html                 Helpful missing-page state
```

No separate skills, leadership, blog, awards, or services page at launch. Their supported content belongs on About; a thin standalone page would add navigation without useful depth. Confidential employer work stays within approved experience descriptions, rather than becoming unapproved public case studies.

### Navigation

**Desktop, from 900px:** opaque paper background, 72px high, sticky at top, 1px bottom rule. Wordmark links Home. Right-aligned links: Work, About, Résumé, Contact. A 2px green underline and `aria-current` identify the active page; Work remains current on project pages. No header resizing, glass blur, or scroll-dependent hiding.

**Mobile/tablet, below 900px:** 64px header with wordmark and 44×44px “Menu” control. Opening it reveals a full-width in-flow panel below the header, with four 48px-high links and a Home link. It pushes content down; it is not a full-screen modal. Escape closes it and returns focus to Menu. Selecting a link closes it. Closed links are removed from the tab order. Native disclosure behavior must work without an application runtime. At very narrow widths, the wordmark may wrap naturally to two lines within a 220px area; it must never truncate the name.

Skip link precedes navigation. Anchor targets use at least 96px scroll clearance so the sticky header does not obscure headings. No command palette is needed for this scale of site.

### Page-by-page section order and purpose

| Page | Ordered sections | Purpose |
|---|---|---|
| Home | 1. Hero; 2. Three selected projects; 3. Recent engineering experience; 4. Capabilities preview; 5. About/education bridge; 6. Contact invitation | Establish fit, then provide proof before biography |
| Work | 1. Heading and short scope statement; 2. Category controls and result count; 3. Ranked project grid; 4. Contact invitation | Show the entire retained/new collection without a wall of biography |
| Case study | 1. Breadcrumb; 2. Title, summary, dates/status; 3. Role/team/evidence links; 4. Lead artifact; 5. Problem and constraints; 6. My contribution; 7. Approach/diagram; 8. Decisions and debugging; 9. Outcome/test evidence; 10. Limitations/next work; 11. Adjacent project and Work link | Answer recruiter questions early and support technical evaluation below |
| About | 1. Short introduction; 2. Professional experience; 3. Demonstrated capabilities; 4. Education/coursework; 5. Engineering approach; 6. Mentorship/community, only supported items; 7. Contact invitation | Put the career record and systems narrative in one readable place |
| Résumé | 1. Heading and graduation context; 2. Primary software PDF and two discipline-specific PDFs; 3. HTML experience/education summary; 4. Contact | Offer useful material even when embedded PDF viewers fail |
| Contact | 1. Specific recruiting invitation; 2. Visible email, mail action, copy action; 3. LinkedIn/GitHub; 4. Short interest statement | Enable contact with minimal friction and no form service dependency |
| 404 | 1. “This page isn’t available”; 2. Brief explanation; 3. Work and Home links; 4. Email link | Recover gracefully without decorative errors or dead ends |

Home experience preview contains SureAttend and the documented LuMATH internship, with one concise contribution each. Full dates and the broader chronology remain on About. Home capabilities link to actual work: full-stack → RecConnect; AI workflows → AI Software Design Generator; embedded → Sheet Music to Sound Reader/STM32.

### Migration and deep links

Retain the old homepage anchor IDs `about`, `skills`, `projects`, and `contact` as meaningful Home destinations: About bridge, capabilities preview, selected work, and contact invitation respectively. Fragments are not sent to the hosting server; do not promise a server redirect based on a hash.

The old `/Resume.pdf` path must continue serving or redirecting to the approved replacement software résumé. Preserve existing external project destinations in the editorial inventory; publish only validated links. Domain migration must preserve inbound résumé/LinkedIn links through a redirect on the old host where possible. All deployment work remains on the existing Render service under the user’s control.

---

## 4. Content mapping

### 4.1 Ranking and retention rules

Choose editorial order by relevance to software roles, specificity of personal ownership, quality of available evidence, and breadth added to the collection. This is a qualitative editorial judgment, not a numerical skill score.

Home features **RecConnect, Sheet Music to Sound Reader, and AI Software Design Generator**, in that order. Together they show application delivery, real-time systems work, and AI orchestration. Use three sequential editorial features: software on paper, embedded on the dark bench band, AI on paper. The capstone’s position is prominent because it supplies a memorable systems story, while the hero and first project retain a software-first identity.

These are chosen editorial slots, not claims that the missing artifacts already exist. Use truthful diagrams and scoped summaries while gathering photos; do not replace a project with stock imagery or overstate its scope to fill a slot. If a required fact remains unresolved, hold that project’s publication, not its place in the plan.

### 4.2 Complete project inventory and chosen order

There are **10 distinct projects**. SprintBudgetPro is an alias of SprintBudget, with one canonical page and no duplicate card.

| Rank | Project | Date / status | Public story and evidence |
|---|---|---|---|
| 01 | RecConnect | Jan–May 2026 · Completed | Internal campus portal; React, Node.js, PostgreSQL, Firebase/JWT. Architecture and written check-in/session flow only. No screenshots, confidential records, invented sensor mechanism, or user count. |
| 02 | Sheet Music to Sound Reader | Fall 2026 · Completed | We built the score-to-audio system. I built MSP432 receiving, validating, parsing, scheduling, synthesis, and DAC output. Recognition/capture remain team-owned. Block diagram and documented tests; no invented final protocol detail. |
| 03 | AI Software Design Generator | Dec 2025 · Completed | Python/AutoGen planner → coder → evaluator workflow and clear capability list. No sample-output component because none exists. No unsupported provider, output-quality score, or executable-code guarantee. |
| 04 | STM32 Touchscreen WAV Audio Player | Jan–May 2026 · Completed | FreeRTOS, TouchGFX, FATFS, DMA ping-pong buffers and DAC. Describe reduced CPU work qualitatively; no percentage. |
| 05 | SprintBudget (alias SprintBudgetPro) | Jul 2025 · Completed | React.js, Django (REST), PostgreSQL, Plaid; CSV imports, scoped data, categorization. No unsupported mobile/AI stack. |
| 06 | Automated Laundry Sorter | Dec 2025 · Completed | Raspberry Pi/Python, sensor calibration, retry handling, ordered four-servo actuation and LCD. Block-level flow; no invented MSP430 role or named states. |
| 07 | FPGA Autonomous Warehouse Rover | May 2025 · Completed | Basys-3, Verilog FSM, IR input, PWM/H-bridge and servo claw. Rover completed its demo task; no percentage or broad reliability claim. |
| 08 | MangaMorph AI | Jul 2025 · Completed | OCR extracts Japanese text from manga pages and translates it to English. Django REST/React. No layout reconstruction, real-time editing or accuracy figure. |
| 09 | Samthafs Construction | Date omitted · Completed | Business website, Django REST/React and content/inquiry workflows documented in existing source. Do not equate the current site with the 2022 internship deliverable or assert a rebuild date. |
| 10 | RateMyApartments | Date omitted · Completed | Campus apartment ratings, reviews and housing filters from existing source. Keep modest copy; no fabricated personal ownership, research, usage or test outcomes. |

All four old project names remain represented. Assets and links are optional data. Missing assets omit the entire block/control silently, with no public editorial marker or unavailable-evidence badge.

### Existing project URL inventory — source values, not live verification

| Existing project | Repository in C | Demo in C | Publication treatment |
|---|---|---|---|
| MangaMorph AI | `https://github.com/Toluwani123/MangaMorph` | Discarded placeholder | Check the repository; omit the discarded demo |
| Samthafs Construction | `https://github.com/Toluwani123/Samthafs-Construction` | `https://samthafsapp.onrender.com/` | Check project identity, access, scope and current operation |
| SprintBudgetPro | Discarded placeholder | `https://sprintbudgetapp.onrender.com` | Discard placeholder repository; use the real demo only for the merged SprintBudget record |
| RateMyApartments | `https://github.com/Toluwani123/RateMyAparments` | `https://ratemyapartments-uwcj.onrender.com` | Verify exact repository path; do not silently correct spelling in the URL |

### 4.3 Experience mapping and chronology

Use this confirmed order on About and the HTML résumé summary. Home features only the first two entries.

| Organization / role | Confirmed dates | Supported contribution |
|---|---|---|
| SureAttend — Software Engineering Intern | Sep 2026–Present | Django REST/React/TypeScript features, permissions, user-scoped data, validation, cross-layer debugging and automated tests. Do not claim personal ownership of all product integrations. |
| LuMATH — Software & AI Infrastructure Intern | Jun–Aug 2026 | 17 responsibility areas, modular typed Python services, migration planning, unit/integration/chain tests and architectural handoffs. Add exactly: “Incoming Co-Founder & Chief Intelligence Officer, beginning after graduation.” Never present as current. |
| Texas Tech — ECE Lab Operations Assistant | Feb 2026–Present | Component compatibility/procurement support for 100+ students per semester. |
| Texas Tech — C/C++ Tutor | Aug 2025–Feb 2026 | Tutored 20+ students per semester; memory, control flow, logic and debugging. |
| IT Help Central — Student Analyst | Jul 2024–Feb 2026 | Compact About entry only; technical support. Never on Home. |
| Samthafs Construction Ltd. — Software Engineering Intern | Nov–Dec 2022 | Django/React application, APIs, backend workflows, logs and documentation. Do not assume identity with the current company website. |

Dates are editorial content, not automatic calendar calculations. No phone in HTML or structured data.

### 4.4 Skills linked to demonstrated work

Public display uses four grouped lists, each with a short evidence link; no percentages, stars, badges of verification, logo wall, or moving marquee.

| Group | Included capabilities | Supporting work |
|---|---|---|
| Product & backend | Python; Django/DRF; React; TypeScript/JavaScript; Node.js; PostgreSQL/SQL; REST; Firebase/JWT | SureAttend, RecConnect, SprintBudget; actual usage and ownership confirmed per project |
| AI workflows & infrastructure | Typed Python interfaces; AutoGen orchestration; structured outputs; validation; dependency boundaries; unit/integration tests | LuMATH approved summary and AI Software Design Generator |
| Embedded & digital systems | C/C++; FreeRTOS; STM32F429; TI MSP432E401Y; UART/SPI/I2C; timers/interrupts; DAC/DMA; FATFS; Verilog/FSM/PWM; Basys-3; Raspberry Pi | Capstone, STM32 player, rover, sorter |
| Engineering practice | Authentication/permissions; failure-path testing; pytest/Django TestCase; integration debugging; Git/code review; Jira/CI; documentation | SureAttend, LuMATH, and specific case-study examples |

Additional source inventory remains available for appropriate detail pages: Flask, MSP430, Assembly, ADC/GPIO, TouchGFX, SD storage, sensors, Linux, protocol parsing, CRC concepts and test fixtures. Label classroom exposure separately from repeated project use. List MSP430 separately from the Arm Cortex-M examples; confirm exact variant and its sorter responsibility.

The older site lists additional frameworks, languages, cloud and learning tags; the older résumés additionally list Go, FastAPI, Brownie, NumPy, Pandas, SciPy, Matplotlib, Selenium and Beautiful Soup. These are **source-listed, not automatically established strengths**. Keep them in the editorial inventory and include a tool publicly only when Tolu can connect it to a real example. The master’s suggested “honest proficiency levels” becomes evidence/context labels, not numerical scoring.

### 4.5 Education, coursework, leadership, and recognition

About education block: B.S. in Computer Engineering, Texas Tech University; minors in Computer Science and Mathematics; expected graduation December 2026; GPA 3.6; no honors. Coursework uses documented subject names without inventing transcript titles.

Leadership/community:

- ElevateTech Africa, founded in 2026 according to M: one short About paragraph, contingent on confirming what has actually launched.
- M describes coordination with Let It Shine Academy in Lagos, a proposed Nov 2026–Feb 2027 program, one-hour Saturdays, and up to three students per mentor. Those are program plans, not participation/outcome metrics. Omit the schedule and ratios from public copy until useful and confirmed.
- Connect tutoring and lab support to the ability to explain and debug across experience levels.
- No awards section at launch. M’s WASSCE/JAMB recognition has insufficient identity/title/timeline detail; no résumé corroborates it. No peer-reviewed publications, certifications, hackathon wins, funding totals, or employer endorsements are established by these inputs.

### 4.6 Hardware showcase pattern

Use the same typography, card importance, case-study route, and publication standard as software projects. A repository is an optional evidence type, not an eligibility requirement.

**Card:** real device photo or accurately reconstructed static system diagram; project title; problem-focused sentence; “My contribution” sentence; core hardware/software tags; date and truthful status; **Read case study**. Add **Watch demonstration** only when an actual video is available. Never show an empty GitHub icon, disabled code button, padlock decoration, or invented “private repository” label.

**Case study evidence sequence:**

1. **What exists, only if available:** one actual build photo with board/sensor/actuator identification and a factual caption. Distinguish a completed assembly from a work-in-progress bench photograph.
2. **System boundary:** accessible block diagram with Tolu’s subsystem outlined in green and team-owned stages in neutral gray. Ownership is also written in text.
3. **Build/process:** two to four captioned steps showing calibration, wiring/integration, firmware testing, or a debugging checkpoint. Do not fake CAD/schematic artifacts for their appearance.
4. **Specs:** only confirmed platform, inputs/outputs, communication interface, supported formats, timing, constraints and firmware milestone. Separate measured values from design targets.
5. **Demonstration:** 30–60 second user-initiated video where available, with captions/transcript explaining input, observable behavior and limitations. No autoplay or unsolicited audio.
6. **Test evidence:** dated test conditions, expected/observed behavior, pass/fail examples, and instrumentation. A qualitative demonstrated result is acceptable when no benchmark is established.
7. **Files:** schematic PDF, pin map, FSM, test log, generated MIDI, or report excerpt where owned and approved. Caption reconstructed documentation as reconstructed; never imply it was an original contemporaneous artifact.

**Capstone diagram brief:** photographed score → teammate-owned recognition/host stage → MIDI transfer boundary → **Tolu: receive/validate → parse/schedule → synthesize → DAC/amplifier** → speaker. Include a plain-language equivalent below the diagram. M reports successful Pi-to-MSP transfer and playback, but the user confirms completion in Fall 2026. Keep final firmware details at block level unless documented. Draw CRC/SMID/task details only after verifying the implemented version.

**STM32 diagram brief:** SD/FATFS → two alternating buffers → DMA → DAC, with separate UI/control responsibility. The labels describe the documented architecture. No animated CPU percentage until the underlying measurement is supplied.

**Rover diagram brief:** IR input/sensor events → state machine → motor PWM/H-bridge and claw sequence. Use a block diagram; do not invent state names or transitions.

**Sorter diagram brief:** calibrated sensor reads → classification → ordered servo poses → status/fault handling. Confirm MSP430’s part in the system instead of assigning it an invented controller role.

### 4.7 Reusable case-study template

Scale detail to the evidence. Use concise problem, contribution, architecture, decisions and outcome sections; do not pad thin evidence or invent historical decisions, test results, dates or ownership.

1. **Title and 25–40-word summary:** user/system problem and what the project addresses.
2. **At a glance:** dates, current status with review date, context (personal/team/course/employer, only known values), role, team responsibilities, 3–5 technologies and actual evidence links.
3. **Problem:** who or what was affected; constraints; what success meant. No invented user interviews.
4. **Role:** explicit “I owned…” and “The team/other contributors owned…”; omit unsupported division details where the record is incomplete.
5. **Approach:** one architecture/data-flow diagram, with a text equivalent and explanation of interfaces.
6. **Decisions:** two or three specific choices; alternative considered, constraint, chosen approach, and trade-off. Do not invent historical decisions for design polish.
7. **Debugging/testing:** one concrete failure or risk and how it was investigated; expected behavior, observed behavior, change, recheck.
8. **Outcome:** demonstrated behavior first. A metric needs unit, baseline, environment, sample/trial count, measurement method and date. Otherwise use a bounded qualitative result.
9. **Evidence:** annotated screens/photos, artifact links, test summaries, video/transcript, repo/demo if functional. Each item should support an adjacent claim.
10. **Limitations and next work:** distinguish current constraints from planned extensions. Avoid quietly presenting future functionality as delivered.
11. **Related work/contact:** one relevant next project plus an explicit return to the full index.

### 4.8 Deliberate exclusions

Omit proficiency percentages, technology-logo wallpaper, generic “problem solver” tiles, invented testimonials, unsupported awards, a publications section, fundraising statistics, unconditional consulting availability, personal phone number, precise private address, immigration/work-authorization details, internal employer architecture, proprietary names/code, real banking data, and copyrighted manga samples without suitable rights.

Do not remove existing projects for aesthetic convenience. Distinguish omitted **claims/assets** from retained **projects**. Missing facts block the affected claim or publication slot, not the overall design work.

---

## 5. Visual system

### Signature & personality

The **SIGNAL-PATH** motif expresses “interfaces working predictably”: a thin SVG line with nodes, sensor → firmware → API → interface. It is a readable system explanation, never circuit wallpaper. Use a large hero path, project-specific mini paths and case-study block diagrams as one family.

- Hero: draw the line once on load with stroke-dashoffset, approximately 800ms total; node entries stagger by 120ms. Rest after completion. Node hover/focus replays a roughly 450ms pulse and exposes a short interface description.
- Each project has a distinct mini path reflecting its own architecture, on an individual tinted cover. Do not manufacture screenshots to fill missing-photo space.
- Case diagrams: 1.5px strokes, rounded rectangles for processing, circles for boundaries, green with a written ownership label for my subsystem, neutral for the rest. Keep unknown protocols/state names at block level. An adjacent HTML flow and ownership description supply complete text equivalents.
- Without JS and under reduced motion, all lines/nodes are fully drawn and static. Essential text and all project links remain visible in HTML.

### 5.1 Color and theme

Light paper remains the primary surface. Hardware/embedded work gets a dark **hardware bench** band, not a separate theme toggle. No gradients, grain, glow, fake statuses or decorative loops.

| Token | Value | Use |
|---|---|---|
| Paper | #F7F7F2 | Primary canvas |
| Ink | #19211E | Main text |
| Muted | #58615B | Secondary text |
| Green | #21614E | Links, owned subsystem, primary button |
| Green on dark | #A7D4B8 | Owned subsystem/links on bench |
| Bench | #0F1512 | Hardware feature and diagram field |
| Bench text | #E9EEE9 | Text on dark |
| Signal amber | #E08A2E | Signal node/UI and text on dark |
| Amber ink | #8B4B08 | Amber text and focus on light |
| Essential border | #747E75 | Controls and diagram boundaries |
| Decorative rule | #D8DDD7 | Nonessential separators only |

Contrast must be computed from actual pairs: normal text ≥4.5:1, meaningful UI ≥3:1. Green/Paper ~6.77:1, Ink/Paper ~15.3:1. Compute amber and bench pairs during build; do not reuse light accent colors on an untested tinted field. Green is not the sole ownership signal. Cover tints are pale sage, warm sand, lavender, steel, mint, peach, blue-gray, lilac, stone and rose; labels use Ink or Green on light covers and Bench text/green/amber on dark.

### 5.2 Typography

Self-host **Instrument Sans** variable, 400–700, with its OFL notice; use system monospace for short technical labels. Strong scale jumps and tight tracking carry personality. Use clamp(64px, 12vw, 160px) for hero H1/wordmark with about -0.065em tracking, .95 line-height; allow natural word wrapping. Page H1 clamp(44px, 7vw, 96px); H2 clamp(32px, 4vw, 56px); card headings 26–36px; body 17–18px/1.65; metadata ≥14px. One H1/page. Name in nav stays compact. No ellipsized names or undersized diagrams. At narrow widths, words wrap rather than force page overflow.

### 5.3 Grid and spacing

Maximum content width 1,280px. Gutters 20px mobile, 32px tablet, 48px desktop. Spacing scale 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Reading width 65ch. Main sections 96–128px apart on desktop, 56–64px on mobile. Home selected projects are editorial rows, in order: RecConnect; full-bleed dark capstone band; AI generator. Work uses two columns ≥768px, one below. Case contents rail sits beside a reading column on wide screens and becomes in-flow navigation on mobile. No fixed viewport-height hero.

### 5.4 Surfaces and interaction shapes

Use whitespace/rules, nearly square media fields (4–8px radius), no resting shadows, no hover lift. Controls are at least 44×44px, typical 48px tall, clearly bordered where essential. Visible 3px focus outlines with offset. Card title and animated rule are paired with the path change; no essential information is hover-only.

### 5.5 Images and media

About portrait: locate image by file type in newestresumes; optimize to WebP/AVIF, reserve 240×300 (4:5) desktop, stack on mobile; useful alt text. Initial inventory found no image file, so request the actual file and do not fabricate a portrait.

Hardware has no photo/video at build time: use accurate block diagrams, documented specs and test narratives. RecConnect has no screenshots and remains an internal-platform description. AI generator has no sample output: capabilities plus workflow only.

Build an optional annotated-photo component now. Render only for a real photo. Each hotspot is keyboard accessible, names “I built this” or “Team built this,” and connects to persistent text equivalents; no hover-only disclosure. Mobile presents the equivalent list below the image. Do not invent coordinates or ownership for absent photos.

Build an optional audio component now, rendered only for a real file: explicit play/pause button, caption/transcript, native audio fallback, preload none, never autoplay. Video likewise needs an actual file, native controls, captions/transcript and no autoplay. Optional media/links belong in data so they can be added later without component changes.

---

## 6. Layout wireframes

These are visual layout plans for the authorized build. All visible controls have real destinations. Empty optional media blocks do not occupy layout space.

### 6.1 Home — desktop

```text
HEADER: compact wordmark / Work / About / Résumé / Contact
Dallas + Texas Tech                           Expected Dec 2026
OVERSIZED: Software engineer.
           Systems perspective.
Introduction                                  Work / Résumé actions
Large SVG sensor → firmware → API → interface signal path
Native disclosure with four text explanations

01 / Selected work
RecConnect: tinted path cover                 Problem + contribution + case link
DARK BENCH BAND: Capstone copy                Tinted embedded path cover
AI generator: lavender workflow cover        Capabilities summary + case link

02 / Experience: SureAttend                   LuMATH + future-only title
03 / Capabilities: linked rows to actual projects
04 / About: education bridge + About action
CONTACT BAND: invitation + direct Contact action
FOOTER: identity / email / GitHub / LinkedIn / actual year
```

On mobile, stack in this same reading order; hardware cover precedes its copy. Hero H1 wraps naturally at the 64px lower bound. The four signal nodes remain large enough for 44px keyboard/pointer targets. Main content is visible immediately; the large hero is not a viewport-height gate. Selected work may begin below the first viewport depending on type wrapping.

### 6.2 Work index

Intro and project count → enhanced category buttons (only when JS is ready) → two-column grid at ≥768px / one column below → contact. Ten distinct cards, editorial order from section 4. Each cover uses its unique path and tint, with title, summary, stack, status/date and one case-study link. No duplicate SprintBudgetPro card. With no JS, ten cards remain and controls are absent.

### 6.3 Software and AI case study

Breadcrumb → project title and summary → status/date, role and stack → real evidence links only → architecture diagram plus HTML equivalent → contents navigation and reading column. The reading column contains Problem, My contribution, Approach & decisions, Outcome & scope. AI generator adds a capability list; it has no sample-output panel. RecConnect uses the internal platform flow and contains no screenshots or sensitive records.

Wide contents navigation is sticky with a reading-progress rule. Mobile contents links are in-flow above prose, followed by the same sections. Diagrams redraw as vertical HTML nodes and arrows on narrow screens instead of reducing labels to illegible type.

### 6.4 Hardware case study

The shared case header leads into a dark bench diagram. Neutral blocks show system context; labeled green blocks show my embedded work. The same reading structure explains build decisions, documented debugging/test narratives and bounded outcomes. Capstone team/personal boundaries remain adjacent to the diagram.

Photo/hotspot, audio and video figures appear only for supplied data. In this build, no hardware photos/videos/audio exist, so these blocks are absent. There is no empty frame, missing-media badge, disabled control or fabricated build artifact. No invented FSM state names or transport bytes.

### 6.5 About

Intro and engineering context beside the supplied 240×300 headshot on desktop, stacked on mobile. If the requested image is still absent, render the introduction without a portrait block and record the missing input in the handoff. Follow with the six-role confirmed chronology (IT Help Central compact here only), education/minors/GPA, and concrete working-approach examples linked to project evidence. Do not publish unconfirmed mentorship outcomes or honors.

### 6.6 Résumé

Intro → three real PDF cards (software primary, embedded and hybrid secondary), each with View/Download and actual size → HTML experience and education → contact route. /Resume.pdf remains the software PDF alias. Do not embed tiny PDF panes or edit the supplied documents. The HTML uses corrected facts; the report identifies PDF discrepancies.

### 6.7 Contact and 404

Contact: recruiting scope → visible wrapping email → mailto and enhanced copy button → textual success/failure region → supplied GitHub/LinkedIn and Résumé links. No phone or form.

404: shared shell → clear missing-page heading → Work/Home actions and email. Missing URLs retain an actual 404 response; no SPA catch-all. No animated error interstitial.

---

## 7. Motion & interaction

Motion is a positive part of the signal-path identity. Content starts fully visible in HTML. Native scrolling, native document navigation, progressive enhancement and immediate fallbacks remain mandatory.

| Item | Positive motion | Reduced-motion / no-JS alternative |
|---|---|---|
| Hero path | One 800ms stroke draw, 120ms node stagger; rests | Fully drawn static path |
| Node feedback | 450ms pulse on hover/focus, text description always accessible | Immediate outline/text feedback |
| Project card | Path highlight/reveal and underline/rule over 250–350ms, cubic-bezier(0.2,0.7,0.2,1) | Static path, immediate underline/focus |
| Case contents | Scroll-linked reading progress with active section indication | Static contents links; native anchors |
| Page navigation | Native cross-document view transitions ~300ms | Instant document navigation; unsupported browsers also instant |
| Section reveal | Optional ≤450ms subtle translation/opacity emphasis, intersection-triggered only after enhancement | Already visible content; no opacity-zero gate |
| Mobile navigation | Native in-flow disclosure; Escape closes and returns focus | Same native disclosure |
| Filters | Immediate unique-record count/filter; query parameter; Back restores state | All ten cards visible; enhancement-only controls absent |
| Copy email | Immediate textual success/failure in polite live region | Visible email and mailto |
| Audio/video | Explicit opt-in playback, native controls, caption/transcript | Same user-controlled playback; no autoplay |

No loaders, custom cursor, tilt, marquees, scroll hijacking, parallax, 3D/WebGL or autoplay of any media. No decorative loop or timed content gate. Reduced-motion disables all nonessential animations, transitions, progress animation and smooth scrolling. Test preference changes as well as initial preference.

Work filters: All, Software, AI, Embedded & hardware. Non-tab button semantics, aria-pressed, selected underline/text count, keyboard focus stays on the button. Query `?type=` is enhancement state; canonical remains /work/. Without JS all projects remain usable. No grid rearrangement animation.

---

## 8. Components and states

### Navigation

Default, active page, hover, keyboard focus, mobile closed, mobile open. Each has a textual accessible name. Wordmark always returns Home. Link order and focus order match the visual order. The in-flow mobile panel avoids modal focus trapping. At 200% zoom, switch to the compact layout rather than clipping links.

### Hero

One H1; explicit identity/context; two real actions; no independent slideshow, decorative headshot substitute, ticker, or count-up metrics. Large and narrow layouts follow the type scale. Graduation/opportunity text is edited when status changes, not automatically inferred.

### Project card

Content: order number, media, title, one-sentence problem, one-sentence ownership, up to three primary tags, date/status if known, and case-study link. The card’s primary destination is the case study. Keep nested repo/demo links out of the card; place them on the detail page to avoid overlapping click targets.

States: default, hover, focus-within, no-image, ongoing, archived if factually confirmed. No-image state uses a real explanatory diagram where enough detail exists; otherwise a deliberate title/role/specimen layout with no fake screenshot. An unexpected image-fetch failure collapses to meaningful alt/caption content, not an empty decorative frame. Lack of a public repository is not an error state and does not merit a warning badge.

### Case-study header and body

Header contains role/context before the first long explanation. Evidence actions are conditionally present: Repository, Live demo, Watch demonstration, Download diagram. All require working destinations and accurate labels. Source availability is separate from implementation status; neither implies the other.

The reading rail is sticky below the header only on sufficiently wide screens; otherwise a native contents disclosure. It must never cover content or keyboard focus. On-page contents links refer to actual headings. Technical details may use native disclosures, but problem, role, principal outcome, and limitations remain exposed.

### Experience timeline

Use a chronological ordered list, latest confirmed role first; 160px date rail at desktop, stacked dates on mobile. No animated line or employer logo collection. Each entry contains organization/title, actual date range, two or three specific contributions, stack context and optional related public work. Overlapping roles remain separate and use their real dates; never imply sequential full-time tenure. Unknown title/dates stay in editorial pending state, not a public “Present” guess.

### Skills display

Four groups described in section 4. Each group includes tools and one or two project links. Default/focus states are ordinary links. If no public evidence exists for an item, use an honest context such as coursework when documented, or withhold that item. No numerical proficiency, flashing logos, or copied certification symbols.

### Media/evidence component

Supports screenshot, photograph, static diagram, test record, video and downloadable artifact. Every meaningful asset has a caption, context, authorship/source as appropriate, and accessible alternative. A video without source audio still receives a descriptive transcript; spoken audio receives captions. Tests distinguish observation from target. Optional downloads show file type and real size.

### Contact

Public email is readable and a mailto link works without JavaScript. Copy action appears only when the enhancement is ready. States: ready, copied, copy failed. On failure: “Copy didn’t work. Select the address or use the email link.” Preserve visible email throughout. No sending state, message form, CAPTCHA, fake success toast, or third-party form account is needed for this chosen design. Use the confirmed address oluwoletoluwani@gmail.com.

### Résumé links

Primary software résumé, secondary embedded and hybrid/system résumés, each with View and Download where approved files exist. Missing or superseded assets never produce disabled controls. Do not use the old `/Resume.pdf` as the primary download simply because the filename is convenient. Copy the three newest PDFs byte-for-byte. Do not edit them. Phone may remain only in the PDFs. List every disagreement with confirmed facts in the final audit report. /Resume.pdf serves the software résumé byte-for-byte.

### Footer

Name, short role description, email/LinkedIn/GitHub links, and actual copyright year. Compact two-row desktop arrangement; stacked mobile links with 44px hit areas. No framework boast that misstates the stack, stale copyright date, back-to-top animation, or extra social platforms without evidence. Existing sources establish GitHub and LinkedIn; no additional handles are invented.

---

## 9. Technical recommendation

### Chosen stack and hosting

**Astro with TypeScript, static output, typed project content records, and custom CSS tokens.** Use small native/client-side scripts only for filtering, copying, and any enhancement beyond native disclosure behavior. No React runtime, UI kit, animation framework, database, CMS, auth system, or email backend is needed for the portfolio itself.

This recommendation is for a content-rich portfolio, not an inference about Tolu’s preferred project stack. Astro can emit static HTML and selectively add client behavior; collection schemas support consistent project records and routes. [Astro islands](https://docs.astro.build/en/concepts/islands/), [content collections](https://docs.astro.build/en/guides/content-collections/), [client scripts](https://docs.astro.build/en/guides/client-side-scripts/).

Runner-up: retaining Vite/React with prerendering. Astro is chosen because static case-study content and per-page metadata are central, while very little application state is required. The build replaces source deliberately on the new local branch in the copy.

**Hosting: existing Render Static Site**, static output only. Build `npm ci && npm run build`; publish directory `dist`; no start command or server adapter. Document settings and redirect rules in RENDER.md. No push/deploy is authorized. Keep the existing canonical Render domain unless the user changes it. No analytics in v1.

Preserve /Resume.pdf as a physical copy (Render serves existing files before redirects). Optionally, if removing that alias in a future revision, use a 301 `/Resume.pdf` → `/resumes/toluwani-oluwole-software.pdf`. Preserve old `/#about`, `/#skills`, `/#projects`, `/#contact` through Home element IDs: hash fragments never reach Render and cannot be matched by server redirect rules. Optional path aliases `/projects` → `/work/`, `/skills` → `/#skills` are 301 rules. Remove any old SPA catch-all rewrite so genuine missing paths use 404.html.

### Maintainable content contract

One record per actual project, with: stable ID/slug; title and aliases; categories; editorial rank; summary; role; team boundary; start/end dates; current status and review date; technologies; evidence assets; working external links; scope limitations; and publication readiness. Keep internal source/conflict/permission notes separate from public output. Validate required public fields before publishing; do not bundle all résumés or internal evidence notes into client JavaScript.

Photo/video/link fields are optional; role, scope, and honest outcome are not. A hardware project may publish with a clear diagram and test record before a polished video exists. A project cannot publish a false metric or fake screenshot to meet a field requirement.

### Images and video

- Owned photos/screenshots stored with the project and processed into AVIF/WebP plus suitable fallback. Preserve originals outside the public bundle where appropriate.
- Responsive image widths **480, 768, 1,200, 1,600px**; explicit dimensions and correct aspect ratio reserve space. Do not send 4K images into 500px cards.
- Thumbnails target **≤120KB** each; lead media **≤200KB**; diagrams prefer compact SVG with accessible text or readable responsive image exports.
- Below-fold media lazy-loads. Do not lazy-load the actual LCP image; the hero itself is text-first.
- Fonts: self-host WOFF2; preload only the primary normal font. Subset appropriately while retaining Tolu’s name, punctuation, and symbols. Initial combined font transfer budget **≤100KB**; use permitted local fallbacks during loading.
- Video is user-initiated, no autoplay, `preload` equivalent of none, poster **≤100KB**, native controls, captions/transcript. A 30–60 second 720p MP4 should target **≤10MB**. Confirm host file limits before upload; use an approved external host if necessary, click-to-load, with an explicit external link fallback.
- Do not hotlink the GitHub brand image as a project screenshot. Do not publish real student, customer, account, banking, or confidential employer records.

### Performance budget and validation

Budgets are build acceptance ceilings; actual gzip and transfer measurements go in BUILD-REPORT.md:

| Item | Target |
|---|---:|
| First-load compressed JS on ordinary pages | 60–80KB ceiling; prefer materially less |
| First-load compressed CSS | ≤25KB |
| Compressed HTML per main route | ≤60KB |
| Initial non-video transfer, including initial visible media/fonts | ≤500KB |
| Core Web Vitals field targets, 75th percentile | LCP ≤2.5s; INP ≤200ms; CLS ≤0.05 |
| Internal lab targets | LCP ≤2.0s; CLS ≤0.02 |
| Mobile Lighthouse performance target | ≥95 on Home and a representative case study |

Check mobile cold loads with CPU/network throttling, a video-heavy hardware study, a screenshot-heavy software study, and navigation between routes. Treat Lighthouse as a diagnostic target; no “100 performance” claim in public copy unless measured and contextualized. Field Core Web Vitals require sufficient actual traffic and cannot be guaranteed from a local test. [Google’s Web Vitals definitions](https://web.dev/articles/vitals).

### SEO and metadata

- Home title: **Toluwani Oluwole | Software Engineer**.
- Work title: **Engineering Projects | Toluwani Oluwole**.
- Case-study title: **[Project] — [specific discipline] | Toluwani Oluwole**; shorten naturally where necessary.
- Unique descriptions approximately 140–160 characters, emphasizing actual project scope rather than stuffing every technology into each page.
- Canonical URLs based on the confirmed domain; consistent trailing-slash policy. Filters canonicalize to Work.
- Sitemap includes published pages only. Local preview is unpublished; optional preview mode is noindex; drafts and internal source material do not become public routes.
- Person/WebSite structured data with supplied identity and professional profiles; do not add unsupported job titles, awards or employer endorsements.
- Original **1,200×630** social preview using name, role, and the chosen typography/rule system. Project previews use owned artifacts. Creating these assets belongs to the later build.
- Real favicon/wordmark treatment replaces Vite/React stock assets. Preserve `/Resume.pdf` compatibility and meaningful old anchors.

### Accessibility target

Target **WCAG 2.2 AA**, with some stricter design choices: 44×44px control hit areas, immediate 3px focus rings, readable caption sizes, and no essential information conveyed only through color. AA’s general minimum target-size criterion is 24×24 CSS pixels with exceptions; 44px is our design choice, not a misstatement of that requirement. [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).

Future acceptance checks: semantic landmarks; one H1/page; logical heading order; skip link; keyboard-only use; visible unobscured focus; 200% text resize and 400% zoom/reflow; 320px viewport; screen-reader names/states and filter announcements; reduced-motion behavior; high-contrast/forced-colors usability; text equivalents for diagrams; meaningful image alternatives; video captions and transcript; accessible HTML résumé summary. No carousel, pointer-only interaction, hover-only evidence link, or inaccessible drag interaction is required.

---

## 10. Content gaps & risks

### 10.1 Confirmed facts override source conflicts

The BUILD prompt resolves education (Computer Engineering, no honors, GPA 3.6, expected December 2026), Dallas location/email/phone policy, six-role chronology, future-only LuMATH title, one SprintBudget project/stack, MangaMorph scope, completed Fall 2026 capstone and team boundaries, internal RecConnect presentation, absent AI output/hardware media, and qualitative STM32/rover outcomes. Use those facts even where older files disagree. Do not modify the PDFs; audit their discrepancies separately.

Remaining unknowns are handled by omission or bounded copy: no Samthafs current-site date/internship identity assumption; no RateMyApartments dates or invented team ownership; no final capstone protocol/state details; no unsupported cloud-migration delivery claim; no unpublished mentor outcomes.

### 10.2 Metrics and evidence rules

17 LuMATH responsibility areas, 100+ lab students and 20+ tutoring students per semester are résumé-documented. Do not turn them into measured business impact. Describe STM32 DMA ping-pong buffering as reducing CPU work and the rover as having completed its demo task, without percentages. No AI quality, translation accuracy, application user counts, latency or revenue figures are established. No fabricated test logs or dated test observations.

### Generic-content flags

- About’s “ownership/curiosity” language is generic unless tied to the documented amplifier-enable debugging or typed interface work. Build uses those examples.
- Contact’s broad opportunity language is intentionally functional; tie it to graduate software roles and Dallas, without a response-time or start-date promise.
- Samthafs and RateMyApartments have thinner evidence than featured projects. Keep their studies concise and flag missing dates/ownership internally; do not inflate them to match the capstone.
- Capability labels alone would be generic; every public capability links to a project.

### 10.3 Existing-site audit and implications

| Current source finding | Implication for replacement |
|---|---|
| App order: Hero → About → Skills → Projects → Contact; no experience section | Move work before long biography; introduce documented experience prominently |
| Internship-seeking language across Hero/About/Contact | Replace with graduation-oriented recruiting intent; confirm start date privately |
| Blue/purple gradients, blurred pulsing circles, TO avatar, bouncing chevron | Replace with the chosen type/grid/artifact system |
| All four project images use a remote GitHub-brand image | Obtain actual artifacts or honest diagrams; no brand-logo stand-ins |
| MangaMorph example.com demo; SprintBudgetPro yourhandle repo | Remove placeholder actions rather than leaving disabled controls |
| Skill percentages from 60–95% without assessment basis | Replace with grouped capabilities and evidence links |
| Only old `/Resume.pdf` linked; old PDF/DOCX carry factual inconsistencies | Require reviewed current PDFs and legacy-path compatibility |
| Contact displays phone and Dallas location | Use confirmed Dallas location/email/profiles; phone only in unchanged PDFs |
| EmailJS form depends on Vite environment values not supplied in tracked source | Do not assume form works; chosen contact design removes this service dependency |
| Error/success text shares green feedback styling | Do not carry this behavior forward; copy failure is distinct textual feedback |
| Header menu/chevron have limited accessible naming; smooth-scroll calls ignore motion preference | Use labeled native controls, unobscured focus, immediate anchors and reduced-motion rules |
| Index title “Vite + React”, Vite favicon, generic README | Supply actual metadata/favicon/documentation during the authorized build |
| Footer says React/TypeScript despite JSX source; copyright 2025 | Future footer reflects actual implementation and current year |
| Repository contains stock SVGs and two old résumés, but no project-photo/screenshot collection | Asset gathering is a real build dependency, not a reason to fabricate visuals |

### 10.4 Assets and delivery risks

The required About headshot was absent from the initial file inventory. Ask for the actual image, continue independent work, and report it if still absent. Never use a generated face, stock portrait or initials avatar. The three newest PDFs remain unedited even where their claims disagree with confirmed facts.

Optional project photo/audio/video/repo/demo fields render only when populated. Confidentiality, stale “Present” dates, unsupported claims and mistaking diagrams for original artifacts remain risks. Caption diagrams as architecture explanations; no fabricated proof. Check external links within environment limits and record actual responses, without claiming more verification than performed.

---

## 11. Authorized build plan (publishing excluded)

Run phases 1–5 locally, then prepare the handoff portion of phase 6. The user explicitly prohibits publishing or pushing.

### Phase 1 — Reconcile content and protect the inventory

Apply the confirmed BUILD facts and merged budgeting identity; record dates, roles, feature scope, evidence and publication permissions. Confirm all four existing project entries are represented. Select reviewed software/embedded/hybrid PDFs and retain PDFs unchanged and keep phone out of HTML. Lock an editorial project order with featured slots as defined here.

**Exit:** no unresolved factual marker is present in publishable copy; remaining nonessential assets have an honest fallback plan. Do not erase project records because their public copy needs work.

### Phase 2 — Establish the static foundation and visual system

After authorization, create a reviewed implementation branch and replace the site architecture with the chosen Astro/TypeScript static setup. Implement layout/type/color tokens, semantic page shell, header/footer, native mobile navigation and content records. Preserve the current repository history and source inventory; do not discard the old project data during restructuring.

**Exit:** Home/Work/About/Résumé/Contact shells render meaningful content without client runtime; no stock metadata, empty controls or hidden hero text. Verify 320px, 390px, 768px, 1,024px and 1,440px layouts.

### Phase 3 — Build the complete Work collection and case-study system

Implement all retained/new project records, category filtering, case-study template, software and hardware variants, evidence links and accessible diagrams. Build RecConnect and capstone first to test contrasting media; AI generator third; then STM32 and remaining retained/new projects. Enforce optional evidence links rather than placeholder actions.

**Exit:** every project in the reconciled inventory is accounted for; hardware pages are credible without code links; authorship/status/limitations appear consistently; no duplicated budgeting entry if identity was resolved as one project.

### Phase 4 — Finish recruiting content and real assets

Complete experience chronology, education/coursework, evidence-linked capabilities, résumé page, contact, captions/transcripts and only approved mentorship content. Process original assets, verify public profile/repository/demo destinations and remove outdated downloads. Add per-page metadata, social images, sitemap, favicon and old-path compatibility.

**Exit:** a recruiter can identify Tolu’s role, graduation context, relevant work, résumé and email quickly; an engineer can assess personal contribution and evidence without guessing.

### Phase 5 — Verify the actual experience

Run the appropriate build/type/content checks. Exercise keyboard navigation, disclosure controls, project filters/Back behavior, copy success/failure, PDF links, image failure behavior and videos. Inspect representative software and hardware pages at all target widths, text zoom and reduced motion. Check accessibility with automated tools plus manual keyboard/screen-reader review; test the performance budgets rather than claiming compliance from source alone.

**Exit:** complete usable navigation without JavaScript; no placeholders/dead links; no broken/fake evidence; no horizontal page overflow; readable diagrams on mobile; focus remains visible; budgets met or a documented, justified exception resolved.

### Phase 6 — Local review and handoff only

Record actual build/type/content/link checks, gzip/transfer measurements, any unavailable browser checks, inferred content and résumé discrepancies. Document Render settings and old-link behavior. Supply the local branch/copy and instructions for the user to commit/push. Do not publish, push, change DNS, or touch the existing Render service.

**Exit:** build and review artifacts are local and ready for the user; no deployment is claimed. Missing headshot, environment access failures and unverified live/browser behavior remain explicit.
