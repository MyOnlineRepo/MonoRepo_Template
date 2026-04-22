# Code Review

## Ziel

Dieses Dokument beschreibt den Review-Fokus für das Monorepo. Reviews sollen vor allem Risiken, fachliche Fehler, ungewollte Seiteneffekte und fehlende Absicherung sichtbar machen, nicht primär Stilfragen.

## Grundprinzipien

- Reviews sollen zuerst auf Verhalten, Risiken und Scope achten.
- Kleine Änderungen sind leichter zu reviewen als breite Refactorings.
- Bestehende Struktur und bestehende Patterns sollen bevorzugt erhalten bleiben.
- Neue Komplexität braucht einen klaren fachlichen oder technischen Grund.
- Fehlende Tests oder fehlende Validierung sollen offen angesprochen werden.

## Prüffokus allgemein

Bei Änderungen sollte vor allem geprüft werden:

- ist die Änderung fachlich korrekt?
- ist der Scope angemessen klein?
- bleibt die bestehende Struktur nachvollziehbar?
- entstehen unnötige neue Abhängigkeiten?
- wurden relevante Checks oder Tests berücksichtigt?
- gibt es Seiteneffekte außerhalb des betroffenen Bereichs?

## Backend-Fokus

Bei Backend-Änderungen sollte besonders geprüft werden:

- liegt Fachlogik im richtigen Modul?
- bleibt `Presentation` frei von Fachlogik?
- werden Commands, Queries und Handler nachvollziehbar getrennt?
- greifen Feature-Projekte unzulässig auf andere Features zu?
- landet versehentlich fachliche Logik in `Shared`?
- sind API-, Messaging- oder Konfigurationsänderungen sauber eingegrenzt?

## Frontend-Fokus

Bei Frontend-Änderungen sollte besonders geprüft werden:

- bleibt der Feature-Schnitt klar?
- liegen Models und Services im passenden Bereich?
- sind `http`-Services und Logik-Services sinnvoll getrennt?
- wird Signals-State pragmatisch eingesetzt?
- wird NgRx nur dort eingeführt, wo es einen klaren Mehrwert gibt?
- bleibt die Änderung verständlich und lokal?

## Besondere Vorsicht

Besonders sorgfältig prüfen bei:

- Auth- oder Rechte-Änderungen
- Secret- oder Konfigurationsänderungen
- Docker-, Compose- oder Infrastruktur-Anpassungen
- Messaging- und Eventing-Verhalten
- großen Refactorings unter kleinem Task-Namen
- Änderungen an gemeinsam genutzten Basiskomponenten

## Erwartung an Review-Ergebnisse

Review-Ergebnisse sollen:

- konkrete Risiken oder Findings klar benennen
- betroffene Stellen möglichst genau zuordnen
- kurz und pragmatisch formuliert sein
- offene Fragen sichtbar machen
- zwischen echtem Risiko und bloßer Stilpräferenz unterscheiden
