'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, Bot, Zap, Shield, Code, CircuitBoard, Sparkles } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      category: "SOREN - IA Contable",
      icon: () => <img src="/images/hero/soren-avatar.png" alt="SOREN Avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />,
      color: "from-accent-500 to-accent-600",
      questions: [
        {
          question: "¿Qué diferencia a SOREN de otros asistentes o plataformas de contabilidad?",
          answer: "SOREN combina inteligencia artificial con asesoría fiscal personalizada. Responde dudas, organiza tu contabilidad y emite facturas desde WhatsApp, todo con el respaldo de expertos contables reales."
        },
        {
          question: "¿Puedo probar SOREN antes de contratar?",
          answer: "Claro. Puedes comenzar probando a SOREN gratis desde WhatsApp. No requiere instalación ni configuración inicial."
        },
        {
          question: "¿Los servicios de SOREN cumplen con la normativa fiscal mexicana?",
          answer: "Absolutamente. SOREN está programado con las regulaciones del SAT y otras instituciones. Todo lo que hace está alineado con la normativa fiscal vigente."
        },
        {
          question: "¿SOREN puede reemplazar a mi contador?",
          answer: "No, SOREN está diseñado para complementar y potenciar el trabajo humano, no para reemplazarlo. Se encarga de tareas repetitivas mientras que los contadores se enfocan en estrategia y decisiones complejas."
        },
        {
          question: "¿Es seguro usar SOREN con información confidencial de mi empresa?",
          answer: "Completamente seguro. SOREN maneja toda la información con encriptación end-to-end y cumple con estándares de protección de datos. Jamás compartimos información confidencial."
        }
      ]
    },
    {
      category: "Soluciones IA Personalizadas",
      icon: Zap,
      color: "from-primary-500 to-primary-600",
      questions: [
        {
          question: "¿Qué tipo de empresas pueden trabajar con BLACK OWL?",
          answer: "Trabajamos con empresas de todos los tamaños y giros. Cualquier negocio o empresa, no importa el tamaño o la operación, puede implementar IA. Solo se necesita que estén dispuestos a hacer el cambio."
        },
        {
          question: "¿Necesito tener conocimientos técnicos para trabajar con ustedes?",
          answer: "No. Nuestro enfoque está en hacer que la tecnología sea fácil y accesible. Te guiamos paso a paso en todo el proceso."
        },
        {
          question: "¿Cuánto tiempo toma implementar una solución de IA en mi empresa?",
          answer: "Depende del proyecto, pero trabajamos de forma ágil. Desde una semana para automatizaciones simples hasta pocas semanas para agentes personalizados."
        },
        {
          question: "¿Puedo integrar sus soluciones con mis sistemas actuales?",
          answer: "Sí. Creamos integraciones a la medida para que tu operación actual se mantenga y evolucione con nuestras herramientas."
        },
        {
          question: "¿Qué pasa si mi empresa aún no está lista para IA?",
          answer: "Te ayudamos a identificar cuándo y cómo empezar. Podemos acompañarte desde una primera automatización hasta una transformación completa."
        },
        {
          question: "¿Tienen soporte posterior a la implementación?",
          answer: "Sí. Ofrecemos seguimiento, mantenimiento y evolución continua de tus herramientas implementadas."
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex
    setOpenIndex(openIndex === index ? null : index)
  }

  // Floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 6
  }))

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.08'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '40px 40px'
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
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.3, 0]
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
          className="absolute top-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-primary-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-accent-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.7, 0.4, 0.7]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Tech Lines */}
        <motion.div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/20 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        
        {/* Corner Tech Elements */}
        <motion.div 
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent-500/30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        />

        {/* Circuit Patterns */}
        <div className="absolute top-1/6 left-8 w-12 h-12 opacity-10">
          <CircuitBoard className="w-full h-full text-primary-400" />
        </div>
        <div className="absolute bottom-1/6 right-8 w-16 h-16 opacity-10">
          <CircuitBoard className="w-full h-full text-accent-400" />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
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
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
            <span className="relative z-10">Preguntas frecuentes</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Resuelve tus <span className="gradient-text relative">
              dudas
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
            Aquí respondemos las dudas más comunes sobre nuestros servicios, inteligencia artificial y cómo trabajamos juntos para transformar tu negocio.
          </motion.p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {faqs.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
              >
                {/* Tech glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, delay: categoryIndex * 0.8 }}
                />
                
                {/* Corner elements */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
                
                {/* Circuit pattern */}
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <CircuitBoard className="w-full h-full text-primary-400" />
                </div>
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                    <motion.div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.category === "SOREN - IA Contable" ? <CategoryIcon /> : <CategoryIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />}
                      {/* Icon pulse */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-xl"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: categoryIndex * 0.4 }}
                      />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Questions */}
                  <div className="space-y-3 sm:space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const index = categoryIndex * 1000 + questionIndex
                      const isOpen = openIndex === index
                      
                      return (
                        <motion.div
                          key={questionIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.5 + questionIndex * 0.1, duration: 0.6 }}
                          className="bg-white/5 border border-white/10 rounded-xl overflow-hidden relative group/item"
                        >
                          {/* Item glow */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-xl"
                            animate={{ opacity: isOpen ? [0.3, 0.6, 0.3] : 0 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          
                          <button
                            onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                            className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 relative z-10"
                          >
                            <span className="text-base sm:text-lg font-semibold text-white pr-4">
                              {faq.question}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 45 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 sm:px-6 pb-4 sm:pb-5 relative z-10">
                                  <motion.p 
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-sm sm:text-base text-gray-300 leading-relaxed"
                                  >
                                    {faq.answer}
                                  </motion.p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            {/* Tech background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 rounded-2xl"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            {/* Sparkle effects */}
            <motion.div
              className="absolute top-4 left-4 w-2 h-2 bg-primary-400 rounded-full"
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-2 h-2 bg-accent-400 rounded-full"
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ¿No encontraste lo que buscabas?
              </motion.h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Nuestro equipo está aquí para resolver cualquier duda específica sobre tu proyecto
              </p>
              
              <div className="flex justify-center">
                <motion.a
                  href="/contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  {/* Button glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative z-10">Contactar ahora</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ