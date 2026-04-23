# Monorepo Template

Pragmatisches Monorepo für eine Microservice-Anwendung mit Client, lokal sauber lauffähig und so aufgebaut, dass es später kontrolliert zu einer echten Microservice-Struktur wachsen kann.

## Geplante Basis

- Backend: .NET 10
- Frontend: Angular 21
- Containerisierung: Docker und Docker Compose
- Service-Kommunikation und Eventing: MassTransit mit RabbitMQ
- Backend-Tests: xUnit
- Frontend-Tests: Vitest und Testing Library, E2E später bei Bedarf
- Codex-Steuerung: globale und projektbezogene `AGENTS.md` sowie `.codex/`

## Zielbild

Das Repository soll einfach startbar sein, nicht overengineered wirken und trotzdem eine saubere Grundlage für mehrere Services, einen Client, Tests, Skripte und Dokumentation bieten.

## Geplante Struktur

- `services/`: Backend-Services und APIs
- `frontend/`: Client-Anwendung
- `tests/`: automatisierte Tests
- `scripts/`: Hilfsskripte für Entwicklung und Betrieb
- `docs/`: ergänzende Projektdokumentation
- `.codex/`: Arbeitsdokumente, Vorlagen und agentenbezogene Hilfen

## Architekturprinzipien

- Pragmatisch starten und Komplexität nur bei echtem Bedarf erhöhen
- Bestehende Struktur und Konventionen beibehalten
- Änderungen möglichst lokal und nachvollziehbar halten
- Infrastruktur und lokale Entwicklung einfach startbar halten
- Das Repo so aufbauen, dass neue Services später sauber ergänzt werden können

## Lokale Entwicklung

Die lokale Entwicklungsumgebung soll so ausgelegt sein, dass zentrale Bausteine wie Services, Client, RabbitMQ und unterstützende Infrastruktur reproduzierbar gestartet werden können.

Geplant ist die lokale Orchestrierung über Docker Compose.

## Nächste sinnvolle Ausbaustufen

1. **Repository-Grundstruktur anlegen**
   - Ordner `services/`, `frontend/`, `tests/`, `scripts/` und `docs/` erzeugen
   - Platzhalter-README pro Bereich ergänzen, damit die Struktur sofort nachvollziehbar ist

2. **Ersten Backend-Service erstellen (.NET 10)**
   - Minimalen API-Service mit Health-Endpunkt aufsetzen
   - Basis-Konfiguration für Logging und lokale Einstellungen ergänzen

3. **Angular-Client initial anbinden**
   - Angular-Workspace in `frontend/` erstellen
   - Erste Seite mit API-Health-Check gegen den Backend-Service integrieren

4. **Lokale Docker-Compose-Umgebung aufsetzen**
   - Services für Backend, Frontend und RabbitMQ definieren
   - Einheitliche Startbefehle für die lokale Entwicklung dokumentieren

5. **Testbasis für Backend und Frontend einrichten**
   - xUnit-Testprojekt für den ersten Service anlegen
   - Vitest + Testing Library für den Client initial konfigurieren

6. **Service-Kommunikation vorbereiten (MassTransit + RabbitMQ)**
   - Gemeinsame Messaging-Konventionen definieren (Namen, Queues, Events)
   - Erstes Beispiel-Event zwischen Komponenten lokal lauffähig machen

7. **Dokumentation und Entwicklungsabläufe konsolidieren**
   - Architekturüberblick in `.codex/` konkretisieren
   - Lokale Setup-, Test- und Review-Abläufe zentral dokumentieren
