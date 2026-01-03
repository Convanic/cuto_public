import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Play, Building2, Users, MapPin, Clock, Quote, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { caseStudies, getCaseStudyBySlug, industryMap } from '@/lib/case-studies';
import AnimatedSection from '@/components/AnimatedSection';

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study nicht gefunden',
    };
  }

  return {
    title: `${caseStudy.companyName}: ${caseStudy.headline} | CUTO Case Study`,
    description: caseStudy.subheadline,
    keywords: [caseStudy.industry, caseStudy.companyName, 'CUTO', 'SAP case study', 'success story'],
    openGraph: {
      title: `${caseStudy.companyName}: ${caseStudy.headline} | CUTO Case Study`,
      description: caseStudy.subheadline,
      url: `https://cuto.ai/case-studies/${caseStudy.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.companyName}: ${caseStudy.headline} | CUTO Case Study`,
      description: caseStudy.subheadline,
    },
    alternates: {
      canonical: `https://cuto.ai/case-studies/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const industry = industryMap[caseStudy.industry];
  const relatedCaseStudies = caseStudy.relatedCaseStudies
    ?.map(slug => getCaseStudyBySlug(slug))
    .filter((cs): cs is typeof caseStudies[0] => cs !== undefined);

  return (
    <main className="relative overflow-hidden">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/80" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-white font-medium truncate max-w-[200px]">{caseStudy.companyName}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${industry.color} text-white text-sm font-medium rounded-full`}>
                    <span>{industry.icon}</span>
                    <span>{industry.name}</span>
                  </span>
                  {caseStudy.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {caseStudy.headline}
                </h1>
                
                <p className="text-xl text-white/80 mb-8">
                  {caseStudy.subheadline}
                </p>
                
                {/* Company Info */}
                <div className="flex flex-wrap gap-6 text-white/70">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {caseStudy.companyName}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {caseStudy.companySize}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {caseStudy.location}
                  </span>
                </div>
              </div>
              
              {/* Hero Image / Video */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#8B2486] to-[#FA9B0C] shadow-2xl">
                  {caseStudy.heroImage ? (
                    <img
                      src={caseStudy.heroImage}
                      alt={caseStudy.companyName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-8xl mb-4 block">{industry.icon}</span>
                        <span className="text-white text-2xl font-bold">{caseStudy.companyName}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Video Play Button */}
                  {caseStudy.videoUrl && (
                    <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group">
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#952494] ml-1" fill="currentColor" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#952494]" />
                {caseStudy.results.title}
              </h2>
              <p className="text-gray-600 mb-8">{caseStudy.results.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {caseStudy.results.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-[#952494]/5 to-[#FA9B0C]/5 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-[#952494] mb-1">{metric.value}</div>
                    <div className="text-sm font-semibold text-gray-900">{metric.label}</div>
                    {metric.description && (
                      <div className="text-xs text-gray-500 mt-1">{metric.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge */}
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-red-500" />
                  {caseStudy.challenge.title}
                </h2>
                <p className="text-gray-600 mb-6">{caseStudy.challenge.description}</p>
                
                <h3 className="font-semibold text-gray-900 mb-3">Pain Points:</h3>
                <ul className="space-y-3">
                  {caseStudy.challenge.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            
            {/* Solution */}
            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <div className="glass-card rounded-2xl p-8 h-full border-2 border-[#952494]/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-[#952494]" />
                  {caseStudy.solution.title}
                </h2>
                <p className="text-gray-600 mb-6">{caseStudy.solution.description}</p>
                
                <h3 className="font-semibold text-gray-900 mb-3">Eingesetzte Features:</h3>
                <ul className="space-y-3">
                  {caseStudy.solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {caseStudy.timeline && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={0.4}>
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#952494]" />
                  Projekt-Timeline
                </h2>
                
                <div className="mb-6">
                  <span className="text-sm text-gray-500">Gesamtdauer:</span>
                  <span className="ml-2 text-lg font-bold text-[#952494]">{caseStudy.timeline.duration}</span>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#952494] to-[#FA9B0C]" />
                  
                  <div className="space-y-6">
                    {caseStudy.timeline.phases.map((phase, index) => (
                      <div key={index} className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#952494] to-[#FA9B0C] flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="glass-card rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-900">{phase.name}</span>
                            <span className="text-sm text-[#952494] font-medium">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.5}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl text-[#952494]/20 font-serif">"</div>
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <Quote className="w-10 h-10 text-[#952494] mb-6" />
                <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
                  {caseStudy.testimonial.quote}
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {caseStudy.testimonial.avatar ? (
                    <img
                      src={caseStudy.testimonial.avatar}
                      alt={caseStudy.testimonial.author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#952494] to-[#FA9B0C] flex items-center justify-center text-white text-xl font-bold">
                      {caseStudy.testimonial.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-gray-900">{caseStudy.testimonial.author}</div>
                    <div className="text-gray-500">{caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies && relatedCaseStudies.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={0.6}>
              <h2 className="text-2xl font-bold text-white mb-8">Ähnliche Case Studies</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedCaseStudies.map((cs) => {
                  const relatedIndustry = industryMap[cs.industry];
                  return (
                    <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="block group">
                      <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                        <div className="aspect-video bg-gradient-to-br from-[#8B2486] to-[#FA9B0C] relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl">{relatedIndustry.icon}</span>
                          </div>
                          <div className="absolute top-2 left-2">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 ${relatedIndustry.color} text-white text-xs font-medium rounded-full`}>
                              {relatedIndustry.icon} {relatedIndustry.name}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#952494] transition-colors line-clamp-2">
                            {cs.headline}
                          </h3>
                          <p className="text-sm text-gray-500">{cs.companyName}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bereit für Ihren Projekterfolg?
            </h2>
            <p className="text-gray-600 mb-8">
              Lassen Sie uns gemeinsam besprechen, wie CUTO auch Ihr SAP-Projekt 
              zum Erfolg führen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#952494] text-white rounded-xl font-semibold hover:bg-[#7a1d7a] transition-colors"
              >
                Kostenlose Demo vereinbaren
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Weitere Case Studies
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

