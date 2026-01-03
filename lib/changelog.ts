// Changelog & Roadmap Data Structure

export type ChangeType = 'feature' | 'improvement' | 'bugfix' | 'security' | 'breaking';
export type RoadmapStatus = 'planned' | 'in-progress' | 'completed' | 'shipped';
export type RoadmapQuarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description?: string;
  changes: Change[];
}

export interface Change {
  type: ChangeType;
  title: string;
  description?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  quarter: RoadmapQuarter;
  year: number;
  category: string;
  votes?: number;
}

// Change type configuration
export const changeTypeConfig: Record<ChangeType, { label: string; color: string; icon: string }> = {
  feature: {
    label: 'Neu',
    color: 'bg-green-500',
    icon: '✨',
  },
  improvement: {
    label: 'Verbessert',
    color: 'bg-blue-500',
    icon: '💎',
  },
  bugfix: {
    label: 'Bugfix',
    color: 'bg-orange-500',
    icon: '🐛',
  },
  security: {
    label: 'Sicherheit',
    color: 'bg-red-500',
    icon: '🔒',
  },
  breaking: {
    label: 'Breaking Change',
    color: 'bg-purple-500',
    icon: '⚠️',
  },
};

// Roadmap status configuration
export const roadmapStatusConfig: Record<RoadmapStatus, { label: string; color: string; icon: string }> = {
  planned: {
    label: 'Geplant',
    color: 'bg-gray-400',
    icon: '📋',
  },
  'in-progress': {
    label: 'In Entwicklung',
    color: 'bg-blue-500',
    icon: '🔨',
  },
  completed: {
    label: 'Fertig',
    color: 'bg-green-500',
    icon: '✅',
  },
  shipped: {
    label: 'Veröffentlicht',
    color: 'bg-purple-500',
    icon: '🚀',
  },
};

// Sample Changelog Data
export const changelog: ChangelogEntry[] = [
  {
    version: '2.4.0',
    date: '2024-12-20',
    title: 'Dezember Release',
    description: 'Großes Update mit neuen Dashboard-Funktionen und Performance-Verbesserungen.',
    changes: [
      {
        type: 'feature',
        title: 'Neues Executive Dashboard',
        description: 'Übersichtliches C-Level Dashboard mit den wichtigsten KPIs auf einen Blick.',
      },
      {
        type: 'feature',
        title: 'Dark Mode',
        description: 'CUTO ist jetzt auch im Dark Mode verfügbar - schonend für die Augen bei Nachtarbeit.',
      },
      {
        type: 'improvement',
        title: 'Schnellere Ladezeiten',
        description: 'Dashboard-Ladezeiten um bis zu 40% reduziert durch optimierte Datenbankabfragen.',
      },
      {
        type: 'improvement',
        title: 'Verbesserte Drag & Drop Erfahrung',
        description: 'Flüssigeres Drag & Drop beim Verschieben von Aktivitäten im Gantt-Chart.',
      },
      {
        type: 'bugfix',
        title: 'Filterung in Reports',
        description: 'Problem behoben, bei dem bestimmte Filter in Excel-Exporten nicht übernommen wurden.',
      },
    ],
  },
  {
    version: '2.3.2',
    date: '2024-12-05',
    title: 'Hotfix Release',
    changes: [
      {
        type: 'bugfix',
        title: 'Login-Problem behoben',
        description: 'Seltenes Problem bei der Zwei-Faktor-Authentifizierung behoben.',
      },
      {
        type: 'security',
        title: 'Sicherheitsupdate',
        description: 'Aktualisierung der Abhängigkeiten zur Behebung von Sicherheitslücken.',
      },
    ],
  },
  {
    version: '2.3.0',
    date: '2024-11-15',
    title: 'November Release',
    description: 'Fokus auf Collaboration-Features und Integrationen.',
    changes: [
      {
        type: 'feature',
        title: 'Microsoft Teams Integration',
        description: 'CUTO-Benachrichtigungen direkt in Microsoft Teams empfangen.',
      },
      {
        type: 'feature',
        title: 'Kommentar-Mentions',
        description: 'Teammitglieder mit @-Mentions in Kommentaren erwähnen und benachrichtigen.',
      },
      {
        type: 'feature',
        title: 'Aktivitäten-Vorlagen',
        description: 'Häufig verwendete Aktivitäten als Vorlage speichern und wiederverwenden.',
      },
      {
        type: 'improvement',
        title: 'Verbessertes Risiko-Dashboard',
        description: 'Neue Visualisierungen und Filtermöglichkeiten im Risiko-Management.',
      },
      {
        type: 'improvement',
        title: 'Export nach PowerPoint',
        description: 'Dashboards können jetzt direkt als PowerPoint-Präsentation exportiert werden.',
      },
    ],
  },
  {
    version: '2.2.0',
    date: '2024-10-20',
    title: 'Oktober Release',
    description: 'Neue Cutover-Funktionen und Mobile App Updates.',
    changes: [
      {
        type: 'feature',
        title: 'Cutover Runbook Generator',
        description: 'Automatische Generierung von Go-Live Runbooks basierend auf Checklisten.',
      },
      {
        type: 'feature',
        title: 'Mobile App: Offline-Modus',
        description: 'Aktivitäten auch ohne Internetverbindung als erledigt markieren.',
      },
      {
        type: 'improvement',
        title: 'Bulk-Bearbeitung',
        description: 'Mehrere Aktivitäten gleichzeitig bearbeiten (Status, Verantwortlicher, Datum).',
      },
      {
        type: 'breaking',
        title: 'API v1 Deprecation',
        description: 'API v1 wird zum 01.01.2025 abgeschaltet. Bitte auf API v2 migrieren.',
      },
    ],
  },
  {
    version: '2.1.0',
    date: '2024-09-10',
    title: 'September Release',
    changes: [
      {
        type: 'feature',
        title: 'BPMN 2.0 Editor',
        description: 'Vollständiger BPMN 2.0 Editor zur Prozessmodellierung direkt in CUTO.',
      },
      {
        type: 'feature',
        title: 'Ressourcen-Heatmap',
        description: 'Visualisierung der Ressourcenauslastung über alle Projekte hinweg.',
      },
      {
        type: 'improvement',
        title: 'Verbesserte Suche',
        description: 'Globale Suche durchsucht jetzt auch Kommentare und Anhänge.',
      },
      {
        type: 'bugfix',
        title: 'Zeitzonen-Problem',
        description: 'Korrektur der Datumsanzeige bei unterschiedlichen Zeitzonen im Team.',
      },
    ],
  },
  {
    version: '2.0.0',
    date: '2024-08-01',
    title: 'CUTO 2.0 - Major Release',
    description: 'Komplett überarbeitete Benutzeroberfläche und neue Architektur für bessere Performance.',
    changes: [
      {
        type: 'feature',
        title: 'Neue Benutzeroberfläche',
        description: 'Modernes, intuitives Design mit verbesserter Navigation und Accessibility.',
      },
      {
        type: 'feature',
        title: 'Multi-Projekt-Dashboard',
        description: 'Alle Projekte auf einen Blick mit konfigurierbaren Widgets.',
      },
      {
        type: 'feature',
        title: 'Echtzeit-Kollaboration',
        description: 'Änderungen werden sofort für alle Teammitglieder sichtbar.',
      },
      {
        type: 'improvement',
        title: '10x schnellere API',
        description: 'Komplett überarbeitete Backend-Architektur für deutlich bessere Performance.',
      },
      {
        type: 'breaking',
        title: 'Neues Berechtigungssystem',
        description: 'Granularere Berechtigungen erfordern einmalige Neukonfiguration.',
      },
    ],
  },
];

// Sample Roadmap Data
export const roadmap: RoadmapItem[] = [
  // Q1 2025
  {
    id: 'ai-assistant',
    title: 'KI-Projektassistent',
    description: 'Intelligente Vorschläge für Ressourcenplanung, Risiken und Optimierungen basierend auf historischen Projektdaten.',
    status: 'in-progress',
    quarter: 'Q1',
    year: 2025,
    category: 'AI & Automation',
    votes: 234,
  },
  {
    id: 'slack-integration',
    title: 'Slack Integration',
    description: 'Native Integration mit Slack für Benachrichtigungen und Slash-Commands.',
    status: 'in-progress',
    quarter: 'Q1',
    year: 2025,
    category: 'Integrationen',
    votes: 189,
  },
  {
    id: 'custom-fields',
    title: 'Benutzerdefinierte Felder',
    description: 'Eigene Felder für Aktivitäten, Projekte und Ressourcen definieren.',
    status: 'completed',
    quarter: 'Q1',
    year: 2025,
    category: 'Customization',
    votes: 156,
  },
  // Q2 2025
  {
    id: 'advanced-reporting',
    title: 'Advanced Reporting Engine',
    description: 'Eigene Reports mit Drag & Drop erstellen und automatisch versenden.',
    status: 'planned',
    quarter: 'Q2',
    year: 2025,
    category: 'Reporting',
    votes: 198,
  },
  {
    id: 'sap-cloud-alm',
    title: 'SAP Cloud ALM Integration',
    description: 'Bidirektionale Synchronisation mit SAP Cloud ALM für nahtlose Zusammenarbeit.',
    status: 'planned',
    quarter: 'Q2',
    year: 2025,
    category: 'Integrationen',
    votes: 167,
  },
  {
    id: 'mobile-app-v2',
    title: 'Mobile App 2.0',
    description: 'Komplett überarbeitete Mobile App mit neuem Design und Offline-Capabilities.',
    status: 'planned',
    quarter: 'Q2',
    year: 2025,
    category: 'Mobile',
    votes: 145,
  },
  // Q3 2025
  {
    id: 'portfolio-management',
    title: 'Portfolio Management',
    description: 'Projektportfolios verwalten mit Budgetplanung und strategischer Ausrichtung.',
    status: 'planned',
    quarter: 'Q3',
    year: 2025,
    category: 'Enterprise',
    votes: 134,
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Automatisierte Workflows mit Triggern, Bedingungen und Aktionen erstellen.',
    status: 'planned',
    quarter: 'Q3',
    year: 2025,
    category: 'AI & Automation',
    votes: 178,
  },
  {
    id: 'jira-sync',
    title: 'Jira Bidirektionale Sync',
    description: 'Zweiwege-Synchronisation mit Jira für hybride Teams.',
    status: 'planned',
    quarter: 'Q3',
    year: 2025,
    category: 'Integrationen',
    votes: 212,
  },
  // Q4 2025
  {
    id: 'ai-forecasting',
    title: 'KI-basierte Prognosen',
    description: 'Automatische Vorhersage von Projektrisiken und Verzögerungen mit Machine Learning.',
    status: 'planned',
    quarter: 'Q4',
    year: 2025,
    category: 'AI & Automation',
    votes: 201,
  },
  {
    id: 'multi-tenant',
    title: 'Multi-Tenant für Beratungen',
    description: 'Mehrere Mandanten für Beratungsunternehmen mit separaten Daten und Branding.',
    status: 'planned',
    quarter: 'Q4',
    year: 2025,
    category: 'Enterprise',
    votes: 89,
  },
  {
    id: 'public-api-v3',
    title: 'Public API v3',
    description: 'Neue API-Version mit GraphQL-Support und verbesserter Dokumentation.',
    status: 'planned',
    quarter: 'Q4',
    year: 2025,
    category: 'Developer',
    votes: 123,
  },
  // Shipped items (2024)
  {
    id: 'dark-mode',
    title: 'Dark Mode',
    description: 'Augenschonender Dark Mode für die gesamte Anwendung.',
    status: 'shipped',
    quarter: 'Q4',
    year: 2024,
    category: 'UX',
    votes: 287,
  },
  {
    id: 'teams-integration',
    title: 'Microsoft Teams Integration',
    description: 'Native Integration mit Microsoft Teams.',
    status: 'shipped',
    quarter: 'Q4',
    year: 2024,
    category: 'Integrationen',
    votes: 245,
  },
  {
    id: 'bpmn-editor',
    title: 'BPMN 2.0 Editor',
    description: 'Vollständiger BPMN-Editor für Prozessmodellierung.',
    status: 'shipped',
    quarter: 'Q3',
    year: 2024,
    category: 'Features',
    votes: 198,
  },
];

// Helper functions
export function getChangelogByVersion(version: string): ChangelogEntry | undefined {
  return changelog.find((entry) => entry.version === version);
}

export function getLatestChangelog(): ChangelogEntry | undefined {
  return changelog[0];
}

export function getRoadmapByQuarter(quarter: RoadmapQuarter, year: number): RoadmapItem[] {
  return roadmap.filter((item) => item.quarter === quarter && item.year === year);
}

export function getRoadmapByStatus(status: RoadmapStatus): RoadmapItem[] {
  return roadmap.filter((item) => item.status === status);
}

export function getRoadmapCategories(): string[] {
  return [...new Set(roadmap.map((item) => item.category))];
}

