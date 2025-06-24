import React from 'react'
import Navbar from '../../components/Navbar'
import About from '../../components/sections/About'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

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