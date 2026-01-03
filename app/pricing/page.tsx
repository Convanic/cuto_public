'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/context';

export default function PricingPage() {
  const { t } = useI18n();
  
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t.pricing.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {t.pricing.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Starter */}
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <motion.div 
              className="glass-card p-8 rounded-2xl relative h-full"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(139, 36, 134, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.plans.starter.name}</h3>
                <p className="text-gray-600 mb-4">{t.pricing.plans.starter.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">€990</span>
                  <span className="text-gray-600">{t.pricing.lifetime}</span>
                </div>
                <p className="text-sm text-green-600 mt-2">{t.pricing.oneTimePayment}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>{t.pricing.plans.starter.features.projects}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.starter.features.users}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.starter.features.templates}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.starter.features.dashboards}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.starter.features.support}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.starter.features.updates}</span>
                </li>
              </ul>
              
              <Link
                href="/contact?plan=starter"
                className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                {t.pricing.getStarted}
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Professional - Most Popular */}
          <AnimatedSection animation="scale-in" delay={0.3}>
            <motion.div 
              className="glass-card p-8 rounded-2xl relative border-2 border-[#8B2486] transform scale-105 h-full"
              whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(139, 36, 134, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#8B2486] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {t.pricing.mostPopular}
                </span>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.plans.professional.name}</h3>
                <p className="text-gray-600 mb-4">{t.pricing.plans.professional.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">€2,490</span>
                  <span className="text-gray-600">{t.pricing.lifetime}</span>
                </div>
                <p className="text-sm text-green-600 mt-2">{t.pricing.oneTimePayment}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>{t.pricing.plans.professional.features.projects}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.professional.features.users}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.professional.features.templates}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>{t.pricing.plans.professional.features.dashboards}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.professional.features.bpmn}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.professional.features.migration}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.professional.features.support}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.professional.features.updates}</span>
                </li>
              </ul>
              
              <Link
                href="/contact?plan=professional"
                className="block w-full text-center bg-[#8B2486] text-white py-3 rounded-lg font-semibold hover:bg-[#7a1f75] transition-all shadow-lg"
              >
                {t.pricing.getStarted}
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Enterprise */}
          <AnimatedSection animation="fade-in-up" delay={0.4}>
            <motion.div 
              className="glass-card p-8 rounded-2xl relative h-full"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(139, 36, 134, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.plans.enterprise.name}</h3>
                <p className="text-gray-600 mb-4">{t.pricing.plans.enterprise.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{t.pricing.plans.enterprise.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{t.pricing.contactForPricing}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>{t.pricing.plans.enterprise.features.everything}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>{t.pricing.plans.enterprise.features.users}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.enterprise.features.professional}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.enterprise.features.onPremise}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.enterprise.features.integrations}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.enterprise.features.successManager}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.enterprise.features.sla}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t.pricing.plans.enterprise.features.training}</span>
                </li>
              </ul>
              
              <Link
                href="/contact?plan=enterprise"
                className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                {t.pricing.contactSales}
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Feature Comparison */}
        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <div className="glass-card rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.pricing.comparison.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">{t.pricing.comparison.feature}</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">{t.pricing.plans.starter.name}</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-purple-50">{t.pricing.plans.professional.name}</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">{t.pricing.plans.enterprise.name}</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.projects}</td>
                    <td className="text-center py-3 px-4">1</td>
                    <td className="text-center py-3 px-4 bg-purple-50">{t.pricing.comparison.values.unlimited}</td>
                    <td className="text-center py-3 px-4">{t.pricing.comparison.values.unlimited}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.users}</td>
                    <td className="text-center py-3 px-4">5</td>
                    <td className="text-center py-3 px-4 bg-purple-50">25</td>
                    <td className="text-center py-3 px-4">{t.pricing.comparison.values.unlimited}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.templates}</td>
                    <td className="text-center py-3 px-4">75+</td>
                    <td className="text-center py-3 px-4 bg-purple-50">75+</td>
                    <td className="text-center py-3 px-4">75+ {t.pricing.comparison.values.custom}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.dashboards}</td>
                    <td className="text-center py-3 px-4">30</td>
                    <td className="text-center py-3 px-4 bg-purple-50">80+</td>
                    <td className="text-center py-3 px-4">80+ {t.pricing.comparison.values.custom}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.bpmn}</td>
                    <td className="text-center py-3 px-4">—</td>
                    <td className="text-center py-3 px-4 bg-purple-50">✓</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.migration}</td>
                    <td className="text-center py-3 px-4">—</td>
                    <td className="text-center py-3 px-4 bg-purple-50">✓</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.cutover}</td>
                    <td className="text-center py-3 px-4">{t.pricing.comparison.values.basic}</td>
                    <td className="text-center py-3 px-4 bg-purple-50">{t.pricing.comparison.values.full}</td>
                    <td className="text-center py-3 px-4">{t.pricing.comparison.values.full}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.onPremise}</td>
                    <td className="text-center py-3 px-4">—</td>
                    <td className="text-center py-3 px-4 bg-purple-50">—</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">{t.pricing.comparison.api}</td>
                    <td className="text-center py-3 px-4">—</td>
                    <td className="text-center py-3 px-4 bg-purple-50">✓</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">{t.pricing.comparison.support}</td>
                    <td className="text-center py-3 px-4">{t.pricing.comparison.values.email}</td>
                    <td className="text-center py-3 px-4 bg-purple-50">{t.pricing.comparison.values.emailChat}</td>
                    <td className="text-center py-3 px-4">{t.pricing.comparison.values.dedicatedSla}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <div className="mb-20">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">{t.pricing.faq.title}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: t.pricing.faq.questions.lifetime.q, a: t.pricing.faq.questions.lifetime.a },
              { q: t.pricing.faq.questions.upgrade.q, a: t.pricing.faq.questions.upgrade.a },
              { q: t.pricing.faq.questions.trial.q, a: t.pricing.faq.questions.trial.a },
              { q: t.pricing.faq.questions.payment.q, a: t.pricing.faq.questions.payment.a },
              { q: t.pricing.faq.questions.security.q, a: t.pricing.faq.questions.security.a },
              { q: t.pricing.faq.questions.training.q, a: t.pricing.faq.questions.training.a },
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={0.1 + index * 0.05}>
                <div className="glass-card p-6 rounded-xl h-full hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {t.pricing.cta.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              {t.pricing.cta.subtitle}
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              {t.pricing.cta.button}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
