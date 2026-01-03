'use client';

import Link from 'next/link';
import Image from 'next/image';
import TargetAudienceTabs from '@/components/TargetAudienceTabs';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import NewsletterSignup from '@/components/NewsletterSignup';
import ExplainerVideo from '@/components/ExplainerVideo';
import { useI18n } from '@/lib/i18n/context';

export default function Home() {
  const { t } = useI18n();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image - Right Half */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full opacity-40">
          <Image
            src="/hero-background2.png"
            alt="CUTO Dashboard"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                {t.home.hero.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg cta-glow"
                >
                  {t.home.hero.cta.primary}
                </Link>
                <Link
                  href="/features"
                  className="glass-strong text-white border-2 border-white/30 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors shadow-lg"
                >
                  {t.home.hero.cta.secondary}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
        {/* Background Image - Left Half - bis zum Browserrand */}
        <div className="absolute left-0 top-10 bottom-0 w-1/2 h-full opacity-10 -ml-8 sm:-ml-12 lg:-ml-16">
          <Image
            src="/hero-background4.png"
            alt="CUTO Dashboard"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

      {/* Trust Badges */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {/* GDPR Badge */}
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">{t.home.trustBadges?.gdpr}</span>
              </div>
              {/* Made in Germany */}
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <span className="text-lg">🇩🇪</span>
                <span className="text-sm font-semibold text-gray-700">{t.home.trustBadges?.madeInGermany}</span>
              </div>
              {/* EU Data Hosting */}
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <span className="text-lg">🇪🇺</span>
                <span className="text-sm font-semibold text-gray-700">{t.home.trustBadges?.euHosting}</span>
              </div>
              {/* SAP Partner */}
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">{t.home.trustBadges?.sapCertified}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <p className="text-center text-white/70 text-sm font-medium mb-8 uppercase tracking-wider">
              {t.home.socialProof?.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              {/* Dummy Client Logos - Replace with real logos later */}
              <div className="glass-card px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-semibold text-lg">Acme Corp</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-semibold text-lg">TechGlobal</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-semibold text-lg">InnoSystems</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-semibold text-lg">DataFlow AG</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-semibold text-lg">CloudPeak</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedCounter target={80} suffix="+" label={t.home.statsLabels?.dashboards || 'Dashboards'} delay={100} />
            <AnimatedCounter target={75} suffix="+" label={t.home.statsLabels?.templates || 'Templates'} delay={200} />
            <AnimatedCounter target={14} label={t.home.statsLabels?.dashboardCategories || 'Dashboard Categories'} delay={300} />
            <AnimatedCounter target={6} label={t.home.statsLabels?.processLevels || 'Process Levels'} delay={400} />
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {t.home.problemStatement?.title}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
                {t.home.problemStatement?.subtitle}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pain Point 1 */}
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <div className="glass-card p-6 rounded-xl h-full border-l-4 border-red-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">{t.home.problemStatement?.problem}</h3>
                </div>
                <p className="text-gray-700 font-medium mb-2">{t.home.problemStatement?.problems?.pmoOverhead?.title}</p>
                <p className="text-gray-600 text-sm">{t.home.problemStatement?.problems?.pmoOverhead?.description}</p>
              </div>
            </AnimatedSection>

            {/* Pain Point 2 */}
            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <div className="glass-card p-6 rounded-xl h-full border-l-4 border-red-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">{t.home.problemStatement?.problem}</h3>
                </div>
                <p className="text-gray-700 font-medium mb-2">{t.home.problemStatement?.problems?.doubleEntry?.title}</p>
                <p className="text-gray-600 text-sm">{t.home.problemStatement?.problems?.doubleEntry?.description}</p>
              </div>
            </AnimatedSection>

            {/* Pain Point 3 */}
            <AnimatedSection animation="fade-in-up" delay={0.4}>
              <div className="glass-card p-6 rounded-xl h-full border-l-4 border-red-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">{t.home.problemStatement?.problem}</h3>
                </div>
                <p className="text-gray-700 font-medium mb-2">{t.home.problemStatement?.problems?.noDashboard?.title}</p>
                <p className="text-gray-600 text-sm">{t.home.problemStatement?.problems?.noDashboard?.description}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Solution */}
          <AnimatedSection animation="fade-in-up" delay={0.5}>
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full border-2 border-green-400">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-semibold">{t.home.problemStatement?.solution}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Explainer Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {t.home.explainerVideo?.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {t.home.explainerVideo?.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {t.home.explainerVideo?.subtitle}
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <ExplainerVideo 
              title="CUTO Product Demo"
              duration="1:47"
              // videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Uncomment when video is ready
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {t.home.howItWorks?.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {t.home.howItWorks?.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <div className="glass-card p-6 rounded-lg h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <svg className="w-16 h-16 text-gradient" fill="none" stroke="url(#gradient1)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#952494" />
                        <stop offset="100%" stopColor="#FA9B0C" />
                      </linearGradient>
                    </defs>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.home.howItWorks?.steps?.templates?.title}
                </h3>
                <p className="text-gray-600">
                  {t.home.howItWorks?.steps?.templates?.description}
                </p>
              </div>
            </AnimatedSection>

            {/* Feature 2 */}
            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <div className="glass-card p-6 rounded-lg h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <svg className="w-16 h-16" fill="none" stroke="url(#gradient2)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#952494" />
                        <stop offset="100%" stopColor="#FA9B0C" />
                      </linearGradient>
                    </defs>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.home.howItWorks?.steps?.planning?.title}
                </h3>
                <p className="text-gray-600">
                  {t.home.howItWorks?.steps?.planning?.description}
                </p>
              </div>
            </AnimatedSection>

            {/* Feature 3 */}
            <AnimatedSection animation="fade-in-up" delay={0.4}>
              <div className="glass-card p-6 rounded-lg h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <svg className="w-16 h-16" fill="none" stroke="url(#gradient3)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#952494" />
                        <stop offset="100%" stopColor="#FA9B0C" />
                      </linearGradient>
                    </defs>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.home.howItWorks?.steps?.control?.title}
                </h3>
                <p className="text-gray-600">
                  {t.home.howItWorks?.steps?.control?.description}
                </p>
              </div>
            </AnimatedSection>

            {/* Feature 4 */}
            <AnimatedSection animation="fade-in-up" delay={0.5}>
              <div className="glass-card p-6 rounded-lg h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <svg className="w-16 h-16" fill="none" stroke="url(#gradient4)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#952494" />
                        <stop offset="100%" stopColor="#FA9B0C" />
                      </linearGradient>
                    </defs>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.home.howItWorks?.steps?.goLive?.title}
                </h3>
                <p className="text-gray-600">
                  {t.home.howItWorks?.steps?.goLive?.description}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Screenshot Preview Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="scale-in" delay={0.2}>
            <ScreenshotPlaceholder 
              title={t.home.screenshot?.title || 'CUTO Dashboard'} 
              subtitle={t.home.screenshot?.subtitle || 'Complete project management at a glance'}
              aspectRatio="wide"
              variant="gradient"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                {t.home.integrations?.title}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                {t.home.integrations?.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {/* JIRA */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-colors group">
                  <div className="w-14 h-14 bg-[#0052CC] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23.013 0z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Jira</span>
                </div>

                {/* SAP Cloud ALM */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-colors group">
                  <div className="w-14 h-14 bg-[#0FAAFF] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">SAP</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">SAP ALM</span>
                </div>

                {/* Microsoft Project */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-colors group">
                  <div className="w-14 h-14 bg-[#217346] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.17 2.06A2.5 2.5 0 0119.5 2H4.5a2.5 2.5 0 00-2.5 2.5v15a2.5 2.5 0 002.5 2.5h15a2.5 2.5 0 002.5-2.5v-15a2.5 2.5 0 00-.83-1.94zM7 17v-7h2v7H7zm4 0V7h2v10h-2zm4 0v-5h2v5h-2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">MS Project</span>
                </div>

                {/* Slack */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-colors group">
                  <div className="w-14 h-14 bg-[#4A154B] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Slack</span>
                </div>

                {/* Microsoft Teams */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-colors group">
                  <div className="w-14 h-14 bg-[#6264A7] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.625 8.073c.574 0 1.125.224 1.531.625.407.4.636.943.641 1.511v4.166a2.146 2.146 0 0 1-.641 1.531 2.152 2.152 0 0 1-1.531.635h-2.083v2.084a3.226 3.226 0 0 1-.948 2.292 3.217 3.217 0 0 1-2.292.948H8.74a3.217 3.217 0 0 1-2.292-.948 3.226 3.226 0 0 1-.948-2.292V11.26a3.226 3.226 0 0 1 .948-2.292 3.217 3.217 0 0 1 2.292-.948h6.563v-.948a2.145 2.145 0 0 1 .635-1.531 2.152 2.152 0 0 1 1.531-.641h3.156v3.173zM16.823 5a2.177 2.177 0 1 0 0-4.354 2.177 2.177 0 0 0 0 4.354zm4.167 1.073h-3.156a3.22 3.22 0 0 0-2.292.948c-.086.086-.166.177-.24.271H8.74a4.292 4.292 0 0 0-3.057 1.266A4.302 4.302 0 0 0 4.417 11.26v7.365a4.302 4.302 0 0 0 1.266 3.057A4.292 4.292 0 0 0 8.74 22.948h6.563a4.302 4.302 0 0 0 3.057-1.266 4.292 4.292 0 0 0 1.265-3.057v-1.01h1.01a3.226 3.226 0 0 0 2.291-.948 3.217 3.217 0 0 0 .948-2.292v-4.166a3.217 3.217 0 0 0-.948-2.292 3.226 3.226 0 0 0-2.291-.948v.104z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Teams</span>
                </div>

                {/* Excel / CSV */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 transition-colors group">
                  <div className="w-14 h-14 bg-[#217346] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Excel/CSV</span>
                </div>
              </div>

              {/* API Badge */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="font-medium">{t.home.integrations?.apiAvailable}</span>
                </div>
                <span className="hidden sm:inline text-gray-300">|</span>
                <Link href="/contact" className="text-[#952494] hover:text-[#FA9B0C] font-medium transition-colors">
                  {t.home.integrations?.requestIntegration}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {t.home.useCases?.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {t.home.useCases?.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30">
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <div className="flex flex-col mb-10">
                <div className="w-16 h-16 mb-4 flex ">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold  text-start text-white mb-2 drop-shadow-md">{t.home.useCases?.items?.greenfield?.title}</h3>
                <p className="text-white/90 text-sm drop-shadow-sm">
                  {t.home.useCases?.items?.greenfield?.description}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <div className="flex flex-col ">
                <div className="w-16 h-16 mb-4 flex ">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">{t.home.useCases?.items?.implementation?.title}</h3>
                <p className="text-white/90 text-sm drop-shadow-sm">
                  {t.home.useCases?.items?.implementation?.description}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={0.4}>
              <div className="flex flex-col ">
                <div className="w-16 h-16 mb-4 flex ">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">{t.home.useCases?.items?.methodology?.title}</h3>
                <p className="text-white/90 text-sm drop-shadow-sm">
                  {t.home.useCases?.items?.methodology?.description}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={0.5}>
              <div className="flex flex-col ">
                <div className="w-16 h-16 mb-4 flex">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">{t.home.useCases?.items?.scope?.title}</h3>
                <p className="text-white/90 text-sm drop-shadow-sm">
                  {t.home.useCases?.items?.scope?.description}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <TargetAudienceTabs />

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {t.home.testimonials.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {t.home.testimonials.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t.home.testimonialsList || []).map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={0.2 + index * 0.1}>
                <div className="glass-card p-6 rounded-xl h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Magnet Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <NewsletterSignup />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {t.home.faq.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {t.home.faq.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {(t.home.faqList || []).map((faq, index) => (
              <AnimatedSection key={faq.question} animation="fade-in-up" delay={0.1 + index * 0.05}>
                <details className="glass-card rounded-xl group">
                  <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <svg className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t.home.cta.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              {t.home.cta.subtitle}
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg cta-glow"
            >
              {t.home.cta.button}
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
