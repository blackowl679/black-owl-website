'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, Eye, Heart, ArrowRight, Brain, Cpu, Users, CircuitBoard } from 'lucide-react'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const values = [
    {
      icon: Zap,
      title: "Innovación como principio",
      description: "Evolucionamos constantemente para estar siempre un paso adelante.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Target,
      title: "Enfoque en impacto real",
      description: "Cada solución debe traducirse en eficiencia, crecimiento o ventaja competitiva.",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Brain,
      title: "Adaptabilidad inteligente",
      description: "Nos ajustamos a cada contexto, integrando tecnología de forma efectiva y útil.",
      color: "from-primary-500 to-accent-500"
    },
    {
      icon: Users,
      title: "Colaboración estratégica",
      description: "Construimos alianzas duraderas basadas en resultados, claridad y visión compartida.",
      color: "from-accent-500 to-primary-500"
    },
    {
      icon: Heart,
      title: "Humanidad tecnológica",
      description: "Combinamos lo mejor del talento humano con la inteligencia artificial.",
      color: "from-primary-600 to-accent-600"
    }
  ]

  // Floating particles
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 10
  }))

  return (
    <section id="nosotros" className="pt-24 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
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
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -50, 0],
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
          className="absolute top-20 left-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-primary-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-accent-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
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
        <div className="absolute top-1/3 left-4 w-20 h-20 opacity-10">
          <CircuitBoard className="w-full h-full text-primary-400" />
        </div>
        <div className="absolute bottom-1/3 right-4 w-24 h-24 opacity-10">
          <CircuitBoard className="w-full h-full text-accent-400" />
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Quiénes <span className="gradient-text relative">
              somos
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 sm:w-24 sm:h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Content Section - Unified Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden group">
            {/* Tech background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl sm:rounded-3xl"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            {/* Corner tech elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
            
            {/* Scan line effect */}
            <motion.div
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/40 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ y: [0, 400, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Primera parte del contenido */}
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-primary-400">BLACK OWL</strong> nació como una firma contable con una visión clara: 
                  ayudar a las empresas a tener control, claridad y estrategia financiera. Por años brindamos servicios 
                  contables y fiscales bajo los más altos estándares, acompañando a negocios en sus procesos diarios, 
                  declaraciones y toma de decisiones.
                </p>
                <p>
                  Pero muy pronto entendimos que <strong className="text-accent-400">eso ya no era suficiente</strong>.
                </p>
              </div>

              {/* Separator */}
              <div className="flex items-center justify-center py-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
                  <Cpu className="w-8 h-8 text-primary-400" />
                  <ArrowRight className="w-6 h-6 text-accent-400" />
                  <Brain className="w-8 h-8 text-accent-400" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-400"></div>
                </motion.div>
              </div>

              {/* Segunda parte del contenido */}
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                <p>
                  El mundo cambió. La velocidad, la competencia y la tecnología exigen más que cumplimiento: 
                  exigen <span className="font-semibold text-primary-400">visión</span>, 
                  <span className="font-semibold text-accent-400"> automatización</span> y 
                  <span className="font-semibold gradient-text"> transformación</span>. 
                  Fue entonces cuando decidimos dar un paso adelante.
                </p>
                <p>
                  Hoy, somos una <strong className="text-primary-400">firma híbrida</strong> que une lo mejor de dos mundos: 
                  la solidez de la contabilidad tradicional y la agilidad de la inteligencia artificial. 
                  Diseñamos e integramos agentes inteligentes, desarrollamos automatizaciones personalizadas y 
                  creamos software adaptado a las necesidades reales de cada empresa.
                </p>
                <p>
                  Y lo hacemos con un <strong className="text-accent-400">equipo comprometido</strong>, multidisciplinario 
                  y enfocado en lograr resultados que impacten de verdad.
                </p>
              </div>

              {/* Closing statement */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-base sm:text-lg text-center text-gray-300 leading-relaxed">
                  En BLACK OWL no solo entendemos hacia dónde va el futuro de los negocios: 
                  <strong className="text-primary-400"> lo estamos construyendo contigo</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Lo que impulsa nuestra <span className="gradient-text">evolución</span>
          </h3>
          <motion.div 
            className="w-16 h-1 sm:w-24 sm:h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Mission and Vision */}
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Tech glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mr-3" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Misión</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  Ser el motor de la transformación empresarial mediante el desarrollo de 
                  <strong className="text-primary-400"> soluciones integrales con inteligencia artificial</strong>, 
                  diseñadas a la medida para resolver desafíos reales, optimizar procesos y potenciar el crecimiento.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Tech glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-transparent rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400 mr-3" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Visión</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  Llevar la <strong className="text-accent-400">Inteligencia Artificial al corazón de cada negocio</strong> como una herramienta esencial para su crecimiento, evolución y operación diaria.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Nuestros <span className="gradient-text">valores</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto" />
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden h-full"
                  >
                    {/* Tech glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl sm:rounded-2xl"
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    />
                    
                    {/* Corner elements */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                        {/* Icon pulse */}
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl"
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                        />
                      </motion.div>
                      
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{value.title}</h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                    
                    {/* Scan line effect */}
                    <motion.div
                      className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/40 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ y: [0, 200, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Aspirational Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              {/* Tech background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 rounded-2xl sm:rounded-3xl"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Circuit patterns */}
              <div className="absolute top-4 left-4 w-8 h-8 opacity-10">
                <CircuitBoard className="w-full h-full text-primary-400" />
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 opacity-10">
                <CircuitBoard className="w-full h-full text-accent-400" />
              </div>
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Un nuevo estándar para las empresas del <span className="gradient-text">futuro</span>
                </motion.h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  En BLACK OWL creemos que la inteligencia artificial no debe ser exclusiva para las grandes corporaciones. Nuestra visión es acercarla a todos las empresas que quieran crecer, evolucionar y ser parte de la nueva era empresarial.
                  <br /><br />
                  No solo ofrecemos servicios. Creamos <strong className="text-primary-400">aliados inteligentes</strong> capaces de transformar el presente y proyectarte hacia el futuro. Si tú también crees que la inteligencia artificial debe estar al alcance de todos, entonces vamos por el mismo camino.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 