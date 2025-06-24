import React from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../../components/sections/Contact'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - BLACK OWL',
  description: 'Ponte en contacto con BLACK OWL para transformar tu contabilidad con IA',
}

export default function ContactoPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 