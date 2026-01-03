'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import { 
  Combine, 
  Search, 
  Sparkles, 
  FileCheck, 
  Users, 
  Download,
  CheckCircle,
  Settings,
  BarChart3,
  Eye
} from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export default function HarmonizationPage() {
  const { t } = useI18n();

  const matchingAlgorithms = [
    { name: t.features?.harmonization?.algorithms?.levenshtein || 'Levenshtein-Distanz', desc: t.features?.harmonization?.algorithms?.levenshteinDesc || 'Berechnet minimale Editier-Distanz zwischen zwei Strings' },
    { name: t.features?.harmonization?.algorithms?.jaroWinkler || 'Jaro-Winkler', desc: t.features?.harmonization?.algorithms?.jaroWinklerDesc || 'Optimiert für kurze Strings und Namen' },
    { name: t.features?.harmonization?.algorithms?.soundex || 'Soundex & Metaphone', desc: t.features?.harmonization?.algorithms?.soundexDesc || 'Phonetischer Vergleich für Klangähnlichkeit' },
    { name: t.features?.harmonization?.algorithms?.ngram || 'N-Gram-Analyse', desc: t.features?.harmonization?.algorithms?.ngramDesc || 'Teilstring-Analyse für Langtexte' },
  ];

  const matchTypes = [
    { type: t.features?.harmonization?.matchTypes?.exact || 'Exakter Match', desc: t.features?.harmonization?.matchTypes?.exactDesc || 'Felder müssen identisch sein', use: t.features?.harmonization?.matchTypes?.exactUse || 'Artikelnummern, IDs', color: 'from-blue-500 to-indigo-600' },
    { type: t.features?.harmonization?.matchTypes?.fuzzy || 'Fuzzy Match', desc: t.features?.harmonization?.matchTypes?.fuzzyDesc || 'Ähnlichkeitsvergleich mit Schwellwert', use: t.features?.harmonization?.matchTypes?.fuzzyUse || 'Namen, Beschreibungen', color: 'from-purple-500 to-fuchsia-600' },
    { type: t.features?.harmonization?.matchTypes?.phonetic || 'Phonetischer Match', desc: t.features?.harmonization?.matchTypes?.phoneticDesc || 'Klangbasierte Ähnlichkeit', use: t.features?.harmonization?.matchTypes?.phoneticUse || 'Personennamen', color: 'from-green-500 to-emerald-600' },
    { type: t.features?.harmonization?.matchTypes?.ngram || 'N-Gram Vergleich', desc: t.features?.harmonization?.matchTypes?.ngramDesc || 'Teilstring-Analyse', use: t.features?.harmonization?.matchTypes?.ngramUse || 'Adressen, Langtexte', color: 'from-orange-500 to-amber-600' },
  ];

  const workflowSteps = [
    { step: '1', title: t.features?.harmonization?.workflow?.config || 'Konfiguration', desc: t.features?.harmonization?.workflow?.configDesc || 'Tabellen aus Data Catalog wählen, Verknüpfungen definieren, Filter setzen', Icon: Settings },
    { step: '2', title: t.features?.harmonization?.workflow?.rules || 'Regeln definieren', desc: t.features?.harmonization?.workflow?.rulesDesc || 'Match-Felder auswählen, Algorithmus & Schwellwert festlegen', Icon: Search },
    { step: '3', title: t.features?.harmonization?.workflow?.analysis || 'Analyse starten', desc: t.features?.harmonization?.workflow?.analysisDesc || 'Automatische Blocking-Key-Berechnung, Cluster-Bildung, Golden Record Vorschlag', Icon: Sparkles },
    { step: '4', title: t.features?.harmonization?.workflow?.review || 'Review & Freigabe', desc: t.features?.harmonization?.workflow?.reviewDesc || 'Cluster prüfen, Golden Record bestätigen, optionale 4-Augen-Freigabe', Icon: Eye },
    { step: '5', title: t.features?.harmonization?.workflow?.export || 'Export', desc: t.features?.harmonization?.workflow?.exportDesc || 'Bereinigte Daten, Mapping-Tabelle, Audit-Report', Icon: Download },
  ];

  const goldenRecordStrategies = [
    { name: t.features?.harmonization?.goldenRecord?.completeness || 'Vollständigkeit', desc: t.features?.harmonization?.goldenRecord?.completenessDesc || 'Datensatz mit den meisten ausgefüllten Feldern' },
    { name: t.features?.harmonization?.goldenRecord?.recency || 'Aktualität', desc: t.features?.harmonization?.goldenRecord?.recencyDesc || 'Neuester Datensatz nach Erstelldatum' },
    { name: t.features?.harmonization?.goldenRecord?.quality || 'Qualität', desc: t.features?.harmonization?.goldenRecord?.qualityDesc || 'Höchster Datenqualitäts-Score' },
    { name: t.features?.harmonization?.goldenRecord?.manual || 'Manuell', desc: t.features?.harmonization?.goldenRecord?.manualDesc || 'Keine automatischen Vorschläge' },
  ];

  const useCases = [
    { 
      title: t.features?.harmonization?.useCases?.materials?.title || 'Material-Dubletten (SAP)', 
      tables: 'MARA + MAKT',
      rule: t.features?.harmonization?.useCases?.materials?.rule || 'Fuzzy-Match auf Materialbezeichnung mit 85% Schwellwert',
      filter: 'SPRAS = \'D\''
    },
    { 
      title: t.features?.harmonization?.useCases?.customers?.title || 'Kunden-Dubletten', 
      tables: 'KNA1 + ADRC',
      rule: t.features?.harmonization?.useCases?.customers?.rule || 'Phonetischer Match auf Name + Fuzzy-Match auf Adresse',
      filter: t.features?.harmonization?.useCases?.customers?.filter || 'Golden Record: Vollständigster Datensatz'
    },
    { 
      title: t.features?.harmonization?.useCases?.vendors?.title || 'Lieferanten-Bereinigung', 
      tables: 'LFA1',
      rule: t.features?.harmonization?.useCases?.vendors?.rule || 'Exakter Match auf Steuernummer + Fuzzy-Match auf Name',
      filter: t.features?.harmonization?.useCases?.vendors?.filter || 'Mit 4-Augen-Freigabe'
    },
  ];

  const benefits = [
    { text: t.features?.harmonization?.benefits?.earlyDetection || 'Früherkennung: Datenprobleme vor der Migration identifizieren' },
    { text: t.features?.harmonization?.benefits?.flexibility || 'Flexibilität: Anpassbare Regeln für jeden Anwendungsfall' },
    { text: t.features?.harmonization?.benefits?.transparency || 'Transparenz: Nachvollziehbare Match-Scores und Entscheidungen' },
    { text: t.features?.harmonization?.benefits?.compliance || 'Compliance: 4-Augen-Prinzip und vollständiger Audit-Trail' },
    { text: t.features?.harmonization?.benefits?.integration || 'Integration: Nahtlose Verbindung mit Data Catalog und Migrationsregeln' },
    { text: t.features?.harmonization?.benefits?.scalability || 'Skalierbarkeit: Optimiert für große Datenmengen (bis 3 Mio. Datensätze)' },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Combine className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{t.features?.harmonization?.badge || 'Datenqualität optimieren'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t.features?.harmonization?.title || 'Datenharmonisierung & Dublettenprüfung'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {t.features?.harmonization?.subtitle || 'Identifizieren und bereinigen Sie Duplikate in Ihren Quelldaten vor der Migration. Saubere, deduplizierte Daten für Ihr Zielsystem.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={t.features?.harmonization?.screenshotTitle || 'Dubletten-Cluster Übersicht'}
              subtitle={t.features?.harmonization?.screenshotSubtitle || 'Intelligente Gruppierung und Golden Record Auswahl'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <AnimatedCounter target={3} suffix=" Mio." label={t.features?.harmonization?.stats?.records || 'Max. Datensätze'} delay={0.1} />
          <AnimatedCounter target={4} label={t.features?.harmonization?.stats?.algorithms || 'Matching-Algorithmen'} delay={0.2} />
          <AnimatedCounter target={4} label={t.features?.harmonization?.stats?.strategies || 'Golden Record Strategien'} delay={0.3} />
          <AnimatedCounter target={100} suffix="%" label={t.features?.harmonization?.stats?.auditTrail || 'Audit-Trail'} delay={0.4} />
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Settings, color: 'from-blue-500 to-indigo-600', title: t.features?.harmonization?.keyFeatures?.config?.title || 'Flexible Konfiguration', desc: t.features?.harmonization?.keyFeatures?.config?.desc || 'Tabellen-Sets, Verknüpfungen und Filter für präzise Dublettenprüfung definieren.' },
            { Icon: Search, color: 'from-purple-500 to-fuchsia-600', title: t.features?.harmonization?.keyFeatures?.matching?.title || 'Intelligentes Matching', desc: t.features?.harmonization?.keyFeatures?.matching?.desc || 'Exakte, Fuzzy, phonetische und N-Gram Matching-Regeln kombinieren.' },
            { Icon: Sparkles, color: 'from-green-500 to-emerald-600', title: t.features?.harmonization?.keyFeatures?.golden?.title || 'Golden Record Auswahl', desc: t.features?.harmonization?.keyFeatures?.golden?.desc || 'Automatische oder manuelle Bestimmung des Master-Datensatzes.' },
          ].map((feature, index) => (
            <AnimatedSection key={feature.title} animation="fade-in-up" delay={0.2 + index * 0.1}>
              <div className="glass-card p-6 rounded-xl h-full hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Matching Types */}
        <AnimatedSection animation="fade-in-left" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.features?.harmonization?.matchTypesTitle || 'Matching-Regeltypen'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchTypes.map((item, index) => (
                <AnimatedSection key={item.type} animation="fade-in-right" delay={0.4 + index * 0.1}>
                  <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-24 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-semibold text-xs`}>
                        {item.type}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{item.desc}</p>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {t.features?.harmonization?.useCase || 'Anwendung'}: {item.use}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Matching Algorithms */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.features?.harmonization?.algorithmsTitle || 'Matching-Algorithmen'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {matchingAlgorithms.map((algo, index) => (
                <AnimatedSection key={algo.name} animation="scale-in" delay={0.4 + index * 0.1}>
                  <div className="bg-white/50 rounded-lg p-4 text-center hover:-translate-y-1 transition-transform duration-300 h-full">
                    <div className="w-10 h-10 bg-[#8B2486] rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{algo.name}</h3>
                    <p className="text-xs text-gray-600">{algo.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Workflow */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.features?.harmonization?.workflowTitle || 'Workflow'}</h2>
            
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <AnimatedSection key={step.step} animation="fade-in-right" delay={0.4 + index * 0.1}>
                  <div className="flex items-start gap-4 bg-white/50 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B2486] to-[#6B1A66] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <step.Icon className="w-4 h-4 text-[#8B2486]" />
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Golden Record Strategies & Review */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animation="fade-in-left" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.features?.harmonization?.goldenRecordTitle || 'Golden Record Strategien'}</h2>
              <p className="text-gray-600 mb-4">{t.features?.harmonization?.goldenRecordSubtitle || 'Bestimmen Sie automatisch oder manuell den Master-Datensatz:'}</p>
              <ul className="space-y-3">
                {goldenRecordStrategies.map((strategy, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">{strategy.name}:</span>
                      <span className="text-gray-600 ml-1">{strategy.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" delay={0.4}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.features?.harmonization?.reviewTitle || 'Review & Freigabe'}</h2>
              <ul className="space-y-3 text-gray-600">
                {[
                  t.features?.harmonization?.review?.clusterOverview || 'Cluster-Übersicht: Alle Dubletten-Gruppen auf einen Blick',
                  t.features?.harmonization?.review?.detailCompare || 'Detailvergleich: Feldweise Gegenüberstellung der Datensätze',
                  t.features?.harmonization?.review?.matchDetails || 'Match-Details: Transparente Darstellung der Erkennungsgründe',
                  t.features?.harmonization?.review?.fourEyes || '4-Augen-Prinzip: Optionale Freigabe durch zweite Person',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Use Cases */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.features?.harmonization?.useCasesTitle || 'Anwendungsbeispiele'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((uc, index) => (
                <AnimatedSection key={uc.title} animation="scale-in" delay={0.4 + index * 0.1}>
                  <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-2 transition-transform duration-300 h-full">
                    <h3 className="font-semibold text-gray-900 mb-3">{uc.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">{t.features?.harmonization?.tables || 'Tabellen'}:</span>
                        <span className="ml-1 font-mono text-gray-700">{uc.tables}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{t.features?.harmonization?.rule || 'Regel'}:</span>
                        <span className="ml-1 text-gray-700">{uc.rule}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{t.features?.harmonization?.filter || 'Filter'}:</span>
                        <span className="ml-1 font-mono text-gray-700">{uc.filter}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Export Options */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.features?.harmonization?.exportTitle || 'Export-Optionen'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { Icon: FileCheck, color: 'from-blue-500 to-indigo-600', title: t.features?.harmonization?.export?.cleanedData?.title || 'Bereinigte Daten', desc: t.features?.harmonization?.export?.cleanedData?.desc || 'Neue Dataset-Version ohne Dubletten als Quelle für Migration nutzen' },
                { Icon: Combine, color: 'from-purple-500 to-fuchsia-600', title: t.features?.harmonization?.export?.mappingTable?.title || 'Mapping-Tabelle', desc: t.features?.harmonization?.export?.mappingTable?.desc || 'Alt-ID → Golden-Record-ID in Migrationsregeln verwenden' },
                { Icon: BarChart3, color: 'from-green-500 to-emerald-600', title: t.features?.harmonization?.export?.summary?.title || 'Zusammenfassung', desc: t.features?.harmonization?.export?.summary?.desc || 'Statistiken & Audit-Trail für Dokumentation & Compliance' },
              ].map((exp, index) => (
                <AnimatedSection key={exp.title} animation="scale-in" delay={0.4 + index * 0.1}>
                  <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-2 transition-transform duration-300">
                    <div className={`w-10 h-10 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center mb-3`}>
                      <exp.Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-sm text-gray-600">{exp.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.features?.harmonization?.benefitsTitle || 'Vorteile'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} animation="fade-in-right" delay={0.4 + index * 0.05}>
                  <div className="flex items-start gap-3 bg-white/50 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit.text}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {t.features?.harmonization?.cta?.title || 'Bereit für saubere Daten?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
              {t.features?.harmonization?.cta?.subtitle || 'Entdecken Sie, wie CUTO Ihre Datenqualität vor der Migration optimiert.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {t.features?.harmonization?.cta?.demo || 'Demo anfragen'}
              </Link>
              <Link
                href="/features/migration"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {t.features?.harmonization?.cta?.migration || 'Data Migration →'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

