'use client';

import { useI18n } from '@/lib/i18n/context';

export default function CookiePolicyPage() {
  const { t } = useI18n();

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {t.legal.cookies.title}
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            {t.legal.cookies.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What Are Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.whatAreCookies.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.whatAreCookies.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.cookies.whatAreCookies.p2}
              </p>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.howWeUse.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.howWeUse.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong className="text-gray-900">{t.legal.cookies.howWeUse.essential.split(':')[0]}:</strong>{t.legal.cookies.howWeUse.essential.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.cookies.howWeUse.analytics.split(':')[0]}:</strong>{t.legal.cookies.howWeUse.analytics.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.cookies.howWeUse.functional.split(':')[0]}:</strong>{t.legal.cookies.howWeUse.functional.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.cookies.howWeUse.performance.split(':')[0]}:</strong>{t.legal.cookies.howWeUse.performance.split(':').slice(1).join(':')}</li>
              </ul>
            </div>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.types.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.legal.cookies.types.essential.title}</h3>
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.types.essential.p1}
              </p>
              <p className="text-gray-600 mb-6">
                {t.legal.cookies.types.essential.p2}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.legal.cookies.types.analytics.title}</h3>
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.types.analytics.p1}
              </p>
              <p className="text-gray-600 mb-6">
                {t.legal.cookies.types.analytics.p2}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.legal.cookies.types.functional.title}</h3>
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.types.functional.p1}
              </p>
              <p className="text-gray-600 mb-6">
                {t.legal.cookies.types.functional.p2}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.legal.cookies.types.performance.title}</h3>
              <p className="text-gray-600">
                {t.legal.cookies.types.performance.p1}
              </p>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.thirdParty.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.thirdParty.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                {t.legal.cookies.thirdParty.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                {t.legal.cookies.thirdParty.p2}
              </p>
            </div>
          </section>

          {/* Cookie Duration */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.duration.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.duration.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong className="text-gray-900">{t.legal.cookies.duration.session.split(':')[0]}:</strong>{t.legal.cookies.duration.session.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.cookies.duration.persistent.split(':')[0]}:</strong>{t.legal.cookies.duration.persistent.split(':').slice(1).join(':')}</li>
              </ul>
            </div>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.managing.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.managing.p1}
              </p>
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.managing.p2}
              </p>
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.managing.p3}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">Microsoft Edge</a></li>
              </ul>
            </div>
          </section>

          {/* Cookie Consent */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.consent.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.consent.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.cookies.consent.p2}
              </p>
            </div>
          </section>

          {/* Updates to Cookie Policy */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.updates.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600">
                {t.legal.cookies.updates.p1}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.cookies.contact.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.cookies.contact.p1}
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong className="text-gray-900">{t.legal.cookies.contact.email}:</strong> <a href="mailto:info@cuto.de" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">info@cuto.de</a></p>
                <p><strong className="text-gray-900">{t.legal.cookies.contact.address}:</strong> benX AG, Richard-Wagner-Str. 38, 84478 Waldkraiburg, Germany</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
