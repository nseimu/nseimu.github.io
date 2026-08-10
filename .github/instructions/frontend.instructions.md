---
applyTo: "**/{index.html,src/input.css,tailwind.config.js}"
description: "Use when editing the static frontend, Tailwind source styles, or Tailwind config in this repository."
---

# Frontend Scope Instructions

## Files and Sources of Truth
- Treat [index.html](index.html) as the canonical content and layout file.
- Treat [src/input.css](src/input.css) as the canonical Tailwind and custom CSS source.
- Never edit [index.css](index.css) directly because it is generated output.

## Tailwind Workflow
- After any styling or utility-class change in [index.html](index.html) or [src/input.css](src/input.css), run npm run build.
- If new markup files are introduced, update the content list in [tailwind.config.js](tailwind.config.js) so Tailwind can detect used utilities.

## Content and Metadata Safety
- Preserve German copy unless the task explicitly requests text changes.
- Preserve existing SEO and structured data in [index.html](index.html): meta description, Open Graph tags, and JSON-LD block.
- Keep existing image paths, responsive srcset entries, and font-face declarations intact unless explicitly requested.

## Accessibility and UI Integrity
- Maintain alt text and aria-label attributes during refactors.
- Keep icon links and contact actions functional (mailto and social links).

## Completion Checks
1. npm run build succeeds.
2. No unintended changes in meta tags, JSON-LD, fonts, or image source sets.
3. Visual layout remains responsive for mobile and desktop.
