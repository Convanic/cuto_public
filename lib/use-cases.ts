// Use Cases Data Structure
// This can later be replaced with a CMS (Contentful, Sanity, Strapi, etc.)

import { Locale } from './i18n';
import { translations } from './i18n/translations';

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

// Static metadata for use cases (not translated)
const useCaseMetadata: Record<string, {
  slug: string;
  category: UseCaseCategory;
  videoUrl?: string;
  videoDuration?: string;
  relatedSlugs?: string[];
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
}> = {
  'phase-in-sprints-aufteilen': {
    slug: 'phase-in-sprints-aufteilen',
    category: 'project-planning',
    videoUrl: '',
    videoDuration: '4:32',
    relatedSlugs: ['sprint-backlog-erstellen', 'burndown-chart-verstehen', 'agile-sap-projekte'],
    publishedAt: '2024-12-15',
    featured: true,
  },
  'sap-activate-template-nutzen': {
    slug: 'sap-activate-template-nutzen',
    category: 'templates',
    videoDuration: '3:15',
    relatedSlugs: ['phase-in-sprints-aufteilen', 'eigene-templates-erstellen'],
    publishedAt: '2024-12-10',
    featured: true,
  },
  'management-dashboard-erstellen': {
    slug: 'management-dashboard-erstellen',
    category: 'dashboards',
    videoDuration: '6:45',
    relatedSlugs: ['burndown-chart-verstehen', 'projektbericht-generieren'],
    publishedAt: '2024-12-08',
    featured: false,
  },
  'go-live-checkliste': {
    slug: 'go-live-checkliste',
    category: 'cutover',
    videoDuration: '5:20',
    relatedSlugs: ['cutover-drill-planen', 'hypercare-phase-managen'],
    publishedAt: '2024-12-05',
    featured: true,
  },
  'risiken-identifizieren-tracken': {
    slug: 'risiken-identifizieren-tracken',
    category: 'risk-management',
    videoDuration: '4:10',
    relatedSlugs: ['issue-management', 'management-dashboard-erstellen'],
    publishedAt: '2024-12-01',
    featured: false,
  },
  'datenmigration-planen': {
    slug: 'datenmigration-planen',
    category: 'migration',
    videoDuration: '7:30',
    relatedSlugs: ['go-live-checkliste', 'datenqualitaet-sicherstellen'],
    publishedAt: '2024-11-28',
    featured: false,
  },
};

// Category icons and colors (not translated)
const categoryMetadata: Record<UseCaseCategory, { icon: string; color: string }> = {
  'project-planning': { icon: '📋', color: 'bg-blue-500' },
  'templates': { icon: '📄', color: 'bg-purple-500' },
  'dashboards': { icon: '📊', color: 'bg-green-500' },
  'migration': { icon: '🔄', color: 'bg-orange-500' },
  'cutover': { icon: '🚀', color: 'bg-red-500' },
  'risk-management': { icon: '⚠️', color: 'bg-yellow-500' },
  'team-management': { icon: '👥', color: 'bg-indigo-500' },
  'reporting': { icon: '📈', color: 'bg-teal-500' },
};

// Get translated categories
export function getCategories(locale: Locale): CategoryInfo[] {
  const t = translations[locale];
  const fallbackT = translations['de'];
  const categoryIds: UseCaseCategory[] = [
    'project-planning',
    'templates',
    'dashboards',
    'migration',
    'cutover',
    'risk-management',
    'team-management',
    'reporting',
  ];

  return categoryIds.map((id) => {
    // Try locale first, then fallback to German
    const localeCategory = t.useCases.categories[id];
    const fallbackCategory = fallbackT.useCases.categories[id];
    const category = (localeCategory?.name) ? localeCategory : fallbackCategory;

    return {
      id,
      name: category?.name || id,
      description: category?.description || '',
      icon: categoryMetadata[id].icon,
      color: categoryMetadata[id].color,
    };
  });
}

// Get a single translated category
export function getCategoryInfo(categoryId: UseCaseCategory, locale: Locale = 'de'): CategoryInfo | undefined {
  const t = translations[locale];
  const fallbackT = translations['de'];
  const meta = categoryMetadata[categoryId];
  if (!meta) return undefined;

  // Try locale first, then fallback to German
  const localeCategory = t.useCases.categories[categoryId];
  const fallbackCategory = fallbackT.useCases.categories[categoryId];
  const category = (localeCategory?.name) ? localeCategory : fallbackCategory;

  return {
    id: categoryId,
    name: category?.name || categoryId,
    description: category?.description || '',
    icon: meta.icon,
    color: meta.color,
  };
}

// Get translated use cases
export function getUseCases(locale: Locale): UseCase[] {
  const t = translations[locale];
  // Fallback to German if locale has no items
  const fallbackT = translations['de'];
  const slugs = Object.keys(useCaseMetadata) as Array<keyof typeof fallbackT.useCases.items>;

  return slugs.map((slug) => {
    const meta = useCaseMetadata[slug];
    // Try locale first, then fallback to German
    const localeItem = t.useCases.items[slug];
    const fallbackItem = fallbackT.useCases.items[slug];
    // Use locale item if it has content, otherwise fallback
    const item = (localeItem?.title) ? localeItem : fallbackItem;

    return {
      slug: meta.slug,
      title: item?.title || meta.slug,
      description: item?.description || '',
      category: meta.category,
      videoUrl: meta.videoUrl,
      videoDuration: meta.videoDuration,
      content: item?.content || '',
      steps: item?.steps || [],
      proTips: item?.proTips || [],
      relatedSlugs: meta.relatedSlugs,
      publishedAt: meta.publishedAt,
      updatedAt: meta.updatedAt,
      author: item?.author,
      readingTime: item?.readingTime,
      featured: meta.featured,
    };
  });
}

// Get a single translated use case
export function getUseCaseBySlug(slug: string, locale: Locale = 'de'): UseCase | undefined {
  const useCases = getUseCases(locale);
  return useCases.find((uc) => uc.slug === slug);
}

// Get use cases by category
export function getUseCasesByCategory(category: UseCaseCategory, locale: Locale = 'de'): UseCase[] {
  const useCases = getUseCases(locale);
  return useCases.filter((uc) => uc.category === category);
}

// Get featured use cases
export function getFeaturedUseCases(locale: Locale = 'de'): UseCase[] {
  const useCases = getUseCases(locale);
  return useCases.filter((uc) => uc.featured);
}

// Get related use cases
export function getRelatedUseCases(useCase: UseCase, locale: Locale = 'de'): UseCase[] {
  if (!useCase.relatedSlugs) return [];
  return useCase.relatedSlugs
    .map((slug) => getUseCaseBySlug(slug, locale))
    .filter((uc): uc is UseCase => uc !== undefined);
}

// Get all categories
export function getAllCategories(locale: Locale = 'de'): CategoryInfo[] {
  return getCategories(locale);
}

// Get use cases count
export function getUseCasesCount(): number {
  return Object.keys(useCaseMetadata).length;
}

// Legacy exports for backward compatibility (using German as default)
export const categories: CategoryInfo[] = getCategories('de');
export const useCases: UseCase[] = getUseCases('de');
