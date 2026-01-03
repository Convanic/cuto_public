'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useI18n } from '@/lib/i18n/context';
import { 
  BarChart3, 
  Clock, 
  DollarSign, 
  Users, 
  AlertTriangle, 
  FileText, 
  CheckCircle, 
  Wrench, 
  Settings, 
  RefreshCw, 
  Rocket, 
  Building2, 
  Handshake, 
  Megaphone,
  Zap,
  Smartphone,
  Upload,
  LucideIcon
} from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  executive: BarChart3,
  time: Clock,
  budget: DollarSign,
  resources: Users,
  risks: AlertTriangle,
  scope: FileText,
  quality: CheckCircle,
  workstream: Wrench,
  technical: Settings,
  change: RefreshCw,
  golive: Rocket,
  governance: Building2,
  vendor: Handshake,
  communication: Megaphone,
};

const categoryColors: Record<string, string> = {
  executive: 'from-purple-500 to-indigo-600',
  time: 'from-blue-500 to-cyan-600',
  budget: 'from-green-500 to-emerald-600',
  resources: 'from-orange-500 to-amber-600',
  risks: 'from-red-500 to-rose-600',
  scope: 'from-teal-500 to-cyan-600',
  quality: 'from-violet-500 to-purple-600',
  workstream: 'from-slate-500 to-gray-600',
  technical: 'from-zinc-500 to-neutral-600',
  change: 'from-pink-500 to-fuchsia-600',
  golive: 'from-emerald-500 to-green-600',
  governance: 'from-amber-500 to-yellow-600',
  vendor: 'from-sky-500 to-blue-600',
  communication: 'from-rose-500 to-red-600',
};

export default function DashboardsPage() {
  const { t } = useI18n();
  const dashboardsT = t.features?.dashboards;

  // Calculate total dashboards
  const categories = dashboardsT?.categories || {};
  const totalDashboards = Object.values(categories).reduce((acc, cat: { dashboards?: { id: string }[] }) => {
    return acc + (cat.dashboards?.length || 0);
  }, 0);
  
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{totalDashboards}+ {dashboardsT?.badge || 'Pre-built Dashboards'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {dashboardsT?.title || 'Executive Dashboards & Reports'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {dashboardsT?.subtitle || 'Make data-driven decisions with our comprehensive dashboard library.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={dashboardsT?.screenshotTitle || 'Executive Dashboard'}
              subtitle={dashboardsT?.screenshotSubtitle || 'Real-time project health overview'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <AnimatedCounter target={totalDashboards} suffix="+" label={dashboardsT?.stats?.dashboards || 'Dashboards'} delay={0.1} />
          <AnimatedCounter target={14} label={dashboardsT?.stats?.categories || 'Categories'} delay={0.2} />
          <AnimatedCounter target={100} suffix="%" label={dashboardsT?.stats?.customizable || 'Customizable'} delay={0.3} />
          <AnimatedCounter target={24} suffix="/7" label={dashboardsT?.stats?.realtime || 'Real-time'} delay={0.4} />
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Zap, key: 'realtime' },
            { Icon: Smartphone, key: 'mobile' },
            { Icon: Upload, key: 'export' },
          ].map((benefit, index) => {
            const benefitT = dashboardsT?.keyBenefits?.[benefit.key as keyof typeof dashboardsT.keyBenefits];
            return (
              <AnimatedSection key={benefit.key} animation="fade-in-up" delay={0.2 + index * 0.1}>
                <div className="glass-card p-6 rounded-xl text-center h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#8B2486] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefitT?.title || benefit.key}</h3>
                  <p className="text-gray-600">{benefitT?.desc || ''}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Dashboard Categories */}
        <div className="space-y-12">
          {Object.entries(categories).map(([key, category], catIndex) => {
            const Icon = categoryIcons[key] || BarChart3;
            const color = categoryColors[key] || 'from-purple-500 to-indigo-600';
            const cat = category as { name: string; dashboards: { id: string; name: string; desc: string }[] };
            
            return (
              <AnimatedSection key={key} animation={catIndex % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={0.1}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{cat.name}</h2>
                      <p className="text-gray-600">{cat.dashboards?.length || 0} {dashboardsT?.dashboardsLabel || 'dashboards'}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.dashboards?.map((dashboard) => (
                      <div key={dashboard.id} className="bg-white/50 rounded-lg p-4 hover:bg-white/70 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs font-mono bg-gray-200 px-2 py-0.5 rounded text-gray-600">{dashboard.id}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{dashboard.name}</h3>
                        <p className="text-sm text-gray-600">{dashboard.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {dashboardsT?.cta?.title || 'Ready to see these dashboards in action?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {dashboardsT?.cta?.demo || 'Schedule a Demo'}
              </Link>
              <Link
                href="/features"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {dashboardsT?.cta?.allFeatures || 'View All Features'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
