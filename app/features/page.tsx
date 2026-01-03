'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import FeatureCard from '@/components/FeatureCard';
import { useI18n } from '@/lib/i18n/context';
import { 
  Calendar,
  DollarSign,
  Mail,
  Upload,
  Lock,
  Link2
} from 'lucide-react';

const featureCategoriesBase = [
  {
    id: 'dashboards',
    name: '80+ Dashboards',
    iconName: 'BarChart3' as const,
    color: 'from-purple-500 to-indigo-600',
    description: 'Real-time visibility into every aspect of your SAP project. From executive summaries to technical deep-dives.',
    highlights: ['Executive KPIs', 'Risk Heat Maps', 'Progress Tracking', 'Cutover Monitoring'],
    link: '/features/dashboards'
  },
  {
    id: 'templates',
    name: '75+ Templates',
    iconName: 'FileText' as const,
    color: 'from-blue-500 to-cyan-600',
    description: 'Battle-tested project templates based on SAP Activate methodology and real implementation experience.',
    highlights: ['S/4HANA Implementation', 'Data Migration', 'Module Templates', 'Cutover Plans'],
    link: '/features/templates'
  },
  {
    id: 'bpmn',
    name: 'BPMN Process Editor',
    iconName: 'RefreshCw' as const,
    color: 'from-green-500 to-emerald-600',
    description: 'Document your business processes with our integrated BPMN 2.0 editor. Full traceability to project activities.',
    highlights: ['Drag & Drop Editor', '6-Level Hierarchy', 'Version Control', 'BPMN 2.0 Export'],
    link: '/features/bpmn'
  },
  {
    id: 'migration',
    name: 'Data Migration',
    iconName: 'FolderOpen' as const,
    color: 'from-orange-500 to-amber-600',
    description: 'Comprehensive data validation and quality tools. Catch issues before they become go-live problems.',
    highlights: ['Data Catalog', 'Validation Engine', 'Quality Checks', 'Reconciliation'],
    link: '/features/migration'
  },
  {
    id: 'harmonization',
    name: 'Data Harmonization',
    iconName: 'Combine' as const,
    color: 'from-cyan-500 to-teal-600',
    description: 'Identify and clean duplicates in your source data before migration. Intelligent matching algorithms and Golden Record selection.',
    highlights: ['Duplicate Detection', 'Fuzzy Matching', 'Golden Record', '4-Eyes Approval'],
    link: '/features/harmonization'
  },
  {
    id: 'cutover',
    name: 'Cutover Management',
    iconName: 'Rocket' as const,
    color: 'from-red-500 to-rose-600',
    description: 'Plan, rehearse, and execute your go-live with precision. Real-time monitoring and decision support.',
    highlights: ['Checklists', 'Timeline Tracking', 'Go/No-Go Support', 'Hypercare'],
    link: '/features/cutover'
  },
  {
    id: 'risks',
    name: 'Risk & Issue Management',
    iconName: 'AlertTriangle' as const,
    color: 'from-pink-500 to-fuchsia-600',
    description: 'Proactive risk identification and issue tracking. Keep your project on track with full visibility.',
    highlights: ['Risk Register', 'Heat Map', 'Mitigation Tracking', 'Escalation Workflow'],
    link: '/features/risks'
  },
  {
    id: 'resources',
    name: 'Resource Planning',
    iconName: 'Users' as const,
    color: 'from-teal-500 to-cyan-600',
    description: 'Optimize team allocation and track capacity. Integrated timesheet for accurate project costing.',
    highlights: ['Capacity Planning', 'Skill Matrix', 'Timesheet', 'Utilization Tracking'],
    link: '/features/resources'
  },
];

export default function FeaturesPage() {
  const { t } = useI18n();

  const featureCategories = featureCategoriesBase.map(cat => ({
    ...cat,
    name: t.features?.categories?.[cat.id as keyof typeof t.features.categories]?.name || cat.name,
    description: t.features?.categories?.[cat.id as keyof typeof t.features.categories]?.description || cat.description,
    highlights: t.features?.categories?.[cat.id as keyof typeof t.features.categories]?.highlights || cat.highlights,
  }));

  const additionalCapabilities = [
    { Icon: Calendar, key: 'gantt', title: t.features?.additionalCapabilities?.gantt?.title || 'Gantt Charts & Timeline', desc: t.features?.additionalCapabilities?.gantt?.desc || 'Visual project timeline with dependencies, milestones, and critical path highlighting.' },
    { Icon: DollarSign, key: 'budget', title: t.features?.additionalCapabilities?.budget?.title || 'Budget Tracking', desc: t.features?.additionalCapabilities?.budget?.desc || 'Plan vs. actual cost tracking, burn rate analysis, and forecast to completion.' },
    { Icon: Mail, key: 'notifications', title: t.features?.additionalCapabilities?.notifications?.title || 'Notifications & Alerts', desc: t.features?.additionalCapabilities?.notifications?.desc || 'Email notifications for task assignments, overdue items, and milestone reminders.' },
    { Icon: Upload, key: 'export', title: t.features?.additionalCapabilities?.export?.title || 'Export & Reporting', desc: t.features?.additionalCapabilities?.export?.desc || 'Export to Excel, PDF, or PowerPoint. Automated status report generation.' },
    { Icon: Lock, key: 'access', title: t.features?.additionalCapabilities?.access?.title || 'Role-Based Access', desc: t.features?.additionalCapabilities?.access?.desc || 'Control who sees what with granular permissions for team roles.' },
    { Icon: Link2, key: 'integrations', title: t.features?.additionalCapabilities?.integrations?.title || 'Integrations', desc: t.features?.additionalCapabilities?.integrations?.desc || 'API access for integration with Jira, ServiceNow, and other enterprise tools.' },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t.features?.overview?.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {t.features?.overview?.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale" delay={200}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={t.features?.overview?.screenshotTitle || 'CUTO Platform Overview'} 
              subtitle={t.features?.overview?.screenshotSubtitle || 'Complete project management at a glance'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Quick Stats with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <AnimatedCounter target={80} suffix="+" label={t.home?.statsLabels?.dashboards || 'Dashboards'} delay={100} />
          <AnimatedCounter target={75} suffix="+" label={t.home?.statsLabels?.templates || 'Templates'} delay={200} />
          <AnimatedCounter target={14} label={t.home?.statsLabels?.dashboardCategories || 'Dashboard Categories'} delay={300} />
          <AnimatedCounter target={6} label={t.home?.statsLabels?.processLevels || 'Process Levels'} delay={400} />
        </div>

        {/* Feature Cards with Staggered Animation */}
        <div className="space-y-8 mb-16">
          {featureCategories.map((feature, index) => (
            <AnimatedSection 
              key={feature.id} 
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 100}
            >
              <FeatureCard
                name={feature.name}
                description={feature.description}
                iconName={feature.iconName}
                color={feature.color}
                highlights={feature.highlights}
                link={feature.link}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Capabilities */}
        <AnimatedSection animation="fade-up">
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t.features?.overview?.additionalCapabilities}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalCapabilities.map((cap, index) => (
                <AnimatedSection key={cap.key} animation="scale" delay={index * 100}>
                  <div className="bg-white/50 rounded-lg p-6 h-full group hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-lg bg-[#8B2486] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <cap.Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">{cap.title}</h3>
                    <p className="text-sm text-gray-600">{cap.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {t.features?.overview?.cta?.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
              {t.features?.overview?.cta?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:shadow-purple-500/20"
              >
                {t.features?.overview?.cta?.demo}
              </Link>
              <Link
                href="/pricing"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                {t.features?.overview?.cta?.pricing}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
