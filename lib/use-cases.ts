// Use Cases Data Structure
// This can later be replaced with a CMS (Contentful, Sanity, Strapi, etc.)

export interface UseCase {
  slug: string;
  title: string;
  description: string;
  category: UseCaseCategory;
  videoUrl?: string; // YouTube/Vimeo embed URL
  videoThumbnail?: string;
  videoDuration?: string;
  content: string; // Markdown or HTML content
  steps?: UseCaseStep[];
  proTips?: string[];
  relatedSlugs?: string[];
  publishedAt: string;
  updatedAt?: string;
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  readingTime?: string;
  featured?: boolean;
}

export interface UseCaseStep {
  title: string;
  description: string;
  image?: string;
}

export type UseCaseCategory = 
  | 'project-planning'
  | 'templates'
  | 'dashboards'
  | 'migration'
  | 'cutover'
  | 'risk-management'
  | 'team-management'
  | 'reporting';

export interface CategoryInfo {
  id: UseCaseCategory;
  name: string;
  description: string;
  icon: string; // Emoji or icon name
  color: string; // Tailwind color class
}

export const categories: CategoryInfo[] = [
  {
    id: 'project-planning',
    name: 'Projektplanung',
    description: 'Phasen, Sprints und Meilensteine planen',
    icon: '📋',
    color: 'bg-blue-500',
  },
  {
    id: 'templates',
    name: 'Templates',
    description: 'Vorlagen erstellen und nutzen',
    icon: '📄',
    color: 'bg-purple-500',
  },
  {
    id: 'dashboards',
    name: 'Dashboards',
    description: 'KPIs und Berichte visualisieren',
    icon: '📊',
    color: 'bg-green-500',
  },
  {
    id: 'migration',
    name: 'Datenmigration',
    description: 'Daten strukturiert migrieren',
    icon: '🔄',
    color: 'bg-orange-500',
  },
  {
    id: 'cutover',
    name: 'Cutover',
    description: 'Go-Live erfolgreich durchführen',
    icon: '🚀',
    color: 'bg-red-500',
  },
  {
    id: 'risk-management',
    name: 'Risikomanagement',
    description: 'Risiken identifizieren und steuern',
    icon: '⚠️',
    color: 'bg-yellow-500',
  },
  {
    id: 'team-management',
    name: 'Team & Ressourcen',
    description: 'Teams und Rollen verwalten',
    icon: '👥',
    color: 'bg-indigo-500',
  },
  {
    id: 'reporting',
    name: 'Reporting',
    description: 'Berichte und Exports erstellen',
    icon: '📈',
    color: 'bg-teal-500',
  },
];

// Sample Use Cases Data
export const useCases: UseCase[] = [
  {
    slug: 'phase-in-sprints-aufteilen',
    title: 'Wie teilt man eine Phase in Sprints auf?',
    description: 'Lernen Sie, wie Sie eine SAP-Projektphase effektiv in handhabbare Sprints unterteilen können – für bessere Übersicht und agiles Arbeiten.',
    category: 'project-planning',
    videoUrl: '', // YouTube embed URL when available
    videoDuration: '4:32',
    content: `
## Überblick

In komplexen SAP-Projekten kann eine einzelne Phase schnell unübersichtlich werden. Die Aufteilung in Sprints hilft dabei, den Fortschritt besser zu tracken und das Team fokussiert zu halten.

## Warum Sprints in SAP-Projekten?

- **Bessere Übersicht**: Kleinere Arbeitspakete sind leichter zu managen
- **Regelmäßiges Feedback**: Nach jedem Sprint können Ergebnisse reviewt werden
- **Flexibilität**: Anpassungen können schneller vorgenommen werden
- **Motivation**: Sichtbare Fortschritte in kurzen Zeiträumen

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass:
- Die Phase bereits in CUTO angelegt ist
- Die Aktivitäten der Phase definiert sind
- Das Team für die Phase zugewiesen ist
    `,
    steps: [
      {
        title: 'Phase auswählen',
        description: 'Navigieren Sie zur gewünschten Phase in Ihrem Projekt. Klicken Sie auf das Phasen-Menü und wählen Sie "Sprint-Planung".',
      },
      {
        title: 'Sprint-Dauer festlegen',
        description: 'Definieren Sie die Standard-Sprintlänge (typisch: 2-4 Wochen). CUTO berechnet automatisch die Anzahl der möglichen Sprints basierend auf der Phasendauer.',
      },
      {
        title: 'Aktivitäten zuweisen',
        description: 'Ziehen Sie die Aktivitäten per Drag & Drop in die jeweiligen Sprints. CUTO zeigt Ihnen die Auslastung pro Sprint an.',
      },
      {
        title: 'Abhängigkeiten prüfen',
        description: 'CUTO warnt Sie automatisch, wenn Aktivitäten mit Abhängigkeiten in falscher Reihenfolge geplant werden.',
      },
      {
        title: 'Sprint-Ziele definieren',
        description: 'Fügen Sie für jeden Sprint ein klares Ziel hinzu. Dies hilft dem Team, den Fokus zu behalten.',
      },
    ],
    proTips: [
      'Planen Sie einen Puffer von 10-15% für unvorhergesehene Aufgaben ein.',
      'Halten Sie Sprint-Plannings kurz – maximal 2 Stunden pro Sprint.',
      'Nutzen Sie Sprint-Retrospektiven, um kontinuierlich zu verbessern.',
      'Vermeiden Sie Sprints über Feiertage oder Urlaubszeiten.',
    ],
    relatedSlugs: ['sprint-backlog-erstellen', 'burndown-chart-verstehen', 'agile-sap-projekte'],
    publishedAt: '2024-12-15',
    author: {
      name: 'Dr. Michael Schmidt',
      role: 'SAP Project Expert',
    },
    readingTime: '8 min',
    featured: true,
  },
  {
    slug: 'sap-activate-template-nutzen',
    title: 'SAP Activate Template automatisch anlegen',
    description: 'Erfahren Sie, wie Sie mit einem Klick ein vollständiges SAP Activate Projekt mit allen Phasen und Aktivitäten erstellen.',
    category: 'templates',
    videoDuration: '3:15',
    content: `
## Was ist SAP Activate?

SAP Activate ist die offizielle Projektmethodik von SAP für S/4HANA Implementierungen. CUTO bietet vorgefertigte Templates, die alle Phasen und Best Practices enthalten.

## Enthaltene Phasen

1. **Discover** - Projektinitialisierung und Scoping
2. **Prepare** - Projektsetup und Teamaufbau
3. **Explore** - Fit-Gap-Analyse und Design
4. **Realize** - Konfiguration und Entwicklung
5. **Deploy** - Testing und Go-Live
6. **Run** - Hypercare und Optimierung
    `,
    steps: [
      {
        title: 'Neues Projekt erstellen',
        description: 'Klicken Sie auf "Neues Projekt" und wählen Sie "Aus Template erstellen".',
      },
      {
        title: 'SAP Activate auswählen',
        description: 'Wählen Sie aus den verfügbaren Templates "SAP Activate for S/4HANA".',
      },
      {
        title: 'Projektdaten eingeben',
        description: 'Geben Sie Projektname, Startdatum und geplantes Go-Live ein. CUTO berechnet automatisch die Phasendauern.',
      },
      {
        title: 'Template anpassen',
        description: 'Passen Sie das Template an Ihre Bedürfnisse an – entfernen Sie nicht benötigte Aktivitäten oder fügen Sie eigene hinzu.',
      },
    ],
    proTips: [
      'Speichern Sie angepasste Templates für zukünftige Projekte.',
      'Nutzen Sie die Schätzwerte als Ausgangspunkt und passen Sie diese basierend auf Ihrer Erfahrung an.',
      'Verknüpfen Sie das Template mit Ihren Standard-Rollen für schnellere Ressourcenplanung.',
    ],
    relatedSlugs: ['phase-in-sprints-aufteilen', 'eigene-templates-erstellen'],
    publishedAt: '2024-12-10',
    author: {
      name: 'Sarah Weber',
      role: 'SAP Consultant',
    },
    readingTime: '5 min',
    featured: true,
  },
  {
    slug: 'management-dashboard-erstellen',
    title: 'KPI Dashboard für das Management erstellen',
    description: 'Erstellen Sie aussagekräftige Dashboards, die dem Management einen schnellen Überblick über den Projektstatus geben.',
    category: 'dashboards',
    videoDuration: '6:45',
    content: `
## Warum Management Dashboards?

Das Management benötigt einen anderen Blick auf das Projekt als das Projektteam. Ein gutes Management Dashboard zeigt:

- **Projektstatus auf einen Blick** (Ampelsystem)
- **Budget vs. Ist-Kosten**
- **Meilenstein-Übersicht**
- **Top-Risiken**
- **Ressourcenauslastung**

## Best Practices

- Weniger ist mehr: Maximal 6-8 KPIs pro Dashboard
- Verwenden Sie Farben konsistent (Rot/Gelb/Grün)
- Zeigen Sie Trends, nicht nur aktuelle Werte
- Aktualisieren Sie Dashboards regelmäßig
    `,
    steps: [
      {
        title: 'Dashboard-Bereich öffnen',
        description: 'Navigieren Sie zu "Dashboards" und klicken Sie auf "Neues Dashboard erstellen".',
      },
      {
        title: 'Layout wählen',
        description: 'Wählen Sie ein vordefiniertes Layout oder erstellen Sie ein eigenes Grid.',
      },
      {
        title: 'Widgets hinzufügen',
        description: 'Ziehen Sie die gewünschten Widgets auf das Dashboard: Projektstatus, Budget-Chart, Meilensteine, etc.',
      },
      {
        title: 'Filter konfigurieren',
        description: 'Konfigurieren Sie globale Filter für Zeitraum, Projekte oder Teams.',
      },
      {
        title: 'Freigeben',
        description: 'Teilen Sie das Dashboard mit dem Management-Team oder exportieren Sie es als PDF.',
      },
    ],
    proTips: [
      'Erstellen Sie separate Dashboards für verschiedene Stakeholder-Gruppen.',
      'Nutzen Sie die automatische Aktualisierung für Live-Präsentationen.',
      'Exportieren Sie Dashboards als PDF für Offline-Meetings.',
    ],
    relatedSlugs: ['burndown-chart-verstehen', 'projektbericht-generieren'],
    publishedAt: '2024-12-08',
    author: {
      name: 'Thomas Müller',
      role: 'PMO Lead',
    },
    readingTime: '7 min',
    featured: false,
  },
  {
    slug: 'go-live-checkliste',
    title: 'Go-Live Checkliste erstellen und verwalten',
    description: 'Eine strukturierte Go-Live Checkliste ist entscheidend für einen erfolgreichen Cutover. Lernen Sie, wie Sie diese in CUTO erstellen.',
    category: 'cutover',
    videoDuration: '5:20',
    content: `
## Die Bedeutung einer Go-Live Checkliste

Der Go-Live ist der kritischste Moment eines SAP-Projekts. Eine gut strukturierte Checkliste hilft:

- Nichts zu vergessen
- Verantwortlichkeiten klar zu definieren
- Den Fortschritt in Echtzeit zu tracken
- Schnell auf Probleme zu reagieren

## Typische Checklisten-Bereiche

1. **Pre-Go-Live** (T-7 bis T-1)
2. **Cutover-Wochenende** (T-0)
3. **Post-Go-Live / Hypercare** (T+1 bis T+14)
    `,
    steps: [
      {
        title: 'Cutover-Modul öffnen',
        description: 'Navigieren Sie zum Cutover-Bereich Ihres Projekts.',
      },
      {
        title: 'Checkliste aus Template erstellen',
        description: 'Wählen Sie eine vordefinierte Go-Live Checkliste oder erstellen Sie eine neue.',
      },
      {
        title: 'Aufgaben hinzufügen',
        description: 'Fügen Sie alle notwendigen Aufgaben mit Zeitfenstern und Verantwortlichen hinzu.',
      },
      {
        title: 'Abhängigkeiten definieren',
        description: 'Verknüpfen Sie Aufgaben, die voneinander abhängen (z.B. "System herunterfahren" vor "Datenmigration starten").',
      },
      {
        title: 'Runbook generieren',
        description: 'Exportieren Sie die Checkliste als detailliertes Runbook für das Cutover-Team.',
      },
    ],
    proTips: [
      'Führen Sie einen Cutover-Drill (Trockenübung) durch, bevor der echte Go-Live stattfindet.',
      'Definieren Sie klare Rollback-Kriterien und -Prozeduren.',
      'Planen Sie ausreichend Puffer für unvorhergesehene Probleme ein.',
      'Stellen Sie sicher, dass alle Stakeholder die Eskalationswege kennen.',
    ],
    relatedSlugs: ['cutover-drill-planen', 'hypercare-phase-managen'],
    publishedAt: '2024-12-05',
    author: {
      name: 'Dr. Michael Schmidt',
      role: 'SAP Project Expert',
    },
    readingTime: '6 min',
    featured: true,
  },
  {
    slug: 'risiken-identifizieren-tracken',
    title: 'Projektrisiken identifizieren und tracken',
    description: 'Ein proaktives Risikomanagement ist der Schlüssel zum Projekterfolg. Lernen Sie, wie Sie Risiken in CUTO erfassen und überwachen.',
    category: 'risk-management',
    videoDuration: '4:10',
    content: `
## Warum Risikomanagement?

SAP-Projekte sind komplex und haben viele potenzielle Risikoquellen:

- Technische Risiken (Integration, Performance)
- Organisatorische Risiken (Change Management, Ressourcen)
- Zeitliche Risiken (Verzögerungen, Abhängigkeiten)
- Budgetäre Risiken (Scope Creep, unvorhergesehene Kosten)

## Risiko-Matrix

CUTO nutzt eine standardisierte Risiko-Matrix:
- **Eintrittswahrscheinlichkeit**: Gering / Mittel / Hoch
- **Auswirkung**: Gering / Mittel / Hoch / Kritisch
- **Risiko-Score**: Automatisch berechnet
    `,
    steps: [
      {
        title: 'Risiko-Register öffnen',
        description: 'Navigieren Sie zu "Risiken & Issues" in Ihrem Projekt.',
      },
      {
        title: 'Neues Risiko erfassen',
        description: 'Klicken Sie auf "Risiko hinzufügen" und beschreiben Sie das Risiko detailliert.',
      },
      {
        title: 'Bewertung vornehmen',
        description: 'Bewerten Sie Eintrittswahrscheinlichkeit und Auswirkung. CUTO berechnet den Risiko-Score.',
      },
      {
        title: 'Maßnahmen definieren',
        description: 'Fügen Sie präventive und reaktive Maßnahmen hinzu und weisen Sie Verantwortliche zu.',
      },
      {
        title: 'Regelmäßig reviewen',
        description: 'Nutzen Sie die Risk-Review-Funktion, um Risiken regelmäßig zu aktualisieren.',
      },
    ],
    proTips: [
      'Führen Sie zu Projektbeginn einen Risk-Workshop mit allen Stakeholdern durch.',
      'Priorisieren Sie die Top-10 Risiken und fokussieren Sie sich darauf.',
      'Verknüpfen Sie Risiken mit betroffenen Aktivitäten für bessere Transparenz.',
      'Nutzen Sie das Risiko-Dashboard für Steering-Committee-Meetings.',
    ],
    relatedSlugs: ['issue-management', 'management-dashboard-erstellen'],
    publishedAt: '2024-12-01',
    author: {
      name: 'Sarah Weber',
      role: 'SAP Consultant',
    },
    readingTime: '5 min',
    featured: false,
  },
  {
    slug: 'datenmigration-planen',
    title: 'Datenmigration strukturiert planen',
    description: 'Eine erfolgreiche Datenmigration erfordert sorgfältige Planung. Erfahren Sie, wie CUTO Sie dabei unterstützt.',
    category: 'migration',
    videoDuration: '7:30',
    content: `
## Herausforderungen der Datenmigration

Die Datenmigration ist oft der unterschätzte Teil eines SAP-Projekts:

- **Datenqualität**: Legacy-Daten sind oft inkonsistent
- **Mapping**: Alte auf neue Strukturen abbilden
- **Volumen**: Große Datenmengen effizient migrieren
- **Validierung**: Sicherstellen, dass alle Daten korrekt sind

## CUTO Migration Module

CUTO bietet spezialisierte Funktionen für:
- Migrationsplanung und -tracking
- Objekt-Katalog-Management
- Testlauf-Dokumentation
- Cut-Over-Koordination
    `,
    steps: [
      {
        title: 'Migrationsobjekte erfassen',
        description: 'Erstellen Sie einen Katalog aller zu migrierenden Objekte (Kunden, Lieferanten, Materialien, etc.).',
      },
      {
        title: 'Verantwortlichkeiten zuweisen',
        description: 'Weisen Sie für jedes Objekt einen fachlichen und technischen Verantwortlichen zu.',
      },
      {
        title: 'Testläufe planen',
        description: 'Planen Sie mehrere Testmigrationen vor dem finalen Lauf.',
      },
      {
        title: 'Fortschritt tracken',
        description: 'Nutzen Sie das Migration-Dashboard, um den Status aller Objekte zu überwachen.',
      },
      {
        title: 'Cutover-Integration',
        description: 'Verknüpfen Sie Migrationsaktivitäten mit Ihrer Go-Live Checkliste.',
      },
    ],
    proTips: [
      'Beginnen Sie früh mit der Datenbereinigung – sie dauert meist länger als geplant.',
      'Dokumentieren Sie alle Mapping-Regeln für spätere Nachvollziehbarkeit.',
      'Planen Sie mindestens 3 vollständige Testmigrationen ein.',
      'Involvieren Sie die Fachbereiche frühzeitig bei der Datenvalidierung.',
    ],
    relatedSlugs: ['go-live-checkliste', 'datenqualitaet-sicherstellen'],
    publishedAt: '2024-11-28',
    author: {
      name: 'Thomas Müller',
      role: 'PMO Lead',
    },
    readingTime: '9 min',
    featured: false,
  },
];

// Helper functions
export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}

export function getUseCasesByCategory(category: UseCaseCategory): UseCase[] {
  return useCases.filter((uc) => uc.category === category);
}

export function getFeaturedUseCases(): UseCase[] {
  return useCases.filter((uc) => uc.featured);
}

export function getRelatedUseCases(useCase: UseCase): UseCase[] {
  if (!useCase.relatedSlugs) return [];
  return useCase.relatedSlugs
    .map((slug) => getUseCaseBySlug(slug))
    .filter((uc): uc is UseCase => uc !== undefined);
}

export function getCategoryInfo(categoryId: UseCaseCategory): CategoryInfo | undefined {
  return categories.find((cat) => cat.id === categoryId);
}

export function getAllCategories(): CategoryInfo[] {
  return categories;
}

export function getUseCasesCount(): number {
  return useCases.length;
}
