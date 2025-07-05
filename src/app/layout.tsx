import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLACK OWL - Firma contable e Inteligencia Artificial',
  description: 'Revolucionamos tu negocio y contabilidad con IA. Convertimos la IA en una ventaja real para tu negocio: más eficiencia, menos errores y una gestión más inteligente.',
  keywords: 'contabilidad, inteligencia artificial, IA, BLACK OWL, SOREN, agente contable, automatización, facturación, CFDIs, consultoría IA',
  authors: [{ name: 'BLACK OWL' }],
  creator: 'BLACK OWL',
  publisher: 'BLACK OWL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://bwblackowl.com' : 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BLACK OWL - Firma contable e Inteligencia Artificial',
    description: 'Revolucionamos tu negocio y contabilidad con IA. Convertimos la IA en una ventaja real para tu negocio.',
    url: 'https://bwblackowl.com',
    siteName: 'BLACK OWL',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BLACK OWL - Firma contable e IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACK OWL - Firma contable e IA',
    description: 'Revolucionamos tu negocio y contabilidad con IA.',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
} 