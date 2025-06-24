import React from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../../components/sections/Contact'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

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