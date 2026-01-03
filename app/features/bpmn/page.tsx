'use client';

import Link from 'next/link';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';
import { 
  RefreshCw, 
  Pencil, 
  Link2, 
  BarChart3, 
  Clock, 
  Monitor, 
  FileText, 
  HelpCircle,
  Upload,
  Download,
  History,
  CheckCircle
} from 'lucide-react';

export default function BPMNPage() {
  const { t } = useI18n();
  const bpmnT = t.features?.bpmn;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <RefreshCw className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{bpmnT?.badge || 'BPMN 2.0 Compliant'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {bpmnT?.title || 'BPMN Process Editor'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {bpmnT?.subtitle || 'Document your business processes visually with our integrated BPMN 2.0 editor.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Preview */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="mb-16">
            <ScreenshotPlaceholder 
              title={bpmnT?.screenshotTitle || 'BPMN Process Editor'}
              subtitle={bpmnT?.screenshotSubtitle || 'Drag & drop process modeling'}
              aspectRatio="wide"
              variant="gradient"
            />
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Pencil, color: 'from-blue-500 to-indigo-600', key: 'modeling', fallbackTitle: 'Visual Process Modeling', fallbackDesc: 'Drag-and-drop interface for creating professional BPMN diagrams.' },
            { Icon: Link2, color: 'from-purple-500 to-violet-600', key: 'linking', fallbackTitle: 'Activity Linking', fallbackDesc: 'Link BPMN processes directly to BPML activities.' },
            { Icon: BarChart3, color: 'from-green-500 to-emerald-600', key: 'coverage', fallbackTitle: 'Coverage Tracking', fallbackDesc: 'Track BPMN documentation coverage across all process levels.' },
          ].map((feature, index) => {
            const featureT = bpmnT?.keyFeatures?.[feature.key as keyof typeof bpmnT.keyFeatures];
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

        {/* Process Hierarchy */}
        <AnimatedSection animation="fade-in-left" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{bpmnT?.processArchitecture?.title || '6-Level Process Architecture'}</h2>
            <p className="text-gray-600 mb-8">
              {bpmnT?.processArchitecture?.subtitle || 'CUTO supports the SAP standard process hierarchy from high-level end-to-end processes down to detailed work steps.'}
            </p>
            
            <div className="space-y-4">
              {[
                { level: 1, key: 'l1', color: 'from-purple-500 to-indigo-600', fallbackName: 'End-to-End Process', fallbackExample: 'e.g., Order to Cash (O2C)' },
                { level: 2, key: 'l2', color: 'from-blue-500 to-cyan-600', fallbackName: 'Process Group', fallbackExample: 'e.g., Sales Order Processing' },
                { level: 3, key: 'l3', color: 'from-green-500 to-emerald-600', fallbackName: 'Main Process', fallbackExample: 'e.g., Standard Order Entry' },
                { level: 4, key: 'l4', color: 'from-yellow-500 to-orange-600', fallbackName: 'Sub-Process', fallbackExample: 'e.g., Customer Validation' },
                { level: 5, key: 'l5', color: 'from-orange-500 to-red-600', fallbackName: 'Activity', fallbackExample: 'e.g., Check Credit Limit' },
                { level: 6, key: 'l6', color: 'from-pink-500 to-rose-600', fallbackName: 'Work Step', fallbackExample: 'e.g., Send Credit Alert' },
              ].map((item, index) => {
                const levelT = bpmnT?.processArchitecture?.levels?.[item.key as keyof typeof bpmnT.processArchitecture.levels];
                return (
                  <AnimatedSection key={item.level} animation="fade-in-right" delay={0.4 + index * 0.05}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                        L{item.level}
                      </div>
                      <div className="flex-1 bg-white/50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{levelT?.name || item.fallbackName}</span>
                          <span className="text-sm text-gray-500">{levelT?.example || item.fallbackExample}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* BPMN Elements */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{bpmnT?.elements?.title || 'Supported BPMN Elements'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { color: 'bg-green-500', shape: 'rounded-full', key: 'events', fallbackTitle: 'Events', fallbackItems: ['Start Event', 'End Event', 'Intermediate Event', 'Timer Event', 'Message Event', 'Error Event'] },
                { color: 'bg-blue-500', shape: 'rounded', key: 'tasks', fallbackTitle: 'Tasks', fallbackItems: ['User Task', 'Service Task', 'Script Task', 'Manual Task', 'Business Rule Task', 'Sub-Process'] },
                { color: 'bg-yellow-500', shape: 'rotate-45', key: 'gateways', fallbackTitle: 'Gateways', fallbackItems: ['Exclusive Gateway (XOR)', 'Parallel Gateway (AND)', 'Inclusive Gateway (OR)', 'Event-based Gateway', 'Complex Gateway'] },
                { color: 'border-2 border-gray-500', shape: 'rounded', key: 'containers', fallbackTitle: 'Containers', fallbackItems: ['Pool', 'Lane', 'Sub-Process', 'Transaction', 'Call Activity'] },
              ].map((element, index) => {
                const elementT = bpmnT?.elements?.[element.key as keyof typeof bpmnT.elements];
                const items = (elementT as { title?: string; items?: string[] })?.items || element.fallbackItems;
                return (
                  <AnimatedSection key={element.key} animation="scale-in" delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-4 h-full">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className={`w-6 h-6 ${element.shape} ${element.color}`}></span>
                        {(elementT as { title?: string })?.title || element.fallbackTitle}
                      </h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {items.map((item: string) => (
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

        {/* Extended Properties */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{bpmnT?.extendedProperties?.title || 'Extended Element Properties'}</h2>
            <p className="text-gray-600 mb-6">
              {bpmnT?.extendedProperties?.subtitle || 'Beyond standard BPMN properties, CUTO allows you to capture additional metadata for each process element.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { Icon: Clock, key: 'effort', fallbackTitle: 'Estimated Effort', fallbackDesc: 'Define expected duration in minutes, hours, or days for each task' },
                { Icon: Monitor, key: 'systems', fallbackTitle: 'Systems Involved', fallbackDesc: 'Link tasks to SAP systems and modules from your landscape' },
                { Icon: FileText, key: 'transactions', fallbackTitle: 'Transactions', fallbackDesc: 'Document relevant SAP transaction codes (e.g., VA01, ME21N)' },
                { Icon: HelpCircle, key: 'helpText', fallbackTitle: 'Help Text', fallbackDesc: 'Add detailed descriptions and user instructions for each step' },
              ].map((prop, index) => {
                const propT = bpmnT?.extendedProperties?.[prop.key as keyof typeof bpmnT.extendedProperties];
                return (
                  <AnimatedSection key={prop.key} animation="fade-in-up" delay={0.4 + index * 0.1}>
                    <div className="bg-white/50 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <prop.Icon className="w-5 h-5 text-gray-600" />
                        {(propT as { title?: string })?.title || prop.fallbackTitle}
                      </h3>
                      <p className="text-sm text-gray-600">{(propT as { desc?: string })?.desc || prop.fallbackDesc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Integration with Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animation="fade-in-left" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Upload className="w-6 h-6 text-gray-600" />
                {bpmnT?.importExport?.title || 'Import & Export'}
              </h2>
              <ul className="space-y-3 text-gray-600">
                {(bpmnT?.importExport?.items || [
                  'Import existing BPMN 2.0 XML files',
                  'Export to standard BPMN 2.0 format',
                  'Export as PNG/SVG images for documentation',
                  'Compatible with Signavio, Aris, and other tools',
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <History className="w-6 h-6 text-gray-600" />
                {bpmnT?.versioning?.title || 'Versioning & History'}
              </h2>
              <ul className="space-y-3 text-gray-600">
                {(bpmnT?.versioning?.items || [
                  'Automatic version history for every change',
                  'Compare versions side-by-side',
                  'Restore previous versions with one click',
                  'Status workflow: Draft → Review → Approved → Archived',
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

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {bpmnT?.cta?.title || 'Ready to document your processes?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {bpmnT?.cta?.demo || 'Schedule a Demo'}
              </Link>
              <Link
                href="/features"
                className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {bpmnT?.cta?.allFeatures || 'View All Features'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
