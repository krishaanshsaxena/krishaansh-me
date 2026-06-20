# Minimalist Personal Website and Digital Garden for Krishaansh Saxena

Create a beautiful, minimalist digital garden website and "Now" page reflecting Krishaansh's journey, interests, goals, and thoughts. Built using Next.js 15, TypeScript, Tailwind CSS, and optimized for speed, responsiveness, and dark mode.

## User Review Required

- **Design Philosophy**: We are going with a highly refined, text-centric design inspired by Derek Sivers and Simon Willison, featuring a clean typographic layout with deep-blue accent colors (`#2563eb` / `#60a5fa`).
- **Interactive Features**: Added a system/manual theme toggle (light/dark mode) that seamlessly blends with the minimalist theme.
- **Navigation**: Anchor links to major sections (`#now`, `#learning`, `#building`, `#reading`, `#goals`, `#quotes`, `#links`) with smooth scrolling and subtle highlighting.

## Open Questions

None at this time. All requirements are clear.

## Proposed Changes

### Configuration & Base Layout

#### [MODIFY] [layout.tsx](file:///c:/Krishaansh/Projects/krishaansh-digital%20garden/src/app/layout.tsx)
- Add custom SEO metadata, site title, and layout containers.
- Wrap pages in a theme provider or root CSS variable structure supporting smooth transitions.

#### [MODIFY] [globals.css](file:///c:/Krishaansh/Projects/krishaansh-digital%20garden/src/app/globals.css)
- Build a custom CSS configuration for a minimalist look: custom selection highlights, monospace styling, clean scrollbars, and fluid font utility classes.
- Ensure light and dark mode colors are crisp: pure white/dark gray background, ink/cream text, and blue accents.

### Pages & Components

#### [NEW] [ThemeToggle.tsx](file:///c:/Krishaansh/Projects/krishaansh-digital%20garden/src/components/ThemeToggle.tsx)
- An elegant client component to toggle between light and dark mode.
- Uses subtle icons and text transition.

#### [NEW] [Section.tsx](file:///c:/Krishaansh/Projects/krishaansh-digital%20garden/src/components/Section.tsx)
- Reusable wrapper component for sections, incorporating consistent styling, headers, and anchor targets.

#### [NEW] [Card.tsx](file:///c:/Krishaansh/Projects/krishaansh-digital%20garden/src/components/Card.tsx)
- A minimalist clean card component used for lists, building items, or reading lists.

#### [MODIFY] [page.tsx](file:///c:/Krishaansh/Projects/krishaansh-digital%20garden/src/app/page.tsx)
- Implement the page sections with all requested data:
  - Header: Name, Subtitle, Tagline
  - Introduction: B.Tech at KIIT University
  - Navigation Index: Now, Learning, Building, Reading, Goals, Quotes, Links
  - Now (Currently: Studying, Learning, Building, Working Towards)
  - Reading (Current Books, Books I Want to Read)
  - Goals (Technical, Career, Personal)
  - Quotes (elegant monospace blockquotes)
  - Links (GitHub, LinkedIn, Portfolio)
  - Footer (Credits, copyright, technology info)

## Verification Plan

### Automated Tests
- Run `npm run lint` to verify eslint rules.
- Run `npm run build` to verify there are no compilation or bundling errors in the Next.js app.

### Manual Verification
- Verify responsiveness on mobile screen resolutions.
- Verify dark/light mode toggling and system preferences.
- Verify clean loading speeds and correct metadata titles.
