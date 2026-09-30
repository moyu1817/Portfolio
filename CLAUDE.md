# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal developer portfolio built from a Create React App template (React 18, react-router-dom v6, Tailwind CSS 3, GSAP for animations). It is being customized from the template into the owner's own portfolio.

## Commands

- `npm start` — dev server at http://localhost:3000 with hot reload
- `npm run build` — production build to `build/`
- `npm test` — Jest via react-scripts (watch mode). There are currently no test files; run a single test with `npm test -- <pattern>`.
- Linting runs through CRA's built-in ESLint (`react-app` config) during `start`/`build`; there is no separate lint script.

## Architecture

- **`src/Details.js` is the single source of content.** It imports every image asset and exports plain objects/arrays (`personalDetails`, `socialMediaUrl`, `workDetails`, `eduDetails`, `techStackDetails`, `projectDetails`, `contactDetails`). Pages and components import from it and only render. Content changes belong in `Details.js`, not in the page files.
- **Single scrolling page.** `src/App.js` routes `/` to `Pages/Home.js` and redirects every other path to `/`. `Home.js` renders the intro (`#about`) then `<About />` (about text, work with one-line `Summary`, education), `<Projects />` (`#projects`), `<Technologies />` (`#technologies`) and `<Contact />` (`#contact`); the files in `src/Pages/` are sections, not routes. The sticky header in `src/Components/Header.js` has a hardcoded `sections` list of anchor links, so a new section needs an `id` in its component, a place in `Home.js` and an entry in that list. `html { scroll-behavior: smooth }` in `index.css` animates the jumps; `scroll-mt-*` on sections keeps headings clear of the sticky header.
- **Tech stack** is data-driven: `techStackDetails` is an array of `{ heading, items: [{ name, img?, invert? }] }` sections rendered by `src/Pages/Technologies.js`. Icons come from `src/assets/techstack/` or icon CDNs via the `devicon()`, `iconifyLogo()` and `lobehub()` helpers in `Details.js`; items without `img` render as a letter tile; `invert: true` makes black logos white in dark mode.
- Optional fields render only when set: project `image`/`previewLink`/`previewLabel`/`githubLink`, work/education `Location`, and each `socialMediaUrl` entry (the header only renders twitter/linkdein/github).
- `About.js` maps over `workDetails`/`eduDetails` and `Projects.js` maps over `projectDetails` (rendered by `Components/Project.js`), so those lists can grow or shrink freely. Note the capitalized keys (`Position`, `Company`, …) for work/education entries and the misspelled `linkdein` key in `socialMediaUrl`, which `Header.js` depends on.
- **Assets:** images imported in JS go in `src/assets/` (bundled by webpack). Files that are linked by URL — e.g. the resume at `public/MoeYu_CV.pdf`, referenced as `personalDetails.resume = "/MoeYu_CV.pdf"` — go in `public/`.
- **Styling:** Tailwind utilities plus a few custom classes defined with `@apply` in `src/index.css` (`max-width`, `section`, `bg-accent`, `text-accent`, `text-content`). The accent is a teal → cyan → sky gradient: `bg-accent`/`text-accent` define it, so change them there to restyle the whole site. Custom colors (`dark-heading`, `light-content`, `dark-card`, etc.) and the Poppins font are in `tailwind.config.js`. Dark mode uses Tailwind's `class` strategy (`darkMode: "class"`): an inline script in `public/index.html` adds `dark` to `<html>` before render (saved `localStorage.theme`, else the OS setting), and `Components/ThemeToggle.js` (sun/moon button in the header) flips it and saves the choice. `public/index.html` must stay in Tailwind's `content` because `<body>` carries the page background classes.
- **Tailwind gotchas (v3.0.24):** opacity modifiers must be on the default scale (`/10`, `/20`, `/30`… — `/15` fails to compile). `public/index.html` is in Tailwind's `content` because `<body>` carries the page background classes.
- **Experience/education timeline:** `About.js` wraps entries in `<ol className="timeline">` (vertical gradient line via `.timeline::before` in `index.css`); each `Components/Work.js` renders an `<li>` with a gradient dot positioned on that line.
- **Contact** (`Pages/Contact.js`) is built from `contactDetails`: a centered heading (its last word gets the gradient) and subheading, a gradient-bordered email panel with "Send an Email" (mailto) and "Copy Email" (clipboard) buttons, and optional phone/location/availability tiles. Social links and the resume are deliberately *not* repeated there — they live in the header and the intro. Brand icons for the header are in `Components/SocialIcons.js`.
- **Animations:** `Home.js` uses a GSAP timeline on refs in a `useEffect` to slide in the heading lines and profile image. Under the name, `Components/RoleTyper.js` types out each entry of `personalDetails.roles` in a loop (cursor style `.type-cursor` in `index.css`); with OS reduced motion it shows all roles joined by `·` instead. The sentence below it is `personalDetails.intro`.
- **Deployment:** `public/_redirects` (`/* /index.html 200`) is a Netlify SPA fallback so client-side routes work on refresh.
