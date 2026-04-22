# AGENTS.md

## Kontext

Dieses Repository ist ein pragmatisches Monorepo für eine Microservice-Anwendung mit Client. Es soll lokal sauber lauffähig sein und ohne Overengineering so aufgebaut werden, dass es später kontrolliert zu einer echten Microservice-Struktur wachsen kann.

Geplante Basis:

- Backend: .NET 10
- Frontend: Angular 21
- Containerisierung: Docker und Docker Compose
- Kommunikation und Eventing: MassTransit mit RabbitMQ
- Backend-Tests: xUnit
- Frontend-Tests: noch offen

## Arbeitsstil

- Bevorzuge minimale, gezielte Änderungen.
- Erhalte bestehenden Stil, Struktur und Benennung des Projekts.
- Führe keine großen Refactorings oder neuen Patterns ohne klaren Anlass ein.
- Gib knappe, pragmatische Ergebnisse.
- Plane Lösungen so, dass sie lokal einfach nachvollziehbar und erweiterbar bleiben.

## Umsetzung

- Prüfe zuerst den bestehenden Codepfad, bevor neue Struktur eingeführt wird.
- Ändere nur Dateien, die für die Aufgabe direkt relevant sind.
- Nutze vorhandene Utilities, Services und Patterns bevorzugt weiter.
- Halte Anpassungen möglichst lokal und nachvollziehbar.
- Bevorzuge einfache, startbare Lösungen vor abstrakten oder vorzeitig allgemeinen Konstrukten.

## Monorepo-Leitlinien

- Neue Services, Clients, Tests, Skripte und Dokumentation sollen klar voneinander getrennt sein.
- Gemeinsame Patterns sind sinnvoll, aber nur wenn sie echten Nutzen bringen.
- Lokale Entwicklung und Docker-Compose-Startbarkeit haben hohen Stellenwert.
- Architekturentscheidungen sollen das spätere Wachstum zu mehreren Services erleichtern, ohne den aktuellen Stand unnötig zu verkomplizieren.

## Weitere Orientierung

- Architekturüberblick: `.codex/architecture.md`
- Test- und Validierungshinweise: `.codex/review/testing.md`
- Review-Fokus: `.codex/review/code_review.md`
- Aufgaben und Vorlagen: `.codex/tasks/`

## Listen und Vorschläge

- Bei Textvorschlägen oder inhaltlichen Varianten zeige Vorschläge bevorzugt einzeln und nicht gesammelt.
- Beginne mit dem naheliegendsten Vorschlag.
- Zeige weitere Varianten nur, wenn der Nutzer sie möchte oder der Kontext sie klar erfordert.

## Textänderungen

- Wenn ich Texte überarbeite oder alternative Fassungen vorschlage, hebe ich die geänderten Stellen klar hervor.

## Sicherheit und Vorsicht

- Nenne Annahmen klar, statt sie stillschweigend zu treffen.
- Führe keine riskanten Änderungen außerhalb des betroffenen Bereichs durch.
- Bei unklarem Scope, Auth-, Secret-, Infrastruktur- oder Migrationsänderungen: keine Umsetzung ohne klare Grundlage.
- Sichere Analyse, kleine lokale Anpassungen und klare Rückfragen sind weiterhin erlaubt.

## Abschluss

- Berichte am Ende kurz:
  - Ziel oder Ursache
  - geänderte Dateien
  - ausgeführte Checks
  - offene Annahmen oder Risiken
