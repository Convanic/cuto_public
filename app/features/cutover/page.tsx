'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useI18n } from '@/lib/i18n/context';
import { 
  Rocket, 
  FileText, 
  Clock, 
  RefreshCw, 
  Megaphone, 
  Bell, 
  ClipboardList,
  CheckCircle
} from 'lucide-react';

export default function CutoverPage() {
  const { t } = useI18n();
  const cutoverT = t.features?.cutover;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{cutoverT?.badge || 'Go-Live Ready'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {cutoverT?.title || 'Cutover Management'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {cutoverT?.subtitle || 'Plan, rehearse, and execute your go-live with precision.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={cutoverT?.screenshotTitle || 'Cutover Timeline'}
              subtitle={cutoverT?.screenshotSubtitle || 'Minute-by-minute go-live tracking'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: FileText, color: 'from-orange-500 to-red-600', key: 'checklists', fallbackTitle: 'Cutover Checklists', fallbackDesc: 'Pre-defined checklists for every cutover phase. Track completion status and ensure nothing is missed during go-live.' },
            { Icon: Clock, color: 'from-blue-500 to-indigo-600', key: 'timeline', fallbackTitle: 'Timeline Management', fallbackDesc: 'Minute-by-minute cutover schedule with automatic time tracking. Know exactly where you are against the plan.' },
            { Icon: RefreshCw, color: 'from-green-500 to-emerald-600', key: 'rehearsal', fallbackTitle: 'Rehearsal Support', fallbackDesc: 'Run multiple dry runs to refine your cutover plan. Track learnings and improve with each rehearsal.' },
          ].map((feature, index) => {
            const featureT = cutoverT?.keyFeatures?.[feature.key as keyof typeof cutoverT.keyFeatures];
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

        {/* Cutover Phases */}
        <AnimatedSection animation="fade-in-left" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{cutoverT?.phases?.title || 'Cutover Phase Management'}</h2>
            
            <div className="space-y-4">
              {[
                { key: 'preCutover', color: 'from-blue-500 to-cyan-600', fallbackName: 'Pre-Cutover', fallbackTime: 'T-30 to T-0', fallbackTasks: ['Final data freeze verification', 'System access validation', 'Communication to stakeholders', 'War room setup'] },
                { key: 'technical', color: 'from-purple-500 to-indigo-600', fallbackName: 'Technical Cutover', fallbackTime: 'T-0 to T+12h', fallbackTasks: ['Legacy system shutdown', 'Final data extraction', 'Data load execution', 'Technical validation'] },
                { key: 'business', color: 'from-orange-500 to-amber-600', fallbackName: 'Business Cutover', fallbackTime: 'T+12h to T+24h', fallbackTasks: ['Opening balances verification', 'Business process testing', 'User access enablement', 'Go/No-Go decision'] },
                { key: 'hypercare', color: 'from-green-500 to-emerald-600', fallbackName: 'Hypercare', fallbackTime: 'T+24h to T+2w', fallbackTasks: ['24/7 support coverage', 'Issue triage and resolution', 'Performance monitoring', 'User support'] },
              ].map((item, index) => {
                const phaseT = cutoverT?.phases?.[item.key as keyof typeof cutoverT.phases];
                const phase = phaseT as { name?: string; time?: string; tasks?: string[] };
                return (
                  <AnimatedSection key={item.key} animation="fade-in-right" delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-32 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-semibold text-sm`}>
                          {phase?.name || item.fallbackName}
                        </div>
                        <span className="text-gray-600 font-mono text-sm">{phase?.time || item.fallbackTime}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(phase?.tasks || item.fallbackTasks).map((task: string) => (
                          <span key={task} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Cutover Day View */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{cutoverT?.dayDashboard?.title || 'Cutover Day Dashboard'}</h2>
            <p className="text-gray-600 mb-6">
              {cutoverT?.dayDashboard?.subtitle || 'Real-time command center view during cutover execution.'}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AnimatedCounter target={85} suffix="%" label={cutoverT?.dayDashboard?.tasksComplete || 'Tasks Complete'} delay={0.1} />
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">+2:15</div>
                <div className="text-sm text-gray-600">{cutoverT?.dayDashboard?.timeVsPlan || 'Time vs. Plan'}</div>
              </div>
              <AnimatedCounter target={3} label={cutoverT?.dayDashboard?.openBlockers || 'Open Blockers'} delay={0.3} />
              <AnimatedCounter target={47} label={cutoverT?.dayDashboard?.teamMembers || 'Team Members Active'} delay={0.4} />
            </div>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animation="fade-in-left" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{cutoverT?.goNoGo?.title || 'Go/No-Go Decision Support'}</h2>
              <ul className="space-y-3 text-gray-600">
                {(cutoverT?.goNoGo?.items || [
                  'Automated readiness assessment based on checklist completion',
                  'Critical path status highlighting',
                  'Risk summary with mitigation status',
                  'Decision documentation and audit trail',
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{cutoverT?.rollout?.title || 'Rollout Planning'}</h2>
              <ul className="space-y-3 text-gray-600">
                {(cutoverT?.rollout?.items || [
                  'Multi-wave rollout scheduling',
                  'Location-specific checklists',
                  'Template-based rollout replication',
                  'Cross-location dependency management',
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

        {/* Communication */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{cutoverT?.communication?.title || 'Cutover Communication'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { Icon: Megaphone, color: 'from-blue-500 to-indigo-600', key: 'broadcasts', fallbackTitle: 'Status Broadcasts', fallbackDesc: 'Automated status updates to stakeholders at configurable intervals' },
                { Icon: Bell, color: 'from-red-500 to-rose-600', key: 'alerts', fallbackTitle: 'Escalation Alerts', fallbackDesc: 'Automatic alerts when tasks are delayed or blockers are identified' },
                { Icon: ClipboardList, color: 'from-green-500 to-emerald-600', key: 'logging', fallbackTitle: 'Activity Logging', fallbackDesc: 'Complete audit trail of all cutover activities and decisions' },
              ].map((comm, index) => {
                const commT = cutoverT?.communication?.[comm.key as keyof typeof cutoverT.communication];
                return (
                  <AnimatedSection key={comm.key} animation="scale-in" delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-2 transition-transform duration-300">
                      <div className={`w-10 h-10 bg-gradient-to-br ${comm.color} rounded-lg flex items-center justify-center mb-3`}>
                        <comm.Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{(commT as { title?: string })?.title || comm.fallbackTitle}</h3>
                      <p className="text-sm text-gray-600">{(commT as { desc?: string })?.desc || comm.fallbackDesc}</p>
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
              {cutoverT?.cta?.title || 'Ready for a stress-free go-live?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {cutoverT?.cta?.demo || 'Schedule a Demo'}
              </Link>
              <Link
                href="/features/risks"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {cutoverT?.cta?.risks || 'Risk Management →'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
