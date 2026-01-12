// Comparison Data Structure

import { Locale } from './i18n';
import { translations } from './i18n/translations';

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

// Get feature categories with translations
export function getFeatureCategories(locale: Locale = 'de'): Record<FeatureCategory, { name: string; icon: string }> {
  const t = translations[locale]?.compare;
  const fallbackT = translations['de']?.compare;
  
  return {
    'project-management': { 
      name: t?.categories?.projectManagement || fallbackT?.categories?.projectManagement || 'Projektmanagement', 
      icon: '📋' 
    },
    'sap-specific': { 
      name: t?.categories?.sapSpecific || fallbackT?.categories?.sapSpecific || 'SAP-spezifisch', 
      icon: '🔷' 
    },
    'collaboration': { 
      name: t?.categories?.collaboration || fallbackT?.categories?.collaboration || 'Zusammenarbeit', 
      icon: '👥' 
    },
    'reporting': { 
      name: t?.categories?.reporting || fallbackT?.categories?.reporting || 'Reporting & Analytics', 
      icon: '📊' 
    },
    'integrations': { 
      name: t?.categories?.integrations || fallbackT?.categories?.integrations || 'Integrationen', 
      icon: '🔗' 
    },
    'pricing-licensing': { 
      name: t?.categories?.pricingLicensing || fallbackT?.categories?.pricingLicensing || 'Preis & Lizenzierung', 
      icon: '💰' 
    },
  };
}

// Get feature support config with translations
export function getFeatureSupportConfig(locale: Locale = 'de'): Record<FeatureSupport, { label: string; color: string; icon: string }> {
  const t = translations[locale]?.compare;
  const fallbackT = translations['de']?.compare;
  
  return {
    full: { 
      label: t?.support?.full || fallbackT?.support?.full || 'Vollständig', 
      color: 'text-green-600', 
      icon: '✓' 
    },
    partial: { 
      label: t?.support?.partial || fallbackT?.support?.partial || 'Teilweise', 
      color: 'text-yellow-600', 
      icon: '◐' 
    },
    none: { 
      label: t?.support?.none || fallbackT?.support?.none || 'Nicht verfügbar', 
      color: 'text-red-500', 
      icon: '✗' 
    },
    addon: { 
      label: t?.support?.addon || fallbackT?.support?.addon || 'Add-on/Extra', 
      color: 'text-blue-500', 
      icon: '⊕' 
    },
  };
}

// Get products with translations
export function getProducts(locale: Locale = 'de'): ComparisonProduct[] {
  const t = translations[locale]?.compare;
  const fallbackT = translations['de']?.compare;
  
  return [
    {
      id: 'cuto',
      name: 'CUTO',
      tagline: t?.products?.cuto?.tagline || fallbackT?.products?.cuto?.tagline || 'Built for SAP Projects',
      description: t?.products?.cuto?.description || fallbackT?.products?.cuto?.description || 'Speziell für SAP-Projektmanagement entwickelte Lösung mit vorgefertigten Templates und Cutover-Management.',
      isHighlighted: true,
      pricing: t?.products?.cuto?.pricing || fallbackT?.products?.cuto?.pricing || 'Ab €49/Monat',
      targetAudience: t?.products?.cuto?.targetAudience || fallbackT?.products?.cuto?.targetAudience || 'SAP-Projektteams, Berater, Systemintegratoren',
      strengths: t?.products?.cuto?.strengths || fallbackT?.products?.cuto?.strengths || [
        'SAP-spezifische Templates (Activate, etc.)',
        'Integriertes Cutover-Management',
        'BPMN 2.0 Prozesseditor',
        'Datenmigrations-Tracking',
        'Einfache Einrichtung',
      ],
      weaknesses: t?.products?.cuto?.weaknesses || fallbackT?.products?.cuto?.weaknesses || [
        'Fokus auf SAP-Projekte',
        'Neueres Produkt am Markt',
      ],
    },
    {
      id: 'jira',
      name: 'Jira',
      tagline: t?.products?.jira?.tagline || fallbackT?.products?.jira?.tagline || 'Agile Project Management',
      description: t?.products?.jira?.description || fallbackT?.products?.jira?.description || 'Weit verbreitetes Tool für agiles Projektmanagement, ursprünglich für Softwareentwicklung konzipiert.',
      pricing: t?.products?.jira?.pricing || fallbackT?.products?.jira?.pricing || 'Ab $7.75/User/Monat',
      targetAudience: t?.products?.jira?.targetAudience || fallbackT?.products?.jira?.targetAudience || 'Software-Entwicklungsteams, IT-Abteilungen',
      strengths: t?.products?.jira?.strengths || fallbackT?.products?.jira?.strengths || [
        'Große Community & Marketplace',
        'Flexible Workflows',
        'Starke DevOps-Integration',
        'Umfangreiche API',
      ],
      weaknesses: t?.products?.jira?.weaknesses || fallbackT?.products?.jira?.weaknesses || [
        'Keine SAP-spezifischen Features',
        'Komplexe Konfiguration nötig',
        'Kann überwältigend sein',
        'Kein Cutover-Management',
      ],
    },
    {
      id: 'sap-alm',
      name: 'SAP Cloud ALM',
      tagline: t?.products?.sapAlm?.tagline || fallbackT?.products?.sapAlm?.tagline || 'SAP Application Lifecycle Management',
      description: t?.products?.sapAlm?.description || fallbackT?.products?.sapAlm?.description || 'Offizielle SAP-Lösung für Application Lifecycle Management und Projektimplementierung.',
      pricing: t?.products?.sapAlm?.pricing || fallbackT?.products?.sapAlm?.pricing || 'Inkl. bei SAP Enterprise Support',
      targetAudience: t?.products?.sapAlm?.targetAudience || fallbackT?.products?.sapAlm?.targetAudience || 'SAP-Kunden mit Enterprise Support',
      strengths: t?.products?.sapAlm?.strengths || fallbackT?.products?.sapAlm?.strengths || [
        'Native SAP-Integration',
        'Teil des SAP-Ökosystems',
        'Inkludiert bei Enterprise Support',
        'SAP Best Practices',
      ],
      weaknesses: t?.products?.sapAlm?.weaknesses || fallbackT?.products?.sapAlm?.weaknesses || [
        'Steile Lernkurve',
        'Begrenzte Flexibilität',
        'Nur für SAP-Landschaft',
        'Komplexe Benutzeroberfläche',
      ],
    },
  ];
}

// Feature IDs (constant, language-independent)
export const featureIds = [
  // Project Management
  'gantt-chart',
  'kanban-board',
  'sprint-planning',
  'resource-management',
  'time-tracking',
  'dependencies',
  'milestones',
  // SAP-specific
  'sap-activate',
  'cutover-management',
  'data-migration',
  'bpmn-editor',
  'go-live-checklist',
  'hypercare',
  'transport-tracking',
  // Collaboration
  'comments',
  'mentions',
  'notifications',
  'file-sharing',
  'real-time',
  // Reporting
  'dashboards',
  'custom-reports',
  'export-excel',
  'export-pdf',
  'export-ppt',
  'risk-reports',
  // Integrations
  'ms-teams',
  'slack',
  'sap-integration',
  'jira-sync',
  'api',
  'sso',
  // Pricing & Licensing
  'free-tier',
  'per-user',
  'unlimited-projects',
  'on-premise',
  'data-residency',
] as const;

// Feature metadata (category mapping)
const featureMetadata: Record<string, FeatureCategory> = {
  // Project Management
  'gantt-chart': 'project-management',
  'kanban-board': 'project-management',
  'sprint-planning': 'project-management',
  'resource-management': 'project-management',
  'time-tracking': 'project-management',
  'dependencies': 'project-management',
  'milestones': 'project-management',
  // SAP-specific
  'sap-activate': 'sap-specific',
  'cutover-management': 'sap-specific',
  'data-migration': 'sap-specific',
  'bpmn-editor': 'sap-specific',
  'go-live-checklist': 'sap-specific',
  'hypercare': 'sap-specific',
  'transport-tracking': 'sap-specific',
  // Collaboration
  'comments': 'collaboration',
  'mentions': 'collaboration',
  'notifications': 'collaboration',
  'file-sharing': 'collaboration',
  'real-time': 'collaboration',
  // Reporting
  'dashboards': 'reporting',
  'custom-reports': 'reporting',
  'export-excel': 'reporting',
  'export-pdf': 'reporting',
  'export-ppt': 'reporting',
  'risk-reports': 'reporting',
  // Integrations
  'ms-teams': 'integrations',
  'slack': 'integrations',
  'sap-integration': 'integrations',
  'jira-sync': 'integrations',
  'api': 'integrations',
  'sso': 'integrations',
  // Pricing & Licensing
  'free-tier': 'pricing-licensing',
  'per-user': 'pricing-licensing',
  'unlimited-projects': 'pricing-licensing',
  'on-premise': 'pricing-licensing',
  'data-residency': 'pricing-licensing',
};

// Get features with translations
export function getFeatures(locale: Locale = 'de'): ComparisonFeature[] {
  const t = translations[locale]?.compare;
  const fallbackT = translations['de']?.compare;
  
  return featureIds.map((id) => {
    const category = featureMetadata[id];
    const name = t?.featureNames?.[id] || fallbackT?.featureNames?.[id] || id;
    
    return {
      id,
      name,
      category,
    };
  });
}

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
export function getFeaturesByCategory(category: FeatureCategory, locale: Locale = 'de'): ComparisonFeature[] {
  const features = getFeatures(locale);
  return features.filter((f) => f.category === category);
}

export function getFeatureSupport(featureId: string, productId: string): FeatureSupport | string {
  const comparison = featureComparisons.find((c) => c.featureId === featureId);
  return comparison?.support[productId] || 'none';
}

export function getProductById(productId: string, locale: Locale = 'de'): ComparisonProduct | undefined {
  const products = getProducts(locale);
  return products.find((p) => p.id === productId);
}

export function countFullSupport(productId: string): number {
  return featureComparisons.filter((c) => c.support[productId] === 'full').length;
}

