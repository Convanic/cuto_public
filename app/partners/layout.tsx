import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner-Programm | CUTO',
  description: 'Werden Sie CUTO Partner und profitieren Sie von attraktiven Provisionen, exklusiven Ressourcen und einem wachsenden SAP-Transformationsmarkt. Für Freelancer, Beratungsunternehmen und Technologiepartner.',
  keywords: ['CUTO Partner', 'SAP Partner Program', 'Affiliate Program', 'Reseller', 'SAP Consulting', 'B2B Partnership'],
  openGraph: {
    title: 'Partner-Programm | CUTO',
    description: 'Werden Sie CUTO Partner und profitieren Sie von attraktiven Provisionen und einem wachsenden SAP-Transformationsmarkt.',
    url: 'https://cuto.ai/partners',
  },
  twitter: {
    title: 'Partner-Programm | CUTO',
    description: 'Werden Sie CUTO Partner und profitieren Sie von attraktiven Provisionen und einem wachsenden SAP-Transformationsmarkt.',
  },
  alternates: {
    canonical: 'https://cuto.ai/partners',
  },
};

export default function PartnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

