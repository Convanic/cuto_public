'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Microsoft Clarity Project IDs
// Get from: https://clarity.microsoft.com/
const CLARITY_PROJECT_ID_DEV = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID_DEV || '';
const CLARITY_PROJECT_ID_PROD = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID_PROD || '';

// Determine if we're in development or production
function getEnvironment(): 'dev' | 'production' {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const port = window.location.port;
    
    // Production: cuto.ai domain
    if (hostname === 'cuto.ai' || hostname === 'www.cuto.ai') {
      return 'production';
    }
    
    // Dev: Port 3002 or localhost
    if (port === '3002' || hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'dev';
    }
  }
  
  return process.env.NODE_ENV === 'production' ? 'production' : 'dev';
}

// Get the appropriate Clarity Project ID based on environment
function getProjectId(): string {
  const env = getEnvironment();
  return env === 'production' ? CLARITY_PROJECT_ID_PROD : CLARITY_PROJECT_ID_DEV;
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

// Microsoft Clarity Component for Heatmaps
// Clarity provides:
// - Heatmaps (click, scroll, move)
// - Session Recordings
// - Insights Dashboard
// - All for FREE!
export default function MicrosoftClarity() {
  const projectId = getProjectId();
  const env = getEnvironment();

  // Don't render if no project ID is configured
  if (!projectId) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Clarity] No project ID configured for ${env} environment`);
    }
    return null;
  }

  // Only load if user has consented to analytics
  useEffect(() => {
    if (!hasAnalyticsConsent()) {
      return;
    }

    // Clarity auto-initializes when script loads
    // No additional initialization needed
  }, []);

  // Only load script if user has consented
  if (!hasAnalyticsConsent()) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
}

