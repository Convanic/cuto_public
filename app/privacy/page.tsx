'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export default function PrivacyPage() {
  const { t } = useI18n();

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {t.legal.privacy.title}
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            {t.legal.privacy.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.intro.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.intro.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.privacy.intro.p2}
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p><strong className="text-gray-900">benX AG</strong></p>
                <p>Richard-Wagner-Str. 38</p>
                <p>84478 Waldkraiburg</p>
                <p>Germany</p>
                <p>
                  {t.legal.privacy.contact.email}: <a href="mailto:info@cuto.de" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">info@cuto.de</a>
                </p>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.dataCollection.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.legal.privacy.dataCollection.autoTitle}</h3>
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.dataCollection.autoIntro}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                {t.legal.privacy.dataCollection.autoItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                {t.legal.privacy.dataCollection.autoP}
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.contactForm.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.contactForm.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                {t.legal.privacy.contactForm.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                {t.legal.privacy.contactForm.p2}
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.cookies.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.cookies.p1}
              </p>
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.cookies.p2}
              </p>
              <p className="text-gray-600">
                {t.legal.privacy.cookies.p3}{" "}
                <Link href="/cookie-policy" className="text-[#952494] hover:text-[#FA9B0C] transition-colors underline">
                  {t.legal.privacy.cookies.cookiePolicy}
                </Link>.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.dataSharing.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.dataSharing.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t.legal.privacy.dataSharing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.dataSecurity.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.dataSecurity.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t.legal.privacy.dataSecurity.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.yourRights.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.yourRights.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong className="text-gray-900">{t.legal.privacy.yourRights.items.access.split(':')[0]}:</strong> {t.legal.privacy.yourRights.items.access.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.privacy.yourRights.items.rectification.split(':')[0]}:</strong> {t.legal.privacy.yourRights.items.rectification.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.privacy.yourRights.items.erasure.split(':')[0]}:</strong> {t.legal.privacy.yourRights.items.erasure.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.privacy.yourRights.items.restriction.split(':')[0]}:</strong> {t.legal.privacy.yourRights.items.restriction.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.privacy.yourRights.items.portability.split(':')[0]}:</strong> {t.legal.privacy.yourRights.items.portability.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.privacy.yourRights.items.objection.split(':')[0]}:</strong> {t.legal.privacy.yourRights.items.objection.split(':').slice(1).join(':')}</li>
                <li><strong className="text-gray-900">{t.legal.privacy.yourRights.items.withdrawal.split(':')[0]}:</strong> {t.legal.privacy.yourRights.items.withdrawal.split(':').slice(1).join(':')}</li>
              </ul>
              <p className="text-gray-600">
                {t.legal.privacy.yourRights.p2}{" "}
                <a href="mailto:info@cuto.de" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">info@cuto.de</a>.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.dataRetention.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.dataRetention.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.privacy.dataRetention.p2}
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.changes.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600">
                {t.legal.privacy.changes.p1}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.privacy.contact.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.privacy.contact.p1}
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong className="text-gray-900">{t.legal.privacy.contact.email}:</strong> <a href="mailto:info@cuto.de" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">info@cuto.de</a></p>
                <p><strong className="text-gray-900">{t.legal.privacy.contact.address}:</strong> benX AG, Richard-Wagner-Str. 38, 84478 Waldkraiburg, Germany</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
