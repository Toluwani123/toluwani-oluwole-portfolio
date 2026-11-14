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
| Branch | `deploy/render-portfolio` |
| Root directory | Repository root, if pushing this checkout as the repo |

Astro uses `output: 'static'` and emits individual HTML files. Do not retain an old SPA `/* → /index.html` rewrite: it masks actual 404s. The generated `dist/404.html` supplies the error page.

## Switch the existing Render service to the new portfolio

The supplied `toluwanioluwole ・ Static Site ・ Render Dashboard.pdf` shows these settings (pages 2–3). The PDF is a snapshot, not a live account inspection.

| Setting | In your PDF | Set / keep |
| --- | --- | --- |
| Service | `toluwanioluwole`, Static Site | Keep this existing service |
| Repository | `Toluwani123/toluwani-oluwole-portfolio` | Keep |
| Branch | `master` | Change to `deploy/render-portfolio` |
| Root Directory | Blank | Keep blank; the application is at the repository root |
| Build Command | `npm install; npm run build` | Change to `npm ci && npm run build` |
| Publish Directory | `dist` | Keep `dist` |
| Build Filters | No included or ignored paths | Keep |
| Auto-Deploy | On Commit | Keep for automatic updates from the new branch |
| Pull Request Previews | Off | Keep; enabling previews is unnecessary |

The local folder name `toluwani-oluwole-portfolio-build` is only the checkout on this computer. It is not a repository subdirectory to enter into Render's Root Directory.

### 1. Push the new branch yourself

The branch is already created locally from the finished build, including the supplied headshot. Push from the build copy:

```sh
cd /Users/chiomaibeemmanuel/Desktop/portfolio/toluwani-oluwole-portfolio-build
git push -u origin deploy/render-portfolio
```

This publishes the branch to the same repository your existing Render service uses. The branch will become selectable in Render after it is pushed; refresh the dashboard if necessary. The original `master` branch and original checkout were not modified. No push has been performed by the assistant.

### 2. Edit the existing service

Open [your existing service settings](https://dashboard.render.com/static/srv-d2mgk9ggjchc73ckbbbg/settings). Under Build & Deploy, save the Branch and Build Command above. Keep the repository, blank Root Directory and `dist`.

In Environment, set `NODE_VERSION=22.20.0` to match the tested build. The repository already includes `.node-version` with that value. An existing dashboard `NODE_VERSION` overrides this file, so update it if it specifies a different version. Environment settings were not visible in your PDF. No API keys or EmailJS variables are required by the new portfolio. If `PORTFOLIO_PREVIEW` is set, remove it or set it to `false` for the public site.

Check Redirects/Rewrites separately; they were not shown in the PDF. Remove an old `/*` → `/index.html` **Rewrite** if one exists. Astro emits real pages and `404.html`; it does not need the previous React SPA catch-all. The legacy PDF and fragment handling below are already built in.

### 3. Deploy the new branch

After saving the settings, choose **Manual Deploy → Clear build cache & deploy** for the initial framework change. This builds the latest pushed commit from the selected branch without old build-cache artifacts. If changing settings already starts a deploy, wait for it to finish before starting another.

After a successful deploy, inspect `https://toluwanioluwole.onrender.com`, `/work/`, `/about/`, `/resume/` and `/Resume.pdf`. Check a direct case-study URL and a missing URL as well. Later pushes to `deploy/render-portfolio` will trigger deployments while Auto-Deploy remains On Commit. No new Render project, service name or DNS change is needed to retain this existing service's URL.

References: [Render static Astro deployment](https://render.com/docs/deploy-astro), [manual deploy options](https://render.com/docs/deploys#manual-deploys), [Node version precedence](https://render.com/docs/node-version), [redirect/rewrite behavior](https://render.com/docs/redirects-rewrites).

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

Review and push this copy's `deploy/render-portfolio` branch yourself. It contains the completed site and deployment instructions; `build/signal-path-portfolio` remains available as the reviewed build branch. Exclude `node_modules`, `dist`, `.astro` and local environment files. The original checkout at `../toluwani-oluwole-portfolio` remains unchanged. This copy retains the same `origin` URL and repository history; use the copy as the checkout from which you commit/push. The completed local source is committed on the build branch for your review. No push has been made.

Before publishing, correct the source résumé PDFs if desired. The supplied headshot is included. See `BUILD-REPORT.md` for verification and exact remaining limitations. To change the domain, update `astro.config.mjs`, `src/pages/sitemap.xml.ts` and `public/robots.txt` together.
