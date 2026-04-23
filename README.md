# Monorepo Template

Pragmatisches Monorepo für einen modularen Monolithen mit Client, lokal sauber lauffähig und so aufgebaut, dass es später kontrolliert weiterentwickelt und bei Bedarf in mehrere Services aufgeteilt werden kann.

## Aktueller Stand

- Backend: `.NET 10` Web API unter `backend/Dotnet_Organizer`
- Frontend: `Angular 21` Anwendung unter `frontend/Angular_Organizer`
- Containerisierung: Dockerfiles pro Projekt und zentrale `docker-compose`-Dateien
- Backend-Tests: noch nicht angelegt
- Frontend-Tests: Angular-Standardsetup mit Vitest
- Codex-Steuerung: globale und projektbezogene `AGENTS.md` sowie `.codex/`

## Struktur

- `backend/`: Backend-Projekte und APIs
- `frontend/`: Client-Anwendungen
- `docs/`: ergänzende Projektdokumentation
- `scripts/`: Hilfsskripte für Entwicklung und Betrieb
- `infrastructure/`: vorbereitete Infrastrukturordner
- `.codex/`: Arbeitsdokumente, Vorlagen und agentenbezogene Hilfen

## Enthaltene Projekte

- `backend/Dotnet_Organizer`: Backend-Solution mit `Presentation.csproj` und `Shared.csproj` direkt unter der Solution
- `frontend/Angular_Organizer`: Angular-Workspace mit Standard-App

## Backend-Struktur

Allgemeine Projektstruktur im Backend:

- `Presentation`: HTTP-Einstiegspunkt, API-Konfiguration und Controller
- `Shared/Application`: gemeinsame anwendungsnahe Bausteine
- `Shared/Domain`: gemeinsame fachliche Kernbausteine
- `Shared/Infrastructure`: gemeinsame technische Infrastrukturbausteine

Aktueller Startpunkt im Organizer:

- `backend/Dotnet_Organizer/Presentation.csproj`
- `backend/Dotnet_Organizer/Shared.csproj`
- `backend/Dotnet_Organizer/Presentation/Controllers`
- `backend/Dotnet_Organizer/Shared/Application`
- `backend/Dotnet_Organizer/Shared/Domain`
- `backend/Dotnet_Organizer/Shared/Infrastructure`

## Lokale Entwicklung

### Ohne Docker

Backend:

```powershell
dotnet run --project .\backend\Dotnet_Organizer\Presentation.csproj
```

Frontend:

```powershell
cd .\frontend\Angular_Organizer
npm install
npm start
```

### Mit Docker Compose

Start:

```powershell
docker compose up --build
```

Danach erreichbar:

- Frontend: `http://localhost:4200`
- Backend: `http://localhost:8080/weatherforecast`

## Architekturprinzipien

- Pragmatisch starten und Komplexität nur bei echtem Bedarf erhöhen
- Bestehende Struktur und Konventionen beibehalten
- Änderungen möglichst lokal und nachvollziehbar halten
- Infrastruktur und lokale Entwicklung einfach startbar halten
- Das Repo so aufbauen, dass neue Backend-Module später sauber ergänzt werden können

## Nächste sinnvolle Ausbaustufen

1. **Backend fachlich ausbauen**
   - Health-Endpunkt und erste echte Domänenlogik ergänzen
   - Modulstruktur im Backend sauber abgrenzen

2. **Frontend an das Backend anbinden**
   - Erste Feature-Seite statt Standard-Startseite umsetzen
   - API-Aufruf gegen das Backend integrieren

3. **Testbasis ergänzen**
   - xUnit-Testprojekt für das Backend anlegen
   - Frontend-Tests gezielt für erste Features erweitern

4. **Docker-Setup weiter schärfen**
   - sinnvolle Dev-/Prod-Unterschiede definieren
   - einheitliche Start- und Build-Abläufe dokumentieren
