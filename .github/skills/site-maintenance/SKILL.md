---
name: site-maintenance
description: "Use when maintaining this static site: content updates in index.html, style updates in src/input.css, image asset checks, Tailwind rebuild, and pre-release verification."
---

# Site Maintenance

## Purpose
Standardisierter Workflow fuer wiederkehrende Wartung an dieser statischen Website.

## Primary References
- Projektueberblick und Kommandos: [README.md](README.md)
- Agent-Grundregeln: [AGENTS.md](AGENTS.md)
- Frontend-Dateiregeln: [.github/instructions/frontend.instructions.md](.github/instructions/frontend.instructions.md)

## Use This Skill For
- Inhaltsaenderungen in [index.html](index.html)
- Style-Anpassungen in [src/input.css](src/input.css)
- Tailwind-Konfigurationsaenderungen in [tailwind.config.js](tailwind.config.js)
- Vorbereitung von sicheren, kleinen Release-Aenderungen

## Guardrails
- Nie direkt [index.css](index.css) bearbeiten (Build-Output).
- Deutsche Inhalte und SEO-Metadaten nur aendern, wenn angefordert.
- Bestehende Bildpfade, srcset-Varianten, Fonts und JSON-LD nicht unbeabsichtigt veraendern.

## Workflow
1. Scope klaeren
- Identifiziere betroffene Dateien und erwarte Resultate.
- Begrenze Aenderungen auf das kleinste notwendige Delta.

2. Aenderung umsetzen
- Content/Layout in [index.html](index.html) anpassen.
- Styles in [src/input.css](src/input.css) anpassen.
- Falls neue Markup-Dateien dazukommen: content in [tailwind.config.js](tailwind.config.js) erweitern.

3. Build und Schnellvalidierung
- npm run build ausfuehren.
- Optional lokal pruefen: npx http-server ./

4. Integritaetschecks
- Meta description, OG image und JSON-LD in [index.html](index.html) vorhanden.
- Alt-Texte und aria-labels weiterhin vorhanden.
- Bild- und Font-Referenzen weiterhin gueltig.

5. Ergebnisbericht
- Kurz zusammenfassen: geaenderte Dateien, Build-Status, offene Risiken.
- Falls etwas nicht pruefbar war: explizit als NICHT GEPRUEFT markieren.

## Output Format
Nutze dieses kompakte Format im Ergebnis:

Maintenance Ergebnis
- Scope: ...
- Build: PASS oder FAIL
- Integritaetschecks: PASS oder FAIL
- Risiken: keine oder kurze Liste
- Naechste Schritte: 1-2 konkrete Aktionen
