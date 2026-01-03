// Internationalization (i18n) Configuration
// Supports: German, English, French, Spanish, Italian, Russian, Chinese, Hindi, Czech, Portuguese

export type Locale = 'de' | 'en' | 'fr' | 'es' | 'it' | 'ru' | 'zh' | 'hi' | 'cs' | 'pt';

export const locales: Locale[] = ['de', 'en', 'fr', 'es', 'it', 'ru', 'zh', 'hi', 'cs', 'pt'];

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  zh: '中文',
  hi: 'हिन्दी',
  cs: 'Čeština',
  pt: 'Português',
};

export const localeFlags: Record<Locale, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  ru: '🇷🇺',
  zh: '🇨🇳',
  hi: '🇮🇳',
  cs: '🇨🇿',
  pt: '🇵🇹',
};

export const defaultLocale: Locale = 'de';

// Detect browser language and match to supported locale
export const detectBrowserLocale = (): Locale => {
  if (typeof window === 'undefined') return defaultLocale;
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Check if browser language is supported
  if (locales.includes(langCode as Locale)) {
    return langCode as Locale;
  }
  
  // Fallback to default
  return defaultLocale;
};

// Get stored locale from localStorage
export const getStoredLocale = (): Locale | null => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('cuto-locale');
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }
  return null;
};

// Store locale in localStorage
export const setStoredLocale = (locale: Locale): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cuto-locale', locale);
};

// Initialize locale: stored > browser > default
export const initializeLocale = (): Locale => {
  const stored = getStoredLocale();
  if (stored) return stored;
  return detectBrowserLocale();
};

