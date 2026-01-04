// Partner Program Data Types and Configuration
// Designed for B2B SaaS in the SAP Enterprise Market

import { 
  Users, Building2, Handshake, Code2, Award, 
  TrendingUp, Globe, GraduationCap, Briefcase,
  type LucideIcon 
} from 'lucide-react';
import { Locale } from './i18n';
import { translations } from './i18n/translations';

export type PartnerType = 'referral' | 'reseller' | 'solution' | 'technology';
export type PartnerTier = 'registered' | 'silver' | 'gold' | 'platinum';

export interface PartnerTypeInfo {
  id: PartnerType;
  name: string;
  shortName: string;
  description: string;
  targetAudience: string;
  idealFor: string[];
  requirements: string[];
  benefits: string[];
  commission: {
    firstYear: string;
    recurring: string;
    bonus?: string;
  };
  icon: string;
  IconComponent: LucideIcon;
  color: string;
  highlight?: boolean;
}

export interface PartnerTierInfo {
  id: PartnerTier;
  name: string;
  minRevenue: string;
  minDeals: number;
  certifiedConsultants: number;
  benefits: string[];
  color: string;
  badgeColor: string;
}

export interface PartnerBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface PartnerTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  partnerType: PartnerType;
  avatar?: string;
}

// Static metadata (not translated)
const partnerTypeMetadata: Record<PartnerType, { icon: string; IconComponent: LucideIcon; color: string; highlight?: boolean }> = {
  referral: { icon: '🤝', IconComponent: Handshake, color: 'bg-blue-500' },
  reseller: { icon: '🏪', IconComponent: Building2, color: 'bg-purple-500', highlight: true },
  solution: { icon: '🏢', IconComponent: Briefcase, color: 'bg-orange-500' },
  technology: { icon: '🔗', IconComponent: Code2, color: 'bg-green-500' },
};

const partnerTierMetadata: Record<PartnerTier, { minRevenue: string; minDeals: number; certifiedConsultants: number; color: string; badgeColor: string }> = {
  registered: { minRevenue: '€0', minDeals: 0, certifiedConsultants: 0, color: 'from-gray-400 to-gray-500', badgeColor: 'bg-gray-500' },
  silver: { minRevenue: '€25.000', minDeals: 2, certifiedConsultants: 2, color: 'from-gray-300 to-gray-400', badgeColor: 'bg-gradient-to-r from-gray-300 to-gray-400' },
  gold: { minRevenue: '€75.000', minDeals: 5, certifiedConsultants: 5, color: 'from-yellow-400 to-yellow-600', badgeColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
  platinum: { minRevenue: '€150.000', minDeals: 10, certifiedConsultants: 10, color: 'from-purple-400 to-purple-600', badgeColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
};

// Get translated partner types
export function getPartnerTypes(locale: Locale): PartnerTypeInfo[] {
  const t = translations[locale];
  const fallbackT = translations['de'];
  const partnerTypeIds: PartnerType[] = ['referral', 'reseller', 'solution', 'technology'];

  return partnerTypeIds.map((id) => {
    const localeData = t.partners.types?.[id];
    const fallbackData = fallbackT.partners.types?.[id];
    const data = localeData?.name ? localeData : fallbackData;
    const meta = partnerTypeMetadata[id];

    return {
      id,
      name: data?.name || id,
      shortName: data?.shortName || id,
      description: data?.description || '',
      targetAudience: data?.targetAudience || '',
      idealFor: data?.idealFor || [],
      requirements: data?.requirements || [],
      benefits: data?.benefits || [],
      commission: data?.commission || { firstYear: '', recurring: '' },
      icon: meta.icon,
      IconComponent: meta.IconComponent,
      color: meta.color,
      highlight: meta.highlight,
    };
  });
}

// Get translated partner tiers
export function getPartnerTiers(locale: Locale): PartnerTierInfo[] {
  const t = translations[locale];
  const fallbackT = translations['de'];
  const tierIds: PartnerTier[] = ['registered', 'silver', 'gold', 'platinum'];

  return tierIds.map((id) => {
    const localeData = t.partners.tierLevels?.[id];
    const fallbackData = fallbackT.partners.tierLevels?.[id];
    const data = localeData?.name ? localeData : fallbackData;
    const meta = partnerTierMetadata[id];

    return {
      id,
      name: data?.name || id,
      benefits: data?.benefits || [],
      minRevenue: meta.minRevenue,
      minDeals: meta.minDeals,
      certifiedConsultants: meta.certifiedConsultants,
      color: meta.color,
      badgeColor: meta.badgeColor,
    };
  });
}

// Get translated general benefits
export function getGeneralBenefits(locale: Locale): PartnerBenefit[] {
  const t = translations[locale];
  const fallbackT = translations['de'];
  return (t.partners.generalBenefits?.length ? t.partners.generalBenefits : fallbackT.partners.generalBenefits) || [];
}

// Get translated testimonials
export function getPartnerTestimonials(locale: Locale): PartnerTestimonial[] {
  const t = translations[locale];
  const fallbackT = translations['de'];
  const testimonials = t.partners.partnerTestimonials?.length ? t.partners.partnerTestimonials : fallbackT.partners.partnerTestimonials;
  return (testimonials || []) as PartnerTestimonial[];
}

// Get translated FAQ
export function getPartnerFAQ(locale: Locale): { question: string; answer: string }[] {
  const t = translations[locale];
  const fallbackT = translations['de'];
  return (t.partners.faqItems?.length ? t.partners.faqItems : fallbackT.partners.faqItems) || [];
}

// Legacy exports for backward compatibility (using German as default)
export const partnerTypes: PartnerTypeInfo[] = getPartnerTypes('de');
export const partnerTiers: PartnerTierInfo[] = getPartnerTiers('de');
export const generalBenefits: PartnerBenefit[] = getGeneralBenefits('de');
export const partnerTestimonials: PartnerTestimonial[] = getPartnerTestimonials('de');
export const partnerFAQ = getPartnerFAQ('de');

// Program Statistics
export const partnerStats = {
  totalPartners: 127,
  countriesActive: 14,
  averagePartnerRevenue: '€85.000',
  partnerSatisfaction: 94,
  totalPayouts: '€2.4M',
};

// Helper functions
export const getPartnerTypeById = (id: PartnerType): PartnerTypeInfo | undefined => {
  return partnerTypes.find(p => p.id === id);
};

export const getPartnerTierById = (id: PartnerTier): PartnerTierInfo | undefined => {
  return partnerTiers.find(t => t.id === id);
};

