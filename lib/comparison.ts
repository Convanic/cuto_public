// Comparison Data Structure

export type FeatureSupport = 'full' | 'partial' | 'none' | 'addon';

export interface ComparisonFeature {
  id: string;
  name: string;
  description?: string;
  category: FeatureCategory;
}

export interface ComparisonProduct {
  id: string;
  name: string;
  logo?: string;
  tagline: string;
  description: string;
  isHighlighted?: boolean; // For CUTO
  pricing: string;
  targetAudience: string;
  strengths: string[];
  weaknesses: string[];
}

export interface FeatureComparison {
  featureId: string;
  support: Record<string, FeatureSupport | string>;
}

export type FeatureCategory = 
  | 'project-management'
  | 'sap-specific'
  | 'collaboration'
  | 'reporting'
  | 'integrations'
  | 'pricing-licensing';

export const featureCategories: Record<FeatureCategory, { name: string; icon: string }> = {
  'project-management': { name: 'Projektmanagement', icon: '📋' },
  'sap-specific': { name: 'SAP-spezifisch', icon: '🔷' },
  'collaboration': { name: 'Zusammenarbeit', icon: '👥' },
  'reporting': { name: 'Reporting & Analytics', icon: '📊' },
  'integrations': { name: 'Integrationen', icon: '🔗' },
  'pricing-licensing': { name: 'Preis & Lizenzierung', icon: '💰' },
};

export const featureSupportConfig: Record<FeatureSupport, { label: string; color: string; icon: string }> = {
  full: { label: 'Vollständig', color: 'text-green-600', icon: '✓' },
  partial: { label: 'Teilweise', color: 'text-yellow-600', icon: '◐' },
  none: { label: 'Nicht verfügbar', color: 'text-red-500', icon: '✗' },
  addon: { label: 'Add-on/Extra', color: 'text-blue-500', icon: '⊕' },
};

// Products to compare
export const products: ComparisonProduct[] = [
  {
    id: 'cuto',
    name: 'CUTO',
    tagline: 'Built for SAP Projects',
    description: 'Speziell für SAP-Projektmanagement entwickelte Lösung mit vorgefertigten Templates und Cutover-Management.',
    isHighlighted: true,
    pricing: 'Ab €49/Monat',
    targetAudience: 'SAP-Projektteams, Berater, Systemintegratoren',
    strengths: [
      'SAP-spezifische Templates (Activate, etc.)',
      'Integriertes Cutover-Management',
      'BPMN 2.0 Prozesseditor',
      'Datenmigrations-Tracking',
      'Einfache Einrichtung',
    ],
    weaknesses: [
      'Fokus auf SAP-Projekte',
      'Neueres Produkt am Markt',
    ],
  },
  {
    id: 'jira',
    name: 'Jira',
    tagline: 'Agile Project Management',
    description: 'Weit verbreitetes Tool für agiles Projektmanagement, ursprünglich für Softwareentwicklung konzipiert.',
    pricing: 'Ab $7.75/User/Monat',
    targetAudience: 'Software-Entwicklungsteams, IT-Abteilungen',
    strengths: [
      'Große Community & Marketplace',
      'Flexible Workflows',
      'Starke DevOps-Integration',
      'Umfangreiche API',
    ],
    weaknesses: [
      'Keine SAP-spezifischen Features',
      'Komplexe Konfiguration nötig',
      'Kann überwältigend sein',
      'Kein Cutover-Management',
    ],
  },
  {
    id: 'sap-alm',
    name: 'SAP Cloud ALM',
    tagline: 'SAP Application Lifecycle Management',
    description: 'Offizielle SAP-Lösung für Application Lifecycle Management und Projektimplementierung.',
    pricing: 'Inkl. bei SAP Enterprise Support',
    targetAudience: 'SAP-Kunden mit Enterprise Support',
    strengths: [
      'Native SAP-Integration',
      'Teil des SAP-Ökosystems',
      'Inkludiert bei Enterprise Support',
      'SAP Best Practices',
    ],
    weaknesses: [
      'Steile Lernkurve',
      'Begrenzte Flexibilität',
      'Nur für SAP-Landschaft',
      'Komplexe Benutzeroberfläche',
    ],
  },
];

// Features to compare
export const features: ComparisonFeature[] = [
  // Project Management
  { id: 'gantt-chart', name: 'Gantt-Chart', category: 'project-management' },
  { id: 'kanban-board', name: 'Kanban-Board', category: 'project-management' },
  { id: 'sprint-planning', name: 'Sprint-Planung', category: 'project-management' },
  { id: 'resource-management', name: 'Ressourcenmanagement', category: 'project-management' },
  { id: 'time-tracking', name: 'Zeiterfassung', category: 'project-management' },
  { id: 'dependencies', name: 'Abhängigkeiten', category: 'project-management' },
  { id: 'milestones', name: 'Meilensteine', category: 'project-management' },
  
  // SAP-specific
  { id: 'sap-activate', name: 'SAP Activate Templates', category: 'sap-specific' },
  { id: 'cutover-management', name: 'Cutover-Management', category: 'sap-specific' },
  { id: 'data-migration', name: 'Datenmigrations-Tracking', category: 'sap-specific' },
  { id: 'bpmn-editor', name: 'BPMN 2.0 Editor', category: 'sap-specific' },
  { id: 'go-live-checklist', name: 'Go-Live Checklisten', category: 'sap-specific' },
  { id: 'hypercare', name: 'Hypercare-Management', category: 'sap-specific' },
  { id: 'transport-tracking', name: 'Transport-Tracking', category: 'sap-specific' },
  
  // Collaboration
  { id: 'comments', name: 'Kommentare & Diskussionen', category: 'collaboration' },
  { id: 'mentions', name: '@-Mentions', category: 'collaboration' },
  { id: 'notifications', name: 'Benachrichtigungen', category: 'collaboration' },
  { id: 'file-sharing', name: 'Dateianhänge', category: 'collaboration' },
  { id: 'real-time', name: 'Echtzeit-Kollaboration', category: 'collaboration' },
  
  // Reporting
  { id: 'dashboards', name: 'Dashboards', category: 'reporting' },
  { id: 'custom-reports', name: 'Benutzerdefinierte Reports', category: 'reporting' },
  { id: 'export-excel', name: 'Excel-Export', category: 'reporting' },
  { id: 'export-pdf', name: 'PDF-Export', category: 'reporting' },
  { id: 'export-ppt', name: 'PowerPoint-Export', category: 'reporting' },
  { id: 'risk-reports', name: 'Risiko-Reports', category: 'reporting' },
  
  // Integrations
  { id: 'ms-teams', name: 'Microsoft Teams', category: 'integrations' },
  { id: 'slack', name: 'Slack', category: 'integrations' },
  { id: 'sap-integration', name: 'SAP-Systeme', category: 'integrations' },
  { id: 'jira-sync', name: 'Jira-Synchronisation', category: 'integrations' },
  { id: 'api', name: 'REST API', category: 'integrations' },
  { id: 'sso', name: 'Single Sign-On (SSO)', category: 'integrations' },
  
  // Pricing & Licensing
  { id: 'free-tier', name: 'Kostenlose Version', category: 'pricing-licensing' },
  { id: 'per-user', name: 'Pro-User-Lizenzierung', category: 'pricing-licensing' },
  { id: 'unlimited-projects', name: 'Unbegrenzte Projekte', category: 'pricing-licensing' },
  { id: 'on-premise', name: 'On-Premise Option', category: 'pricing-licensing' },
  { id: 'data-residency', name: 'EU-Datenspeicherung', category: 'pricing-licensing' },
];

// Feature support matrix
export const featureComparisons: FeatureComparison[] = [
  // Project Management
  { featureId: 'gantt-chart', support: { cuto: 'full', jira: 'addon', 'sap-alm': 'partial' } },
  { featureId: 'kanban-board', support: { cuto: 'full', jira: 'full', 'sap-alm': 'partial' } },
  { featureId: 'sprint-planning', support: { cuto: 'full', jira: 'full', 'sap-alm': 'partial' } },
  { featureId: 'resource-management', support: { cuto: 'full', jira: 'partial', 'sap-alm': 'full' } },
  { featureId: 'time-tracking', support: { cuto: 'full', jira: 'addon', 'sap-alm': 'partial' } },
  { featureId: 'dependencies', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
  { featureId: 'milestones', support: { cuto: 'full', jira: 'partial', 'sap-alm': 'full' } },
  
  // SAP-specific
  { featureId: 'sap-activate', support: { cuto: 'full', jira: 'none', 'sap-alm': 'full' } },
  { featureId: 'cutover-management', support: { cuto: 'full', jira: 'none', 'sap-alm': 'partial' } },
  { featureId: 'data-migration', support: { cuto: 'full', jira: 'none', 'sap-alm': 'partial' } },
  { featureId: 'bpmn-editor', support: { cuto: 'full', jira: 'none', 'sap-alm': 'partial' } },
  { featureId: 'go-live-checklist', support: { cuto: 'full', jira: 'partial', 'sap-alm': 'partial' } },
  { featureId: 'hypercare', support: { cuto: 'full', jira: 'none', 'sap-alm': 'partial' } },
  { featureId: 'transport-tracking', support: { cuto: 'partial', jira: 'none', 'sap-alm': 'full' } },
  
  // Collaboration
  { featureId: 'comments', support: { cuto: 'full', jira: 'full', 'sap-alm': 'partial' } },
  { featureId: 'mentions', support: { cuto: 'full', jira: 'full', 'sap-alm': 'partial' } },
  { featureId: 'notifications', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
  { featureId: 'file-sharing', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
  { featureId: 'real-time', support: { cuto: 'full', jira: 'full', 'sap-alm': 'partial' } },
  
  // Reporting
  { featureId: 'dashboards', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
  { featureId: 'custom-reports', support: { cuto: 'full', jira: 'addon', 'sap-alm': 'partial' } },
  { featureId: 'export-excel', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
  { featureId: 'export-pdf', support: { cuto: 'full', jira: 'addon', 'sap-alm': 'full' } },
  { featureId: 'export-ppt', support: { cuto: 'full', jira: 'none', 'sap-alm': 'none' } },
  { featureId: 'risk-reports', support: { cuto: 'full', jira: 'partial', 'sap-alm': 'full' } },
  
  // Integrations
  { featureId: 'ms-teams', support: { cuto: 'full', jira: 'full', 'sap-alm': 'partial' } },
  { featureId: 'slack', support: { cuto: 'partial', jira: 'full', 'sap-alm': 'none' } },
  { featureId: 'sap-integration', support: { cuto: 'full', jira: 'addon', 'sap-alm': 'full' } },
  { featureId: 'jira-sync', support: { cuto: 'partial', jira: 'full', 'sap-alm': 'partial' } },
  { featureId: 'api', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
  { featureId: 'sso', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
  
  // Pricing & Licensing
  { featureId: 'free-tier', support: { cuto: 'partial', jira: 'full', 'sap-alm': 'none' } },
  { featureId: 'per-user', support: { cuto: 'full', jira: 'full', 'sap-alm': 'none' } },
  { featureId: 'unlimited-projects', support: { cuto: 'full', jira: 'partial', 'sap-alm': 'full' } },
  { featureId: 'on-premise', support: { cuto: 'partial', jira: 'full', 'sap-alm': 'none' } },
  { featureId: 'data-residency', support: { cuto: 'full', jira: 'full', 'sap-alm': 'full' } },
];

// Helper functions
export function getFeaturesByCategory(category: FeatureCategory): ComparisonFeature[] {
  return features.filter((f) => f.category === category);
}

export function getFeatureSupport(featureId: string, productId: string): FeatureSupport | string {
  const comparison = featureComparisons.find((c) => c.featureId === featureId);
  return comparison?.support[productId] || 'none';
}

export function getProductById(productId: string): ComparisonProduct | undefined {
  return products.find((p) => p.id === productId);
}

export function countFullSupport(productId: string): number {
  return featureComparisons.filter((c) => c.support[productId] === 'full').length;
}

