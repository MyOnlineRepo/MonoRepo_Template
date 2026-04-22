# Architekturüberblick

## Ziel

Dieses Dokument beschreibt die Zielrichtung des Monorepos in kompakter Form. Es dient als Orientierung für Menschen und Codex und trennt Architekturabsicht von Implementierungsdetails.

## Architekturidee

Das Repository ist die pragmatische Grundlage für eine Microservice-Anwendung mit Client. Es soll lokal einfach startbar sein, nicht unnötig verkompliziert werden und später kontrolliert zu mehreren klar getrennten Services wachsen können.

## Technische Basis

- Backend: .NET 10
- Frontend: Angular 21
- Containerisierung: Docker und Docker Compose
- Messaging und Eventing: MassTransit mit RabbitMQ
- Backend-Tests: xUnit
- Frontend-Tests: Vitest und Testing Library, E2E später bei Bedarf

## Geplante Hauptbereiche

- `services/`: fachliche Backend-Services, APIs und spätere servicebezogene Kommunikation
- `frontend/`: Client-Anwendung
- `tests/`: automatisierte Tests
- `scripts/`: lokale Hilfsskripte, Setup- und Betriebsunterstützung
- `docs/`: ergänzende Projektdokumentation

## Architekturprinzipien

- Einfach starten, statt früh zu verallgemeinern
- Lokale Entwicklungsfähigkeit hat hohen Stellenwert
- Klare Trennung von Services, Client, Tests, Skripten und Doku
- Neue Strukturen nur bei echtem Bedarf einführen
- Wachstum ermöglichen, ohne den aktuellen Stand zu overengineeren

## Backend-Sicht

Jeder Backend-Baustein ist grundsätzlich ein eigenständiger .NET-Web-API-Service.

Innerhalb eines Services ist eine modulare Trennung nach fachlichen Features vorgesehen. So bleibt die Struktur lokal gut handhabbar und kann später bei Bedarf sauber in getrennte Microservices weiterentwickelt werden.

Ein Service kann dabei zum Beispiel aus folgenden Projekten bestehen:

- `Presentation`: HTTP-Endpunkte, API-Konfiguration, Middleware, Swagger und technische Einstiegspunkte
- `Features.<FeatureName>`: fachliche Module wie `Sales`, inklusive Commands, Queries, Handler, Validierung und Fachlogik
- `Shared`: kleine gemeinsame Basis für generische Typen, technische Hilfen und ausgewählte gemeinsame Abstraktionen

Für diese Trennung gelten folgende Regeln:

- `Presentation` enthält keine Fachlogik
- `Presentation` ruft Anwendungsfälle über Mediator auf
- jedes Feature ist ein eigenes Projekt
- Feature-Projekte dürfen auf `Shared` zugreifen
- Feature-Projekte dürfen nicht direkt auf andere Feature-Projekte zugreifen
- `Shared` darf keine fachliche Logik einzelner Features enthalten

Innerhalb eines Features ist ein pragmatischer CQRS-Ansatz vorgesehen. Commands und Queries dürfen sauber getrennt werden, solange die Lösung lokal verständlich bleibt und nicht unnötig komplex wird.

MassTransit und RabbitMQ sind für serviceübergreifende Kommunikation und Events gedacht, nicht als Ersatz für einfache interne Anwendungslogik.

## Frontend-Sicht

Das Frontend folgt einem klaren, pragmatischen Feature-Schnitt statt unnötiger Architektur-Schichten.

Ein typisches Angular-Feature, zum Beispiel `sales/`, soll in sich nachvollziehbar aufgebaut sein und mindestens enthalten:

- Routing
- eine Index-Seite als klaren Einstiegspunkt
- einen `models/`-Ordner
- einen `services/`-Ordner

Für Services gilt:

- `http`-Services für API-Zugriffe
- Logik-Services für UI- und Anwendungslogik
- Models bleiben feature-nah und werden nicht vorschnell globalisiert

Signals sind der bevorzugte Standard für lokalen und abgeleiteten State im Frontend.

NgRx ist nicht automatisch vorgesehen. Wenn ein Feature mehr gemeinsamen oder komplexen State benötigt, ist NgRx Signal Store eine mögliche spätere Erweiterung.

Der Angular-Ansatz soll sauber, lokal verständlich und eher im Sinne von pragmatischer Clean-Coding-Struktur umgesetzt werden, nicht als starre oder überladene Frontend-Architektur.

## Lokale Entwicklung

Die lokale Umgebung soll reproduzierbar sein und die wichtigsten Bausteine einfach starten können. Docker Compose ist dafür die vorgesehene Grundlage, insbesondere für Infrastruktur wie RabbitMQ und für eine später wachsende Zahl von Services.

## Noch offen

- konkrete erste Service-Zuschnitte
- gemeinsamer lokaler Startablauf
- gemeinsame Konventionen für Konfiguration, Logging und Observability
- mögliche Shared Libraries oder gemeinsame Contracts

## Pflegehinweis

Diese Datei beschreibt Richtung und Rahmen. Detailentscheidungen sollten nur ergänzt werden, wenn sie für mehrere Bereiche relevant sind oder dauerhaft Orientierung geben.
