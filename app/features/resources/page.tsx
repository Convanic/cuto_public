'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';
import { 
  Users, 
  BarChart3, 
  Scale, 
  Calendar,
  Briefcase,
  FileText,
  Code,
  Search,
  PieChart,
  Building2,
  RefreshCw,
  Pencil,
  CheckCircle,
  Upload,
  LucideIcon
} from 'lucide-react';

const roleIcons: Record<string, LucideIcon> = {
  pm: Briefcase,
  lead: FileText,
  consultant: Users,
  developer: Code,
  tester: Search,
  analyst: PieChart,
  change: RefreshCw,
  architect: Building2,
};

export default function ResourcesPage() {
  const { t } = useI18n();
  const resourcesT = t.features?.resources;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{resourcesT?.badge || 'Team Management'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {resourcesT?.title || 'Resource Planning'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {resourcesT?.subtitle || 'Optimize your team allocation and ensure the right people are working on the right tasks.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={resourcesT?.screenshotTitle || 'Team Capacity Planning'}
              subtitle={resourcesT?.screenshotSubtitle || 'Resource allocation overview'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: BarChart3, color: 'from-blue-500 to-indigo-600', key: 'capacity', fallbackTitle: 'Capacity Planning', fallbackDesc: 'Plan resource capacity across project phases. Visualize availability and identify gaps before they impact delivery.' },
            { Icon: Scale, color: 'from-green-500 to-emerald-600', key: 'balancing', fallbackTitle: 'Workload Balancing', fallbackDesc: 'Identify over- and under-allocated resources. Balance workload across the team for optimal productivity.' },
            { Icon: Calendar, color: 'from-purple-500 to-violet-600', key: 'time', fallbackTitle: 'Time Tracking', fallbackDesc: 'Track actual effort against planned. Integrated timesheet functionality for accurate project costing.' },
          ].map((feature, index) => {
            const featureT = resourcesT?.keyFeatures?.[feature.key as keyof typeof resourcesT.keyFeatures];
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

        {/* Team Structure */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{resourcesT?.teamStructure?.title || 'Project Team Structure'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['pm', 'lead', 'consultant', 'developer', 'tester', 'analyst', 'change', 'architect'].map((roleKey, index) => {
                const roleT = resourcesT?.teamStructure?.roles?.[roleKey as keyof typeof resourcesT.teamStructure.roles];
                const role = roleT as { role?: string; responsibilities?: string };
                const Icon = roleIcons[roleKey] || Users;
                
                return (
                  <AnimatedSection key={roleKey} animation="scale-in" delay={0.4 + index * 0.05}>
                    <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-[#8B2486] rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900">{role?.role || roleKey}</h3>
                      </div>
                      <p className="text-xs text-gray-600">{role?.responsibilities || ''}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Allocation Views */}
        <AnimatedSection animation="fade-in-left" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{resourcesT?.allocationViews?.title || 'Resource Allocation Views'}</h2>
            
            <div className="space-y-6">
              <div className="bg-white/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  {resourcesT?.allocationViews?.weeklyView || 'Weekly View'}
                </h3>
                <div className="overflow-x-auto">
                  <div className="grid grid-cols-8 gap-2 min-w-[600px]">
                    <div className="font-medium text-gray-600 text-sm">{resourcesT?.allocationViews?.resource || 'Resource'}</div>
                    <div className="text-center text-sm text-gray-600">Mon</div>
                    <div className="text-center text-sm text-gray-600">Tue</div>
                    <div className="text-center text-sm text-gray-600">Wed</div>
                    <div className="text-center text-sm text-gray-600">Thu</div>
                    <div className="text-center text-sm text-gray-600">Fri</div>
                    <div className="text-center text-sm text-gray-600">{resourcesT?.allocationViews?.total || 'Total'}</div>
                    <div className="text-center text-sm text-gray-600">%</div>
                    
                    {[
                      { name: 'John Smith', hours: [8, 8, 8, 8, 8], util: 100 },
                      { name: 'Sarah Johnson', hours: [8, 8, 4, 8, 8], util: 90 },
                      { name: 'Mike Chen', hours: [10, 10, 10, 8, 8], util: 115 },
                    ].map((person) => (
                      <div key={person.name} className="contents">
                        <div className="text-sm font-medium">{person.name}</div>
                        {person.hours.map((h, i) => (
                          <div 
                            key={i}
                            className={`text-center text-sm p-1 rounded ${
                              h > 8 ? 'bg-red-100 text-red-700' : 
                              h < 8 ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-green-100 text-green-700'
                            }`}
                          >
                            {h}h
                          </div>
                        ))}
                        <div className="text-center text-sm font-medium">{person.hours.reduce((a, b) => a + b, 0)}h</div>
                        <div className={`text-center text-sm font-medium p-1 rounded ${
                          person.util > 100 ? 'bg-red-100 text-red-700' : 
                          person.util < 80 ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-green-100 text-green-700'
                        }`}>
                          {person.util}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animation="fade-in-left" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{resourcesT?.skills?.title || 'Skill Management'}</h2>
              <ul className="space-y-3 text-gray-600">
                {(resourcesT?.skills?.items || [
                  'Define required skills per role and activity',
                  'Track team member skill levels',
                  'Identify skill gaps for training planning',
                  'Match skills to task requirements',
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{resourcesT?.external?.title || 'External Resources'}</h2>
              <ul className="space-y-3 text-gray-600">
                {(resourcesT?.external?.items || [
                  'Track contractors and consultants separately',
                  'Contract dates and renewal tracking',
                  'Daily rate and cost tracking',
                  'Vendor performance metrics',
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

        {/* Timesheet */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{resourcesT?.timesheet?.title || 'Integrated Timesheet'}</h2>
            <p className="text-gray-600 mb-6">
              {resourcesT?.timesheet?.subtitle || 'Simple time tracking that integrates directly with project activities.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { Icon: Pencil, color: 'from-blue-500 to-indigo-600', key: 'activity', fallbackTitle: 'Activity-Based', fallbackDesc: 'Log time directly against project activities' },
                { Icon: CheckCircle, color: 'from-green-500 to-emerald-600', key: 'approval', fallbackTitle: 'Approval Workflow', fallbackDesc: 'Submit and approve timesheets weekly' },
                { Icon: BarChart3, color: 'from-purple-500 to-violet-600', key: 'comparison', fallbackTitle: 'Plan vs. Actual', fallbackDesc: 'Compare planned effort to actual time spent' },
                { Icon: Upload, color: 'from-orange-500 to-amber-600', key: 'export', fallbackTitle: 'Export', fallbackDesc: 'Export to Excel or integrate with HR systems' },
              ].map((item, index) => {
                const itemT = resourcesT?.timesheet?.features?.[item.key as keyof typeof resourcesT.timesheet.features];
                return (
                  <AnimatedSection key={item.key} animation="scale-in" delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-4 text-center hover:-translate-y-2 transition-transform duration-300">
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <item.Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{(itemT as { title?: string })?.title || item.fallbackTitle}</h3>
                      <p className="text-xs text-gray-600">{(itemT as { desc?: string })?.desc || item.fallbackDesc}</p>
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
              {resourcesT?.cta?.title || 'Ready to optimize your project team?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {resourcesT?.cta?.demo || 'Schedule a Demo'}
              </Link>
              <Link
                href="/pricing"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {resourcesT?.cta?.pricing || 'View Pricing'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
