// Translation Index - Export all translations
import { de, TranslationKeys } from './de';
import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { it } from './it';
import { ru } from './ru';
import { zh } from './zh';
import { hi } from './hi';
import { cs } from './cs';
import { pt } from './pt';
import { Locale } from '../index';

export type { TranslationKeys };

export const translations: Record<Locale, TranslationKeys> = {
  de,
  en,
  fr,
  es,
  it,
  ru,
  zh,
  hi,
  cs,
  pt,
};

// Get translations for a specific locale
export const getTranslations = (locale: Locale): TranslationKeys => {
  return translations[locale] || translations.de;
};

