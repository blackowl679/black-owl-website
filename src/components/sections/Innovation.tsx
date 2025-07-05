'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Brain, Zap, ArrowRight, Sparkles, Users, TrendingUp, Code, CircuitBoard } from 'lucide-react'

const Innovation: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const innovations = [
    {
      icon: () => <img src="/images/hero/soren-avatar.png" alt="SOREN Avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />,
      title: "SOREN – Tu agente IA contable",
      description: "Soren es tu asistente contable inteligente en WhatsApp. Diseñado para emprendedores y empresas, Soren te acompaña las 24/7 resolviendo tus dudas fiscales, ayudándote a emitir facturas y organizando tu información contable sin complicaciones.",
      color: "from-accent-500 to-accent-600",
      buttonText: "Quiero saber más",
      buttonLink: "/servicios#soren"
    },
    {
      icon: Brain,
      title: "Soluciones integrales con IA",
      description: "Transformamos tu negocio con tecnología. Creamos soluciones personalizadas que automatizan, optimizan y escalan tu operación con inteligencia artificial.",
      color: "from-primary-500 to-primary-600",
      buttonText: "Quiero saber más",
      buttonLink: "/servicios#ia-solutions"
    }
  ]

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4
  }))

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Tech Lines */}
        <motion.div 
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary-500/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 2, delay: 0.7 }}
        />
        
        {/* Additional Tech Lines */}
        <motion.div 
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.div 
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        
        {/* Corner Tech Elements */}
        <motion.div 
          className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.div 
          className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        />
        <motion.div 
          className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
        />
        <motion.div 
          className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
            <span className="relative z-10">Inteligencia Artificial Aplicada</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Innovación que <span className="gradient-text relative">
              transforma empresas
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 sm:w-24 sm:h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 sm:mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
                         Llevamos la inteligencia artificial al corazón de tu negocio.
          </motion.p>
        </motion.div>

        {/* Innovation Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 mb-12 sm:mb-16">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative bg-gradient-to-br from-dark-800/80 via-dark-700/80 to-dark-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-primary-500/30 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden">
                  {/* Card Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Tech Corner Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Circuit Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <CircuitBoard className="w-full h-full text-primary-400" />
                  </div>
                  
                  <motion.div 
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${innovation.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg z-10`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {innovation.title.includes('SOREN') ? <Icon /> : <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${innovation.color} rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  <h3 className="relative text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary-300 transition-colors duration-300 z-10">
                    {innovation.title}
                  </h3>
                  <p className="relative text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base z-10">
                    {innovation.description}
                  </p>
                  
                  <motion.a
                    href={innovation.buttonLink}
                    className="relative inline-flex items-center text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 px-6 py-3 rounded-lg hover:border-primary-500/50 hover:bg-gradient-to-r hover:from-primary-500/30 hover:to-accent-500/30 transition-all duration-300 z-10 overflow-hidden"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">{innovation.buttonText}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}

export default Innovation 