import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Footer from '@/components/Footer';
import FloatingAuditCta from '@/components/FloatingAuditCta';
import { JsonLd, localBusinessStructuredData } from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import { SITE_NAME, SITE_URL } from '@/lib/seo-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/favicon.svg' },
  authors: [{ name: SITE_NAME }],
  title: {
    default: 'The Software Lab | Web, Software & Digital Growth',
    template: '%s | The Software Lab',
  },
  applicationName: SITE_NAME,
};

export const viewport: Viewport = {
  themeColor: '#0F2D54',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <GoogleTagManager gtmId="GTM-N4BKNLMC" />
        <GoogleAnalytics gaId="G-BL1KYN0QHC" />
        <JsonLd data={localBusinessStructuredData} />
        <Navbar />
        {children}
        <Footer />
        <FloatingAuditCta />
      </body>
    </html>
  );
}
