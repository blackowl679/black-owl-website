'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Bot, Zap, Brain, Cpu, Sparkles, ChevronDown, Calendar } from 'lucide-react'

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; x: number; delay: number }>>([])

  useEffect(() => {
    // Matrix rain effect - Configuración mejorada para caída secuencial
    const chars = '01010101SORENAIBLACKOWL'.split('')
    const numChars = 90 // Aumentamos más el número de caracteres
    
    const matrix = Array.from({ length: numChars }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      delay: (i * 0.35) % 35 // Delay que se reinicia para crear flujo continuo
    }))
    setMatrixChars(matrix)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToServices = () => {
    const element = document.querySelector('#servicios')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToNext = () => {
    const element = document.querySelector('#nosotros')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Matrix Rain Background - Cambiado para usar la animación CSS correcta */}
      <div className="absolute inset-0 z-0">
        {matrixChars.map((item) => (
          <div
            key={item.id}
            className="matrix-char absolute text-accent-500 font-mono text-xs sm:text-sm opacity-20"
            style={{ 
              left: `${item.x}%`,
              animationDelay: `${item.delay}s`
            }}
          >
            {item.char}
          </div>
        ))}
      </div>

      {/* Elementos de fondo animados específicos del Hero */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-5 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-5 w-60 h-60 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.9, 0.4],
            x: [0, -20, 0],
            y: [0, 10, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Mouse Follower (Only visible on desktop) */}
      <motion.div
        className="fixed w-4 h-4 bg-accent-500/50 rounded-full pointer-events-none z-50 mix-blend-screen hidden lg:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-white space-y-8 sm:space-y-10 lg:space-y-12 text-center lg:text-left"
            >
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">La firma que</span>
                  <span className="block gradient-text text-glow">transformará</span>
                  <span className="block">tu negocio con</span>
                  <span className="block text-accent-400 animate-pulse">INTELIGENCIA ARTIFICIAL</span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Convertimos la <span className="text-accent-400 font-semibold">IA</span> en una ventaja real para tu negocio: 
                <span className="text-primary-400 font-semibold"> más eficiencia</span>, 
                <span className="text-accent-400 font-semibold"> menos errores</span> y una 
                <span className="gradient-text font-semibold"> gestión más inteligente</span> desde el primer día.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://calendly.com/bwblackowl/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(26, 142, 235, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-6 sm:py-5 sm:px-10 rounded-2xl transition-all duration-300 shadow-xl relative overflow-hidden text-base sm:text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 z-10" />
                  <span className="z-10">Agendar una reunión</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 z-10" />
                </motion.a>

                <motion.a
                  href="https://wa.me/message/FKMWTP7IMGCCD1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(25, 235, 145, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-6 sm:py-5 sm:px-10 rounded-2xl transition-all duration-300 shadow-xl relative overflow-hidden text-base sm:text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 z-10" />
                  <span className="z-10">Probar a Soren gratis</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 z-10" />
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-10 lg:pt-14 border-t border-white/20"
              >
                <div className="text-center group">
                  <motion.div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                    animate={{ textShadow: ["0 0 10px rgba(25,235,145,0.5)", "0 0 20px rgba(25,235,145,0.8)", "0 0 10px rgba(25,235,145,0.5)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    +120
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Negocios transformados con IA</div>
                </div>
                <div className="text-center group">
                  <motion.div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                    animate={{ textShadow: ["0 0 10px rgba(26,142,235,0.5)", "0 0 20px rgba(26,142,235,0.8)", "0 0 10px rgba(26,142,235,0.5)"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    +2,000
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Facturas creadas con SOREN</div>
                </div>
                <div className="text-center group">
                  <motion.div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                    animate={{ textShadow: ["0 0 10px rgba(147,51,234,0.5)", "0 0 20px rgba(147,51,234,0.8)", "0 0 10px rgba(147,51,234,0.5)"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    98%
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Satisfacción de nuestros clientes</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Elements (Hidden on smaller screens to focus on content) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="hidden lg:flex relative justify-center items-center"
            >
              {/* Central AI Core */}
              <motion.div
                className="relative w-80 h-80 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center"
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    "0 0 50px rgba(25,235,145,0.3)",
                    "0 0 100px rgba(26,142,235,0.5)",
                    "0 0 50px rgba(25,235,145,0.3)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 4, repeat: Infinity }
                }}
              >
                <motion.div
                  className="w-60 h-60 rounded-full bg-gradient-to-r from-accent-500/30 to-primary-500/30 backdrop-blur-sm flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="w-24 h-24 text-white" />
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 -left-10 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 10, 0],
                  boxShadow: ["0 10px 25px rgba(26,142,235,0.3)", "0 20px 40px rgba(26,142,235,0.5)", "0 10px 25px rgba(26,142,235,0.3)"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Bot className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -10, 0],
                  boxShadow: ["0 10px 25px rgba(25,235,145,0.3)", "0 20px 40px rgba(25,235,145,0.5)", "0 10px 25px rgba(25,235,145,0.3)"]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -top-5 right-20 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>

              {/* Orbit Lines */}
              <div className="absolute inset-0 w-80 h-80 border border-primary-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-8 w-64 h-64 border border-accent-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs sm:text-sm font-medium">Desliza para más</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 