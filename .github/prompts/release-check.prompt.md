---
mode: agent
description: "Use when preparing a release or publish for this static site. Runs build and verifies metadata, assets, and deployment-critical files."
---

# Release Check Prompt

Run a compact pre-release check for this repository and return only a clear result report at the end.

## Goal
- Ensure that the site can be built.
- Ensure that critical metadata, asset, and deployment files are consistent.
- Surface risks early before publishing.

## Check Steps
1. Run `npm run build`.
2. Check whether [index.css](index.css) exists as build output and did not require manual editing.
3. Check in [index.html](index.html):
   - meta description is present
   - Open Graph image is present
   - JSON-LD Person block is present
4. Check references to key assets:
   - `/fonts/*.woff2`
   - `/img/*` for `src`, `srcset`, and `og:image`
5. Check that deployment-critical files exist:
   - `CNAME`
   - `site.webmanifest`
   - `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`
6. If possible, mention notable uncommitted changes that are relevant to the release.

## Result Format
Return the result in this format:

Release Check Result
- Build: PASS or FAIL
- Metadata: PASS or FAIL
- Assets and references: PASS or FAIL
- Deployment files: PASS or FAIL
- Working tree suitable for release: PASS or FAIL

Findings
- Short, prioritized list with specific file references.

Recommended Next Steps
1. ...
2. ...

## Rules
- Do not make content changes to German copy without an explicit request.
- Do not edit [index.css](index.css) directly.
- If something cannot be verified, mark it clearly as NOT VERIFIED and explain why.
