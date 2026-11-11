# Revault Website

The marketing site for Revault, which helps regulated finance, fintech, and crypto teams grow with marketing their compliance and partner teams will approve. It is for prospects in those teams and for search engines, so every page carries its own title, description, canonical tag, and structured data.

## How it works

The site is a static build with no framework. `build.mjs` reads the page data in `src/content/` and writes plain HTML to `dist/`, along with `sitemap.xml` and `robots.txt`.

| Path | What it holds |
| :--- | :--- |
| `site.config.mjs` | The production origin, the built languages, the form endpoint, and the calendar link |
| `src/content/` | Every page as data: `index.mjs` (home, 404), `solutions.mjs`, `services.mjs`, `company.mjs`, `legal.mjs` |
| `src/styles.css` | Design tokens and every component |
| `src/site.js` | Menu, header state, scroll reveal, pointer glow on cards, scroll progress, magnetic buttons, and the form guard |
| `src/logo.svg`, `src/wordmark.svg`, `src/logo-full.svg`, `src/logo-full-light.svg` | The mark, the Russo One wordmark as outlines, and the full lockup for light and dark surfaces |
| `build.mjs` | The generator, including SEO tags and JSON-LD |
| `serve.mjs` | Local preview with clean URLs |
| `src/i18n/` | Interface text per language: menu, footer, form, hero figure |
| `scripts/check-content.mjs` | Checks a translation against the English structure and the length limits |
| `scripts/center-icons.py` | Measures each icon's visible ink and writes `src/icon-viewboxes.json`, so icons sit centred in their tiles. Run it after adding an icon |

## Languages

English is built at the root, German under `/de/` and French under `/fr/`, with identical paths. A language needs two things: a folder `src/content/<language>/` holding the same five files as the English source, and `src/i18n/<language>.mjs` for the menu, footer, form and hero figure. Add its code to `locales` in `site.config.mjs` to build it.

Translated pages inherit their icons and pill colours from the English page at the same path, by position, so the structure of a translation has to match the English one. `node scripts/check-content.mjs de` checks that, along with every length limit, without building the site.

## Commands

```bash
npm install
npm run build
npm run dev
```

`npm run dev` builds and serves the site on http://localhost:4321.

## Before launch

`npm run build` prints a list of what is still unset. Today that list covers the production origin, the form endpoint, the calendar link, the German and French translations, the publication date of the research article, and the four pages held as drafts with `noindex` (security and data, privacy, terms, cookies).

## Brand

Bright Lavender `#aa7dce`, Dark Cyan `#498c8a`, Ink Black `#0d1321`, and Platinum `#f3f3f4`. Buttons use Lavender deepened to `#8a5abd` with white text, which reaches a contrast of 4.9 to 1. White on the brand Lavender itself only reaches 3.2 to 1, so marks that keep the brand Lavender carry Ink Black. Text links on light surfaces use Lavender darkened to `#6f3fa0`. Headings are set in Red Hat Display and body text in Red Hat Text, both self-hosted so no font request leaves the site.
