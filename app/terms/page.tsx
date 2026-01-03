'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export default function TermsPage() {
  const { t } = useI18n();

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {t.legal.terms.title}
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            {t.legal.terms.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Scope and Acceptance */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.scope.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.scope.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.terms.scope.p2}
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.serviceDescription.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.serviceDescription.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t.legal.terms.serviceDescription.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Registration and Account */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.registration.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.registration.p1}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                {t.legal.terms.registration.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                {t.legal.terms.registration.p2}
              </p>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.acceptableUse.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">{t.legal.terms.acceptableUse.p1}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t.legal.terms.acceptableUse.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Subscription and Payment */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.subscription.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.subscription.p1}
              </p>
              <p className="text-gray-600 mb-4">
                {t.legal.terms.subscription.p2}
              </p>
              <p className="text-gray-600 mb-4">
                {t.legal.terms.subscription.p3}
              </p>
              <p className="text-gray-600">
                {t.legal.terms.subscription.p4}
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.intellectualProperty.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.intellectualProperty.p1}
              </p>
              <p className="text-gray-600 mb-4">
                {t.legal.terms.intellectualProperty.p2}
              </p>
              <p className="text-gray-600">
                {t.legal.terms.intellectualProperty.p3}
              </p>
            </div>
          </section>

          {/* Data and Privacy */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.dataPrivacy.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.dataPrivacy.p1}{" "}
                <Link href="/privacy" className="text-[#952494] hover:text-[#FA9B0C] transition-colors underline">
                  {t.legal.terms.dataPrivacy.privacyPolicy}
                </Link>
                {t.legal.terms.dataPrivacy.p2}
              </p>
              <p className="text-gray-600">
                {t.legal.terms.dataPrivacy.p3}
              </p>
            </div>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.serviceAvailability.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.serviceAvailability.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.terms.serviceAvailability.p2}
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.termination.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.termination.p1}
              </p>
              <p className="text-gray-600 mb-4">
                {t.legal.terms.termination.p2}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                {t.legal.terms.termination.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                {t.legal.terms.termination.p3}
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.liability.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.liability.p1}
              </p>
              <p className="text-gray-600">
                {t.legal.terms.liability.p2}
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.changes.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600">
                {t.legal.terms.changes.p1}
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.governingLaw.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600">
                {t.legal.terms.governingLaw.p1}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">{t.legal.terms.contact.title}</h2>
            <div className="glass-card p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                {t.legal.terms.contact.p1}
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong className="text-gray-900">{t.legal.terms.contact.email}:</strong> <a href="mailto:info@cuto.de" className="text-[#952494] hover:text-[#FA9B0C] transition-colors">info@cuto.de</a></p>
                <p><strong className="text-gray-900">{t.legal.terms.contact.address}:</strong> benX AG, Richard-Wagner-Str. 38, 84478 Waldkraiburg, Germany</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
