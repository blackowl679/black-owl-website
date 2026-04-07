import React from 'react'
import Navbar from '../../components/Navbar'
import About from '../../components/sections/About'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros - GARLIA',
  description: 'Conoce a GARLIA y nuestra misión de revolucionar la contabilidad con IA',
}

export default function NosotrosPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 