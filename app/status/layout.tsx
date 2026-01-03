import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status | CUTO',
  description: 'Aktuelle Betriebsstatus-Informationen für CUTO. Überprüfen Sie die Verfügbarkeit aller Services, aktuelle Incidents und geplante Wartungen.',
  keywords: ['CUTO Status', 'System Status', 'Uptime', 'Service Availability', 'Incidents'],
  openGraph: {
    title: 'System Status | CUTO',
    description: 'Aktuelle Betriebsstatus-Informationen für CUTO.',
    url: 'https://cuto.ai/status',
  },
  twitter: {
    title: 'System Status | CUTO',
    description: 'Aktuelle Betriebsstatus-Informationen für CUTO.',
  },
  alternates: {
    canonical: 'https://cuto.ai/status',
  },
};

export default function StatusLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

