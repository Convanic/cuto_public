import { BookOpen, Rocket, Puzzle, Code, Lightbulb, HelpCircle, Shield, Settings, Users, BarChart3, FileText, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type DocCategory = 
  | 'getting-started' 
  | 'features' 
  | 'integrations' 
  | 'api' 
  | 'best-practices' 
  | 'troubleshooting'
  | 'security'
  | 'admin';

export interface DocArticle {
  slug: string;
  title: string;
  description: string;
  category: DocCategory;
  content: string;
  lastUpdated: string;
  readingTime: string;
  tags: string[];
  relatedArticles?: string[];
  order: number; // For sorting within category
}

export interface DocCategoryInfo {
  id: DocCategory;
  name: string;
  description: string;
  icon: string;
  IconComponent: LucideIcon;
  color: string;
}

export const docCategories: DocCategoryInfo[] = [
  {
    id: 'getting-started',
    name: 'Erste Schritte',
    description: 'Schnellstart-Anleitungen und Grundlagen für neue Benutzer',
    icon: '🚀',
    IconComponent: Rocket,
    color: 'bg-green-500',
  },
  {
    id: 'features',
    name: 'Funktionen',
    description: 'Detaillierte Anleitungen zu allen CUTO-Funktionen',
    icon: '⚡',
    IconComponent: Zap,
    color: 'bg-purple-500',
  },
  {
    id: 'integrations',
    name: 'Integrationen',
    description: 'Verbindungen mit SAP, Jira, MS Teams und mehr',
    icon: '🔗',
    IconComponent: Puzzle,
    color: 'bg-blue-500',
  },
  {
    id: 'api',
    name: 'API Dokumentation',
    description: 'REST API Referenz und Entwickler-Ressourcen',
    icon: '💻',
    IconComponent: Code,
    color: 'bg-orange-500',
  },
  {
    id: 'best-practices',
    name: 'Best Practices',
    description: 'Tipps und Empfehlungen für optimale Nutzung',
    icon: '💡',
    IconComponent: Lightbulb,
    color: 'bg-yellow-500',
  },
  {
    id: 'admin',
    name: 'Administration',
    description: 'Benutzerverwaltung, Einstellungen und Konfiguration',
    icon: '⚙️',
    IconComponent: Settings,
    color: 'bg-slate-500',
  },
  {
    id: 'security',
    name: 'Sicherheit & Compliance',
    description: 'Datenschutz, DSGVO und Sicherheitsrichtlinien',
    icon: '🔒',
    IconComponent: Shield,
    color: 'bg-red-500',
  },
  {
    id: 'troubleshooting',
    name: 'Fehlerbehebung',
    description: 'Häufige Probleme und deren Lösungen',
    icon: '❓',
    IconComponent: HelpCircle,
    color: 'bg-pink-500',
  },
];

export const getCategoryInfo = (categoryId: DocCategory): DocCategoryInfo | undefined => {
  return docCategories.find(c => c.id === categoryId);
};

export const docArticles: DocArticle[] = [
  // === GETTING STARTED ===
  {
    slug: 'quickstart',
    title: 'Schnellstart-Anleitung',
    description: 'In 5 Minuten zum ersten CUTO-Projekt – Schritt für Schritt erklärt.',
    category: 'getting-started',
    lastUpdated: '2024-07-15',
    readingTime: '5 min',
    tags: ['quickstart', 'anfänger', 'projekt erstellen'],
    order: 1,
    content: `
## Willkommen bei CUTO!

Diese Anleitung führt Sie durch die ersten Schritte, um Ihr erstes SAP-Projekt in CUTO anzulegen.

### Voraussetzungen

- Ein aktiver CUTO-Account
- Grundlegende Kenntnisse über SAP-Projektmanagement

### Schritt 1: Anmelden

1. Öffnen Sie [app.cuto.ai](https://app.cuto.ai)
2. Geben Sie Ihre E-Mail und Ihr Passwort ein
3. Klicken Sie auf "Anmelden"

### Schritt 2: Neues Projekt erstellen

1. Klicken Sie auf **"+ Neues Projekt"** in der Seitenleiste
2. Wählen Sie ein Template:
   - **SAP Activate** – Für S/4HANA Implementierungen
   - **SAP ASAP** – Für klassische SAP-Projekte
   - **Blank** – Für individuelle Projektstrukturen
3. Geben Sie den Projektnamen ein
4. Klicken Sie auf **"Projekt erstellen"**

### Schritt 3: Team einladen

1. Navigieren Sie zu **Einstellungen → Team**
2. Klicken Sie auf **"Mitglied einladen"**
3. Geben Sie die E-Mail-Adressen Ihrer Teammitglieder ein
4. Weisen Sie Rollen zu (Admin, Projektleiter, Mitarbeiter)

### Nächste Schritte

- [Projektstruktur anpassen](/docs/features/project-structure)
- [Dashboard konfigurieren](/docs/features/dashboard-setup)
- [Aufgaben erstellen](/docs/features/task-management)

> **Tipp:** Nutzen Sie unsere SAP Activate Templates für einen schnellen Start mit Best-Practice-Strukturen!
    `,
    relatedArticles: ['project-structure', 'dashboard-setup', 'sap-activate-template'],
  },
  {
    slug: 'account-setup',
    title: 'Account einrichten',
    description: 'Profil, Benachrichtigungen und persönliche Einstellungen konfigurieren.',
    category: 'getting-started',
    lastUpdated: '2024-07-10',
    readingTime: '3 min',
    tags: ['account', 'profil', 'einstellungen'],
    order: 2,
    content: `
## Account-Einrichtung

Nach der Registrierung sollten Sie Ihren Account vollständig einrichten.

### Profil bearbeiten

1. Klicken Sie auf Ihr Avatar oben rechts
2. Wählen Sie **"Profil bearbeiten"**
3. Ergänzen Sie:
   - Vollständiger Name
   - Profilbild
   - Abteilung/Rolle
   - Telefonnummer (optional)

### Benachrichtigungen

Konfigurieren Sie, wann und wie Sie benachrichtigt werden:

| Benachrichtigung | E-Mail | Push | In-App |
|-----------------|--------|------|--------|
| Neue Aufgaben | ✓ | ✓ | ✓ |
| Kommentare | ✓ | ✓ | ✓ |
| Meilensteine | ✓ | - | ✓ |
| Wöchentlicher Report | ✓ | - | - |

### Zwei-Faktor-Authentifizierung

Erhöhen Sie die Sicherheit Ihres Accounts:

1. Gehen Sie zu **Einstellungen → Sicherheit**
2. Aktivieren Sie **2FA**
3. Scannen Sie den QR-Code mit einer Authenticator-App
4. Speichern Sie Ihre Backup-Codes sicher
    `,
    relatedArticles: ['quickstart', 'team-management'],
  },
  {
    slug: 'navigation-overview',
    title: 'Navigation & Oberfläche',
    description: 'Übersicht über die CUTO-Benutzeroberfläche und Navigation.',
    category: 'getting-started',
    lastUpdated: '2024-07-08',
    readingTime: '4 min',
    tags: ['navigation', 'ui', 'oberfläche'],
    order: 3,
    content: `
## Die CUTO-Oberfläche

CUTO ist in mehrere Hauptbereiche unterteilt:

### Seitenleiste (Links)

- **Dashboard** – Übersicht über alle Projekte
- **Projekte** – Liste aller Projekte
- **Aufgaben** – Persönliche Aufgabenliste
- **Berichte** – Reporting-Center
- **Einstellungen** – Konto- und Systemeinstellungen

### Hauptbereich (Mitte)

Der Hauptbereich zeigt den Inhalt des ausgewählten Menüpunkts:

- Projektübersicht mit Phasen und Meilensteinen
- Gantt-Diagramme
- Kanban-Boards
- Detailansichten

### Header (Oben)

- **Suche** – Globale Suche über alle Projekte
- **Benachrichtigungen** – Aktuelle Updates
- **Profil** – Schnellzugriff auf Einstellungen

### Tastaturkürzel

| Kürzel | Aktion |
|--------|--------|
| \`Cmd/Ctrl + K\` | Globale Suche öffnen |
| \`Cmd/Ctrl + N\` | Neue Aufgabe erstellen |
| \`Cmd/Ctrl + P\` | Schnellwechsel zwischen Projekten |
| \`?\` | Hilfe anzeigen |
    `,
    relatedArticles: ['quickstart', 'keyboard-shortcuts'],
  },

  // === FEATURES ===
  {
    slug: 'project-structure',
    title: 'Projektstruktur anlegen',
    description: 'Phasen, Arbeitspakete und Meilensteine strukturiert organisieren.',
    category: 'features',
    lastUpdated: '2024-07-12',
    readingTime: '6 min',
    tags: ['projekt', 'phasen', 'meilensteine', 'arbeitspakete'],
    order: 1,
    content: `
## Projektstruktur in CUTO

Eine klare Projektstruktur ist der Schlüssel zum Erfolg. CUTO unterstützt hierarchische Strukturen nach SAP-Best-Practices.

### Hierarchie-Ebenen

1. **Projekt** – Die oberste Ebene
2. **Phasen** – Hauptabschnitte (z.B. Prepare, Explore, Realize)
3. **Arbeitspakete** – Teilbereiche innerhalb einer Phase
4. **Aufgaben** – Einzelne Aktivitäten

### Phase erstellen

\`\`\`
1. Öffnen Sie Ihr Projekt
2. Klicken Sie auf "+ Phase hinzufügen"
3. Wählen Sie eine vordefinierte Phase oder erstellen Sie eine eigene
4. Legen Sie Start- und Enddatum fest
5. Weisen Sie einen Verantwortlichen zu
\`\`\`

### Meilensteine definieren

Meilensteine markieren wichtige Projektereignisse:

- **Phasenabschluss** – Automatisch bei Phasenende
- **Go/No-Go Entscheidungen** – Genehmigungspunkte
- **Go-Live** – Der große Tag

### SAP Activate Integration

CUTO bietet vordefinierte Strukturen für SAP Activate:

| Phase | Typische Dauer | Meilenstein |
|-------|---------------|-------------|
| Discover | 2-4 Wochen | Business Case approved |
| Prepare | 4-8 Wochen | Project kickoff |
| Explore | 8-12 Wochen | Baseline confirmed |
| Realize | 12-20 Wochen | Solution tested |
| Deploy | 4-8 Wochen | Go-Live |
| Run | Ongoing | Hypercare complete |
    `,
    relatedArticles: ['sap-activate-template', 'task-management', 'gantt-chart'],
  },
  {
    slug: 'dashboard-setup',
    title: 'Dashboard konfigurieren',
    description: 'Personalisierte Dashboards mit KPIs und Widgets erstellen.',
    category: 'features',
    lastUpdated: '2024-07-11',
    readingTime: '5 min',
    tags: ['dashboard', 'kpi', 'widgets', 'reporting'],
    order: 2,
    content: `
## Dashboard-Konfiguration

Dashboards bieten einen schnellen Überblick über den Projektstatus.

### Standard-Widgets

CUTO bietet über 20 vorkonfigurierte Widgets:

- **Projektfortschritt** – Gesamtfortschritt in Prozent
- **Offene Aufgaben** – Anzahl und Verteilung
- **Meilenstein-Tracker** – Kommende Deadlines
- **Ressourcen-Auslastung** – Teamkapazität
- **Risiko-Matrix** – Aktuelle Risiken
- **Budget-Status** – Plan vs. Ist

### Dashboard erstellen

1. Navigieren Sie zu **Berichte → Dashboards**
2. Klicken Sie auf **"+ Neues Dashboard"**
3. Geben Sie einen Namen ein
4. Ziehen Sie Widgets per Drag & Drop
5. Konfigurieren Sie jedes Widget individuell

### Widget-Einstellungen

Jedes Widget kann angepasst werden:

- **Datenquelle** – Welches Projekt oder Projektportfolio
- **Zeitraum** – Letzte 7 Tage, Monat, Quartal, etc.
- **Filter** – Nach Phase, Team, Status
- **Darstellung** – Diagrammtyp, Farben

### Dashboard teilen

Teilen Sie Dashboards mit Stakeholdern:

1. Öffnen Sie das Dashboard
2. Klicken Sie auf **"Teilen"**
3. Wählen Sie Empfänger oder generieren Sie einen Link
4. Legen Sie Berechtigungen fest (Ansehen/Bearbeiten)
    `,
    relatedArticles: ['project-structure', 'reporting-basics', 'kpi-tracking'],
  },
  {
    slug: 'task-management',
    title: 'Aufgabenverwaltung',
    description: 'Aufgaben erstellen, zuweisen, verfolgen und abschließen.',
    category: 'features',
    lastUpdated: '2024-07-10',
    readingTime: '7 min',
    tags: ['aufgaben', 'tasks', 'zuweisung', 'status'],
    order: 3,
    content: `
## Aufgabenverwaltung in CUTO

Aufgaben sind das Herzstück jedes Projekts. CUTO bietet umfangreiche Funktionen zur Aufgabenverwaltung.

### Aufgabe erstellen

**Schnelle Erstellung:**
- Drücken Sie \`Cmd/Ctrl + N\`
- Geben Sie den Titel ein
- Drücken Sie Enter

**Detaillierte Erstellung:**
1. Klicken Sie auf **"+ Aufgabe"** in der Projektansicht
2. Füllen Sie das Formular aus:
   - Titel und Beschreibung
   - Zuständige Person
   - Fälligkeitsdatum
   - Priorität (Niedrig, Mittel, Hoch, Kritisch)
   - Labels/Tags
   - Verknüpfte Dokumente

### Aufgaben-Status

| Status | Beschreibung | Farbe |
|--------|--------------|-------|
| Offen | Noch nicht begonnen | Grau |
| In Bearbeitung | Wird gerade bearbeitet | Blau |
| Review | Wartet auf Prüfung | Gelb |
| Blockiert | Kann nicht fortfahren | Rot |
| Erledigt | Abgeschlossen | Grün |

### Abhängigkeiten

Verknüpfen Sie Aufgaben mit Abhängigkeiten:

- **Ende-zu-Start** – B beginnt wenn A endet
- **Start-zu-Start** – B beginnt wenn A beginnt
- **Ende-zu-Ende** – B endet wenn A endet
- **Start-zu-Ende** – B endet wenn A beginnt

### Batch-Aktionen

Wählen Sie mehrere Aufgaben und führen Sie Aktionen aus:

- Status ändern
- Zuständigkeit ändern
- Verschieben
- Labels hinzufügen
- Löschen
    `,
    relatedArticles: ['project-structure', 'kanban-board', 'gantt-chart'],
  },
  {
    slug: 'gantt-chart',
    title: 'Gantt-Diagramm',
    description: 'Zeitpläne visualisieren und Abhängigkeiten darstellen.',
    category: 'features',
    lastUpdated: '2024-07-08',
    readingTime: '5 min',
    tags: ['gantt', 'zeitplan', 'planung', 'abhängigkeiten'],
    order: 4,
    content: `
## Gantt-Diagramm in CUTO

Das Gantt-Diagramm bietet eine visuelle Darstellung Ihres Projektzeitplans.

### Ansicht öffnen

1. Öffnen Sie ein Projekt
2. Klicken Sie auf **"Gantt"** in der Ansichtsleiste

### Elemente im Gantt

- **Balken** – Dauer einer Aufgabe/Phase
- **Rauten** – Meilensteine
- **Pfeile** – Abhängigkeiten zwischen Aufgaben
- **Heute-Linie** – Aktuelles Datum

### Interaktionen

**Balken anpassen:**
- Ziehen Sie die Enden, um Dauer zu ändern
- Verschieben Sie den gesamten Balken für neue Termine

**Abhängigkeiten erstellen:**
- Klicken Sie auf den Verbindungspunkt eines Balkens
- Ziehen Sie zum Ziel-Balken

### Zoom & Filter

- **Zoom:** Tag, Woche, Monat, Quartal
- **Filter:** Nach Phase, Zuständigkeit, Status
- **Kritischer Pfad:** Hervorhebung aktivieren

### Export

Exportieren Sie das Gantt-Diagramm:
- PNG/PDF für Präsentationen
- MS Project (.mpp) für externe Tools
    `,
    relatedArticles: ['task-management', 'project-structure', 'cutover-planning'],
  },

  // === INTEGRATIONS ===
  {
    slug: 'sap-solution-manager',
    title: 'SAP Solution Manager Integration',
    description: 'CUTO mit SAP Solution Manager verbinden und synchronisieren.',
    category: 'integrations',
    lastUpdated: '2024-07-14',
    readingTime: '8 min',
    tags: ['sap', 'solution manager', 'integration', 'sync'],
    order: 1,
    content: `
## SAP Solution Manager Integration

Verbinden Sie CUTO mit Ihrem SAP Solution Manager für nahtlose Datensynchronisation.

### Voraussetzungen

- SAP Solution Manager 7.2 SP10 oder höher
- CUTO Enterprise Plan
- Administratorrechte in beiden Systemen

### Verbindung einrichten

1. Navigieren Sie zu **Einstellungen → Integrationen**
2. Klicken Sie auf **"SAP Solution Manager"**
3. Geben Sie die Verbindungsdaten ein:
   - Host-URL
   - Mandant
   - Benutzer/Passwort oder OAuth-Token
4. Testen Sie die Verbindung
5. Aktivieren Sie die Integration

### Synchronisierte Daten

| CUTO | Solution Manager | Richtung |
|------|-----------------|----------|
| Projekte | Projekte | Bidirektional |
| Phasen | Roadmap Steps | Bidirektional |
| Aufgaben | Tasks | Bidirektional |
| Dokumente | Documents | Bidirektional |
| Änderungsanträge | Change Requests | SolMan → CUTO |

### Konflikte lösen

Bei Konflikten können Sie wählen:
- CUTO-Daten beibehalten
- Solution Manager-Daten übernehmen
- Manuell zusammenführen
    `,
    relatedArticles: ['jira-integration', 'ms-teams-integration'],
  },
  {
    slug: 'jira-integration',
    title: 'Jira Integration',
    description: 'Aufgaben zwischen CUTO und Jira synchronisieren.',
    category: 'integrations',
    lastUpdated: '2024-07-12',
    readingTime: '6 min',
    tags: ['jira', 'atlassian', 'integration', 'sync'],
    order: 2,
    content: `
## Jira Integration

Synchronisieren Sie Aufgaben zwischen CUTO und Jira für nahtlose Zusammenarbeit.

### Verbindung herstellen

1. Gehen Sie zu **Einstellungen → Integrationen → Jira**
2. Klicken Sie auf **"Mit Jira verbinden"**
3. Autorisieren Sie CUTO in Jira
4. Wählen Sie die zu synchronisierenden Projekte

### Mapping konfigurieren

Ordnen Sie CUTO-Felder Jira-Feldern zu:

| CUTO Feld | Jira Feld |
|-----------|-----------|
| Titel | Summary |
| Beschreibung | Description |
| Status | Status |
| Priorität | Priority |
| Zuständig | Assignee |
| Labels | Labels |

### Sync-Regeln

Definieren Sie, wann synchronisiert wird:

- **Echtzeit** – Sofortige Synchronisation
- **Geplant** – Alle X Minuten
- **Manuell** – Nur auf Anforderung

### Typische Anwendungsfälle

1. **Entwicklungsaufgaben in Jira** – SAP-Projektaufgaben in CUTO, technische Tasks in Jira
2. **Sprint-Planung** – CUTO für Gesamtplanung, Jira für Sprint-Boards
3. **Reporting** – Konsolidierte Berichte aus beiden Systemen
    `,
    relatedArticles: ['sap-solution-manager', 'ms-teams-integration', 'task-management'],
  },
  {
    slug: 'ms-teams-integration',
    title: 'Microsoft Teams Integration',
    description: 'Benachrichtigungen und Updates direkt in MS Teams erhalten.',
    category: 'integrations',
    lastUpdated: '2024-07-10',
    readingTime: '4 min',
    tags: ['teams', 'microsoft', 'benachrichtigungen', 'chat'],
    order: 3,
    content: `
## Microsoft Teams Integration

Erhalten Sie CUTO-Benachrichtigungen direkt in Microsoft Teams.

### Teams-App installieren

1. Öffnen Sie Microsoft Teams
2. Gehen Sie zum App Store
3. Suchen Sie nach **"CUTO"**
4. Klicken Sie auf **"Hinzufügen"**

### Kanal verbinden

1. Öffnen Sie den gewünschten Teams-Kanal
2. Klicken Sie auf **"+"** und wählen Sie CUTO
3. Melden Sie sich an und wählen Sie ein Projekt
4. Konfigurieren Sie die Benachrichtigungen

### Benachrichtigungstypen

- ✅ Aufgabe abgeschlossen
- 📝 Neuer Kommentar
- ⚠️ Risiko hinzugefügt
- 🎯 Meilenstein erreicht
- 📊 Wöchentlicher Report

### Bot-Befehle

Nutzen Sie den CUTO-Bot in Teams:

\`\`\`
@CUTO status [Projektname]
@CUTO tasks mine
@CUTO create task [Titel]
@CUTO report weekly
\`\`\`
    `,
    relatedArticles: ['jira-integration', 'slack-integration', 'notifications'],
  },

  // === API ===
  {
    slug: 'api-overview',
    title: 'API Übersicht',
    description: 'Einführung in die CUTO REST API und Authentifizierung.',
    category: 'api',
    lastUpdated: '2024-07-15',
    readingTime: '5 min',
    tags: ['api', 'rest', 'authentifizierung', 'entwickler'],
    order: 1,
    content: `
## CUTO REST API

Die CUTO API ermöglicht programmatischen Zugriff auf alle CUTO-Funktionen.

### Basis-URL

\`\`\`
https://api.cuto.ai/v1
\`\`\`

### Authentifizierung

CUTO verwendet Bearer-Token-Authentifizierung:

\`\`\`bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \\
     https://api.cuto.ai/v1/projects
\`\`\`

### API-Token erstellen

1. Gehen Sie zu **Einstellungen → API**
2. Klicken Sie auf **"Token erstellen"**
3. Geben Sie einen Namen und Berechtigungen an
4. Kopieren Sie den Token (nur einmal sichtbar!)

### Rate Limits

| Plan | Requests/Minute | Requests/Tag |
|------|-----------------|--------------|
| Starter | 60 | 5.000 |
| Professional | 300 | 50.000 |
| Enterprise | 1.000 | Unlimited |

### Response-Format

Alle Responses sind JSON:

\`\`\`json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "total": 42
  }
}
\`\`\`

### Fehler-Handling

\`\`\`json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Project not found",
    "details": { ... }
  }
}
\`\`\`
    `,
    relatedArticles: ['api-projects', 'api-tasks', 'webhooks'],
  },
  {
    slug: 'api-projects',
    title: 'API: Projekte',
    description: 'Projekte über die API erstellen, lesen, aktualisieren und löschen.',
    category: 'api',
    lastUpdated: '2024-07-14',
    readingTime: '6 min',
    tags: ['api', 'projekte', 'crud', 'endpoints'],
    order: 2,
    content: `
## Projekte-Endpoints

### Alle Projekte abrufen

\`\`\`http
GET /v1/projects
\`\`\`

**Query-Parameter:**
- \`page\` – Seitennummer (default: 1)
- \`limit\` – Ergebnisse pro Seite (default: 20, max: 100)
- \`status\` – Filter nach Status (active, archived, completed)

**Response:**
\`\`\`json
{
  "data": [
    {
      "id": "prj_abc123",
      "name": "SAP S/4HANA Implementation",
      "status": "active",
      "progress": 45,
      "startDate": "2024-01-15",
      "endDate": "2024-12-31",
      "owner": { "id": "usr_xyz", "name": "Max Mustermann" }
    }
  ],
  "meta": { "page": 1, "total": 15 }
}
\`\`\`

### Einzelnes Projekt abrufen

\`\`\`http
GET /v1/projects/:id
\`\`\`

### Projekt erstellen

\`\`\`http
POST /v1/projects
Content-Type: application/json

{
  "name": "Neues SAP-Projekt",
  "templateId": "tpl_sap_activate",
  "startDate": "2024-08-01",
  "endDate": "2025-06-30"
}
\`\`\`

### Projekt aktualisieren

\`\`\`http
PATCH /v1/projects/:id
Content-Type: application/json

{
  "name": "Aktualisierter Name",
  "status": "completed"
}
\`\`\`

### Projekt löschen

\`\`\`http
DELETE /v1/projects/:id
\`\`\`
    `,
    relatedArticles: ['api-overview', 'api-tasks', 'api-phases'],
  },

  // === BEST PRACTICES ===
  {
    slug: 'sap-activate-template',
    title: 'SAP Activate richtig nutzen',
    description: 'Best Practices für die Verwendung von SAP Activate Templates in CUTO.',
    category: 'best-practices',
    lastUpdated: '2024-07-13',
    readingTime: '8 min',
    tags: ['sap activate', 'template', 'best practices', 's/4hana'],
    order: 1,
    content: `
## SAP Activate Best Practices

SAP Activate ist die führende Implementierungsmethodik für SAP S/4HANA. CUTO bietet vordefinierte Templates.

### Template auswählen

CUTO bietet verschiedene SAP Activate Varianten:

| Template | Geeignet für |
|----------|-------------|
| Greenfield | Neuimplementierung ohne Legacy-Daten |
| Brownfield | System Conversion von SAP ECC |
| Bluefield | Selektive Datenmigration |

### Phasen anpassen

Die Standard-Phasen können angepasst werden:

1. **Discover** – Business Case, Scope Definition
2. **Prepare** – Projektsetup, Team-Onboarding
3. **Explore** – Fit-Gap-Analyse, Prozessdesign
4. **Realize** – Konfiguration, Entwicklung, Testing
5. **Deploy** – Cutover, Go-Live
6. **Run** – Hypercare, Support

### Erfolgsfaktoren

✅ **Empfohlen:**
- Alle Phasen-Gates strikt einhalten
- Dokumentation kontinuierlich pflegen
- Risiken frühzeitig identifizieren

❌ **Vermeiden:**
- Phasen überspringen
- Testing vernachlässigen
- Scope Creep ohne Change Management
    `,
    relatedArticles: ['project-structure', 'cutover-planning', 'risk-management'],
  },
  {
    slug: 'cutover-planning',
    title: 'Cutover-Planung Masterclass',
    description: 'Detaillierte Anleitung für erfolgreiche Go-Live-Planung.',
    category: 'best-practices',
    lastUpdated: '2024-07-11',
    readingTime: '10 min',
    tags: ['cutover', 'go-live', 'planung', 'migration'],
    order: 2,
    content: `
## Cutover-Planung

Der Cutover ist der kritischste Moment in jedem SAP-Projekt. Eine sorgfältige Planung ist essentiell.

### Cutover-Phasen

1. **Pre-Cutover (T-30 bis T-7)**
   - Cutover-Checkliste finalisieren
   - Dress Rehearsal durchführen
   - Go/No-Go Kriterien definieren

2. **Cutover-Wochenende (T-0)**
   - System-Shutdown
   - Datenmigration
   - Konfigurationsaktivierungen
   - Validierung

3. **Post-Cutover (T+1 bis T+14)**
   - Hypercare-Support
   - Issue-Tracking
   - Performance-Monitoring

### Cutover-Checkliste in CUTO

CUTO bietet spezielle Cutover-Features:

- **Timeline-Ansicht** – Minute-genaue Planung
- **Abhängigkeiten** – Automatische Sequenzierung
- **Eskalationen** – Automatische Alerts bei Verzögerungen
- **War Room Dashboard** – Echtzeit-Status

### Rollback-Planung

Definieren Sie immer einen Plan B:

\`\`\`
Rollback-Trigger:
- Kritische Datenfehler > 1%
- Systemverfügbarkeit < 95%
- Go/No-Go Gate nicht bestanden

Rollback-Zeit: max. 4 Stunden
\`\`\`
    `,
    relatedArticles: ['sap-activate-template', 'risk-management', 'gantt-chart'],
  },

  // === ADMIN ===
  {
    slug: 'team-management',
    title: 'Benutzerverwaltung',
    description: 'Benutzer hinzufügen, Rollen zuweisen und Teams verwalten.',
    category: 'admin',
    lastUpdated: '2024-07-12',
    readingTime: '5 min',
    tags: ['benutzer', 'rollen', 'teams', 'administration'],
    order: 1,
    content: `
## Benutzerverwaltung

Als Administrator können Sie Benutzer und deren Berechtigungen verwalten.

### Benutzer einladen

1. Gehen Sie zu **Einstellungen → Benutzer**
2. Klicken Sie auf **"+ Benutzer einladen"**
3. Geben Sie E-Mail-Adressen ein (mehrere mit Komma trennen)
4. Wählen Sie eine Standardrolle
5. Klicken Sie auf **"Einladungen senden"**

### Rollen & Berechtigungen

| Rolle | Projekte erstellen | Benutzer verwalten | Einstellungen |
|-------|-------------------|-------------------|---------------|
| Admin | ✓ | ✓ | ✓ |
| Projektleiter | ✓ | - | Projektebene |
| Mitarbeiter | - | - | - |
| Gast (Lesezugriff) | - | - | - |

### Teams erstellen

Gruppieren Sie Benutzer in Teams:

1. Gehen Sie zu **Einstellungen → Teams**
2. Klicken Sie auf **"+ Team erstellen"**
3. Geben Sie einen Teamnamen ein
4. Fügen Sie Mitglieder hinzu
5. Weisen Sie Team-spezifische Projekte zu

### SSO-Konfiguration

Für Enterprise-Kunden: Single Sign-On einrichten

- Azure AD
- Okta
- SAML 2.0
- Google Workspace
    `,
    relatedArticles: ['account-setup', 'security-overview', 'audit-logs'],
  },

  // === SECURITY ===
  {
    slug: 'security-overview',
    title: 'Sicherheitsübersicht',
    description: 'Datenschutz, Verschlüsselung und Compliance bei CUTO.',
    category: 'security',
    lastUpdated: '2024-07-14',
    readingTime: '6 min',
    tags: ['sicherheit', 'dsgvo', 'verschlüsselung', 'compliance'],
    order: 1,
    content: `
## Sicherheit bei CUTO

Sicherheit und Datenschutz haben bei CUTO höchste Priorität.

### Datenverschlüsselung

- **In Transit:** TLS 1.3 für alle Verbindungen
- **At Rest:** AES-256 Verschlüsselung
- **Backups:** Verschlüsselt und georedundant

### DSGVO-Compliance

CUTO ist vollständig DSGVO-konform:

- 🇪🇺 Daten ausschließlich in EU-Rechenzentren
- ✅ Auftragsverarbeitungsvertrag (AVV) verfügbar
- 🔐 Recht auf Datenlöschung implementiert
- 📋 Datenschutz-Folgenabschätzung dokumentiert

### Zertifizierungen

| Zertifizierung | Status |
|----------------|--------|
| ISO 27001 | ✓ Zertifiziert |
| SOC 2 Type II | ✓ Zertifiziert |
| DSGVO | ✓ Konform |
| BSI C5 | In Vorbereitung |

### Penetration Testing

- Jährliche externe Penetrationstests
- Kontinuierliches Bug-Bounty-Programm
- Automatisierte Schwachstellen-Scans

### Incident Response

Im Falle eines Sicherheitsvorfalls:
- Benachrichtigung innerhalb von 72 Stunden
- Dediziertes Security-Response-Team
- Transparente Kommunikation
    `,
    relatedArticles: ['team-management', 'audit-logs', 'data-export'],
  },

  // === TROUBLESHOOTING ===
  {
    slug: 'common-issues',
    title: 'Häufige Probleme',
    description: 'Lösungen für die häufigsten Probleme bei der Nutzung von CUTO.',
    category: 'troubleshooting',
    lastUpdated: '2024-07-15',
    readingTime: '5 min',
    tags: ['probleme', 'fehler', 'lösungen', 'hilfe'],
    order: 1,
    content: `
## Häufige Probleme & Lösungen

### Login-Probleme

**Problem:** "Ungültige Anmeldedaten"

**Lösungen:**
1. Prüfen Sie Groß-/Kleinschreibung beim Passwort
2. Setzen Sie Ihr Passwort zurück
3. Prüfen Sie, ob 2FA aktiviert ist
4. Leeren Sie Browser-Cache und Cookies

### Synchronisationsprobleme

**Problem:** Daten werden nicht synchronisiert

**Lösungen:**
1. Prüfen Sie die Internetverbindung
2. Klicken Sie auf "Sync erzwingen" im Menü
3. Überprüfen Sie die Integrationseinstellungen
4. Kontaktieren Sie den Support bei persistenten Problemen

### Performance-Probleme

**Problem:** CUTO lädt langsam

**Lösungen:**
1. Verwenden Sie einen modernen Browser (Chrome, Firefox, Edge)
2. Deaktivieren Sie Browser-Erweiterungen
3. Reduzieren Sie die Anzahl offener Tabs
4. Prüfen Sie Ihre Internetgeschwindigkeit

### E-Mail-Benachrichtigungen

**Problem:** Keine E-Mails erhalten

**Lösungen:**
1. Prüfen Sie Ihren Spam-Ordner
2. Fügen Sie noreply@cuto.ai zu Ihren Kontakten hinzu
3. Überprüfen Sie Ihre Benachrichtigungseinstellungen
4. Kontaktieren Sie Ihren IT-Admin (Firewall-Regeln)

### Support kontaktieren

Wenn nichts hilft:
- 📧 support@cuto.de
- 💬 Live-Chat (Mo-Fr, 9-18 Uhr)
- 📞 +49 123 456 7890
    `,
    relatedArticles: ['account-setup', 'navigation-overview', 'notifications'],
  },
];

export const getArticleBySlug = (category: DocCategory, slug: string): DocArticle | undefined => {
  return docArticles.find(a => a.category === category && a.slug === slug);
};

export const getArticlesByCategory = (category: DocCategory): DocArticle[] => {
  return docArticles
    .filter(a => a.category === category)
    .sort((a, b) => a.order - b.order);
};

export const searchArticles = (query: string): DocArticle[] => {
  const lowerQuery = query.toLowerCase();
  return docArticles.filter(
    a =>
      a.title.toLowerCase().includes(lowerQuery) ||
      a.description.toLowerCase().includes(lowerQuery) ||
      a.tags.some(t => t.toLowerCase().includes(lowerQuery)) ||
      a.content.toLowerCase().includes(lowerQuery)
  );
};

export const getPopularArticles = (): DocArticle[] => {
  // Return a curated list of popular articles
  const popularSlugs = ['quickstart', 'project-structure', 'dashboard-setup', 'sap-activate-template', 'cutover-planning'];
  return docArticles.filter(a => popularSlugs.includes(a.slug));
};

