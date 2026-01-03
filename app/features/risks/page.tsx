'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';
import { 
  AlertTriangle, 
  Target, 
  Flame, 
  BarChart3, 
  Settings, 
  Users, 
  Calendar, 
  DollarSign, 
  Ruler, 
  Handshake, 
  RefreshCw, 
  FileText,
  TrendingUp,
  Trophy,
  PieChart,
  CheckCircle,
  LucideIcon
} from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  technical: Settings,
  resource: Users,
  schedule: Calendar,
  budget: DollarSign,
  scope: Ruler,
  vendor: Handshake,
  change: RefreshCw,
  compliance: FileText,
};

export default function RisksPage() {
  const { t } = useI18n();
  const risksT = t.features?.risks;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{risksT?.badge || 'Proactive Risk Management'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {risksT?.title || 'Risk & Issue Management'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {risksT?.subtitle || 'Identify, assess, and mitigate risks before they impact your project.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={risksT?.screenshotTitle || 'Risk Heat Map'}
              subtitle={risksT?.screenshotSubtitle || 'Visual risk assessment matrix'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Target, color: 'from-red-500 to-rose-600', key: 'register', fallbackTitle: 'Risk Register', fallbackDesc: 'Central repository for all project risks with probability and impact assessment. Track mitigation actions and owners.' },
            { Icon: Flame, color: 'from-orange-500 to-amber-600', key: 'issues', fallbackTitle: 'Issue Tracker', fallbackDesc: 'Log and manage issues as they arise. Define owners, track resolution progress, and escalate when needed.' },
            { Icon: BarChart3, color: 'from-purple-500 to-violet-600', key: 'heatmaps', fallbackTitle: 'Heat Maps', fallbackDesc: 'Visual risk matrix showing probability vs. impact. Quickly identify critical risks requiring immediate attention.' },
          ].map((feature, index) => {
            const featureT = risksT?.keyFeatures?.[feature.key as keyof typeof risksT.keyFeatures];
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

        {/* Risk Matrix */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{risksT?.matrix?.title || 'Risk Assessment Matrix'}</h2>
            <p className="text-gray-600 mb-6">
              {risksT?.matrix?.subtitle || 'Classify risks based on probability and impact to prioritize mitigation efforts.'}
            </p>
            
            <div className="overflow-x-auto">
              <div className="grid grid-cols-6 gap-1 min-w-[500px]">
                {/* Header Row */}
                <div className="p-2"></div>
                <div className="p-2 text-center text-sm font-medium text-gray-600">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-2 text-center text-sm font-medium text-gray-600">{risksT?.matrix?.low || 'Low'}</div>
                <div className="p-2 text-center text-sm font-medium text-gray-600">{risksT?.matrix?.medium || 'Medium'}</div>
                <div className="p-2 text-center text-sm font-medium text-gray-600">{risksT?.matrix?.high || 'High'}</div>
                <div className="p-2 text-center text-sm font-medium text-gray-600">{risksT?.matrix?.veryHigh || 'Very High'}</div>
                
                {/* Very High Probability */}
                <div className="p-2 text-sm font-medium text-gray-600 flex items-center">{risksT?.matrix?.veryHigh || 'Very High'}</div>
                <div className="p-3 bg-yellow-300 rounded text-center text-xs font-medium">{risksT?.matrix?.medium || 'Medium'}</div>
                <div className="p-3 bg-orange-400 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.high || 'High'}</div>
                <div className="p-3 bg-red-500 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.critical || 'Critical'}</div>
                <div className="p-3 bg-red-600 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.critical || 'Critical'}</div>
                <div className="p-3 bg-red-700 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.critical || 'Critical'}</div>
                
                {/* High Probability */}
                <div className="p-2 text-sm font-medium text-gray-600 flex items-center">{risksT?.matrix?.high || 'High'}</div>
                <div className="p-3 bg-green-300 rounded text-center text-xs font-medium">{risksT?.matrix?.low || 'Low'}</div>
                <div className="p-3 bg-yellow-300 rounded text-center text-xs font-medium">{risksT?.matrix?.medium || 'Medium'}</div>
                <div className="p-3 bg-orange-400 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.high || 'High'}</div>
                <div className="p-3 bg-red-500 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.critical || 'Critical'}</div>
                <div className="p-3 bg-red-600 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.critical || 'Critical'}</div>
                
                {/* Medium Probability */}
                <div className="p-2 text-sm font-medium text-gray-600 flex items-center">{risksT?.matrix?.medium || 'Medium'}</div>
                <div className="p-3 bg-green-200 rounded text-center text-xs font-medium">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-3 bg-green-300 rounded text-center text-xs font-medium">{risksT?.matrix?.low || 'Low'}</div>
                <div className="p-3 bg-yellow-300 rounded text-center text-xs font-medium">{risksT?.matrix?.medium || 'Medium'}</div>
                <div className="p-3 bg-orange-400 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.high || 'High'}</div>
                <div className="p-3 bg-red-500 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.critical || 'Critical'}</div>
                
                {/* Low Probability */}
                <div className="p-2 text-sm font-medium text-gray-600 flex items-center">{risksT?.matrix?.low || 'Low'}</div>
                <div className="p-3 bg-green-100 rounded text-center text-xs font-medium">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-3 bg-green-200 rounded text-center text-xs font-medium">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-3 bg-green-300 rounded text-center text-xs font-medium">{risksT?.matrix?.low || 'Low'}</div>
                <div className="p-3 bg-yellow-300 rounded text-center text-xs font-medium">{risksT?.matrix?.medium || 'Medium'}</div>
                <div className="p-3 bg-orange-400 rounded text-center text-xs font-medium text-white">{risksT?.matrix?.high || 'High'}</div>
                
                {/* Very Low Probability */}
                <div className="p-2 text-sm font-medium text-gray-600 flex items-center">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-3 bg-green-100 rounded text-center text-xs font-medium">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-3 bg-green-100 rounded text-center text-xs font-medium">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-3 bg-green-200 rounded text-center text-xs font-medium">{risksT?.matrix?.veryLow || 'Very Low'}</div>
                <div className="p-3 bg-green-300 rounded text-center text-xs font-medium">{risksT?.matrix?.low || 'Low'}</div>
                <div className="p-3 bg-yellow-300 rounded text-center text-xs font-medium">{risksT?.matrix?.medium || 'Medium'}</div>
              </div>
              <div className="text-center mt-4 text-sm text-gray-500">
                ← {risksT?.matrix?.impact || 'Impact'} →
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Risk Categories */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{risksT?.categories?.title || 'Pre-defined Risk Categories'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['technical', 'resource', 'schedule', 'budget', 'scope', 'vendor', 'change', 'compliance'].map((catKey, index) => {
                const catT = risksT?.categories?.[catKey as keyof typeof risksT.categories];
                const cat = catT as { name?: string; examples?: string };
                const Icon = categoryIcons[catKey] || Settings;
                
                return (
                  <AnimatedSection key={catKey} animation="scale-in" delay={0.4 + index * 0.05}>
                    <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-[#8B2486] rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900">{cat?.name || catKey}</h3>
                      </div>
                      <p className="text-xs text-gray-600">{cat?.examples || ''}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Mitigation Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animation="fade-in-left" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{risksT?.mitigation?.title || 'Mitigation Management'}</h2>
              <ul className="space-y-3 text-gray-600">
                {(risksT?.mitigation?.items || [
                  'Define multiple mitigation actions per risk',
                  'Assign owners and due dates',
                  'Track mitigation progress and effectiveness',
                  'Re-assess risk after mitigation',
                  'Automatic reminders for overdue actions',
                ]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" delay={0.4}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{risksT?.issueWorkflow?.title || 'Issue Resolution Workflow'}</h2>
              <ul className="space-y-3 text-gray-600">
                {(risksT?.issueWorkflow?.items || [
                  'Status workflow: New → In Progress → Resolved → Closed',
                  'Priority levels with SLA tracking',
                  'Escalation paths and notifications',
                  'Root cause documentation',
                  'Lessons learned capture',
                ]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Reporting */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{risksT?.reporting?.title || 'Risk & Issue Reporting'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { Icon: TrendingUp, color: 'from-blue-500 to-indigo-600', key: 'trend', fallbackTitle: 'Trend Analysis', fallbackDesc: 'Track how risks and issues evolve over time. Identify patterns and recurring themes.' },
                { Icon: Trophy, color: 'from-amber-500 to-yellow-600', key: 'top10', fallbackTitle: 'Top 10 Reports', fallbackDesc: 'Focus on the most critical risks for steering committee presentations.' },
                { Icon: PieChart, color: 'from-purple-500 to-violet-600', key: 'resolution', fallbackTitle: 'Resolution Metrics', fallbackDesc: 'Average time to resolution, open vs. closed trends, owner performance.' },
              ].map((report, index) => {
                const reportT = risksT?.reporting?.[report.key as keyof typeof risksT.reporting];
                return (
                  <AnimatedSection key={report.key} animation="scale-in" delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-4 text-center hover:-translate-y-2 transition-transform duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <report.Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{(reportT as { title?: string })?.title || report.fallbackTitle}</h3>
                      <p className="text-sm text-gray-600">{(reportT as { desc?: string })?.desc || report.fallbackDesc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {risksT?.cta?.title || 'Ready to manage project risks proactively?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {risksT?.cta?.demo || 'Schedule a Demo'}
              </Link>
              <Link
                href="/features/resources"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {risksT?.cta?.resources || 'Resource Planning →'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
