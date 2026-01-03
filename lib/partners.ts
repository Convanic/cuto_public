// Partner Program Data Types and Configuration
// Designed for B2B SaaS in the SAP Enterprise Market

import { 
  Users, Building2, Handshake, Code2, Award, 
  TrendingUp, Globe, GraduationCap, Briefcase,
  type LucideIcon 
} from 'lucide-react';

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

// Partner Types Configuration
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

// Helper functions
export const getPartnerTypeById = (id: PartnerType): PartnerTypeInfo | undefined => {
  return partnerTypes.find(p => p.id === id);
};

export const getPartnerTierById = (id: PartnerTier): PartnerTierInfo | undefined => {
  return partnerTiers.find(t => t.id === id);
};

