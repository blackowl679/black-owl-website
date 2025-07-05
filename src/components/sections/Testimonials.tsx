'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, User, Building, Zap, CircuitBoard, Sparkles } from 'lucide-react'

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: "Jesús Arellano",
      position: "CEO y fundador",
      company: "GRUPO DIM",
      companyLogo: "/images/logos/grupo-dim.png",
      avatar: "/api/placeholder/100/100",
      content: "Mi empresa creció muy rápido, pero nuestros procesos se quedaron atrás. BLACK OWL no solo nos ayudó a ordenar la parte contable, sino que nos propuso soluciones con IA que jamás imaginé. Hoy tenemos un agente inteligente que responde dudas, automatiza reportes y nos hace la vida más fácil. Es como si hubiera ampliado mi equipo sin contratar a nadie.",
      rating: 5,
      highlight: "Ampliación del equipo con IA"
    },
    {
      id: 2,
      name: "Tannya Gutiérrez",
      position: "CEO",
      company: "Critters",
      companyLogo: "/images/logos/critters.png",
      avatar: "/api/placeholder/100/100",
      content: "Llevaba meses batallando con temas fiscales, perder tiempo facturando y acumulando papeles sin sentido. Con Soren, todo eso se resolvió en días. Literal, ahora mando un mensaje por WhatsApp y ya tengo mi factura lista. BLACK OWL me hizo sentir que la tecnología también puede ser accesible para las emprendedoras como yo.",
      rating: 5,
      highlight: "Tecnología accesible"
    },
    {
      id: 3,
      name: "Rocío Alcaraz",
      position: "Directora operativa",
      company: "INDI INMOBILIARIA",
      companyLogo: "/images/logos/indi-inmobiliaria.png",
      avatar: "/api/placeholder/100/100",
      content: "En bienes raíces, el tiempo lo es todo. Pero nuestros procesos internos eran lentos y poco claros. Con BLACK OWL analizamos nuestras operaciones y nos propusieron automatizaciones específicas que hoy nos ahorran horas cada semana. Lo mejor: entendieron nuestras necesidades sin complicarnos con tecnicismos.",
      rating: 5,
      highlight: "Ahorro de tiempo real"
    },
    {
      id: 4,
      name: "Ana Arellano",
      position: "CEO",
      company: "Nutripostres",
      companyLogo: "/images/logos/nutripostres.png",
      avatar: "/api/placeholder/100/100",
      content: "Nunca pensé que llevar la contabilidad de un negocio de postres pudiera ser tan simple. Con Soren no solo entendí mis números, sino que aprendí a usarlos para tomar mejores decisiones. Ya no tengo miedo a las declaraciones ni al SAT. Me siento acompañada, pero con velocidad y tecnología de otro nivel.",
      rating: 5,
      highlight: "Decisiones inteligentes"
    },
    {
      id: 5,
      name: "Fernando Meza",
      position: "Propietario",
      company: "Taller Mecánico Meza",
      companyLogo: "/images/logos/taller-meza.png",
      avatar: "/api/placeholder/100/100",
      content: "Soy mecánico, no contador ni programador. Pero con BLACK OWL todo fue claro desde el inicio. Me ayudaron a organizar mi negocio, automatizar mis facturas y dejar de preocuparme por los impuestos. Ahora tengo más tiempo para lo que realmente importa: atender bien a mis clientes.",
      rating: 5,
      highlight: "Simplicidad y claridad"
    }
  ]

  const nextTestimonial = () => {
    console.log('Next testimonial clicked') // Debug
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    // Pausar el auto-advance por 10 segundos cuando el usuario usa las flechas
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const prevTestimonial = () => {
    console.log('Previous testimonial clicked') // Debug
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    // Pausar el auto-advance por 10 segundos cuando el usuario usa las flechas
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  // Auto-advance testimonials - activado con 15 segundos
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 15000) // 15 segundos para lectura cómoda

    return () => clearInterval(timer)
  }, [isPaused, testimonials.length])

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 5 + Math.random() * 7
  }))

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    })
  }

  return (
    <section id="testimonios" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.08'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '50px 50px'
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
              y: [0, -35, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.4, 0]
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
          className="absolute top-1/4 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-primary-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-accent-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Tech Lines */}
        <motion.div 
          className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent"
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
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        />

        {/* Circuit Patterns */}
        <div className="absolute top-1/6 left-8 w-14 h-14 opacity-10">
          <CircuitBoard className="w-full h-full text-primary-400" />
        </div>
        <div className="absolute bottom-1/6 right-8 w-16 h-16 opacity-10">
          <CircuitBoard className="w-full h-full text-accent-400" />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
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
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Casos de <span className="gradient-text relative">
              Éxito
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
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Testimonios de quienes ya trabajan con BLACK OWL
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden min-h-[400px] sm:min-h-[450px]"
          >
            {/* Tech glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl sm:rounded-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            {/* Corner elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
            
            {/* Scanning line */}
            <motion.div
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-400/30 to-transparent"
              animate={{ y: [0, 400, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <div className="relative z-10 h-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  className="flex flex-col justify-center h-full text-center"
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 relative overflow-hidden"
                  >
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                    {/* Quote pulse effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex justify-center space-x-1 mb-4 sm:mb-6"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Highlight */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 text-primary-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mx-auto"
                  >
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{testimonials[currentIndex].highlight}</span>
                  </motion.div>

                  {/* Content */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8 sm:mb-10 max-w-4xl mx-auto"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center relative overflow-hidden p-0">
                      <img 
                        src={testimonials[currentIndex].companyLogo} 
                        alt={`${testimonials[currentIndex].company} logo`}
                        className="w-full h-full object-cover relative z-10"
                        onError={(e) => {
                          // Fallback to Building icon if image fails to load
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling;
                          if (nextElement) {
                            (nextElement as HTMLElement).style.display = 'block';
                          }
                        }}
                      />
                      <Building className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10 hidden" />
                      {/* Logo pulse */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm sm:text-base text-primary-400">{testimonials[currentIndex].position}</p>
                      <div className="flex items-center justify-center sm:justify-start space-x-2 mt-1">
                        <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm text-gray-400">{testimonials[currentIndex].company}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-20">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
                style={{ zIndex: 30 }}
              >
                {/* Button glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
              </motion.button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-20">
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
                style={{ zIndex: 30 }}
              >
                {/* Button glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
              </motion.button>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 w-6 sm:w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials