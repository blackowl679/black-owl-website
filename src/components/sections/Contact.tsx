'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User, MessageSquare, Building, Clock, Bot, Calendar, CircuitBoard, ArrowRight } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        
        // Reset estado después de 5 segundos para permitir nuevos envíos
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        console.error('Error:', result.error)
        
        // Reset estado de error después de 3 segundos
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
      
      // Reset estado de error después de 3 segundos
    setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 5 + Math.random() * 8
  }))

  return (
    <section id="contacto" className="pt-24 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.08'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '60px 60px'
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
          className="absolute top-1/4 left-1/4 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-accent-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        />
        
        {/* Tech Lines */}
        <motion.div 
          className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-500/25 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/25 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        
        {/* Horizontal Lines */}
        <motion.div 
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
        
        {/* Corner Tech Elements */}
        <motion.div 
          className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-primary-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.div 
          className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-accent-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        />
        <motion.div 
          className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-primary-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
        />
        <motion.div 
          className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-accent-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
        />

        {/* Circuit Patterns */}
        <div className="absolute top-1/6 left-8 w-16 h-16 opacity-10">
          <CircuitBoard className="w-full h-full text-primary-400" />
        </div>
        <div className="absolute bottom-1/6 right-8 w-20 h-20 opacity-10">
          <CircuitBoard className="w-full h-full text-accent-400" />
        </div>
      </div>

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
            Da el siguiente paso con <span className="gradient-text relative">
              BLACK OWL
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
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Ya sea que quieras transformar tu contabilidad, desarrollar un proyecto con inteligencia artificial 
            o simplemente entender cómo estas tecnologías pueden ayudarte, estamos aquí para escucharte.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden group">
              {/* Tech glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Corner elements */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
              
              {/* Scanning line */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-400/40 to-transparent"
                animate={{ y: [0, 300, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Escríbenos
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                  Un miembro de nuestro equipo se pondrá en contacto contigo muy pronto.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base text-white placeholder-gray-400"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Correo electrónico *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base text-white placeholder-gray-400"
                          placeholder="tu@empresa.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base text-white placeholder-gray-400"
                          placeholder="+52 33 1234 5678"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre de tu empresa
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base text-white placeholder-gray-400"
                          placeholder="Nombre de tu empresa (opcional)"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      ¿En qué podemos ayudarte?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base text-white placeholder-gray-400"
                      placeholder="Cuéntanos sobre tu proyecto, necesidades o cualquier pregunta que tengas..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base relative overflow-hidden"
                  >
                    {/* Button glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10 flex items-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Enviar mensaje</span>
                        </>
                      )}
                    </div>
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-accent-400 text-sm text-center bg-accent-500/10 border border-accent-500/30 rounded-lg p-3"
                    >
                      ✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/30 rounded-lg p-3"
                    >
                      ❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              {/* Tech glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-2xl"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {/* Corner elements */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  ¿Prefieres contacto directo?
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <motion.a
                    href="https://calendly.com/bwblackowl/30min?month=2025-06"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-4 p-4 bg-primary-500/10 border border-primary-500/30 rounded-xl hover:bg-primary-500/20 transition-all duration-300 group/btn"
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Calendar className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">Agendar reunión</h4>
                      <p className="text-gray-400 text-sm">Agenda una videollamada de 30 min</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary-400 group-hover/btn:text-primary-300" />
                    </motion.div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/message/FKMWTP7IMGCCD1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-4 p-4 bg-accent-500/10 border border-accent-500/30 rounded-xl hover:bg-accent-500/20 transition-all duration-300 group/btn"
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img 
                        src="/images/hero/soren-avatar.png" 
                        alt="SOREN Avatar" 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">Probar SOREN gratis</h4>
                      <p className="text-gray-400 text-sm">Inicia conversación en WhatsApp</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-accent-400 group-hover/btn:text-accent-300" />
                  </motion.a>

                  <motion.a
                    href="https://wa.me/523321650075"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl hover:bg-green-500/20 transition-all duration-300 group/btn"
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">WhatsApp directo</h4>
                      <p className="text-gray-400 text-sm">33-21-65-00-75 (Ventas)</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-400 group-hover/btn:text-green-300" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              {/* Tech background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
              
              {/* Circuit pattern */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-10">
                <CircuitBoard className="w-full h-full text-primary-400" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Información de contacto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">bwblackowl@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent-400" />
                    <div className="text-gray-300">
                      <div>Ventas: 33-21-65-00-75</div>
                      <div>Soporte: 33-21-65-46-71</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Lun - Vie: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact