'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, locales, defaultLocale, initializeLocale, setStoredLocale } from './index';
import { translations, TranslationKeys } from './translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize locale from localStorage or browser settings
    const initialLocale = initializeLocale();
    setLocaleState(initialLocale);
    setIsLoading(false);
  }, []);

  const setLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocaleState(newLocale);
      setStoredLocale(newLocale);
      // Update document lang attribute
      document.documentElement.lang = newLocale;
    }
  };

  const t = translations[locale] || translations[defaultLocale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
};

// Custom hook to use translations
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// Shorthand hook for just translations
export const useTranslations = (): TranslationKeys => {
  const { t } = useI18n();
  return t;
};

