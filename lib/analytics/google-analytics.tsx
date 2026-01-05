'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

// Google Analytics 4 Measurement ID
// Format: G-XXXXXXXXXX
const GA_MEASUREMENT_ID_DEV = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV || '';
const GA_MEASUREMENT_ID_PROD = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_PROD || '';

// Determine if we're in development or production
function getEnvironment(): 'dev' | 'production' {
  // Check if we're on the dev server (port 3002) or production domain
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const port = window.location.port;
    
    // Production: cuto.ai domain (standard port 80/443)
    if (hostname === 'cuto.ai' || hostname === 'www.cuto.ai') {
      return 'production';
    }
    
    // Dev: Port 3002 or localhost
    if (port === '3002' || hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'dev';
    }
    
    // Default: check environment variable
    if (process.env.NODE_ENV === 'production') {
      return 'production';
    }
  }
  
  return process.env.NODE_ENV === 'production' ? 'production' : 'dev';
}

// Get the appropriate GA Measurement ID based on environment
function getMeasurementId(): string {
  const env = getEnvironment();
  return env === 'production' ? GA_MEASUREMENT_ID_PROD : GA_MEASUREMENT_ID_DEV;
}

// Check if user has consented to analytics cookies
function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return false;
    
    const parsed = JSON.parse(consent);
    return parsed.preferences?.analytics === true;
  } catch {
    return false;
  }
}

// Initialize Google Analytics
function initializeGA(measurementId: string) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) {
    return;
  }

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  // Configure GA
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    // Add custom parameters
    environment: getEnvironment(),
  });

  // Track page views on route changes
  const handleRouteChange = () => {
    gtag('config', measurementId, {
      page_path: window.location.pathname,
      environment: getEnvironment(),
    });
  };

  // Listen for Next.js route changes
  window.addEventListener('popstate', handleRouteChange);
  
  return () => {
    window.removeEventListener('popstate', handleRouteChange);
  };
}

// Track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) {
    return;
  }

  const measurementId = getMeasurementId();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: action,
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Track page views manually
export function trackPageView(path: string) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) {
    return;
  }

  const measurementId = getMeasurementId();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_path: path,
    environment: getEnvironment(),
  });
}

// Google Analytics Component
export default function GoogleAnalytics() {
  const measurementId = getMeasurementId();
  const env = getEnvironment();
  const pathname = usePathname();

  // Don't render if no measurement ID is configured
  if (!measurementId) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA] No measurement ID configured for ${env} environment`);
    }
    return null;
  }

  // Track page views on route changes
  useEffect(() => {
    if (!hasAnalyticsConsent() || !measurementId) return;

    // Track page view when pathname changes
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pathname,
        page_title: document.title,
        environment: env,
      });
    }
  }, [pathname, measurementId, env]);

  // Only load if user has consented
  useEffect(() => {
    // Check consent on mount
    if (hasAnalyticsConsent()) {
      initializeGA(measurementId);
    }

    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        if (hasAnalyticsConsent()) {
          initializeGA(measurementId);
        } else {
          // Clear GA data if consent is revoked
          if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer = [];
          }
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (when consent is saved in same window)
    const handleConsentChange = () => {
      if (hasAnalyticsConsent()) {
        initializeGA(measurementId);
      }
    };

    // Custom event for consent changes in same window
    window.addEventListener('cookie-consent-changed', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
    };
  }, [measurementId]);

  // Only load script if user has consented
  if (!hasAnalyticsConsent()) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              environment: '${env}',
            });
          `,
        }}
      />
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

