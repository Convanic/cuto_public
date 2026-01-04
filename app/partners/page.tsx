'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp, 
  Users, Globe, TrendingUp, Award, Star, Sparkles,
  Mail, Phone, Building2
} from 'lucide-react';
import {
  getPartnerTypes,
  getPartnerTiers,
  getGeneralBenefits,
  getPartnerTestimonials,
  getPartnerFAQ,
  partnerStats,
  PartnerType,
} from '@/lib/partners';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  return (
    <span className="tabular-nums">
      {value.toLocaleString('de-DE')}{suffix}
    </span>
  );
}

export default function PartnersPage() {
  const { t, locale } = useI18n();
  const [selectedPartnerType, setSelectedPartnerType] = useState<PartnerType>('referral');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  
  const partnerTypes = getPartnerTypes(locale);
  const partnerTiers = getPartnerTiers(locale);
  const generalBenefits = getGeneralBenefits(locale);
  const partnerTestimonials = getPartnerTestimonials(locale);
  const partnerFAQ = getPartnerFAQ(locale);
  
  const selectedPartner = partnerTypes.find(p => p.id === selectedPartnerType);
  
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t.partners.badge}
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.partners.title}
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {t.partners.subtitle}
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#FA9B0C]">{partnerStats.totalPartners}+</p>
                <p className="text-white/70">{t.partners.stats.partners}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#FA9B0C]">{partnerStats.countriesActive}</p>
                <p className="text-white/70">{t.partners.stats.countries}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#FA9B0C]">{partnerStats.partnerSatisfaction}%</p>
                <p className="text-white/70">{t.partners.stats.satisfaction}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#FA9B0C]">{partnerStats.totalPayouts}</p>
                <p className="text-white/70">{t.partners.stats.payouts}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partners/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FA9B0C] text-white rounded-xl font-semibold hover:bg-[#e88d0b] transition-colors shadow-lg"
              >
                {t.partners.cta.becomePartner}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#partner-types"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                {t.partners.cta.learnMore}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Partner Types Section */}
      <section id="partner-types" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              {t.partners.partnerTypes.title}
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
              {t.partners.partnerTypes.subtitle}
            </p>
          </AnimatedSection>
          
          {/* Partner Type Tabs */}
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {partnerTypes.map((type) => {
                const IconComponent = type.IconComponent;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedPartnerType(type.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                      selectedPartnerType === type.id
                        ? 'bg-white text-gray-900 shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{type.shortName}</span>
                    {type.highlight && (
                      <span className="ml-1 px-2 py-0.5 bg-[#FA9B0C] text-white text-xs rounded-full">
                        {t.partners.partnerTypes.popular}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
          
          {/* Selected Partner Type Details */}
          {selectedPartner && (
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <motion.div
                key={selectedPartner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: Description */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${selectedPartner.color} rounded-xl flex items-center justify-center text-white text-2xl`}>
                        {selectedPartner.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{selectedPartner.name}</h3>
                        <p className="text-gray-500">{selectedPartner.targetAudience}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {selectedPartner.description}
                    </p>
                    
                    {/* Commission Highlight */}
                    <div className="bg-gradient-to-r from-[#952494]/10 to-[#FA9B0C]/10 rounded-xl p-5 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">💰 {t.partners.partnerTypes.commission}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-3xl font-bold text-[#952494]">{selectedPartner.commission.firstYear}</p>
                          <p className="text-sm text-gray-500">{t.partners.partnerTypes.firstYear}</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-[#FA9B0C]">{selectedPartner.commission.recurring}</p>
                          <p className="text-sm text-gray-500">{t.partners.partnerTypes.recurring}</p>
                        </div>
                      </div>
                      {selectedPartner.commission.bonus && (
                        <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                          <Star className="w-4 h-4 inline mr-1 text-yellow-500" />
                          {selectedPartner.commission.bonus}
                        </p>
                      )}
                    </div>
                    
                    {/* Ideal For */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">✨ {t.partners.partnerTypes.idealFor}</h4>
                      <ul className="space-y-2">
                        {selectedPartner.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href="/partners/apply"
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${selectedPartner.color} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto`}
                    >
                      {t.partners.partnerTypes.applyAs.replace('{type}', selectedPartner.shortName)}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  
                  {/* Right: Benefits & Requirements */}
                  <div className="bg-gray-50 p-8 lg:p-10">
                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#952494]" />
                        {t.partners.partnerTypes.yourBenefits}
                      </h4>
                      <ul className="space-y-3">
                        {selectedPartner.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-[#952494] flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-gray-500" />
                        {t.partners.partnerTypes.requirements}
                      </h4>
                      <ul className="space-y-3">
                        {selectedPartner.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          )}
        </div>
      </section>
      
      {/* Partner Tiers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              {t.partners.tiers.title}
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
              {t.partners.tiers.subtitle}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl p-6 relative ${
                  tier.id === 'gold' ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {tier.id === 'gold' && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                    {t.partners.tiers.recommended}
                  </span>
                )}
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center text-white font-bold mb-4`}>
                  {tier.name.charAt(0)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>📈 {t.partners.tiers.minRevenue}: <span className="font-semibold">{tier.minRevenue}{t.partners.tiers.year}</span></p>
                  <p>🤝 {t.partners.tiers.minDeals}: <span className="font-semibold">{tier.minDeals}{t.partners.tiers.year}</span></p>
                  <p>🎓 {t.partners.tiers.certified}: <span className="font-semibold">{tier.certifiedConsultants}+</span></p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">{t.partners.tiers.benefits}</h4>
                  <ul className="space-y-1">
                    {tier.benefits.slice(0, 4).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                        {benefit.replace('Alle ', '').replace('-Benefits', '')}
                      </li>
                    ))}
                    {tier.benefits.length > 4 && (
                      <li className="text-xs text-gray-400">
                        +{tier.benefits.length - 4} weitere Benefits
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* General Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t.partners.whyPartner.title}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t.partners.testimonials.title}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTestimonials.map((testimonial, index) => {
              const partnerType = partnerTypes.find(p => p.id === testimonial.partnerType);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${partnerType?.color} flex items-center justify-center text-white font-bold`}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t.partners.faq.title}
            </h2>
          </AnimatedSection>
          
          <div className="space-y-4">
            {partnerFAQ.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="glass-card rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.partners.apply.title}
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                {t.partners.apply.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/partners/apply"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#952494] text-white rounded-xl font-semibold hover:bg-[#7a1d7a] transition-colors"
                >
                  {t.partners.apply.applyButton}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  {t.partners.apply.consultation}
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <a href="mailto:partners@cuto.de" className="flex items-center gap-2 hover:text-[#952494]">
                  <Mail className="w-4 h-4" />
                  partners@cuto.de
                </a>
                <a href="tel:+491234567890" className="flex items-center gap-2 hover:text-[#952494]">
                  <Phone className="w-4 h-4" />
                  +49 123 456 7890
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

