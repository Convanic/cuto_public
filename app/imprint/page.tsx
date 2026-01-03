'use client';

import { useI18n } from '@/lib/i18n/context';

export default function ImprintPage() {
  const { t } = useI18n();

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {t.legal.imprint.title}
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            {t.legal.imprint.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Company Information */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.imprint.companyInfo.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t.legal.imprint.companyInfo.companyName}</p>
                  <p>benX AG</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t.legal.imprint.companyInfo.address}</p>
                  <p>Richard-Wagner-Str. 38</p>
                  <p>84478 Waldkraiburg</p>
                  <p>Germany</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t.legal.imprint.companyInfo.contact}</p>
                  <p>
                    <a href="tel:+491234567890" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">
                      +49 123 456 7890
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@cuto.de" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">
                      info@cuto.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Information */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.imprint.legalInfo.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t.legal.imprint.legalInfo.managingDirector}</p>
                  <p>Armin Lorenz</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t.legal.imprint.legalInfo.commercialRegister}</p>
                  <p>{t.legal.imprint.legalInfo.registerCourt}: Amtsgericht Traunstein</p>
                  <p>{t.legal.imprint.legalInfo.registrationNumber}: HRB 19651</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t.legal.imprint.legalInfo.vatId}</p>
                  <p>{t.legal.imprint.legalInfo.vatIdText}: DE 273 141 469</p>
                </div>
              </div>
            </div>
          </section>

          {/* Liability for Content */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.imprint.liabilityContent.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.imprint.liabilityContent.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.imprint.liabilityContent.p2}
              </p>
            </div>
          </section>

          {/* Liability for Links */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.imprint.liabilityLinks.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.imprint.liabilityLinks.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.imprint.liabilityLinks.p2}
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.imprint.copyright.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.imprint.copyright.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.imprint.copyright.p2}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
