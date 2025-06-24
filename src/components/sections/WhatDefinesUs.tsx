'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye, Users, Sparkles, Target, Repeat, CircuitBoard, Zap } from 'lucide-react'

const WhatDefinesUs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Eye,
      title: "Visión tecnológica",
      description: "No solo entendemos la inteligencia artificial, la aplicamos estratégicamente para resolver problemas reales y hacer crecer negocios.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Target,
      title: "Soluciones a medida",
      description: "Creamos agentes, software y automatizaciones diseñados específicamente para las necesidades de cada cliente. Nada genérico. Todo a la medida.",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Users,
      title: "Fusión de experiencia y futuro",
      description: "Combinamos años de trayectoria contable con tecnología de vanguardia para ofrecer una propuesta de valor única.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Resultados concretos",
      description: "Cada solución se diseña para generar impacto real: más eficiencia, control, ahorro de tiempo y mejores decisiones.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Repeat,
      title: "Evolución constante",
      description: "Estamos en mejora continua. Investigamos, probamos y evolucionamos para que tú siempre estés un paso adelante.",
      color: "from-green-500 to-green-600"
    }
  ]

  // Floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 6
  }))

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.08'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-accent-400/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
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

      {/* Tech Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-accent-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Tech Lines Network */}
        <motion.div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent-500/20 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        
        {/* Horizontal Lines */}
        <motion.div 
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/15 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
        
        {/* Corner Tech Elements */}
        <motion.div 
          className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary-500/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.div 
          className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-accent-500/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        />
        <motion.div 
          className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-primary-500/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
        />
        <motion.div 
          className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-accent-500/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
        />

        {/* Circuit Patterns */}
        <div className="absolute top-1/3 left-4 w-16 h-16 opacity-10">
          <CircuitBoard className="w-full h-full text-primary-400" />
        </div>
        <div className="absolute bottom-1/3 right-4 w-20 h-20 opacity-10">
          <CircuitBoard className="w-full h-full text-accent-400" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Lo que <span className="gradient-text relative">
              nos define
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 sm:w-24 sm:h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 sm:mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mb-12 sm:mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-primary-500/15 to-accent-500/15 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
                
                <div className="relative bg-gradient-to-br from-dark-800/70 via-dark-700/70 to-dark-800/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-primary-500/30 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden">
                  {/* Card Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-accent-500/3"
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                  
                  {/* Tech Corner Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Mini Circuit Pattern */}
                  <div className="absolute top-2 left-2 w-8 h-8 opacity-5 group-hover:opacity-15 transition-opacity duration-300">
                    <CircuitBoard className="w-full h-full text-primary-400" />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg relative`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
                        animate={{ 
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                      
                      {/* Icon Pulse Effect */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl`}
                        animate={{ 
                          scale: [1, 1.8, 1],
                          opacity: [0.3, 0, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: index * 0.4
                        }}
                      />
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary-300 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                      {value.description}
                    </p>
                  </div>

                  {/* Scanning Line Effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ y: [0, 200, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Energy Particle */}
                  <motion.div 
                    className="absolute top-4 right-4 w-2 h-2 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA with Tech Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center relative"
        >
          <div className="relative bg-gradient-to-br from-dark-800/60 via-dark-700/60 to-dark-800/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* CTA Background Effects */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5 rounded-2xl sm:rounded-3xl"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Tech Border Animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(16, 185, 129, 0.3), transparent)',
                backgroundSize: '300% 300%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                ¿Listo para transformar tu empresa?
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Descubre cómo nuestros principios se traducen en resultados reales para tu negocio
              </motion.p>
              
              <motion.a
                href="/servicios"
                className="inline-flex items-center space-x-2 text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 rounded-lg hover:border-primary-500/50 hover:bg-gradient-to-r hover:from-primary-500/30 hover:to-accent-500/30 transition-all duration-300 text-white font-semibold relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Explorar servicios</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatDefinesUs 