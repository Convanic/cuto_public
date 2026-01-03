'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  FileText, 
  RefreshCw, 
  FolderOpen, 
  Rocket, 
  AlertTriangle, 
  Users,
  Combine,
  LucideIcon
} from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import LanguageSwitcher from './LanguageSwitcher';

interface FeatureLink {
  href: string;
  labelKey: string;
  Icon: LucideIcon;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { t } = useI18n();

  // Schließe Dropdowns bei Klick außerhalb
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const featureLinks: FeatureLink[] = [
    { href: '/features/dashboards', labelKey: 'dashboards', Icon: BarChart3 },
    { href: '/features/templates', labelKey: 'templates', Icon: FileText },
    { href: '/features/bpmn', labelKey: 'bpmn', Icon: RefreshCw },
    { href: '/features/migration', labelKey: 'migration', Icon: FolderOpen },
    { href: '/features/harmonization', labelKey: 'harmonization', Icon: Combine },
    { href: '/features/cutover', labelKey: 'cutover', Icon: Rocket },
    { href: '/features/risks', labelKey: 'risks', Icon: AlertTriangle },
    { href: '/features/resources', labelKey: 'resources', Icon: Users },
  ];

  return (
    <nav className="glass-strong sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="CUTO Logo"
                width={138}
                height={46}
                className="h-[36.8px] w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname === '/'
                    ? 'bg-white/1 backdrop-blur-sm text-white border border-white/10'
                    : 'text-white hover:text-gray-100 bold'
                }`}
              >
                {t.nav.home}
              </Link>
              
              {/* Features Dropdown */}
              <div className="relative" ref={featuresRef}>
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${
                    pathname.startsWith('/features')
                      ? 'bg-white/1 backdrop-blur-sm text-white border border-white/10'
                      : 'text-white hover:text-gray-100 bold'
                  }`}
                >
                  {t.nav.features}
                  <svg className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {featuresOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 z-50 border border-gray-200/50">
                    <Link
                      href="/features"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 font-semibold border-b border-gray-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.nav.allFeaturesOverview}
                    </Link>
                    {featureLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        <link.Icon className="w-4 h-4 text-gray-500" />
                        {t.nav.featureLabels[link.labelKey as keyof typeof t.nav.featureLabels]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname === '/pricing'
                    ? 'bg-white/1 backdrop-blur-sm text-white border border-white/10'
                    : 'text-white hover:text-gray-100 bold'
                }`}
              >
                {t.nav.pricing}
              </Link>
              <Link
                href="/use-cases"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname.startsWith('/use-cases')
                    ? 'bg-white/1 backdrop-blur-sm text-white border border-white/10'
                    : 'text-white hover:text-gray-100 bold'
                }`}
              >
                {t.nav.useCases}
              </Link>
              <Link
                href="/compare"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname === '/compare'
                    ? 'bg-white/1 backdrop-blur-sm text-white border border-white/10'
                    : 'text-white hover:text-gray-100 bold'
                }`}
              >
                {t.nav.compare}
              </Link>
              <Link
                href="/partners"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname.startsWith('/partners')
                    ? 'bg-white/1 backdrop-blur-sm text-white border border-white/10'
                    : 'text-white hover:text-gray-100 bold'
                }`}
              >
                {t.nav.partners}
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname === '/about'
                    ? 'bg-white/1 backdrop-blur-sm text-white border border-white/10'
                    : 'text-white hover:text-gray-100 bold'
                }`}
              >
                {t.nav.about}
              </Link>
            </div>
          </div>

          {/* Language Switcher & Login Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher variant="minimal" />
            <div className="relative" ref={loginRef}>
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="bg-[#8B2486] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#7a1f75] transition-all shadow-md"
              >
                {t.nav.login}
              </button>

              {/* Login Dropdown */}
              {loginOpen && (
                <div className="absolute right-0 mt-2 w-72 glass-card rounded-xl shadow-2xl p-4 z-50">
                  <form 
                    action="http://localhost:8888/cuto_dev/index.php" 
                    method="POST" 
                    className="space-y-3"
                  >
                    <input type="hidden" name="action" value="login" />
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.common.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B2486] focus:border-transparent outline-none text-gray-900 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.nav.password}
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B2486] focus:border-transparent outline-none text-gray-900 text-sm"
                        placeholder="••••••••"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#8B2486] text-white py-2 rounded-lg font-medium hover:bg-[#7a1f75] transition-all"
                    >
                      {t.nav.login}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher variant="minimal" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-strong border-t border-white/20">
            <Link
              href="/"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname === '/'
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/features"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname.startsWith('/features')
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav.features}
            </Link>
            {/* Mobile Feature Sub-Links */}
            <div className="pl-4 space-y-1">
              {featureLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-white/80 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <link.Icon className="w-4 h-4" />
                  {t.nav.featureLabels[link.labelKey as keyof typeof t.nav.featureLabels]}
                </Link>
              ))}
            </div>
            <Link
              href="/pricing"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname === '/pricing'
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/use-cases"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname.startsWith('/use-cases')
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav.useCases}
            </Link>
            <Link
              href="/compare"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname === '/compare'
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav.compare}
            </Link>
            <Link
              href="/partners"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname.startsWith('/partners')
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav.partners}
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname === '/about'
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav.about}
            </Link>
            {/* Mobile Login Form */}
            <div className="mt-4 p-3 glass rounded-lg">
              <form 
                action="http://localhost:8888/cuto_dev/index.php" 
                method="POST" 
                className="space-y-3"
              >
                <input type="hidden" name="action" value="login" />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-white/30 bg-white/80 focus:ring-2 focus:ring-[#8B2486] outline-none text-gray-900 text-sm"
                  placeholder={t.common.email}
                />
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-white/30 bg-white/80 focus:ring-2 focus:ring-[#8B2486] outline-none text-gray-900 text-sm"
                  placeholder={t.nav.password}
                />
                <button
                  type="submit"
                  className="w-full bg-[#8B2486] text-white py-2 rounded-lg font-medium hover:bg-[#7a1f75] transition-all"
                >
                  {t.nav.login}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
