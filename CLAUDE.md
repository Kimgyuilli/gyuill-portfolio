# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

IT Developer Portfolio Template - Modern React-based portfolio website with light/dark theme support. Built with Vite, TypeScript, and CSS Modules.

Figma design: https://www.figma.com/design/ZFMZQOJ7tg4hAfIjpbL2X7/IT-Developer-Portfolio-Template

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start dev server (port 3000, auto-opens browser)
- `npm run build` - Build for production (outputs to `build/`)
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Technology Stack

- **React 18.3.1** with TypeScript
- **Vite 6.3.5** with SWC plugin
- **CSS Modules** for component styling
- **Framer Motion** for animations
- **next-themes** for theme management
- **Lucide React** for icons

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navigation
│   ├── sections/      # Hero, Skills, Projects, Achievements, Experience, Blog, Contact
│   └── common/        # ProjectCard, ProjectModal, SkillCard, ExperienceItem, AchievementCard,
│                      # BlogCard, ContactInfoItem, SocialLink, FadeInSection, ImageWithFallback
├── contexts/          # ThemeContext (next-themes)
├── data/              # projects, skills, experiences, achievements, blog, contact, hero
├── types/             # TypeScript definitions
├── constants/         # navigation items, project categories
├── lib/               # utils (cn helper)
└── styles/            # globals.css (CSS variables, reset, scrollbar, utility classes)
```

## Application Architecture

- Single-page application, all sections rendered in `App.tsx`
- Section order: Navigation → Hero → Skills → Projects → Achievements → Experience → Blog → Contact
- Theme management via `ThemeProvider` wrapping the entire app
- All content data separated in `data/` folder for easy customization
- Project detail modal triggered by clicking project cards

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

**Sections**: Each has unique ID for navigation, centered content with max-width containers

**Common Components**: Presentation-focused, accept typed props from data files. ProjectModal displays detailed project information.

**Data Pattern**: All content in `data/` files imported by section components

**Navigation**: Scroll position detection with zoom compensation (0.9x), bottom detection for last section

## Attributions

Includes components from shadcn/ui (MIT license) and photos from Unsplash.
