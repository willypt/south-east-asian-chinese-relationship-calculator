import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://sea-chinese-relationship.willypt.com';
const title = '亲属称谓 — Chinese Family Title Calculator';
const description =
  'Find the correct Chinese kinship title for any relative. Supports 200+ terms across Mandarin, Hokkien, Cantonese, and Teochew dialects common in Southeast Asia.';

export const metadata: Metadata = {
  title,
  description,
  manifest: '/manifest.json',
  metadataBase: new URL(siteUrl),
  keywords: [
    'Chinese kinship',
    'family title calculator',
    'Chinese relatives',
    'kinship terms',
    'Mandarin',
    'Hokkien',
    'Cantonese',
    'Teochew',
    'Southeast Asia',
    'Lunar New Year',
    'Chinese New Year',
    '亲属称谓',
    '称呼计算器',
  ],
  authors: [{ name: 'Willy PT', url: 'https://www.linkedin.com/in/willypt' }],
  creator: 'Willy PT',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title,
    description,
    siteName: 'Chinese Family Title Calculator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '亲属称谓 — Chinese Family Title Calculator supporting Mandarin, Hokkien, Cantonese, and Teochew',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
    creator: '@willypt',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '亲属称谓',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0c0a09',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Noto+Serif+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
