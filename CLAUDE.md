# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

김규일's personal developer portfolio — a React SPA with light/dark theme, project detail pages, an
RSS-synced blog section, and a client-side generated resume PDF. Built with Vite, TypeScript, and
CSS Modules.

Originally derived from an "IT Developer Portfolio Template"
([Figma](https://www.figma.com/design/ZFMZQOJ7tg4hAfIjpbL2X7/IT-Developer-Portfolio-Template)), now
heavily customized. Deployed as a static build embedded into the `Kimgyuilli/blog` repository under
`/portfolio/`.

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start dev server (port 3000, auto-opens browser)
- `npm run build` - Generate CSS Module types (`tcm src`), then build to `build/`
- `npm run lint` / `npm run lint:fix` - ESLint (`--max-warnings=0`)
- `npm run format` / `npm run format:check` - Prettier
- `npm run generate:css-types` - Regenerate `*.module.css.d.ts`. **Run after adding or changing a
  `.module.css` file**, otherwise TypeScript won't see the new class names.
- `npm run update-blog` - Regenerate `src/data/blog.ts` from the blog RSS feed (usually run by CI)

## Technology Stack

- **React 18.3.1** with TypeScript 5.9
- **Vite 6.3.5** with SWC plugin
- **CSS Modules** for component styling, with `typed-css-modules` for type generation
- **Framer Motion** — used in `FadeInSection` and `MediaCarousel`
- **next-themes** for theme management
- **Lucide React** + **react-icons** for icons
- **react-markdown** (+ `remark-gfm`, `remark-cjk-friendly`) for project detail content
- **@react-pdf/renderer** for the resume PDF
- **@emailjs/browser** for the contact form
- **react-ga4** + **web-vitals** for analytics

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navigation
│   ├── sections/      # Hero (Left/Center/RightColumn), Skills, Projects, Achievements,
│   │                  # Experience, Blog, Contact (+ ContactForm, useContactForm)
│   ├── common/        # ProjectCard, ProjectDetail/, SkillCard, ExperienceItem, AchievementCard,
│   │                  # BlogCard, ContactInfoItem, SocialLink, MediaCarousel/, TagList,
│   │                  # ExpandableSection, FadeInSection, ImageWithFallback
│   └── pdf/           # ResumePdf, PdfDownloadButton, fonts, styles, sections/
├── contexts/          # ThemeContext (next-themes)
├── data/              # hero, skills, experiences, achievements, blog, contact, projects/
├── hooks/             # useProjectRoute (history-based routing)
├── types/             # TypeScript definitions
├── constants/         # navigation, projectCategories, skillIcons, contactIcons, achievementIcons
├── lib/               # utils (cn helper), analytics (GA4 + Web Vitals)
├── utils/             # iconMapper (mapWithIcons: injects icon components into plain data)
├── assets/images/     # profile, project diagrams/screenshots, skill logos
└── styles/            # globals.css (CSS variables, reset, scrollbar, utility classes)
```

## Application Architecture

- `App.tsx` branches on `useProjectRoute()`: either a **project detail page** or the landing sections
- Landing section order: Navigation → Hero → Skills → Projects → Achievements → Experience → Blog → Contact
- Theme management via `ThemeProvider` wrapping the entire app
- The Projects filter lives in `App.tsx` state so it survives a round trip to a detail page
- All content data lives in `data/`; icons are injected at render time via `mapWithIcons`

### Routing (`hooks/useProjectRoute.ts`)

No router library — the History API is used directly.

- Canonical URL is `{BASE_URL}projects/<slug>/`; the legacy `?project=<slug>` query form still resolves
- `popstate` is handled for back/forward navigation
- `goHome(sectionId)` returns to the landing page and scrolls to a section **after** it mounts
- `vite.config.ts` has an `emit-project-pages` plugin that writes a real `index.html` for every project
  slug at build time, so direct access and refresh work on a plain static host with no SPA fallback.
  It parses `slug:` out of each `src/data/projects/*.ts` file and **throws if none are found** — keep
  `slug: '...'` on its own line with single quotes.
- Production `base` is `/portfolio/` (override with `VITE_BASE_PATH`)

## Data Layer

- `data/projects/` — one file per project, aggregated in `index.ts`. A project is either:
  - **markdown-based**: `markdownContent` + `markdownImages` (a map of markdown image keys to imported
    asset paths), rendered by `ProjectDetail/MarkdownContent.tsx` — preferred for the big projects
  - **field-based**: `detailedDescription` / `features` / `challenges` / `outcome` — the fallback layout
- Projects are filtered by `projectType` (Main / Side / Learning) × `categories` (Frontend / Backend /
  Mobile / AI); the default filter is `{ type: 'Main', category: 'All' }`
- **`data/blog.ts` is generated** by `scripts/update-blog.js` from the blog RSS feed. Do not hand-edit;
  CI overwrites it.

## Resume PDF (`components/pdf/`)

`PdfDownloadButton` dynamically imports `@react-pdf/renderer` and `ResumePdf` on click (keeps them out
of the main bundle) and downloads `김규일_이력서.pdf`. Sections live in `pdf/sections/`. `RESUME_DRAFT.md`
at the repo root is the source text; `PORTFOLIO_DATA.md` is the older content-entry template.

## Styling System

- CSS Modules (`styles.module.css`) for component-scoped styles
- `globals.css` contains: CSS Reset, theme variables, custom scrollbar, 9 utility classes
- Utility classes: `inline-block`, `bg-gray-100`, `text-center`, `align-middle`, `flex`, `items-center`, `justify-center`, `w-full`, `h-full`
- Color palette: Emerald (primary), Slate (backgrounds/text), Blue (secondary)
- Theme switching via `.dark` class managed by next-themes
- Global zoom: 0.9 (90% scale)
- Custom scrollbar styling for light/dark themes
- Path alias: `@/` → `./src/`

### CSS Variables

**IMPORTANT**: Always use CSS variables from `globals.css` instead of hardcoded values.

- **Spacing**: `--spacing-xs` through `--spacing-4xl` for padding, margin, gap
- **Colors**: Theme-aware variables (text, background, border, accent) that auto-switch in light/dark mode
- **Sizes**: Component-specific size variables (profile, icons, timeline, etc.)
- All variables defined in `:root` and `.dark` sections in `globals.css`
- When using vendor prefixes (e.g., `-webkit-line-clamp`), include standard property for compatibility

## Component Patterns

**Sections**: Each has a unique ID for navigation, centered content with max-width containers

**Common Components**: Presentation-focused, accept typed props from data files. `ProjectDetail/` is a
full page (not a modal): `index.tsx` (page shell) + `MarkdownContent` / `ProjectDetails` /
`TechStackSection`, each with its own CSS Module.

**Data Pattern**: All content in `data/` files imported by section components; icon components are
attached via `utils/iconMapper.ts` rather than stored in the data files

**Navigation**: Scroll position detection with zoom compensation (0.9x), bottom detection for the last
section; collapses to a home link on project detail pages

## Environment Variables

Optional — each feature silently no-ops when its variable is missing. Local values go in `.env.local`,
CI values in GitHub Actions secrets.

- `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` — contact form
- `VITE_GA_MEASUREMENT_ID` — GA4 + Web Vitals reporting
- `VITE_BASE_PATH` — overrides the production base path (`/portfolio/`)

## CI/CD (`.github/workflows/`)

- **`deploy.yml`** — on push/PR to `main`: build; on push, copy `build/` into `Kimgyuilli/blog` at
  `public/portfolio/` and commit there (requires the `BLOG_REPO_TOKEN` secret; skipped with a warning
  if absent). There is no GitHub Pages deploy.
- **`update-blog.yml`** — daily at 00:00 UTC (or manual): regenerate `src/data/blog.ts` from RSS,
  commit it, then rebuild and re-sync to the blog repo only if it changed.

## Attributions

Includes components from shadcn/ui (MIT license) and photos from Unsplash.
