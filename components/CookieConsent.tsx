'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n/context';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  functional: false,
  marketing: false,
};

export default function CookieConsent() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }));
    setIsVisible(false);
    
    // Dispatch custom event to notify Google Analytics component
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookie-consent-changed'));
    }
    
    // Here you would typically initialize analytics/marketing scripts
    // based on the user's preferences
    if (prefs.analytics) {
      // Google Analytics will be initialized by the GoogleAnalytics component
      console.log('Analytics cookies accepted');
    }
    if (prefs.marketing) {
      // Initialize marketing pixels, etc.
      console.log('Marketing cookies accepted');
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptSelected = () => {
    saveConsent(preferences);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Main Banner */}
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon & Text */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#952494] to-[#FA9B0C] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t.cookies.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t.cookies.description}{' '}
                        <Link href="/cookie-policy" className="text-[#952494] hover:text-[#FA9B0C] underline transition-colors">
                          {t.cookies.learnMore}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    {showDetails ? t.cookies.hideDetails : t.cookies.customize}
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {t.cookies.rejectAll}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#952494] to-[#FA9B0C] hover:opacity-90 rounded-lg transition-opacity shadow-lg"
                  >
                    {t.cookies.acceptAll}
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed Preferences */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 overflow-hidden"
                >
                  <div className="p-6 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-4">{t.cookies.preferencesTitle}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Necessary Cookies */}
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">{t.cookies.necessary.title}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{t.cookies.necessary.badge}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {t.cookies.necessary.description}
                          </p>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                        <button
                          onClick={() => togglePreference('analytics')}
                          className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 transition-colors ${
                            preferences.analytics
                              ? 'bg-[#952494] border-[#952494]'
                              : 'bg-white border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {preferences.analytics && (
                            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        <div className="flex-1">
                          <span className="font-medium text-gray-900">{t.cookies.analytics.title}</span>
                          <p className="text-sm text-gray-600 mt-1">
                            {t.cookies.analytics.description}
                          </p>
                        </div>
                      </div>

                      {/* Functional Cookies */}
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                        <button
                          onClick={() => togglePreference('functional')}
                          className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 transition-colors ${
                            preferences.functional
                              ? 'bg-[#952494] border-[#952494]'
                              : 'bg-white border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {preferences.functional && (
                            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        <div className="flex-1">
                          <span className="font-medium text-gray-900">{t.cookies.functional.title}</span>
                          <p className="text-sm text-gray-600 mt-1">
                            {t.cookies.functional.description}
                          </p>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                        <button
                          onClick={() => togglePreference('marketing')}
                          className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 transition-colors ${
                            preferences.marketing
                              ? 'bg-[#952494] border-[#952494]'
                              : 'bg-white border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {preferences.marketing && (
                            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        <div className="flex-1">
                          <span className="font-medium text-gray-900">{t.cookies.marketing.title}</span>
                          <p className="text-sm text-gray-600 mt-1">
                            {t.cookies.marketing.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Save Preferences Button */}
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={acceptSelected}
                        className="px-6 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        {t.cookies.savePreferences}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
