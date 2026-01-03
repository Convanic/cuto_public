'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { locales, localeNames, localeFlags, Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'inline' | 'minimal';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  variant = 'dropdown',
  className = '' 
}) => {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  // Minimal variant - just flag and code
  if (variant === 'minimal') {
    return (
      <div ref={dropdownRef} className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          aria-label={t.language.select}
          aria-expanded={isOpen}
        >
          {/* <span className="text-base">{localeFlags[locale]}</span> */}
          <span className="uppercase text-xs">{locale}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 py-2 min-w-[140px] bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50"
            >
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                    locale === loc
                      ? 'bg-[#952494]/20 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {/* <span className="text-base">{localeFlags[loc]}</span> */}
                  <span className="flex-1 text-left">{localeNames[loc]}</span>
                  {locale === loc && <Check className="w-4 h-4 text-[#FA9B0C]" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Inline variant - horizontal list
  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`px-2.5 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              locale === loc
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
            aria-label={localeNames[loc]}
          >
            {/* <span className="mr-1">{localeFlags[loc]}</span> */}
            <span className="uppercase text-xs">{loc}</span>
          </button>
        ))}
      </div>
    );
  }

  // Default dropdown variant
  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
        aria-label={t.language.select}
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        {/* <span className="text-base">{localeFlags[locale]}</span> */}
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 py-2 min-w-[180px] bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50"
          >
            <div className="px-4 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider border-b border-white/10 mb-1">
              {t.language.select}
            </div>
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  locale === loc
                    ? 'bg-[#952494]/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {/* <span className="text-lg">{localeFlags[loc]}</span> */}
                <span className="flex-1 text-left font-medium">{localeNames[loc]}</span>
                {locale === loc && <Check className="w-4 h-4 text-[#FA9B0C]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;

