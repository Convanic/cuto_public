'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useI18n } from '@/lib/i18n/context';
import { 
  Building2, 
  Package, 
  FolderOpen, 
  Rocket, 
  CheckCircle, 
  RefreshCw, 
  Cloud, 
  Link2,
  Zap,
  Ruler,
  Target,
  Pencil,
  LucideIcon
} from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  s4hana: Building2,
  modules: Package,
  migration: FolderOpen,
  cutover: Rocket,
  testing: CheckCircle,
  change: RefreshCw,
  cloud: Cloud,
  integration: Link2,
};

const categoryColors: Record<string, string> = {
  s4hana: 'from-blue-500 to-indigo-600',
  modules: 'from-purple-500 to-violet-600',
  migration: 'from-green-500 to-emerald-600',
  cutover: 'from-orange-500 to-red-600',
  testing: 'from-teal-500 to-cyan-600',
  change: 'from-pink-500 to-rose-600',
  cloud: 'from-sky-500 to-blue-600',
  integration: 'from-amber-500 to-yellow-600',
};

export default function TemplatesPage() {
  const { t } = useI18n();
  const templatesT = t.features?.templates;

  // Calculate total templates
  const categories = templatesT?.categories || {};
  const totalTemplates = Object.values(categories).reduce((acc, cat: { templates?: { name: string }[] }) => {
    return acc + (cat.templates?.length || 0);
  }, 0);
  
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Package className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{totalTemplates}+ {templatesT?.badge || 'Project Templates'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {templatesT?.title || 'Pre-configured Project Templates'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {templatesT?.subtitle || 'Start your SAP project with battle-tested templates.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={templatesT?.screenshotTitle || 'Template Selection'}
              subtitle={templatesT?.screenshotSubtitle || 'Choose from 75+ pre-built templates'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <AnimatedCounter target={totalTemplates} suffix="+" label={templatesT?.stats?.templates || 'Templates'} delay={0.1} />
          <AnimatedCounter target={8} label={templatesT?.stats?.categories || 'Categories'} delay={0.2} />
          <AnimatedCounter target={5000} suffix="+" label={templatesT?.stats?.activities || 'Activities'} delay={0.3} />
          <AnimatedCounter target={100} suffix="%" label={templatesT?.stats?.customizable || 'Customizable'} delay={0.4} />
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { Icon: Zap, key: 'quickStart' },
            { Icon: Ruler, key: 'bestPractices' },
            { Icon: Target, key: 'estimates' },
            { Icon: Pencil, key: 'customizable' },
          ].map((benefit, index) => {
            const benefitT = templatesT?.keyBenefits?.[benefit.key as keyof typeof templatesT.keyBenefits];
            return (
              <AnimatedSection key={benefit.key} animation="fade-in-up" delay={0.2 + index * 0.1}>
                <div className="glass-card p-6 rounded-xl text-center h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#8B2486] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefitT?.title || benefit.key}</h3>
                  <p className="text-gray-600 text-sm">{benefitT?.desc || ''}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* How It Works */}
        {templatesT?.howItWorks && (
          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{templatesT.howItWorks.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {['select', 'configure', 'generate', 'customize'].map((stepKey, index) => {
                  const step = templatesT.howItWorks?.steps?.[stepKey as keyof typeof templatesT.howItWorks.steps];
                  return (
                    <AnimatedSection key={stepKey} animation="scale-in" delay={0.4 + index * 0.1}>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#8B2486] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">{index + 1}</div>
                        <h3 className="font-semibold text-gray-900 mb-2">{step?.title || stepKey}</h3>
                        <p className="text-sm text-gray-600">{step?.desc || ''}</p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Template Categories */}
        <div className="space-y-12">
          {Object.entries(categories).map(([key, category], catIndex) => {
            const Icon = categoryIcons[key] || Package;
            const color = categoryColors[key] || 'from-purple-500 to-indigo-600';
            const cat = category as { name: string; templates: { name: string; desc: string; activities: string }[] };
            
            return (
              <AnimatedSection key={key} animation={catIndex % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={0.1}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{cat.name}</h2>
                      <p className="text-gray-600">{cat.templates?.length || 0} {templatesT?.templatesLabel || 'templates'}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.templates?.map((template) => (
                      <div key={template.name} className="bg-white/50 rounded-lg p-4 hover:bg-white/70 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{template.name}</h3>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{template.activities} {templatesT?.activitiesLabel || 'activities'}</span>
                        </div>
                        <p className="text-sm text-gray-600">{template.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Custom Templates CTA */}
        {templatesT?.customTemplate && (
          <AnimatedSection animation="scale-in" delay={0.2}>
            <div className="glass-card rounded-2xl p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{templatesT.customTemplate.title}</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {templatesT.customTemplate.desc}
              </p>
              <Link
                href="/contact?subject=custom-template"
                className="inline-block bg-[#8B2486] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7a1f75] transition-all"
              >
                {templatesT.customTemplate.button}
              </Link>
            </div>
          </AnimatedSection>
        )}

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {templatesT?.cta?.title || 'Start your project with the right foundation'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {templatesT?.cta?.demo || 'Schedule a Demo'}
              </Link>
              <Link
                href="/pricing"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {templatesT?.cta?.pricing || 'View Pricing'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
