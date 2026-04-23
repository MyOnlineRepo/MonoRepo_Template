# Monorepo Template

Pragmatisches Monorepo für einen modularen Monolithen mit Client, lokal sauber lauffähig und so aufgebaut, dass es später kontrolliert weiterentwickelt und bei Bedarf in mehrere Services aufgeteilt werden kann.

## Geplante Basis

- Backend: .NET 10
- Frontend: Angular 21
- Containerisierung: Docker und Docker Compose
- Backend-Tests: xUnit
- Frontend-Tests: Vitest und Testing Library, E2E später bei Bedarf
- Codex-Steuerung: globale und projektbezogene `AGENTS.md` sowie `.codex/`

## Zielbild

Das Repository soll einfach startbar sein, nicht overengineered wirken und trotzdem eine saubere Grundlage für einen modularen Backend-Monolithen, einen Client, Tests, Skripte und Dokumentation bieten.

## Geplante Struktur

- `backend/`: modularer Backend-Monolith und API
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
- Das Repo so aufbauen, dass neue Backend-Module später sauber ergänzt werden können

## Lokale Entwicklung

Die lokale Entwicklungsumgebung soll so ausgelegt sein, dass zentrale Bausteine wie Backend, Client und unterstützende Infrastruktur reproduzierbar gestartet werden können.

Geplant ist die lokale Orchestrierung über Docker Compose.

## Nächste sinnvolle Ausbaustufen

1. **Repository-Grundstruktur anlegen**
   - Ordner `backend/`, `frontend/`, `tests/`, `scripts/` und `docs/` erzeugen
   - Platzhalter-README pro Bereich ergänzen, damit die Struktur sofort nachvollziehbar ist

2. **Ersten Backend-Monolithen erstellen (.NET 10)**
   - Minimale API mit Health-Endpunkt aufsetzen
   - Basis-Konfiguration für Logging und lokale Einstellungen ergänzen
   - Erste fachliche Modulstruktur sauber abgrenzen

3. **Angular-Client initial anbinden**
   - Angular-Workspace in `frontend/` erstellen
   - Erste Seite mit API-Health-Check gegen das Backend integrieren

4. **Lokale Docker-Compose-Umgebung aufsetzen**
   - Container für Backend und Frontend definieren
   - Einheitliche Startbefehle für die lokale Entwicklung dokumentieren

5. **Testbasis für Backend und Frontend einrichten**
   - xUnit-Testprojekt für das erste Backend-Modul anlegen
   - Vitest + Testing Library für den Client initial konfigurieren

6. **Dokumentation und Entwicklungsabläufe konsolidieren**
   - Architekturüberblick in `.codex/` konkretisieren
   - Lokale Setup-, Test- und Review-Abläufe zentral dokumentieren
