import React from 'react'
import Navbar from '../../components/Navbar'
import Services from '../../components/sections/Services'
import Testimonials from '../../components/sections/Testimonials'
import FAQ from '../../components/sections/FAQ'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios - BLACK OWL',
  description: 'Descubre los servicios de BLACK OWL para revolucionar tu contabilidad con IA',
}

export default function ServiciosPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 