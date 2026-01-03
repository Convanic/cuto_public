'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ThemeVariant = 'A' | 'B' | 'C' | 'D';

interface ThemeConfig {
  id: ThemeVariant;
  name: string;
  description: string;
  gradientStart: string;
  gradientEnd: string;
  primary: string;
}

const themes: ThemeConfig[] = [
  {
    id: 'A',
    name: 'Lila → Orange',
    description: 'Original CUTO Theme',
    gradientStart: '#8B2486',
    gradientEnd: '#F27122',
    primary: '#952494',
  },
  {
    id: 'B',
    name: 'Grün → Orange',
    description: 'Fresh & Energetic',
    gradientStart: '#73D004',
    gradientEnd: '#FA9B0D',
    primary: '#5cb800',
  },
  {
    id: 'C',
    name: 'Blau → Orange',
    description: 'Trust & Energy',
    gradientStart: '#0EB4F2',
    gradientEnd: '#FA9B0D',
    primary: '#0a9fd6',
  },
  {
    id: 'D',
    name: 'Blau → Grün',
    description: 'Tech & Growth',
    gradientStart: '#0EB4F2',
    gradientEnd: '#73D004',
    primary: '#0a9fd6',
  },
];

const THEME_STORAGE_KEY = 'cuto_theme_variant';

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('A');
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeVariant | null;
    if (stored && ['A', 'B', 'C', 'D'].includes(stored)) {
      setCurrentTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      document.documentElement.setAttribute('data-theme', 'A');
    }
  }, []);

  const handleThemeChange = (theme: ThemeVariant) => {
    setCurrentTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Log for A/B testing analytics
    console.log(`[A/B Test] Theme switched to: ${theme}`, {
      timestamp: new Date().toISOString(),
      theme,
      themeName: themes.find(t => t.id === theme)?.name,
    });
  };

  const currentThemeConfig = themes.find(t => t.id === currentTheme);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0.3, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        title="A/B Test Theme Switcher"
      >
        <div 
          className="w-8 h-8 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${currentThemeConfig?.gradientStart} 0%, ${currentThemeConfig?.gradientEnd} 100%)`,
          }}
        />
      </motion.button>

      {/* Theme Switcher Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-40 right-4 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">🎨 A/B Test Themes</h3>
                    <p className="text-xs text-gray-500">Select color variant</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Theme Options */}
              <div className="p-3 space-y-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                      currentTheme === theme.id
                        ? 'bg-gray-100 ring-2 ring-gray-300'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Theme Preview */}
                    <div 
                      className="w-12 h-12 rounded-lg flex-shrink-0 shadow-inner"
                      style={{
                        background: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`,
                      }}
                    />
                    
                    {/* Theme Info */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-700 text-lg">{theme.id}</span>
                        <span className="font-medium text-gray-900">{theme.name}</span>
                      </div>
                      <p className="text-xs text-gray-500">{theme.description}</p>
                    </div>

                    {/* Selected Indicator */}
                    {currentTheme === theme.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>

              {/* Footer Info */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Theme choice is saved locally for testing</span>
                </div>
              </div>

              {/* Hide Button */}
              <div className="px-4 pb-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsVisible(false);
                  }}
                  className="w-full py-2 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Hide switcher (refresh to show again)
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

