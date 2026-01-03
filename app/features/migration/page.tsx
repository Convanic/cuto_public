'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';
import { 
  FolderOpen, 
  FileText, 
  CheckCircle, 
  BarChart3, 
  Pencil, 
  Link2, 
  Upload, 
  Scale,
  Key,
  LayoutGrid,
  Ruler,
  Zap,
  TrendingUp,
  Download,
  PieChart
} from 'lucide-react';

export default function MigrationPage() {
  const { t } = useI18n();
  const migrationT = t.features?.migration;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FolderOpen className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{migrationT?.badge || 'Data Quality & Validation'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {migrationT?.title || 'Data Migration Tools'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {migrationT?.subtitle || 'Ensure successful data migration with comprehensive validation, quality checks, and reconciliation tools.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={migrationT?.screenshotTitle || 'Data Validation Dashboard'}
              subtitle={migrationT?.screenshotSubtitle || 'Real-time match rate analysis'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: FileText, color: 'from-blue-500 to-indigo-600', key: 'catalog', fallbackTitle: 'Data Catalog', fallbackDesc: 'Central repository for all migration objects. Define field mappings, data types, and transformation rules in one place.' },
            { Icon: CheckCircle, color: 'from-green-500 to-emerald-600', key: 'validation', fallbackTitle: 'Validation Engine', fallbackDesc: 'Automated validation of source-to-target data matching, completeness checks, and business rule compliance.' },
            { Icon: BarChart3, color: 'from-purple-500 to-violet-600', key: 'dashboard', fallbackTitle: 'Quality Dashboard', fallbackDesc: 'Real-time visibility into data quality metrics. Track match rates, error counts, and resolution progress.' },
          ].map((feature, index) => {
            const featureT = migrationT?.keyFeatures?.[feature.key as keyof typeof migrationT.keyFeatures];
            return (
              <AnimatedSection key={feature.key} animation="fade-in-up" delay={0.2 + index * 0.1}>
                <div className="glass-card p-6 rounded-xl h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{featureT?.title || feature.fallbackTitle}</h3>
                  <p className="text-gray-600">{featureT?.desc || feature.fallbackDesc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Migration Process */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{migrationT?.workflow?.title || 'Data Migration Workflow'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: 1, Icon: Pencil, key: 'define' },
                { step: 2, Icon: Link2, key: 'map' },
                { step: 3, Icon: Upload, key: 'extract' },
                { step: 4, Icon: CheckCircle, key: 'validate' },
                { step: 5, Icon: Scale, key: 'reconcile' },
              ].map((item, index) => {
                const stepT = migrationT?.workflow?.steps?.[item.key as keyof typeof migrationT.workflow.steps];
                return (
                  <AnimatedSection key={item.step} animation="scale-in" delay={0.4 + index * 0.1}>
                    <div className="relative">
                      <div className="bg-white/50 rounded-lg p-4 text-center h-full">
                        <div className="w-10 h-10 bg-[#8B2486] rounded-xl flex items-center justify-center mx-auto mb-2">
                          <item.Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-[#8B2486] rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                          {item.step}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{stepT?.title || item.key}</h3>
                        <p className="text-xs text-gray-600">{stepT?.desc || ''}</p>
                      </div>
                      {index < 4 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-400">
                          →
                        </div>
                      )}
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Validation Types */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{migrationT?.validationTypes?.title || 'Validation Capabilities'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { Icon: Key, color: 'bg-blue-100 text-blue-600', key: 'keyField', fallbackTitle: 'Key Field Validation', fallbackDesc: 'Verify that all records can be matched between source and target systems using defined key fields.', fallbackItems: ['Missing source records detection', 'Missing target records detection', 'Duplicate key identification'] },
                { Icon: LayoutGrid, color: 'bg-green-100 text-green-600', key: 'fieldLevel', fallbackTitle: 'Field-Level Validation', fallbackDesc: 'Compare individual field values between source and target to identify transformation issues.', fallbackItems: ['Value mismatch detection', 'Data type validation', 'Format and length checks'] },
                { Icon: Ruler, color: 'bg-purple-100 text-purple-600', key: 'rules', fallbackTitle: 'Migration Rules', fallbackDesc: 'Define complex validation rules that go beyond simple field matching.', fallbackItems: ['Value mapping tables', 'Conditional transformations', 'Ignore rules for system fields', 'Wildcard matching support'] },
                { Icon: Zap, color: 'bg-orange-100 text-orange-600', key: 'quality', fallbackTitle: 'Data Quality Checks', fallbackDesc: 'Pre-migration data quality assessment to identify issues in source data.', fallbackItems: ['Completeness checks', 'Referential integrity', 'Business rule validation', 'Outlier detection'] },
              ].map((validation, index) => {
                const validationT = migrationT?.validationTypes?.[validation.key as keyof typeof migrationT.validationTypes];
                const vt = validationT as { title?: string; desc?: string; items?: string[] };
                return (
                  <AnimatedSection key={validation.key} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className={`w-8 h-8 ${validation.color} rounded-lg flex items-center justify-center`}>
                          <validation.Icon className="w-4 h-4" />
                        </span>
                        {vt?.title || validation.fallbackTitle}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{vt?.desc || validation.fallbackDesc}</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {(vt?.items || validation.fallbackItems).map((item: string) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Statistics & Reporting */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{migrationT?.statistics?.title || 'Statistics & Reporting'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { Icon: TrendingUp, color: 'from-blue-500 to-indigo-600', key: 'matchRate', fallbackTitle: 'Match Rate Dashboard', fallbackDesc: 'Real-time visualization of validation progress and match rates per object and field' },
                { Icon: Download, color: 'from-green-500 to-emerald-600', key: 'errorDownload', fallbackTitle: 'Error Downloads', fallbackDesc: 'Export validation errors to CSV/Excel for offline analysis and resolution tracking' },
                { Icon: PieChart, color: 'from-purple-500 to-violet-600', key: 'fieldStats', fallbackTitle: 'Field Statistics', fallbackDesc: 'Per-field analysis showing match rates, error types, and common issues' },
              ].map((stat, index) => {
                const statT = migrationT?.statistics?.[stat.key as keyof typeof migrationT.statistics];
                return (
                  <AnimatedSection key={stat.key} animation="scale-in" delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-6 text-center hover:-translate-y-2 transition-transform duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <stat.Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{(statT as { title?: string })?.title || stat.fallbackTitle}</h3>
                      <p className="text-sm text-gray-600">{(statT as { desc?: string })?.desc || stat.fallbackDesc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Supported Objects */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{migrationT?.objects?.title || 'Common Migration Objects'}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {(migrationT?.objects?.items || [
                'Customer Master', 'Vendor Master', 'Material Master', 'BOM',
                'GL Accounts', 'Cost Centers', 'Profit Centers', 'Work Centers',
                'Routing', 'Open POs', 'Open SOs', 'Open Items',
                'Asset Master', 'HR Master', 'Bank Master', 'Pricing',
                'Conditions', 'Batches', 'Serial Numbers', 'Quotas'
              ]).map((obj: string, index: number) => (
                <AnimatedSection key={obj} animation="scale-in" delay={0.1 + index * 0.02}>
                  <div className="bg-white/50 rounded-lg p-3 text-center hover:bg-white/70 transition-colors">
                    <span className="text-sm text-gray-700">{obj}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              {migrationT?.objects?.customNote || '+ Custom objects defined in your data catalog'}
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {migrationT?.cta?.title || 'Ready to ensure data migration success?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {migrationT?.cta?.demo || 'Schedule a Demo'}
              </Link>
              <Link
                href="/features/cutover"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {migrationT?.cta?.cutover || 'Cutover Management →'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
