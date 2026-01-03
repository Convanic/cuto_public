'use client';

import Link from 'next/link';
import Image from 'next/image';
import NewsletterSignup from './NewsletterSignup';
import { useI18n } from '@/lib/i18n/context';

export default function Footer() {
  const { t } = useI18n();
  
  return (
    <footer className="glass-strong border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="CUTO Logo"
                width={138}
                height={46}
                className="h-[36.8px] w-auto"
              />
            </div>
            <p className="text-sm mb-4 text-white/90">
              {t.footer.description}
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.features}
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.useCases}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.caseStudies}
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.docs}
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.status}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.partners}
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.changelog}
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.compare}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">
                <span className="block">benX AG</span>
                <span className="block">Richard-Wagner-Str. 38</span>
                <span className="block">84478 Waldkraiburg</span>
                <span className="block">Germany</span>
              </li>
              <li className="pt-2">
                <a href="tel:+491234567890" className="text-white/80 hover:text-white transition-colors">
                  +49 123 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@cuto.de" className="text-white/80 hover:text-white transition-colors">
                  info@cuto.de
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  {t.nav.requestDemo}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/imprint" className="text-white/80 hover:text-white transition-colors">
                  {t.footer.imprint}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/80 hover:text-white transition-colors">
                  {t.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 pt-8 mt-8 mb-8">
          <div className="max-w-xl mx-auto">
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>
              {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
            </p>
            <p className="mt-2 md:mt-0">
              {t.footer.madeWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
