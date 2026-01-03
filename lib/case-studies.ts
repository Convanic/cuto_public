import { LucideIcon, Building2, Factory, Briefcase, ShoppingCart, Truck, HeartPulse, Landmark, Cpu } from 'lucide-react';

export type Industry = 'manufacturing' | 'retail' | 'logistics' | 'healthcare' | 'finance' | 'technology' | 'consulting' | 'energy';

export interface CaseStudy {
  slug: string;
  companyName: string;
  companyLogo?: string;
  industry: Industry;
  companySize: string;
  location: string;
  featured: boolean;
  
  // Hero
  headline: string;
  subheadline: string;
  heroImage?: string;
  
  // Challenge
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  
  // Solution
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  
  // Results
  results: {
    title: string;
    description: string;
    metrics: {
      value: string;
      label: string;
      description?: string;
    }[];
  };
  
  // Testimonial
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  
  // Timeline
  timeline?: {
    duration: string;
    phases: {
      name: string;
      duration: string;
    }[];
  };
  
  // Video
  videoUrl?: string;
  videoThumbnail?: string;
  
  // Related
  relatedCaseStudies?: string[];
}

interface IndustryInfo {
  name: string;
  icon: string;
  color: string;
  IconComponent: LucideIcon;
}

export const industryMap: Record<Industry, IndustryInfo> = {
  'manufacturing': { name: 'Fertigung', icon: '🏭', color: 'bg-slate-500', IconComponent: Factory },
  'retail': { name: 'Handel', icon: '🛒', color: 'bg-orange-500', IconComponent: ShoppingCart },
  'logistics': { name: 'Logistik', icon: '🚚', color: 'bg-blue-500', IconComponent: Truck },
  'healthcare': { name: 'Gesundheitswesen', icon: '🏥', color: 'bg-red-500', IconComponent: HeartPulse },
  'finance': { name: 'Finanzwesen', icon: '🏦', color: 'bg-green-500', IconComponent: Landmark },
  'technology': { name: 'Technologie', icon: '💻', color: 'bg-purple-500', IconComponent: Cpu },
  'consulting': { name: 'Beratung', icon: '💼', color: 'bg-indigo-500', IconComponent: Briefcase },
  'energy': { name: 'Energie', icon: '⚡', color: 'bg-yellow-500', IconComponent: Building2 },
};

export const getIndustryInfo = (industry: Industry): IndustryInfo => industryMap[industry];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'techglobal-s4hana-transformation',
    companyName: 'TechGlobal AG',
    industry: 'technology',
    companySize: '2.500+ Mitarbeiter',
    location: 'München, Deutschland',
    featured: true,
    
    headline: 'S/4HANA Transformation in Rekordzeit',
    subheadline: 'Wie TechGlobal mit CUTO ihre SAP S/4HANA Migration 3 Monate früher als geplant abschloss',
    
    challenge: {
      title: 'Die Herausforderung',
      description: 'TechGlobal stand vor einer komplexen S/4HANA Migration mit über 50 integrierten Systemen und einem engen Zeitrahmen von 18 Monaten. Die bisherigen Projektmanagement-Tools konnten die SAP-spezifischen Anforderungen nicht abbilden.',
      painPoints: [
        'Keine SAP Activate-konformen Templates verfügbar',
        'Unübersichtliches Cutover-Management mit Excel',
        'Fehlende Echtzeit-Transparenz für das Management',
        'Ressourcenkonflikte durch parallele Workstreams',
      ],
    },
    
    solution: {
      title: 'Die Lösung mit CUTO',
      description: 'CUTO wurde als zentrale Projektmanagement-Plattform eingeführt und bot von Tag 1 an eine strukturierte SAP Activate Roadmap mit allen notwendigen Phasen und Meilensteinen.',
      features: [
        'SAP Activate Template mit automatischer Projektstruktur',
        'Integriertes Cutover-Management mit Echtzeit-Status',
        'KPI-Dashboards für Steering Committee Meetings',
        'Ressourcenplanung über alle Workstreams hinweg',
      ],
    },
    
    results: {
      title: 'Die Ergebnisse',
      description: 'Die S/4HANA Migration wurde nicht nur termingerecht, sondern sogar 3 Monate früher als geplant erfolgreich abgeschlossen.',
      metrics: [
        { value: '3 Monate', label: 'Früher fertig', description: 'Gegenüber ursprünglichem Plan' },
        { value: '40%', label: 'Weniger PMO-Aufwand', description: 'Durch Automatisierung' },
        { value: '100%', label: 'On-Time Go-Live', description: 'Ohne kritische Issues' },
        { value: '€2.1M', label: 'Kosteneinsparung', description: 'Durch verkürzte Projektlaufzeit' },
      ],
    },
    
    testimonial: {
      quote: 'CUTO hat unsere S/4HANA Transformation grundlegend verändert. Endlich ein Tool, das SAP-Projekte wirklich versteht. Die Transparenz und Struktur waren entscheidend für unseren Erfolg.',
      author: 'Dr. Michael Weber',
      role: 'CIO, TechGlobal AG',
    },
    
    timeline: {
      duration: '15 Monate (geplant: 18)',
      phases: [
        { name: 'Discover', duration: '2 Monate' },
        { name: 'Prepare', duration: '3 Monate' },
        { name: 'Explore', duration: '4 Monate' },
        { name: 'Realize', duration: '4 Monate' },
        { name: 'Deploy', duration: '2 Monate' },
      ],
    },
    
    relatedCaseStudies: ['dataflow-cutover-management', 'innomed-template-rollout'],
  },
  {
    slug: 'dataflow-cutover-management',
    companyName: 'DataFlow AG',
    industry: 'logistics',
    companySize: '5.000+ Mitarbeiter',
    location: 'Hamburg, Deutschland',
    featured: true,
    
    headline: 'Fehlerfreier Go-Live trotz 72h Cutover-Fenster',
    subheadline: 'Wie DataFlow mit CUTO einen komplexen SAP Go-Live mit über 500 Cutover-Aufgaben erfolgreich meisterte',
    
    challenge: {
      title: 'Die Herausforderung',
      description: 'Als führender Logistikdienstleister konnte DataFlow keine längeren Systemausfälle tolerieren. Der Go-Live musste innerhalb eines 72-Stunden-Wochenendfensters abgeschlossen werden – mit null Toleranz für Fehler.',
      painPoints: [
        'Über 500 Cutover-Aufgaben mit komplexen Abhängigkeiten',
        'Mehrere Teams in unterschiedlichen Zeitzonen',
        'Kritische Datenmigration von 50 TB',
        'Strenge SLAs mit Kunden zu erfüllen',
      ],
    },
    
    solution: {
      title: 'Die Lösung mit CUTO',
      description: 'CUTOs spezialisiertes Cutover-Management ermöglichte eine präzise Planung und Echtzeitüberwachung aller Aktivitäten während des kritischen Go-Live-Wochenendes.',
      features: [
        'Detaillierte Cutover-Planung mit Minute-genauen Zeitfenstern',
        'Automatische Eskalation bei Verzögerungen',
        'Live-Dashboard für das War Room',
        'Rollback-Szenarien mit einem Klick abrufbar',
      ],
    },
    
    results: {
      title: 'Die Ergebnisse',
      description: 'Der Go-Live wurde 4 Stunden vor dem geplanten Ende erfolgreich abgeschlossen – ohne einen einzigen kritischen Fehler.',
      metrics: [
        { value: '0', label: 'Kritische Fehler', description: 'Während des Go-Live' },
        { value: '68h', label: 'Cutover-Dauer', description: 'Von 72h geplant' },
        { value: '500+', label: 'Aufgaben koordiniert', description: 'In Echtzeit' },
        { value: '99.9%', label: 'System-Verfügbarkeit', description: 'Ab Tag 1' },
      ],
    },
    
    testimonial: {
      quote: 'Das Cutover-Management von CUTO war der Gamechanger. Wir hatten jederzeit volle Transparenz und konnten Probleme lösen, bevor sie kritisch wurden.',
      author: 'Sandra Hoffmann',
      role: 'Projektleiterin, DataFlow AG',
    },
    
    timeline: {
      duration: '68 Stunden Go-Live',
      phases: [
        { name: 'Pre-Cutover Checks', duration: '4h' },
        { name: 'System Shutdown', duration: '2h' },
        { name: 'Datenmigration', duration: '24h' },
        { name: 'System Config', duration: '18h' },
        { name: 'Testing & Validation', duration: '16h' },
        { name: 'Go-Live Freigabe', duration: '4h' },
      ],
    },
    
    relatedCaseStudies: ['techglobal-s4hana-transformation', 'medcare-multi-country-rollout'],
  },
  {
    slug: 'innomed-template-rollout',
    companyName: 'InnoMed GmbH',
    industry: 'healthcare',
    companySize: '800+ Mitarbeiter',
    location: 'Berlin, Deutschland',
    featured: false,
    
    headline: 'Standardisierte SAP-Implementierung für die Gesundheitsbranche',
    subheadline: 'Wie InnoMed mit CUTO-Templates die Projektlaufzeit um 30% verkürzte',
    
    challenge: {
      title: 'Die Herausforderung',
      description: 'Als wachsendes Medizintechnik-Unternehmen benötigte InnoMed eine schnelle SAP-Implementierung, die gleichzeitig die strengen regulatorischen Anforderungen der Branche erfüllte.',
      painPoints: [
        'Strenge FDA/MDR Compliance-Anforderungen',
        'Knappe Timeline von 12 Monaten',
        'Begrenzte interne SAP-Expertise',
        'Dokumentationspflichten für Audits',
      ],
    },
    
    solution: {
      title: 'Die Lösung mit CUTO',
      description: 'CUTO bot vorkonfigurierte Templates, die speziell für regulierte Branchen angepasst werden konnten, inklusive vollständiger Audit-Trail-Funktionalität.',
      features: [
        'Branchenspezifische Template-Anpassungen',
        'Vollständiger Audit Trail für alle Änderungen',
        'Integrierte Dokumentenverwaltung',
        'Automatisierte Compliance-Reports',
      ],
    },
    
    results: {
      title: 'Die Ergebnisse',
      description: 'Die SAP-Implementierung wurde in nur 8 Monaten abgeschlossen und bestand alle Compliance-Audits ohne Beanstandungen.',
      metrics: [
        { value: '30%', label: 'Schnellere Implementierung', description: '8 statt 12 Monate' },
        { value: '100%', label: 'Audit-Compliance', description: 'Ohne Findings' },
        { value: '50%', label: 'Weniger Dokumentationsaufwand', description: 'Durch Templates' },
        { value: '4 Monate', label: 'Früher produktiv', description: 'ROI schneller erreicht' },
      ],
    },
    
    testimonial: {
      quote: 'Die Templates von CUTO haben uns Monate an Planungsaufwand erspart. Besonders die Compliance-Features waren für uns als Medizintechnik-Unternehmen Gold wert.',
      author: 'Thomas Richter',
      role: 'IT-Leiter, InnoMed GmbH',
    },
    
    relatedCaseStudies: ['techglobal-s4hana-transformation', 'eurobank-process-optimization'],
  },
  {
    slug: 'medcare-multi-country-rollout',
    companyName: 'MedCare International',
    industry: 'healthcare',
    companySize: '15.000+ Mitarbeiter',
    location: 'Wien, Österreich',
    featured: true,
    
    headline: 'SAP Rollout in 12 Ländern gleichzeitig',
    subheadline: 'Wie MedCare International mit CUTO einen Multi-Country SAP Rollout erfolgreich koordinierte',
    
    challenge: {
      title: 'Die Herausforderung',
      description: 'MedCare International stand vor der Aufgabe, SAP S/4HANA in 12 europäischen Ländern gleichzeitig auszurollen – mit unterschiedlichen lokalen Anforderungen und Zeitzonen.',
      painPoints: [
        '12 Länder mit unterschiedlichen gesetzlichen Anforderungen',
        'Koordination von 200+ Projektmitarbeitern',
        'Lokalisierungsanforderungen (Sprache, Steuern, Prozesse)',
        'Konsolidiertes Reporting für das HQ',
      ],
    },
    
    solution: {
      title: 'Die Lösung mit CUTO',
      description: 'CUTO ermöglichte eine zentrale Steuerung aller 12 Länderprojekte mit lokaler Flexibilität und zentralem Überblick.',
      features: [
        'Multi-Projekt-Dashboard für alle Länder',
        'Lokale Projekt-Workspaces mit Template-Vererbung',
        'Automatische Konsolidierung von KPIs',
        'Mehrsprachige Benutzeroberfläche',
      ],
    },
    
    results: {
      title: 'Die Ergebnisse',
      description: 'Alle 12 Länder gingen innerhalb von 6 Monaten erfolgreich live – ein neuer Rekord für das Unternehmen.',
      metrics: [
        { value: '12', label: 'Länder gleichzeitig', description: 'Erfolgreich live' },
        { value: '6 Monate', label: 'Rollout-Dauer', description: 'Für alle Länder' },
        { value: '200+', label: 'Team-Mitglieder', description: 'Zentral koordiniert' },
        { value: '95%', label: 'Wiederverwendung', description: 'Von Templates' },
      ],
    },
    
    testimonial: {
      quote: 'Ohne CUTO wäre ein paralleler Rollout in 12 Ländern unmöglich gewesen. Die zentrale Sicht mit lokaler Flexibilität war genau das, was wir brauchten.',
      author: 'Dr. Maria Schneider',
      role: 'Global Program Director, MedCare International',
    },
    
    timeline: {
      duration: '6 Monate',
      phases: [
        { name: 'Wave 1 (DE, AT, CH)', duration: '2 Monate' },
        { name: 'Wave 2 (FR, IT, ES)', duration: '2 Monate' },
        { name: 'Wave 3 (NL, BE, PL)', duration: '1 Monat' },
        { name: 'Wave 4 (Rest)', duration: '1 Monat' },
      ],
    },
    
    relatedCaseStudies: ['dataflow-cutover-management', 'innomed-template-rollout'],
  },
  {
    slug: 'eurobank-process-optimization',
    companyName: 'EuroBank AG',
    industry: 'finance',
    companySize: '8.000+ Mitarbeiter',
    location: 'Frankfurt, Deutschland',
    featured: false,
    
    headline: 'Prozessoptimierung durch SAP BTP Integration',
    subheadline: 'Wie EuroBank mit CUTO ihre SAP-Prozesse um 60% beschleunigte',
    
    challenge: {
      title: 'Die Herausforderung',
      description: 'EuroBank wollte ihre SAP-Landschaft modernisieren und mit SAP BTP erweitern, hatte aber Schwierigkeiten, die komplexen Integrationsprojekte zu koordinieren.',
      painPoints: [
        'Veraltete SAP ECC-Prozesse',
        'Mangelnde Integration zwischen Systemen',
        'Hoher manueller Aufwand bei Reporting',
        'Compliance-Anforderungen der BaFin',
      ],
    },
    
    solution: {
      title: 'Die Lösung mit CUTO',
      description: 'CUTO unterstützte die strukturierte Migration und Integration mit SAP BTP durch spezialisierte Templates und Prozessmodellierung.',
      features: [
        'BPMN 2.0 Prozessmodellierung',
        'Integrations-Tracking für alle Schnittstellen',
        'Compliance-konforme Dokumentation',
        'Automatisierte Testplanung',
      ],
    },
    
    results: {
      title: 'Die Ergebnisse',
      description: 'Die Prozessoptimierung führte zu einer 60%igen Beschleunigung der Kernprozesse und vollständiger Compliance.',
      metrics: [
        { value: '60%', label: 'Schnellere Prozesse', description: 'Im Kernbanking' },
        { value: '100%', label: 'BaFin-Compliance', description: 'Alle Audits bestanden' },
        { value: '€3.5M', label: 'Jährliche Einsparung', description: 'Durch Automatisierung' },
        { value: '85%', label: 'Weniger manuelle Arbeit', description: 'Im Reporting' },
      ],
    },
    
    testimonial: {
      quote: 'CUTO hat uns geholfen, unsere komplexe SAP-Transformation strukturiert anzugehen. Die Prozessmodellierung und das Compliance-Tracking waren unverzichtbar.',
      author: 'Klaus Meier',
      role: 'Head of IT Transformation, EuroBank AG',
    },
    
    relatedCaseStudies: ['innomed-template-rollout', 'techglobal-s4hana-transformation'],
  },
  {
    slug: 'greenpower-energy-transformation',
    companyName: 'GreenPower Energy',
    industry: 'energy',
    companySize: '3.500+ Mitarbeiter',
    location: 'Essen, Deutschland',
    featured: false,
    
    headline: 'Digitale Transformation im Energiesektor',
    subheadline: 'Wie GreenPower mit CUTO ihre SAP S/4HANA Utilities Implementation beschleunigte',
    
    challenge: {
      title: 'Die Herausforderung',
      description: 'GreenPower Energy benötigte eine moderne SAP-Lösung für das Kundenmanagement und die Abrechnung, die mit der schnellen Energiewende Schritt halten konnte.',
      painPoints: [
        'Legacy-System konnte neue Tarifmodelle nicht abbilden',
        'Mangelnde Skalierbarkeit für Wachstum',
        'Regulatorische Änderungen erforderten schnelle Anpassungen',
        '2 Millionen Kundendatensätze zu migrieren',
      ],
    },
    
    solution: {
      title: 'Die Lösung mit CUTO',
      description: 'CUTO ermöglichte eine strukturierte Implementation von SAP S/4HANA Utilities mit besonderem Fokus auf Datenmigration und Testing.',
      features: [
        'Spezialisierte Utilities-Templates',
        'Datenmigrations-Tracking für 2M Kunden',
        'Automatisierte Regressionstests',
        'Regulatorisches Change Management',
      ],
    },
    
    results: {
      title: 'Die Ergebnisse',
      description: 'Die neue SAP-Landschaft wurde termingerecht implementiert und ermöglicht jetzt flexible Tarifgestaltung in Echtzeit.',
      metrics: [
        { value: '2M', label: 'Kunden migriert', description: 'Ohne Datenverlust' },
        { value: '99.8%', label: 'Datenqualität', description: 'Nach Migration' },
        { value: '50%', label: 'Schnellere Tarifänderungen', description: 'Time-to-Market' },
        { value: '24/7', label: 'Verfügbarkeit', description: 'Keine Ausfälle' },
      ],
    },
    
    testimonial: {
      quote: 'Die Energiebranche verändert sich rasant. Mit CUTO konnten wir unsere SAP-Transformation so gestalten, dass wir für die Zukunft gerüstet sind.',
      author: 'Petra Schulz',
      role: 'CDO, GreenPower Energy',
    },
    
    relatedCaseStudies: ['eurobank-process-optimization', 'dataflow-cutover-management'],
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(cs => cs.featured);
};

export const getCaseStudiesByIndustry = (industry: Industry): CaseStudy[] => {
  return caseStudies.filter(cs => cs.industry === industry);
};

