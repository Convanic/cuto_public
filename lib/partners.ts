// Partner Program Data Types and Configuration
// Designed for B2B SaaS in the SAP Enterprise Market

import { 
  Users, Building2, Handshake, Code2, Award, 
  TrendingUp, Globe, GraduationCap, Briefcase,
  type LucideIcon 
} from 'lucide-react';
import { getTranslations } from './i18n/translations';
import { Locale } from './i18n';

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

// Static configuration for icons and colors (not translatable)
const partnerTypeConfig: Record<PartnerType, { icon: string; IconComponent: LucideIcon; color: string; highlight?: boolean }> = {
  referral: {
    icon: '🤝',
    IconComponent: Handshake,
    color: 'bg-blue-500',
  },
  reseller: {
    icon: '🏪',
    IconComponent: Building2,
    color: 'bg-purple-500',
    highlight: true,
  },
  solution: {
    icon: '🏢',
    IconComponent: Briefcase,
    color: 'bg-orange-500',
  },
  technology: {
    icon: '🔗',
    IconComponent: Code2,
    color: 'bg-green-500',
  },
};

const partnerTierConfig: Record<PartnerTier, { color: string; badgeColor: string }> = {
  registered: {
    color: 'from-gray-400 to-gray-500',
    badgeColor: 'bg-gray-500',
  },
  silver: {
    color: 'from-gray-300 to-gray-400',
    badgeColor: 'bg-gradient-to-r from-gray-300 to-gray-400',
  },
  gold: {
    color: 'from-yellow-400 to-yellow-600',
    badgeColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  },
  platinum: {
    color: 'from-purple-400 to-purple-600',
    badgeColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
  },
};

// Partner Types Configuration (legacy - use getPartnerTypes instead)
export const partnerTypes: PartnerTypeInfo[] = [
  {
    id: 'referral',
    name: 'Referral Partner',
    shortName: 'Referral',
    description: 'Empfehlen Sie CUTO an Ihr Netzwerk und verdienen Sie attraktive Provisionen für jeden erfolgreichen Abschluss.',
    targetAudience: 'SAP-Freelancer, unabhängige Berater, Projektmanager',
    idealFor: [
      'SAP-Berater mit breitem Kundennetzwerk',
      'Freelancer in der SAP-Community',
      'Ehemalige SAP-Mitarbeiter',
      'Projektmanager mit Großunternehmenskontakten',
    ],
    requirements: [
      'Keine Mindestanforderungen',
      'Einfache Online-Registrierung',
      'Grundlegendes Verständnis von SAP-Projekten',
    ],
    benefits: [
      '20% Provision auf den ersten Jahresumsatz',
      '10% Recurring Revenue Share (Jahr 2+)',
      'Persönlicher Tracking-Link',
      'Monatliche Auszahlungen',
      'Zugang zum Partner-Portal',
      'Co-Branded Marketing-Materialien',
    ],
    commission: {
      firstYear: '20%',
      recurring: '10%',
      bonus: '€1.000 Bonus ab 3 Deals/Quartal',
    },
    icon: '🤝',
    IconComponent: Handshake,
    color: 'bg-blue-500',
  },
  {
    id: 'reseller',
    name: 'Reseller Partner',
    shortName: 'Reseller',
    description: 'Vertreiben Sie CUTO als Teil Ihres Portfolios und profitieren Sie von attraktiven Margen und wiederkehrenden Einnahmen.',
    targetAudience: 'Kleine und mittlere SAP-Beratungsunternehmen',
    idealFor: [
      'SAP-Beratungen mit 5-50 Consultants',
      'IT-Systemhäuser mit SAP-Fokus',
      'Regionale SAP-Dienstleister',
      'Boutique-Beratungen für Mittelstand',
    ],
    requirements: [
      'Mindestens 2 zertifizierte CUTO-Consultants',
      'Nachweis von SAP-Projekterfahrung',
      'Jährliches Revenue-Commitment',
      'Teilnahme am Partner-Onboarding',
    ],
    benefits: [
      '25-30% Marge auf Lizenzen',
      '15% Recurring Revenue Share',
      'Deal-Registration mit Preisschutz',
      'Eigene Kundenverträge',
      'White-Label-Optionen verfügbar',
      'Prioritärer Support (< 4h Response)',
      'Zugang zu Beta-Features',
    ],
    commission: {
      firstYear: '25-30%',
      recurring: '15%',
      bonus: 'Deal Registration Bonus bis €5.000',
    },
    icon: '🏪',
    IconComponent: Building2,
    color: 'bg-purple-500',
    highlight: true,
  },
  {
    id: 'solution',
    name: 'Solution Partner',
    shortName: 'Solution',
    description: 'Strategische Partnerschaft für große Beratungsunternehmen mit gemeinsamen Go-to-Market-Aktivitäten und Co-Selling.',
    targetAudience: 'Große SAP-Beratungsunternehmen und Systemintegratoren',
    idealFor: [
      'Top-Tier SAP-Beratungen',
      'Globale Systemintegratoren',
      'Big 4 Consulting-Firmen',
      'SAP Gold Partner',
    ],
    requirements: [
      'Mindestens 10 zertifizierte CUTO-Consultants',
      'Nachgewiesene S/4HANA-Projekterfahrung',
      'Jährliches Revenue-Commitment ab €100k',
      'Gemeinsamer Business Plan',
      'Executive Sponsorship',
    ],
    benefits: [
      'Individuelles Revenue-Share-Modell',
      'Co-Selling mit CUTO Sales Team',
      'Gemeinsame Marketing-Kampagnen',
      'RFP-Unterstützung',
      'Dedicated Partner Manager',
      'Quarterly Business Reviews',
      'Early Access zu Roadmap-Features',
      'Joint Case Studies & PR',
      'Preferential Pricing für Großprojekte',
    ],
    commission: {
      firstYear: 'Individuell',
      recurring: 'Revenue Share',
      bonus: 'Co-Selling Accelerator',
    },
    icon: '🏢',
    IconComponent: Briefcase,
    color: 'bg-orange-500',
  },
  {
    id: 'technology',
    name: 'Technology Partner',
    shortName: 'Technology',
    description: 'Integrieren Sie Ihre Lösung mit CUTO und erschließen Sie gemeinsam neue Märkte durch technologische Synergien.',
    targetAudience: 'Software-Anbieter im SAP-Ökosystem',
    idealFor: [
      'SAP-Add-on-Anbieter',
      'Projektmanagement-Tool-Hersteller',
      'DevOps & ALM-Plattformen',
      'Daten- und Analytics-Anbieter',
    ],
    requirements: [
      'Komplementäres Produktangebot',
      'Technisches Integrationsteam',
      'Gemeinsame Zielgruppe',
      'API-Integrationsfähigkeit',
    ],
    benefits: [
      'Bidirektionales Lead-Sharing',
      'Co-Marketing-Budget',
      'Marketplace-Listing',
      'API-Zugang und technischer Support',
      'Gemeinsame Webinare & Events',
      'Integration Showcase',
      'Cross-Promotion im Newsletter',
    ],
    commission: {
      firstYear: 'Lead-Sharing',
      recurring: 'Cross-Referral',
    },
    icon: '🔗',
    IconComponent: Code2,
    color: 'bg-green-500',
  },
];

// Partner Tier Configuration
export const partnerTiers: PartnerTierInfo[] = [
  {
    id: 'registered',
    name: 'Registered',
    minRevenue: '€0',
    minDeals: 0,
    certifiedConsultants: 0,
    benefits: [
      'Partner-Portal Zugang',
      'Basis-Schulungsmaterialien',
      'Standard-Support',
      'Partner-Newsletter',
    ],
    color: 'from-gray-400 to-gray-500',
    badgeColor: 'bg-gray-500',
  },
  {
    id: 'silver',
    name: 'Silver',
    minRevenue: '€25.000',
    minDeals: 2,
    certifiedConsultants: 2,
    benefits: [
      'Alle Registered-Benefits',
      '+5% zusätzliche Marge',
      'Prioritärer Support (< 8h)',
      'Quartalsweise Partner-Calls',
      'Marketing-Materialien-Paket',
      'Partner-Verzeichnis-Listing',
    ],
    color: 'from-gray-300 to-gray-400',
    badgeColor: 'bg-gradient-to-r from-gray-300 to-gray-400',
  },
  {
    id: 'gold',
    name: 'Gold',
    minRevenue: '€75.000',
    minDeals: 5,
    certifiedConsultants: 5,
    benefits: [
      'Alle Silver-Benefits',
      '+10% zusätzliche Marge',
      'Prioritärer Support (< 4h)',
      'Dedicated Partner Manager',
      'Co-Marketing-Budget (€5k/Jahr)',
      'Beta-Feature-Zugang',
      'Gemeinsame Webinare',
    ],
    color: 'from-yellow-400 to-yellow-600',
    badgeColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  },
  {
    id: 'platinum',
    name: 'Platinum',
    minRevenue: '€150.000',
    minDeals: 10,
    certifiedConsultants: 10,
    benefits: [
      'Alle Gold-Benefits',
      '+15% zusätzliche Marge',
      'Premium-Support (< 2h, 24/7)',
      'Executive Sponsor bei CUTO',
      'Co-Marketing-Budget (€15k/Jahr)',
      'Early Roadmap-Zugang',
      'Joint Press Releases',
      'Exclusive Partner Events',
      'Custom Feature Requests',
    ],
    color: 'from-purple-400 to-purple-600',
    badgeColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
  },
];

// General Partner Benefits
export const generalBenefits: PartnerBenefit[] = [
  {
    icon: '💰',
    title: 'Attraktive Provisionen',
    description: 'Bis zu 30% Marge auf Deals und wiederkehrende Revenue-Shares für langfristiges Einkommen.',
  },
  {
    icon: '📈',
    title: 'Wachsender Markt',
    description: 'Der SAP S/4HANA Transformationsmarkt wächst rasant – positionieren Sie sich als Experte.',
  },
  {
    icon: '🎓',
    title: 'Kostenlose Zertifizierungen',
    description: 'Werden Sie CUTO-zertifizierter Consultant mit unserem umfassenden Schulungsprogramm.',
  },
  {
    icon: '🛠️',
    title: 'Sales & Marketing Support',
    description: 'Fertige Präsentationen, Case Studies und Co-Branded Materialien für Ihre Pitches.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: 'Ihr persönlicher Partner Manager unterstützt Sie bei Deals und strategischen Fragen.',
  },
  {
    icon: '🚀',
    title: 'Schneller Onboarding',
    description: 'In nur 2 Wochen vom Antrag zum aktiven Partner – wir machen es Ihnen leicht.',
  },
];

// Partner Success Stories / Testimonials
export const partnerTestimonials: PartnerTestimonial[] = [
  {
    quote: 'Als Freelancer habe ich in den letzten 12 Monaten über €45.000 an Provisionen verdient – einfach durch Empfehlungen in meinem Netzwerk. CUTO verkauft sich praktisch von selbst.',
    author: 'Thomas Müller',
    role: 'SAP Senior Consultant (Freelancer)',
    company: 'Selbstständig',
    partnerType: 'referral',
  },
  {
    quote: 'Die Partnerschaft mit CUTO hat unser Service-Portfolio perfekt ergänzt. Wir bieten jetzt End-to-End SAP-Transformationslösungen an und haben unseren Umsatz um 40% gesteigert.',
    author: 'Dr. Sandra Weber',
    role: 'Managing Partner',
    company: 'Alpine Consulting GmbH',
    partnerType: 'reseller',
  },
  {
    quote: 'Das Co-Selling-Modell funktioniert hervorragend. Bei komplexen RFPs arbeiten wir Hand in Hand mit dem CUTO-Team – das überzeugt die Kunden und beschleunigt den Sales Cycle.',
    author: 'Michael Hoffmann',
    role: 'Director SAP Practice',
    company: 'Global Systems AG',
    partnerType: 'solution',
  },
];

// FAQ for Partner Program
export const partnerFAQ = [
  {
    question: 'Wie schnell kann ich mit dem Verdienen beginnen?',
    answer: 'Nach der Registrierung erhalten Sie sofort Ihren persönlichen Tracking-Link. Sobald ein von Ihnen empfohlener Kunde einen Vertrag abschließt und die erste Zahlung erfolgt ist, wird Ihre Provision fällig. Bei Enterprise-Deals kann der Sales-Cycle 3-6 Monate dauern.',
  },
  {
    question: 'Gibt es eine Mindestvertragslaufzeit?',
    answer: 'Nein, als Referral Partner können Sie jederzeit ohne Kündigungsfrist aufhören. Für Reseller und Solution Partner gelten individuelle Vereinbarungen, typischerweise mit einer jährlichen Laufzeit.',
  },
  {
    question: 'Wie funktioniert die Deal-Registration?',
    answer: 'Bei Reseller und Solution Partnern können Sie potenzielle Deals über das Partner-Portal registrieren. Dadurch erhalten Sie Preisschutz für 90 Tage und verhindern, dass andere Partner denselben Lead bearbeiten.',
  },
  {
    question: 'Welche Schulungen sind erforderlich?',
    answer: 'Referral Partner benötigen keine formale Zertifizierung. Für Reseller und Solution Partner bieten wir ein kostenloses Online-Zertifizierungsprogramm (ca. 8 Stunden) sowie optionale Präsenzschulungen an.',
  },
  {
    question: 'Kann ich als Freelancer später Reseller werden?',
    answer: 'Ja, viele unserer erfolgreichsten Partner haben als Referral Partner begonnen und sind gewachsen. Sobald Sie die Anforderungen erfüllen, können Sie upgraden und von besseren Konditionen profitieren.',
  },
  {
    question: 'Gibt es exklusive Vertriebsgebiete?',
    answer: 'Für Platinum Partner können wir in bestimmten Regionen oder Branchen Exklusivvereinbarungen treffen. Dies wird individuell verhandelt und erfordert entsprechende Umsatz-Commitments.',
  },
];

// Program Statistics
export const partnerStats = {
  totalPartners: 127,
  countriesActive: 14,
  averagePartnerRevenue: '€85.000',
  partnerSatisfaction: 94,
  totalPayouts: '€2.4M',
};

// Helper functions to get translated partner data
export function getPartnerTypes(locale: Locale = 'de'): PartnerTypeInfo[] {
  const t = getTranslations(locale);
  const fallbackT = getTranslations('de');
  const partnerTypeIds: PartnerType[] = ['referral', 'reseller', 'solution', 'technology'];

  return partnerTypeIds.map((id) => {
    const localeType = t.partners.types?.[id];
    const fallbackType = fallbackT.partners.types[id];
    const type = localeType || fallbackType;
    const config = partnerTypeConfig[id];

    return {
      id,
      name: type?.name || id,
      shortName: type?.shortName || id,
      description: type?.description || '',
      targetAudience: type?.targetAudience || '',
      idealFor: type?.idealFor || [],
      requirements: type?.requirements || [],
      benefits: type?.benefits || [],
      commission: {
        firstYear: type?.commission?.firstYear || '',
        recurring: type?.commission?.recurring || '',
        bonus: (type?.commission && 'bonus' in type.commission) ? (type.commission as { bonus?: string }).bonus : undefined,
      },
      icon: config.icon,
      IconComponent: config.IconComponent,
      color: config.color,
      highlight: (type && 'highlight' in type ? type.highlight : undefined) ?? config.highlight,
    };
  });
}

export function getPartnerTiers(locale: Locale = 'de'): PartnerTierInfo[] {
  const t = getTranslations(locale);
  const fallbackT = getTranslations('de');
  const tierIds: PartnerTier[] = ['registered', 'silver', 'gold', 'platinum'];

  return tierIds.map((id) => {
    const localeTier = t.partners.tierLevels?.[id];
    const fallbackTier = fallbackT.partners.tierLevels[id];
    const tier = localeTier || fallbackTier;
    const config = partnerTierConfig[id];

    return {
      id,
      name: tier?.name || id,
      minRevenue: tier?.minRevenue || '',
      minDeals: tier?.minDeals || 0,
      certifiedConsultants: tier?.certifiedConsultants || 0,
      benefits: tier?.benefits || [],
      color: config.color,
      badgeColor: config.badgeColor,
    };
  });
}

export function getGeneralBenefits(locale: Locale = 'de'): PartnerBenefit[] {
  const t = getTranslations(locale);
  const fallbackT = getTranslations('de');
  return (t.partners.generalBenefits?.length ? t.partners.generalBenefits : fallbackT.partners.generalBenefits) || [];
}

export function getPartnerTestimonials(locale: Locale = 'de'): PartnerTestimonial[] {
  const t = getTranslations(locale);
  const fallbackT = getTranslations('de');
  const testimonials = (t.partners.partnerTestimonials?.length ? t.partners.partnerTestimonials : fallbackT.partners.partnerTestimonials) || [];
  return testimonials.map((testimonial) => ({
    ...testimonial,
    partnerType: testimonial.partnerType as PartnerType,
  }));
}

export function getPartnerFAQ(locale: Locale = 'de'): Array<{ question: string; answer: string }> {
  const t = getTranslations(locale);
  const fallbackT = getTranslations('de');
  return (t.partners.faqItems?.length ? t.partners.faqItems : fallbackT.partners.faqItems) || [];
}

// Legacy helper functions
export const getPartnerTypeById = (id: PartnerType, locale: Locale = 'de'): PartnerTypeInfo | undefined => {
  return getPartnerTypes(locale).find(p => p.id === id);
};

export const getPartnerTierById = (id: PartnerTier, locale: Locale = 'de'): PartnerTierInfo | undefined => {
  return getPartnerTiers(locale).find(t => t.id === id);
};

