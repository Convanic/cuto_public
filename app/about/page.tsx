'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';

export default function AboutPage() {
  const { t } = useI18n();
  
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t.about.title}
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              {t.about.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission Section */}
          <AnimatedSection animation="fade-in-left" delay={0.2}>
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.about.mission.title}</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-white/90 mb-4 drop-shadow-md">
                  {t.about.mission.p1}
                </p>
                <p className="text-white/90 drop-shadow-md">
                  {t.about.mission.p2}
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* What We Do Section */}
          <AnimatedSection animation="fade-in-right" delay={0.3}>
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.about.whatWeDo.title}</h2>
              <div className="glass-card p-8 rounded-lg">
                <p className="text-gray-600 mb-4">
                  {t.about.whatWeDo.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>{t.about.whatWeDo.items.init}</li>
                  <li>{t.about.whatWeDo.items.planning}</li>
                  <li>{t.about.whatWeDo.items.management}</li>
                  <li>{t.about.whatWeDo.items.completion}</li>
                </ul>
              </div>
            </section>
          </AnimatedSection>

          {/* Why CUTO Section */}
          <AnimatedSection animation="fade-in-up" delay={0.4}>
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.about.whyCuto.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: t.about.whyCuto.templates.title, desc: t.about.whyCuto.templates.description },
                  { title: t.about.whyCuto.planning.title, desc: t.about.whyCuto.planning.description },
                  { title: t.about.whyCuto.management.title, desc: t.about.whyCuto.management.description },
                  { title: t.about.whyCuto.completion.title, desc: t.about.whyCuto.completion.description },
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="scale-in" delay={0.5 + index * 0.1}>
                    <div className="glass-card p-6 rounded-lg h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Team Section */}
          <AnimatedSection animation="fade-in-up" delay={0.6}>
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.about.team.title}</h2>
              <p className="text-white/90 mb-4 drop-shadow-md">
                {t.about.team.p1}
              </p>
              <p className="text-white/90 drop-shadow-md">
                {t.about.team.p2}
              </p>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
