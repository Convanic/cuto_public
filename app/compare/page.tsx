'use client';

import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';
import {
  products,
  features,
  featureComparisons,
  featureCategories,
  featureSupportConfig,
  FeatureCategory,
  FeatureSupport,
  getFeaturesByCategory,
  countFullSupport,
} from '@/lib/comparison';

export default function ComparePage() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<FeatureCategory | 'all'>('all');
  const [expandedCategories, setExpandedCategories] = useState<Set<FeatureCategory>>(
    new Set(Object.keys(featureCategories) as FeatureCategory[])
  );

  const toggleCategory = (category: FeatureCategory) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    setExpandedCategories(newSet);
  };

  const getSupport = (featureId: string, productId: string): FeatureSupport => {
    const comparison = featureComparisons.find((c) => c.featureId === featureId);
    return (comparison?.support[productId] as FeatureSupport) || 'none';
  };

  const filteredCategories = selectedCategory === 'all' 
    ? Object.keys(featureCategories) as FeatureCategory[]
    : [selectedCategory];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
              <span>⚖️</span>
              {t.compare.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t.compare.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
              {t.compare.subtitle}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Product Overview Cards */}
      <section className="max-w-7xl mx-auto mb-12">
        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`glass-card rounded-2xl p-6 ${
                  product.isHighlighted 
                    ? 'ring-2 ring-[#952494] relative overflow-hidden' 
                    : ''
                }`}
              >
                {product.isHighlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#952494] to-[#FA9B0C] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    {t.compare.recommended}
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-[#952494] font-medium">{product.tagline}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {product.description}
                </p>

                <div className="text-center mb-4">
                  <span className="text-lg font-bold text-gray-900">{product.pricing}</span>
                </div>

                {/* Feature Count */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-green-600 font-bold">{countFullSupport(product.id)}</span>
                    <span className="text-gray-500 text-sm"> / {features.length} {t.compare.features}</span>
                  </div>
                </div>

                {/* Strengths */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">✅ {t.compare.strengths}</h4>
                  <ul className="space-y-1">
                    {product.strengths.slice(0, 3).map((strength, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">⚠️ {t.compare.limitations}</h4>
                  <ul className="space-y-1">
                    {product.weaknesses.slice(0, 2).map((weakness, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5">•</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto mb-8">
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {t.compare.allCategories}
            </button>
            {(Object.entries(featureCategories) as [FeatureCategory, { name: string; icon: string }][]).map(
              ([key, { name, icon }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === key
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>{icon}</span>
                  <span>{name}</span>
                </button>
              )
            )}
          </div>
        </AnimatedSection>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto mb-12 overflow-x-auto">
        <AnimatedSection animation="fade-in-up" delay={0.4}>
          <div className="glass-card rounded-2xl overflow-hidden min-w-[600px]">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 text-left font-semibold text-gray-700 w-1/4">Feature</th>
                  {products.map((product) => (
                    <th 
                      key={product.id} 
                      className={`p-4 text-center font-bold w-1/4 ${
                        product.isHighlighted 
                          ? 'bg-gradient-to-r from-[#952494]/10 to-[#FA9B0C]/10 text-[#952494]' 
                          : 'text-gray-700'
                      }`}
                    >
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* Table Body by Category */}
                {filteredCategories.map((categoryKey) => {
                  const category = featureCategories[categoryKey];
                  const categoryFeatures = getFeaturesByCategory(categoryKey);
                  const isExpanded = expandedCategories.has(categoryKey);

                  return (
                    <Fragment key={categoryKey}>
                      {/* Category Header */}
                      <tr className="bg-gray-100 border-b border-gray-200">
                        <td colSpan={4}>
                          <button
                            onClick={() => toggleCategory(categoryKey)}
                            className="w-full p-3 font-semibold text-gray-800 flex items-center gap-2 hover:bg-gray-150 transition-colors text-left"
                          >
                            <span>{category.icon}</span>
                            <span>{category.name}</span>
                            <span className="text-gray-400 text-sm">({categoryFeatures.length})</span>
                            <svg 
                              className={`w-4 h-4 ml-auto transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </td>
                      </tr>

                      {/* Features */}
                      {isExpanded && categoryFeatures.map((feature, featureIndex) => (
                        <tr 
                          key={feature.id} 
                          className={`border-b border-gray-100 ${
                            featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }`}
                        >
                          <td className="p-3 text-gray-700 text-sm">
                            {feature.name}
                          </td>
                          {products.map((product) => {
                            const support = getSupport(feature.id, product.id);
                            const config = featureSupportConfig[support];
                            
                            return (
                              <td 
                                key={product.id} 
                                className={`p-3 text-center ${
                                  product.isHighlighted ? 'bg-[#952494]/5' : ''
                                }`}
                              >
                                <span className={`inline-flex items-center justify-center gap-1 ${config.color}`}>
                                  <span className="text-lg">{config.icon}</span>
                                  <span className="text-xs hidden sm:inline">{config.label}</span>
                                </span>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </section>

      {/* Legend */}
      <section className="max-w-7xl mx-auto mb-12">
        <AnimatedSection animation="fade-in-up" delay={0.5}>
          <div className="glass-card rounded-xl p-4">
            <div className="flex flex-wrap justify-center gap-6">
              {Object.entries(featureSupportConfig).map(([key, config]) => (
                <div key={key} className="flex items-center gap-2 text-sm">
                  <span className={`text-lg ${config.color}`}>{config.icon}</span>
                  <span className="text-gray-600">{config.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why CUTO Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <AnimatedSection animation="fade-in-up" delay={0.6}>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t.compare.whyCuto.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#952494] to-[#FA9B0C] rounded-xl flex items-center justify-center text-white text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.compare.whyCuto.specialized.title}</h3>
                  <p className="text-sm text-gray-600">
                    {t.compare.whyCuto.specialized.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#952494] to-[#FA9B0C] rounded-xl flex items-center justify-center text-white text-xl">
                  📋
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.compare.whyCuto.ready.title}</h3>
                  <p className="text-sm text-gray-600">
                    {t.compare.whyCuto.ready.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#952494] to-[#FA9B0C] rounded-xl flex items-center justify-center text-white text-xl">
                  🚀
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.compare.whyCuto.cutover.title}</h3>
                  <p className="text-sm text-gray-600">
                    {t.compare.whyCuto.cutover.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#952494] to-[#FA9B0C] rounded-xl flex items-center justify-center text-white text-xl">
                  💰
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.compare.whyCuto.pricing.title}</h3>
                  <p className="text-sm text-gray-600">
                    {t.compare.whyCuto.pricing.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-in-up" delay={0.7}>
          <div className="glass-card rounded-2xl p-8 text-center bg-gradient-to-r from-[#952494]/10 to-[#FA9B0C]/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {t.compare.cta.title}
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              {t.compare.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-3 bg-gradient-to-r from-[#952494] to-[#FA9B0C] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t.compare.cta.tryFree}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-200"
              >
                {t.compare.cta.requestDemo}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

