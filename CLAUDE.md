# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IT Developer Portfolio Template - A modern React-based portfolio website template with a dark theme, built using Vite, TypeScript, and Tailwind CSS. The original Figma design is available at https://www.figma.com/design/ZFMZQOJ7tg4hAfIjpbL2X7/IT-Developer-Portfolio-Template.

## Development Commands

### Install dependencies
```bash
npm i
```

### Start development server
```bash
npm run dev
```
Development server runs on port 3000 and opens automatically in browser.

### Build for production
```bash
npm run build
```
Build output goes to the `build` directory (configured in vite.config.ts).

## Architecture

### Technology Stack
- **React 18.3.1** with TypeScript
- **Vite 6.3.5** for build tooling with SWC plugin for fast compilation
- **Tailwind CSS v4** for styling
- **Radix UI** components for accessible, unstyled UI primitives
- **Lucide React** for icons

### Application Structure

Single-page application with a clean, modular component hierarchy:
- `App.tsx` - Root component that renders all sections sequentially
- `main.tsx` - React app entry point
- Portfolio sections rendered in order: Navigation → Hero → About → Skills → Projects → Experience → Contact

### Component Organization

```
src/
├── components/
│   ├── layout/           # Layout components (Navigation)
│   ├── sections/         # Page sections (Hero, About, Skills, Projects, Experience, Contact)
│   └── common/           # Reusable components (ProjectCard, SkillCard, ExperienceItem, etc.)
├── data/                 # Data definitions (projects, skills, experiences, contact)
├── types/                # TypeScript type definitions
├── constants/            # App constants (navigation items, etc.)
├── lib/                  # Utility functions (cn helper, etc.)
└── styles/               # Global styles and CSS variables
```

**Data Layer**: All portfolio content (projects, skills, experiences) is separated into the `data/` folder for easy customization.

**Note**: This project does not include shadcn/ui components by default. If you need UI components, install them via `npx shadcn@latest add [component]`.

### Styling System

Uses Tailwind CSS v4 with custom design tokens in `src/styles/globals.css`:
- Color palette: Emerald (primary accent), Slate (backgrounds/text), Blue (secondary accent)
- Custom CSS variables for colors, spacing, typography, and dark mode
- Design system includes light/dark theme support via `.dark` class
- Base typography configured for h1-h4, p, label, button, input elements

### Path Aliases

The project uses Vite path aliasing configured in `vite.config.ts`:
- `@/` maps to `./src/`
- All Radix UI and other dependencies have explicit version-based aliases

### Component Patterns

Components use functional React with hooks. The portfolio follows a single-page layout:

**Section Components** (`src/components/sections/`):
- Each has its own ID for anchor navigation
- Uses consistent spacing (py-20 padding)
- Centers content with max-width containers (max-w-7xl, max-w-4xl, etc.)
- Applies dark theme styling (slate-950 backgrounds, emerald-400 accents)
- Imports data from `data/` folder and renders using common components

**Common Components** (`src/components/common/`):
- Reusable, presentation-focused components
- Accept typed props for data rendering
- Examples: `ProjectCard`, `SkillCard`, `ExperienceItem`, `ContactInfoItem`, `SocialLink`

**Data Pattern**: All section data is stored in `data/` files and imported into section components, making content updates easy without touching component logic.

## Attributions

This project includes components from shadcn/ui (MIT license) and photos from Unsplash.
