// Translation Index - Export all translations
import { de, TranslationKeys } from './de';
import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { it } from './it';
import { Locale } from '../index';

export type { TranslationKeys };

export const translations: Record<Locale, TranslationKeys> = {
  de,
  en,
  fr,
  es,
  it,
};

// Get translations for a specific locale
export const getTranslations = (locale: Locale): TranslationKeys => {
  return translations[locale] || translations.de;
};

