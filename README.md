# Executive Assistant — One-Page Portfolio

A premium, conversion-focused one-page site for an Executive Assistant / Email &
Calendar Management specialist. Built with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS, shadcn/ui-style components, and Framer Motion.

---

## 1. Requirements

- Node.js `>= 18.18` (Node 20 recommended — matches the Dockerfile)
- npm (or swap for pnpm/yarn if you prefer; no lockfile is committed)

## 2. Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3. Environment variables

Copy the example file and fill in your own details:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL (no trailing slash). Used for canonical tags, sitemap, robots.txt, JSON-LD. |
| `NEXT_PUBLIC_FULL_NAME` | Your name, shown in the navbar, footer, and metadata. |
| `NEXT_PUBLIC_EMAIL` | Contact email. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | International format, digits only (e.g. `15551234567`). |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly (or booking tool) link. |
| `NEXT_PUBLIC_LINKEDIN_URL` | Your LinkedIn profile URL. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (optional). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console HTML-tag verification code (optional). |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID (optional). |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID (optional). |

All analytics providers are inactive until their ID is set — nothing loads by
default, so there's no cookie/consent surprise out of the box.

If you don't set `.env`, the site falls back to placeholder values defined in
`config/site.ts` so it still builds and runs.

## 4. Deploying on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project
   settings (Settings → Environment Variables).
4. Deploy. Vercel auto-detects Next.js — no build command changes needed.

Or, from the CLI:

```bash
npm i -g vercel
vercel
```

## 5. Deploying with Docker

The Dockerfile uses Next.js's `standalone` output for a minimal production
image.

```bash
# Build and run with Docker directly
docker build -t executive-assistant-landing .
docker run -p 3000:3000 --env-file .env executive-assistant-landing

# Or with Docker Compose
docker compose up --build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 6. Project structure

```
app/                  # App Router: layout, page, sitemap, robots, manifest
components/
  sections/           # One file per page section (Hero, Services, FAQ, ...)
  shared/              # Cross-cutting pieces (nav helpers, theme, analytics)
  ui/                  # Small reusable primitives (Button, Card, Badge, Accordion)
config/
  site.ts              # Name, contact info, URLs, analytics IDs
  content.ts            # Every headline, paragraph, list, and FAQ answer
hooks/                # useScrollProgress, useScrolled
lib/                  # cn() class helper, WhatsApp/mailto link builders
types/                # Shared TypeScript interfaces
public/               # Favicon, icons, OG image
```

## 7. Customization

### Change the copy
Everything visible on the page — headline, subheadline, service lists,
benefits, process steps, FAQ questions/answers, footer text — lives in
**`config/content.ts`**. Edit the strings there; no component files need to
change.

### Change contact details / links
Edit **`config/site.ts`** (or the matching `.env` variables). This covers
name, email, WhatsApp number, Calendly URL, LinkedIn, and analytics IDs.

### Change colors
Open **`tailwind.config.ts`**. The palette is defined under `theme.extend.colors`:
- `accent` — the brass/gold accent (50–900 shades)
- `navy` — the dark, high-contrast sections (hero glow, final CTA, footer badge)
- CSS variables in **`app/globals.css`** (`--background`, `--foreground`,
  `--accent`, etc.) control the light/dark theme values used by shadcn-style
  components.

### Change typography
Fonts are loaded via `next/font/google` in **`app/layout.tsx`**:
- `--font-display` → Space Grotesk (headlines)
- `--font-sans` → Inter (body text)
- `--font-mono` → IBM Plex Mono (timestamps, labels, the hero calendar widget)

Swap any of the three imports for a different Google Font and update the
CSS variable name if desired — Tailwind picks it up automatically via
`fontFamily` in `tailwind.config.ts`.

### Replace icons / OG image
Everything in `public/` (favicon, `icons/icon-192.png`, `icons/icon-512.png`,
`icons/apple-touch-icon.png`, `og-image.png`) is a placeholder generated to
match the site's palette. Swap them for your own branded assets, keeping the
same filenames and dimensions (192×192, 512×512, 180×180, 1200×630).

## 8. SEO & structured data

- Full Metadata API config in `app/layout.tsx` and `app/page.tsx` (title
  template, description, OpenGraph, Twitter Card, canonical, robots).
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` / `robots.txt`
  dynamically from `config/site.ts`.
- `app/manifest.ts` generates the PWA manifest.
- `components/shared/structured-data.tsx` injects JSON-LD for `Person`,
  `ProfessionalService`, `WebSite`, `BreadcrumbList`, and `FAQPage`.

## 9. Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) throughout.
- Visible focus rings (`:focus-visible`) on every interactive element.
- All icon-only buttons have `aria-label`s.
- Respects `prefers-reduced-motion` (see `app/globals.css` and
  `components/shared/cursor-spotlight.tsx`).
- Color contrast targets WCAG AA in both light and dark mode.

## 10. Code quality tooling

- **ESLint** — `npm run lint` / `npm run lint:fix`
- **Prettier** (with `prettier-plugin-tailwindcss` for class sorting) —
  `npm run format` / `npm run format:check`
- **TypeScript strict mode** — `npm run type-check`
- **Husky + lint-staged** — runs ESLint/Prettier on staged files before every
  commit. Husky installs itself automatically via the `prepare` script the
  first time you run `npm install`.

## 11. Performance notes

- Fonts are self-hosted via `next/font` (no layout shift, no external
  network request at runtime).
- All animations are GPU-friendly (`transform`/`opacity`) and gated by
  `prefers-reduced-motion`.
- Images use Next's built-in `<Image>` optimization pipeline where applicable
  (AVIF/WebP, see `next.config.ts`).
- Security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy,
  Referrer-Policy) are set globally in `next.config.ts`.

Run a local Lighthouse pass after `npm run build && npm run start` to verify
scores in your own environment — real-world scores depend on your hosting,
CDN, and the real analytics/tracking scripts you enable.

---

Built for founders and executives who'd rather grow their business than
manage their inbox.
