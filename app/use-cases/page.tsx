'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import UseCaseCard from '@/components/UseCaseCard';
import AnimatedSection from '@/components/AnimatedSection';
import { useCases, categories, UseCaseCategory, getFeaturedUseCases } from '@/lib/use-cases';
import { useI18n } from '@/lib/i18n/context';

export default function UseCasesPage() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<UseCaseCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredUseCases = getFeaturedUseCases();

  const filteredUseCases = useCases.filter((useCase) => {
    const matchesCategory = selectedCategory === 'all' || useCase.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
              <span>📚</span>
              {t.useCases.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t.useCases.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
              {t.useCases.subtitle}
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t.useCases.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 pl-12 bg-white/95 backdrop-blur-sm rounded-xl text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Use Cases */}
      {selectedCategory === 'all' && searchQuery === '' && featuredUseCases.length > 0 && (
        <section className="max-w-7xl mx-auto mb-16">
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>⭐</span> {t.useCases.featured}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredUseCases.map((useCase, index) => (
                <UseCaseCard key={useCase.slug} useCase={useCase} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto mb-10">
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {t.useCases.all} ({useCases.length})
            </button>
            {categories.map((category) => {
              const count = useCases.filter((uc) => uc.category === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* Use Cases Grid */}
      <section className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in-up" delay={0.4}>
          {filteredUseCases.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  {selectedCategory === 'all' 
                    ? t.useCases.allUseCases 
                    : categories.find(c => c.id === selectedCategory)?.name}
                  <span className="text-white/60 ml-2">({filteredUseCases.length})</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUseCases.map((useCase, index) => (
                  <UseCaseCard key={useCase.slug} useCase={useCase} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.useCases.noResults.title}</h3>
              <p className="text-white/70 mb-6">
                {t.useCases.noResults.description}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t.useCases.noResults.reset}
              </button>
            </div>
          )}
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-20">
        <AnimatedSection animation="fade-in-up" delay={0.5}>
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t.useCases.suggest.title}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.useCases.suggest.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-[#952494] to-[#FA9B0C] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t.useCases.suggest.button}
              </Link>
              <Link
                href="/features"
                className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                {t.useCases.suggest.features}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
