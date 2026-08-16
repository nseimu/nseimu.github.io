# AGENTS.md

Quick guide for AI coding agents in this repository.

## Project Profile
- Static single-page site (GitHub Pages) without a JavaScript build pipeline.
- Tailwind CSS is built from a single source file.
- Existing project documentation: [README.md](README.md)

## Quick Start
1. Install dependencies: `npm install`
2. Build CSS: `npm run build`
3. Check locally: `npx http-server ./`

## Source of Truth
- Content and structure: [index.html](index.html)
- Tailwind source: [src/input.css](src/input.css)
- Tailwind configuration: [tailwind.config.js](tailwind.config.js)
- Generated CSS artifact: [index.css](index.css)
- Formatting: [.prettierrc.json](.prettierrc.json)

## Working Rules for Agents
- Do not edit [index.css](index.css) directly. It is generated output produced by `npm run build`.
- After any styling change in [src/input.css](src/input.css) or [index.html](index.html), always run `npm run build`.
- Only add new HTML or template files when truly necessary. If you do, extend the `content` list in [tailwind.config.js](tailwind.config.js) so Tailwind detects the utilities.
- Preserve existing German content, SEO metadata, and JSON-LD in [index.html](index.html) unless the task explicitly requires content changes.
- The `.font-bold` class in [src/input.css](src/input.css) is intentionally mapped to Noto Serif Bold; do not remove it without a clear reason.

## Validation Before Completion
1. `npm run build` completes without errors.
2. The site loads locally via `npx http-server ./`
3. No unintended changes to image paths, font files, or meta tags.

## When in Doubt
- Consult [README.md](README.md) first.
- For recurring tasks, suggest an appropriate extension:
  - `.github/instructions/frontend.instructions.md` for file-specific frontend rules
  - `.github/prompts/release-check.prompt.md` for repeatable release checks
  - `.github/skills/site-maintenance/SKILL.md` for multi-step maintenance workflows
