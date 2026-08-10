# AGENTS.md

Kurzanleitung fuer AI-Coding-Agents in diesem Repository.

## Projektprofil
- Statische Single-Page-Site (GitHub Pages) ohne JS-Build-Pipeline.
- Tailwind CSS wird aus einer Quelldatei gebaut.
- Bestehende Projekt-Doku: [README.md](README.md)

## Schnellstart
1. Abhaengigkeiten installieren: npm install
2. CSS bauen: npm run build
3. Lokal pruefen: npx http-server ./

## Source of Truth
- Inhalt und Struktur: [index.html](index.html)
- Tailwind-Quelle: [src/input.css](src/input.css)
- Tailwind-Konfiguration: [tailwind.config.js](tailwind.config.js)
- Generiertes CSS-Artifact: [index.css](index.css)
- Formatierung: [.prettierrc.json](.prettierrc.json)

## Arbeitsregeln fuer Agents
- Nicht direkt in index.css editieren. Diese Datei ist Build-Output und wird mit npm run build erzeugt.
- Bei Styling-Aenderungen in src/input.css oder index.html anschliessend immer npm run build ausfuehren.
- Neue HTML- oder Template-Dateien nur anlegen, wenn wirklich noetig; falls doch, tailwind.config.js content-Liste erweitern, damit Utilities erkannt werden.
- Bestehende deutsche Inhalte, SEO-Metadaten und JSON-LD in index.html erhalten, ausser die Aufgabe verlangt explizit inhaltliche Aenderungen.
- Die Klasse .font-bold in src/input.css ist bewusst auf Noto Serif Bold gemappt; nicht ohne klaren Grund entfernen.

## Validierung vor Abschluss
1. npm run build laeuft ohne Fehler.
2. Seite laedt lokal ueber npx http-server ./
3. Keine unbeabsichtigten Aenderungen an Bildpfaden, Font-Dateien oder Meta-Tags.

## Wenn unklar
- Zuerst [README.md](README.md) konsultieren.
- Bei wiederkehrenden Aufgaben geeignete Erweiterung vorschlagen:
  - .github/instructions/frontend.instructions.md fuer dateispezifische Frontend-Regeln
  - .github/prompts/release-check.prompt.md fuer wiederholbare Release-Checks
  - .github/skills/site-maintenance/SKILL.md fuer mehrstufige Wartungsablaeufe
