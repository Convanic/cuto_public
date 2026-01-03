'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';
import { docCategories, docArticles, getArticlesByCategory, searchArticles, getPopularArticles, DocCategory } from '@/lib/docs';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';

export default function DocsPage() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    return searchArticles(searchQuery).slice(0, 8);
  }, [searchQuery]);
  
  const popularArticles = getPopularArticles();
  
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              {t.docs.badge}
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.docs.title}
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              {t.docs.subtitle}
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.docs.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#952494] text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              
              {/* Search Results Dropdown */}
              {searchQuery.length >= 2 && isSearchFocused && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50"
                >
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {searchResults.map((article) => {
                        const category = docCategories.find(c => c.id === article.category);
                        return (
                          <Link
                            key={article.slug}
                            href={`/docs/${article.category}/${article.slug}`}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-xl">{category?.icon}</span>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 truncate">{article.title}</h4>
                                <p className="text-sm text-gray-500 truncate">{article.description}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      {t.docs.noResults.replace('{query}', searchQuery)}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Popular Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🔥</span>
              {t.docs.popular}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularArticles.map((article, index) => {
                const category = docCategories.find(c => c.id === article.category);
                return (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/docs/${article.category}/${article.slug}`}
                      className="block glass-card rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-10 h-10 ${category?.color} rounded-lg flex items-center justify-center text-white`}>
                          {category?.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#952494] transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                            {article.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readingTime}
                            </span>
                            <span>{category?.name}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <h2 className="text-2xl font-bold text-white mb-8">
              {t.docs.browseTopics}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {docCategories.map((category, index) => {
              const articles = getArticlesByCategory(category.id);
              const IconComponent = category.IconComponent;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/docs/${category.id}`}
                    className="block glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full"
                  >
                    <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#952494] transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {articles.length} {t.docs.articles}
                      </span>
                      <span className="text-[#952494] font-medium group-hover:underline flex items-center gap-1">
                        {t.docs.explore}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t.docs.quickAccess}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Getting Started */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    {t.docs.gettingStarted}
                  </h3>
                  <ul className="space-y-2">
                    {getArticlesByCategory('getting-started').slice(0, 4).map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/docs/getting-started/${article.slug}`}
                          className="text-gray-600 hover:text-[#952494] transition-colors text-sm flex items-center gap-2"
                        >
                          <ArrowRight className="w-3 h-3" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Features */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">⚡</span>
                    {t.docs.functionsLabel}
                  </h3>
                  <ul className="space-y-2">
                    {getArticlesByCategory('features').slice(0, 4).map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/docs/features/${article.slug}`}
                          className="text-gray-600 hover:text-[#952494] transition-colors text-sm flex items-center gap-2"
                        >
                          <ArrowRight className="w-3 h-3" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Integrations */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🔗</span>
                    {t.docs.integrations}
                  </h3>
                  <ul className="space-y-2">
                    {getArticlesByCategory('integrations').slice(0, 4).map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/docs/integrations/${article.slug}`}
                          className="text-gray-600 hover:text-[#952494] transition-colors text-sm flex items-center gap-2"
                        >
                          <ArrowRight className="w-3 h-3" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.docs.cta.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.docs.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#952494] text-white rounded-xl font-semibold hover:bg-[#7a1d7a] transition-colors"
              >
                {t.docs.cta.contactSupport}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:support@cuto.de"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                support@cuto.de
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

