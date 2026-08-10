---
mode: agent
description: "Use when preparing a release or publish for this static site. Runs build and verifies metadata, assets, and deployment-critical files."
---

# Release Check Prompt

Fuehre einen kompakten Pre-Release-Check fuer dieses Repository aus und liefere am Ende nur einen klaren Ergebnisbericht.

## Ziel
- Sicherstellen, dass die Seite buildbar ist.
- Sicherstellen, dass kritische Meta-, Asset- und Deploy-Dateien konsistent sind.
- Risiken vor dem Publish frueh sichtbar machen.

## Pruefschritte
1. Fuehre npm run build aus.
2. Pruefe, ob index.css als Build-Output vorhanden ist und nicht manuell editiert werden musste.
3. Pruefe in index.html:
   - meta description vorhanden
   - Open-Graph-Bild vorhanden
   - JSON-LD Person-Block vorhanden
4. Pruefe Referenzen auf zentrale Assets:
   - /fonts/*.woff2
   - /img/* fuer src, srcset und og:image
5. Pruefe Deploy-kritische Dateien auf Existenz:
   - CNAME
   - site.webmanifest
   - favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
6. Wenn moeglich, nenne auffaellige uncommitted Aenderungen, die fuer den Release relevant sind.

## Ergebnisformat
Liefere das Ergebnis in diesem Format:

Release Check Ergebnis
- Build: PASS oder FAIL
- Metadaten: PASS oder FAIL
- Assets und Referenzen: PASS oder FAIL
- Deploy-Dateien: PASS oder FAIL
- Arbeitsbaum fuer Release geeignet: PASS oder FAIL

Gefundene Probleme
- Kurze, priorisierte Liste mit konkreten Dateiangaben.

Empfohlene naechste Schritte
1. ...
2. ...

## Regeln
- Keine inhaltlichen Textaenderungen an deutschsprachigem Content ohne expliziten Auftrag.
- Keine direkten Edits an index.css.
- Falls etwas nicht pruefbar ist, klar als NICHT GEPRUEFT markieren und begruenden.
