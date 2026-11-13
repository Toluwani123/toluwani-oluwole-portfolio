# Render static-site handoff

Local build only. No Render settings, deployments, DNS, remote branches or live files were changed.

Use the existing **Static Site** service. Keep the current public URL:
`https://toluwanioluwole.onrender.com` (the canonical/sitemap origin).

| Setting | Value |
| --- | --- |
| Build command | `npm ci && npm run build` |
| Publish directory | `dist` |
| Node version | 22.20.0 (`.node-version`) or compatible >=22.12 |
| Start command / server adapter | None |
| Branch | The branch you decide to publish after review |
| Root directory | Repository root, if pushing this checkout as the repo |

Astro uses `output: 'static'` and emits individual HTML files. Do not retain an old SPA `/* → /index.html` rewrite: it masks actual 404s. The generated `dist/404.html` supplies the error page.

## Legacy PDF and anchors

The physical `public/Resume.pdf` is an unchanged copy of the newest software résumé. It builds to `dist/Resume.pdf`, so the old address serves the PDF directly. Render serves existing files before redirect rules. The primary download also lives at `/resumes/toluwani-oluwole-software.pdf`.

If you choose in a later change to remove the physical `/Resume.pdf` alias, add this Dashboard **Redirect** rule (301):

| Source | Destination | Action |
| --- | --- | --- |
| `/Resume.pdf` | `/resumes/toluwani-oluwole-software.pdf` | Redirect |

The file alias is included now, so that rule would not run while the file exists. Never rewrite PDF requests to HTML.

Home preserves `id="about"`, `id="skills"`, `id="projects"`, `id="contact"`. Existing `/#about`, `/#skills`, `/#projects`, `/#contact` links work through these elements. **Fragments are never sent to Render**; a server rule cannot inspect or match a hash. Do not create `/#...` source rules.

Optional compatibility for path-shaped URLs (the old site used hashes, so these are optional conveniences):

| Source | Destination | Action |
| --- | --- | --- |
| `/projects` | `/work/` | Redirect |
| `/skills` | `/#skills` | Redirect |
| `/work/sprintbudgetpro` | `/work/sprintbudget/` | Redirect |
| `/work/sprintbudgetpro/` | `/work/sprintbudget/` | Redirect |

Keep real `/about/` and `/contact/` pages. No catch-all redirect or rewrite is needed. Existing resources win over rules. Configure rules in the Render dashboard only when you publish; this build does not change the account.

References: [Render Astro static settings](https://render.com/docs/deploy-astro), [Render redirect matching and order](https://render.com/docs/redirects-rewrites).

## What to push

Review this copy's `build/signal-path-portfolio` branch, commit the source and `package-lock.json`, and push it yourself. Exclude `node_modules`, `dist`, `.astro` and local environment files. The original checkout at `../toluwani-oluwole-portfolio` remains unchanged. This copy retains the same `origin` URL and repository history; use the copy as the checkout from which you commit/push. The completed local source is committed on the build branch for your review. No push has been made.

Before publishing, correct the source résumé PDFs if desired and add the actual headshot. See `BUILD-REPORT.md` for verification and exact remaining limitations. To change the domain, update `astro.config.mjs`, `src/pages/sitemap.xml.ts` and `public/robots.txt` together.
