# Testing

## Ziel

Dieses Dokument beschreibt die Test- und Validierungsstrategie des Monorepos in pragmatischer Form. Es soll helfen, Änderungen passend zum Risiko abzusichern, ohne früh unnötige Testkomplexität aufzubauen.

## Grundprinzipien

- Tests und Checks sollen zum tatsächlichen Risiko der Änderung passen.
- Kleine, lokale Änderungen sollen bevorzugt mit kleinen, lokalen Checks abgesichert werden.
- Es sollen zunächst vor allem fachliche und technische Logikpfade getestet werden, nicht jede UI- oder Infrastruktur-Variante.
- Die Zahl der Testfälle soll auf ein sinnvolles Maß begrenzt bleiben.
- Wenn etwas noch nicht automatisiert abgesichert ist, soll das klar benannt werden.

## Technische Richtung

- Backend-Tests: xUnit
- Frontend-Tests: Vitest und Testing Library
- E2E-Tests im Frontend: später bei Bedarf
- Manuelle Validierung ist erlaubt, wenn sie transparent gemacht wird

## Backend

Backend-Änderungen sollen primär über passende .NET-Tests und gezielte technische Validierung abgesichert werden.

Typische sinnvolle Checks:

- betroffene Tests ausführen
- relevante Projekte bauen
- bei API-Änderungen Startfähigkeit lokal prüfen
- vor allem Commands, Queries, Handler, Validatoren und fachliche Entscheidungslogik testen
- bei Messaging-Änderungen einfache Integrationspfade gezielt validieren
- keine übermäßige Zahl ähnlicher Testfälle für denselben Logikpfad anlegen

## Frontend

Frontend-Änderungen sollen mit pragmatischen, gut wartbaren Tests abgesichert werden.

Typische sinnvolle Checks:

- vor allem Komponentenlogik, Services und zustandsbezogene Logik testen
- betroffene Unit- oder Component-Tests ausführen
- Build oder Startfähigkeit prüfen
- betroffene UI-Flows lokal testen
- offensichtliche Regressionen manuell prüfen
- keine breite Absicherung jeder Template-Variante ohne klaren Nutzen

## Infrastruktur und lokale Umgebung

Für Änderungen an Docker, Docker Compose, Backend-Infrastruktur oder lokalen Startabläufen gilt:

- Änderungen klein halten
- Startbarkeit lokal prüfen, wenn der Scope es erfordert
- keine unnötig schweren Prüfketten einführen
- Annahmen und nicht geprüfte Teile offen benennen

## Erwartung an Abschlussberichte

Nach Änderungen soll kurz dokumentiert werden:

- welche Checks ausgeführt wurden
- welche Checks nicht ausgeführt wurden
- welche Risiken oder offenen Punkte bleiben

## Offene Punkte

- welche Backend-Logik standardmäßig als testpflichtig gilt, zum Beispiel Handler, Validatoren und Domänenregeln
- wie viel Frontend-Logik über Tests und wie viel zunächst über manuelle Validierung abgesichert wird
- ab wann Integrations-Tests pro Backend-Modul sinnvoll werden
- welche Mindestchecks später in CI verpflichtend sein sollen
- ob und wann E2E-Tests für kritische Frontend-Flows ergänzt werden
