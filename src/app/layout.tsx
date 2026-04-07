import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GARLIA - Agencia de Inteligencia Artificial',
  description: 'Revolucionamos tu negocio impulsando tu crecimiento con IA. Convertimos la IA en una ventaja competitiva real: más eficiencia, menos errores y automatización completa.',
  keywords: 'inteligencia artificial, IA, GARLIA, SOREN, agente virtual, automatización, consultoría IA, innovación, optimización, startups, empresas',
  authors: [{ name: 'GARLIA' }],
  creator: 'GARLIA',
  publisher: 'GARLIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://garlia.ai' : 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GARLIA - Agencia de Inteligencia Artificial',
    description: 'Revolucionamos tu negocio impulsando tu crecimiento con IA. Convertimos la IA en una ventaja competitiva real.',
    url: 'https://garlia.ai',
    siteName: 'GARLIA',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GARLIA - Agencia de IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GARLIA - Agencia de IA',
    description: 'Revolucionamos tu negocio impulsando tu crecimiento con IA.',
    images: ['/images/og/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import CookieBanner from '@/components/CookieBanner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/company/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/company/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/company/logo.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
} 