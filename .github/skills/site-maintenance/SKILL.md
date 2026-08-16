---
name: site-maintenance
description: "Use when maintaining this static site: content updates in index.html, style updates in src/input.css, image asset checks, Tailwind rebuild, and pre-release verification."
---

# Site Maintenance

## Purpose
Standardized workflow for recurring maintenance on this static website.

## Primary References
- Project overview and commands: [README.md](README.md)
- Core agent rules: [AGENTS.md](AGENTS.md)
- Frontend file rules: [.github/instructions/frontend.instructions.md](.github/instructions/frontend.instructions.md)

## Use This Skill For
- Content changes in [index.html](index.html)
- Style adjustments in [src/input.css](src/input.css)
- Tailwind configuration changes in [tailwind.config.js](tailwind.config.js)
- Preparing safe, small release changes

## Guardrails
- Never edit [index.css](index.css) directly; it is generated build output.
- Only change German content and SEO metadata when requested.
- Do not unintentionally alter existing image paths, `srcset` variants, fonts, or JSON-LD.

## Workflow
1. Clarify scope
- Identify the affected files and expected results.
- Limit changes to the smallest necessary delta.

2. Implement the change
- Update content/layout in [index.html](index.html).
- Update styles in [src/input.css](src/input.css).
- If new markup files are added, extend the `content` list in [tailwind.config.js](tailwind.config.js).

3. Build and quick validation
- Run `npm run build`.
- Optionally check locally with `npx http-server ./`.

4. Integrity checks
- Confirm that meta description, OG image, and JSON-LD are still present in [index.html](index.html).
- Confirm that alt text and `aria-label` attributes are still present.
- Confirm that image and font references are still valid.

5. Result report
- Briefly summarize changed files, build status, and open risks.
- If anything could not be verified, mark it explicitly as NOT VERIFIED.

## Output Format
Use this compact format in the result:

Maintenance Result
- Scope: ...
- Build: PASS or FAIL
- Integrity checks: PASS or FAIL
- Risks: none or a short list
- Next steps: 1-2 concrete actions
