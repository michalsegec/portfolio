# Michal Segeč: portfolio

My personal portfolio site (in Czech). I'm a junior frontend developer building fast, accessible websites for Czech businesses and agencies.

**Live:** https://michalsegec.vercel.app. PageSpeed (21 Nov 2026): mobile 99/100/100/100, desktop 100/100/100/100.

## What's inside

- **One motion moment with GSAP:** the hero shows a grey wireframe "template", and a blue line wipes it away to reveal a real finished site. It plays once, respects `prefers-reduced-motion` (via `gsap.matchMedia`), and never stays stuck if JavaScript is off (`<noscript>` rule). See `src/components/Showcase.tsx`.
- **Case study** of [Kořínek Renovace](https://github.com/michalsegec/korinek-renovace), with screenshots taken from the live site by a small Puppeteer script.
- **Security headers** with an enforced Content-Security-Policy.

## Design decisions

- The web's own colours: neutral screen grey, ink, and classic hyperlink blue as the only accent.
- One type family (Hanken Grotesk) with a large, tight headline.
- No other animation, no card grids, no decoration that doesn't carry information.

## Tech

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, GSAP 3 + `@gsap/react`.

## Run it locally

```bash
npm install
npm run dev
```
