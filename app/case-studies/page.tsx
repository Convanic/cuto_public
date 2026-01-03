'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Building2, Users, MapPin, TrendingUp } from 'lucide-react';
import { caseStudies, industryMap, Industry, CaseStudy, getFeaturedCaseStudies } from '@/lib/case-studies';
import AnimatedSection from '@/components/AnimatedSection';

function CaseStudyCard({ caseStudy, index, featured = false }: { caseStudy: CaseStudy; index: number; featured?: boolean }) {
  const industry = industryMap[caseStudy.industry];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={featured ? 'md:col-span-2' : ''}
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="block group h-full">
        <article className={`glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 ${featured ? 'md:flex-row' : ''}`}>
          {/* Image / Hero Section */}
          <div className={`relative bg-gradient-to-br from-[#8B2486] to-[#FA9B0C] overflow-hidden ${featured ? 'md:w-1/2 aspect-video md:aspect-auto' : 'aspect-video'}`}>
            {caseStudy.heroImage ? (
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.companyName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block">{industry.icon}</span>
                  <span className="text-white/90 text-2xl font-bold">{caseStudy.companyName}</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
              </div>
            )}
            
            {/* Industry Badge */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${industry.color} text-white text-sm font-medium rounded-full`}>
                <span>{industry.icon}</span>
                <span>{industry.name}</span>
              </span>
            </div>
            
            {/* Featured Badge */}
            {caseStudy.featured && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                  ⭐ Featured
                </span>
              </div>
            )}
            
            {/* Video indicator */}
            {caseStudy.videoUrl && (
              <div className="absolute bottom-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  <Play className="w-4 h-4" />
                  <span>Video</span>
                </span>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className={`p-6 flex flex-col flex-1 ${featured ? 'md:w-1/2' : ''}`}>
            {/* Company Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {caseStudy.companyName}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {caseStudy.companySize}
              </span>
            </div>
            
            <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-[#952494] transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
              {caseStudy.headline}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
              {caseStudy.subheadline}
            </p>
            
            {/* Key Metrics */}
            <div className={`grid gap-3 mb-4 ${featured ? 'grid-cols-4' : 'grid-cols-2'}`}>
              {caseStudy.results.metrics.slice(0, featured ? 4 : 2).map((metric, i) => (
                <div key={i} className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-[#952494]">{metric.value}</div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex items-center justify-between mt-auto">
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                {caseStudy.location}
              </span>
              <span className="text-[#952494] font-medium group-hover:underline flex items-center gap-1">
                Case Study lesen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState<Industry | 'all'>('all');
  
  const filteredCaseStudies = useMemo(() => {
    if (activeIndustry === 'all') return caseStudies;
    return caseStudies.filter(cs => cs.industry === activeIndustry);
  }, [activeIndustry]);
  
  const featuredCaseStudies = getFeaturedCaseStudies();
  const regularCaseStudies = filteredCaseStudies.filter(cs => !cs.featured);
  
  // Count by industry
  const industryCounts = useMemo(() => {
    const counts: Record<Industry | 'all', number> = {
      all: caseStudies.length,
      manufacturing: 0,
      retail: 0,
      logistics: 0,
      healthcare: 0,
      finance: 0,
      technology: 0,
      consulting: 0,
      energy: 0,
    };
    caseStudies.forEach(cs => counts[cs.industry]++);
    return counts;
  }, []);
  
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Erfolgsgeschichten
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Erfahren Sie, wie führende Unternehmen mit CUTO ihre SAP-Projekte 
              erfolgreich umsetzen – schneller, strukturierter und mit messbaren Ergebnissen.
            </p>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Stats Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#952494]">50+</div>
                <div className="text-sm text-gray-600">Erfolgreiche Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#952494]">40%</div>
                <div className="text-sm text-gray-600">Ø Zeitersparnis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#952494]">100%</div>
                <div className="text-sm text-gray-600">On-Time Go-Lives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#952494]">€10M+</div>
                <div className="text-sm text-gray-600">Kundeneinsparungen</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Industry Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveIndustry('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndustry === 'all'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Alle Branchen ({industryCounts.all})
              </button>
              {(Object.entries(industryMap) as [Industry, { name: string; icon: string }][]).map(
                ([key, { name, icon }]) =>
                  industryCounts[key] > 0 && (
                    <button
                      key={key}
                      onClick={() => setActiveIndustry(key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                        activeIndustry === key
                          ? 'bg-white text-gray-900 shadow-lg'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <span>{icon}</span>
                      <span>{name} ({industryCounts[key]})</span>
                    </button>
                  )
              )}
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Featured Case Studies */}
      {activeIndustry === 'all' && featuredCaseStudies.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span>⭐</span>
                Featured Case Studies
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredCaseStudies.slice(0, 2).map((cs, index) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} index={index} featured />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* All Case Studies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {activeIndustry === 'all' && (
            <AnimatedSection animation="fade-in-up" delay={0.4}>
              <h2 className="text-2xl font-bold text-white mb-8">
                Alle Case Studies
              </h2>
            </AnimatedSection>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeIndustry === 'all' ? regularCaseStudies : filteredCaseStudies).map((cs, index) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={index} />
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">
                Keine Case Studies in dieser Branche gefunden.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Werden Sie unsere nächste Erfolgsgeschichte
            </h2>
            <p className="text-gray-600 mb-8">
              Erfahren Sie, wie CUTO auch Ihr SAP-Projekt zum Erfolg führen kann. 
              Vereinbaren Sie jetzt eine persönliche Demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#952494] text-white rounded-xl font-semibold hover:bg-[#7a1d7a] transition-colors"
              >
                Demo vereinbaren
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

