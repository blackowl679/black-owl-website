'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import Innovation from '../components/sections/Innovation'
import WhatDefinesUs from '../components/sections/WhatDefinesUs'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Container principal con el fondo tecnológico del Hero */}
      <div className="relative min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        {/* Fondo tecnológico global */}
        <div className="absolute inset-0 z-0">
          {/* Cyber Grid */}
          <div className="absolute inset-0 cyber-grid opacity-20" />
          
          {/* Elementos de fondo animados */}
          <div className="absolute top-10 left-5 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-5 w-60 h-60 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-accent-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary-500/3 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }} />
          
          {/* Líneas neurales */}
          <div className="absolute top-1/4 left-0 w-full h-px neural-line opacity-30" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/2 left-0 w-full h-px neural-line opacity-30" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px neural-line opacity-30" style={{ animationDelay: '4s' }} />
        </div>
        
        {/* Contenido con z-index alto */}
        <div className="relative z-10">
          <Hero />
          <Innovation />
          <WhatDefinesUs />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 