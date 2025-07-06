'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Bot, Brain, Cpu, Zap, MessageCircle, FileText, BarChart3, Clock,
  ArrowRight, Play, CheckCircle, Sparkles, Code, Cog, Users, TrendingUp,
  Calculator, Shield, Smartphone, Globe, CircuitBoard
} from 'lucide-react'

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tabs = [
    {
      id: 'ai-solutions',
      title: 'Soluciones con IA',
      subtitle: 'Transformación personalizada para tu negocio',
      icon: Brain,
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 'soren',
      title: 'SOREN - IA Contable',
      subtitle: 'Tu agente inteligente 24/7',
      icon: () => <img src="/images/hero/soren-avatar.png" alt="SOREN Avatar" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />,
      color: 'from-accent-500 to-accent-600'
    },
    {
      id: 'traditional',
      title: 'Servicios contables y fiscales',
      subtitle: '',
      icon: Calculator,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const sorenFeatures = [
    {
      icon: MessageCircle,
      title: "Asesoría fiscal y contable 24/7",
      description: "Resuelve tus dudas fiscales en segundos y toma mejores decisiones con respuestas claras, confiables y personalizadas.",
      benefits: ["Respuestas instantáneas", "Disponibilidad 24/7", "Base de conocimiento actualizada"],
      videoPlaceholder: "/videos/soren-asesoria.mp4"
    },
    {
      icon: Zap,
      title: "Facturación en segundos",
      description: "Con SOREN, facturar es tan fácil como enviar un mensaje. Olvídate de portales complicados o procesos lentos: desde tu chat puedes emitir facturas en segundos, incluso usando notas de voz.",
      benefits: ["Facturación por voz", "Sin portales complejos", "Velocidad sin comparación"],
      videoPlaceholder: "/videos/soren-facturacion.mp4"
    },
    {
      icon: FileText,
      title: "Administración de CFDIs",
      description: "Consulta, organiza y gestiona tus facturas emitidas, complementos de pago y notas de crédito en un solo lugar, de forma simple y automatizada.",
      benefits: ["Gestión centralizada", "Organización automática", "Datos en tiempo real"],
      videoPlaceholder: "/videos/soren-cfdis.mp4"
    },
    {
      icon: BarChart3,
      title: "Pre cierres fiscales",
      description: "Obtén un panorama claro de tus impuestos antes de que termine el periodo. Ahorra sorpresas y mejora tu planeación.",
      benefits: ["Predicción de impuestos", "Planeación mejorada", "Evita sorpresas al final del mes"],
      videoPlaceholder: "/videos/soren-precierres.mp4"
    }
  ]

  const aiSolutions = [
    {
      icon: Bot,
      title: "Agentes IA personalizados",
      description: "Creamos agentes inteligentes diseñados específicamente para los flujos, procesos y metas de tu negocio. Sin límites predefinidos: cada agente se construye para resolver lo que tu empresa realmente necesita.",
      features: ["Diseño a medida", "Integración completa", "Aprendizaje continuo"]
    },
    {
      icon: Cog,
      title: "Automatización de procesos",
      description: "Digitalizamos tareas repetitivas para que tu equipo se enfoque en lo que realmente importa. Menos errores, más eficiencia.",
      features: ["Reducción de errores", "Ahorro de tiempo", "Escalabilidad"]
    },
    {
      icon: Brain,
      title: "Consultoría en IA",
      description: "Detectamos áreas de oportunidad en tu empresa y creamos un plan estratégico de adopción de inteligencia artificial, con soluciones reales y escalables.",
      features: ["Análisis estratégico", "Roadmap personalizado", "ROI medible"]
    },
    {
      icon: Code,
      title: "Desarrollo e integración",
      description: "Integramos IA a tus sistemas actuales o creamos herramientas a la medida que se adaptan a tu flujo de trabajo y necesidades específicas.",
      features: ["Integración nativa", "APIs personalizadas", "Soporte técnico"]
    },
    {
      icon: TrendingUp,
      title: "Estrategia digital",
      description: "Acompañamos la transformación de tu empresa con una mentalidad enfocada en el crecimiento, la innovación y la adaptabilidad tecnológica.",
      features: ["Visión a futuro", "Transformación gradual", "Acompañamiento continuo"]
    }
  ]

  const traditionalServices = [
    {
      icon: Calculator,
      title: "Contabilidad fiscal y financiera",
      description: "Llevamos el control completo de tus operaciones contables con exactitud y transparencia. Te entregamos estados financieros útiles para la toma de decisiones, siempre alineados a las normativas vigentes."
    },
    {
      icon: Shield,
      title: "Asesoría fiscal personalizada",
      description: "Diseñamos estrategias fiscales a la medida para optimizar tu carga tributaria, reducir riesgos y maximizar beneficios, acompañándote en cada declaración, trámite o revisión."
    },
    {
      icon: Users,
      title: "Cálculo de contribuciones",
      description: "Nos encargamos de que cumplas puntualmente con impuestos, cuotas patronales y obligaciones del IMSS e INFONAVIT. Evita multas y mantén tu empresa en orden."
    },
    {
      icon: FileText,
      title: "Timbrado y emisión de facturas",
      description: "Emite tus facturas de manera correcta y validada ante el SAT. Automatizamos este proceso para que cumplas con la legislación sin complicaciones ni errores."
    },
    {
      icon: Clock,
      title: "Cálculo y gestión de nóminas",
      description: "Calculamos sueldos, prestaciones y retenciones con precisión. Gestionamos tu nómina de forma profesional y en cumplimiento con todas las obligaciones fiscales y laborales."
    },
    {
      icon: BarChart3,
      title: "Auditoría financiera y fiscal",
      description: "Evaluamos tus operaciones, detectamos inconsistencias y proponemos mejoras. Te ayudamos a prevenir riesgos, prepararte para inspecciones y elevar la confianza financiera."
    }
  ]

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 5 + Math.random() * 8
  }))

  return (
    <section id="servicios" className="pt-24 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
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

      {/* Tech Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
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
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Tech Lines */}
        <motion.div 
          className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-500/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/30 to-transparent"
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

        {/* Circuit Patterns */}
        <div className="absolute top-1/5 left-8 w-16 h-16 opacity-10">
          <CircuitBoard className="w-full h-full text-primary-400" />
        </div>
        <div className="absolute bottom-1/5 right-8 w-20 h-20 opacity-10">
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Nuestros <span className="gradient-text relative">
              servicios
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
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

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col gap-4 lg:flex-row lg:justify-center mb-12 sm:mb-16"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 group ${
                  activeTab === index
                    ? 'bg-white/10 border-primary-500/50 shadow-lg shadow-primary-500/25'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl sm:rounded-2xl"
                  animate={{ opacity: activeTab === index ? [0.5, 1, 0.5] : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                  <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${tab.color} rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden`}
                    animate={{ 
                      scale: activeTab === index ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-lg sm:rounded-xl"
                      animate={{ opacity: activeTab === index ? [0, 0.3, 0] : 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-base sm:text-lg font-bold text-white">{tab.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{tab.subtitle}</p>
                  </div>
                </div>

                {/* Corner tech elements for active tab */}
                {activeTab === index && (
                  <>
                    <motion.div 
                      className="absolute top-2 left-2 w-3 h-3 border-l border-t border-primary-400/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-accent-400/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </>
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* AI Solutions Tab */}
            {activeTab === 0 && (
              <div className="space-y-8 sm:space-y-12">
                <div className="text-center mb-8 sm:mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-primary-500/25"
                  >
                    <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Soluciones integrales con IA
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    En BLACK OWL diseñamos soluciones a la medida para que las empresas evolucionen, mejoren su productividad y escalen con inteligencia artificial. Desde asistentes inteligentes hasta automatizaciones completas, conectamos tu operación actual con el futuro, guiándote con soluciones IA que se adaptan, crecen y evolucionan contigo.
                  </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {aiSolutions.map((solution, index) => {
                    const Icon = solution.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                      >
                        {/* Tech glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl sm:rounded-2xl"
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        />
                        
                        {/* Corner tech elements */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
                        
                        {/* Mini circuit pattern */}
                        <div className="absolute top-4 right-4 w-6 h-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                          <CircuitBoard className="w-full h-full text-primary-400" />
                        </div>
                        
                        {/* Scanning line */}
                        <motion.div
                          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/40 to-transparent"
                          animate={{ y: [0, 200, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-start space-x-4 mb-4 sm:mb-6">
                            <motion.div 
                              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                              whileHover={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                              {/* Icon pulse effect */}
                              <motion.div
                                className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl"
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                              />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{solution.title}</h4>
                              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">{solution.description}</p>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="grid gap-2">
                            {solution.features.map((feature, featureIndex) => (
                              <motion.div 
                                key={featureIndex} 
                                className="flex items-center space-x-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + featureIndex * 0.1 }}
                              >
                                <CheckCircle className="w-4 h-4 text-primary-400" />
                                <span className="text-xs sm:text-sm text-gray-400">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* CTA */}
                <div className="text-center mt-8 sm:mt-12">
                  <motion.a
                    href="https://calendly.com/bwblackowl/30min?month=2025-06"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base"
                  >
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Agenda tu reunión</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
              </div>
            )}

            {/* SOREN Tab */}
            {activeTab === 1 && (
              <div className="space-y-8 sm:space-y-12">
                {/* SOREN Header */}
                <div className="text-center mb-8 sm:mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-accent-500/25 overflow-hidden"
                  >
                    <img 
                      src="/images/hero/soren-avatar.png" 
                      alt="SOREN Avatar" 
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                    />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                    SOREN – Tu agente IA contable
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    SOREN es tu aliado digital en la nueva era de la contabilidad. Diseñado para facilitar tu operación diaria, mantener tu contabilidad en orden y ayudarte a crecer, todo con el poder de la Inteligencia Artificial, desde una experiencia conversacional práctica y eficiente, disponible siempre que lo necesites, estés donde estés.
                  </p>
                </div>

                {/* SOREN Features */}
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                  {sorenFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                      >
                        {/* Tech glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-primary-500/5 rounded-xl sm:rounded-2xl"
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        />
                        
                        {/* Corner tech elements */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-accent-400/30 group-hover:border-accent-400/60 transition-colors duration-300" />
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-primary-400/30 group-hover:border-primary-400/60 transition-colors duration-300" />
                        
                        {/* Mini circuit pattern */}
                        <div className="absolute top-4 right-4 w-6 h-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                          <CircuitBoard className="w-full h-full text-accent-400" />
                        </div>
                        
                        {/* Scanning line */}
                        <motion.div
                          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-400/40 to-transparent"
                          animate={{ y: [0, 200, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-start space-x-4 mb-4 sm:mb-6">
                            <motion.div 
                              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                              whileHover={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                              {/* Icon pulse effect */}
                              <motion.div
                                className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl"
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                              />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h4>
                              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                            </div>
                          </div>

                          {/* Benefits */}
                          <div className="grid gap-2 mb-4 sm:mb-6">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <motion.div 
                                key={benefitIndex} 
                                className="flex items-center space-x-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + benefitIndex * 0.1 }}
                              >
                                <CheckCircle className="w-4 h-4 text-accent-400" />
                                <span className="text-xs sm:text-sm text-gray-400">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Video Placeholder */}
                          <div className="bg-gray-800/50 rounded-lg sm:rounded-xl h-32 sm:h-48 flex items-center justify-center mb-4 relative overflow-hidden border border-accent-500/20">
                            {/* Tech grid overlay */}
                            <div className="absolute inset-0 opacity-10" style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3ccircle cx='3' cy='3' r='1'/%3e%3c/g%3e%3c/svg%3e")`,
                              backgroundSize: '20px 20px'
                            }} />
                            
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="cursor-pointer relative z-10"
                            >
                              <Play className="w-8 h-8 sm:w-12 sm:h-12 text-accent-400" />
                            </motion.div>
                            
                            {/* Energy particles */}
                            {[...Array(4)].map((_, particleIndex) => (
                              <motion.div
                                key={particleIndex}
                                className="absolute w-1 h-1 bg-accent-400 rounded-full"
                                style={{
                                  left: `${20 + particleIndex * 25}%`,
                                  top: `${30 + particleIndex * 15}%`,
                                }}
                                animate={{
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: particleIndex * 0.4
                                }}
                              />
                            ))}
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <span className="absolute bottom-2 left-2 text-xs text-white/80">Video próximamente</span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* CTA */}
                <div className="text-center mt-8 sm:mt-12">
                  <motion.a
                    href="https://wa.me/message/FKMWTP7IMGCCD1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base"
                  >
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Probar SOREN gratis</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
              </div>
            )}

            {/* Traditional Services Tab */}
            {activeTab === 2 && (
              <div className="space-y-8 sm:space-y-12">
                <div className="text-center mb-8 sm:mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-purple-500/25"
                  >
                    <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Servicios contables y fiscales
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    Aunque en BLACK OWL apostamos por la innovación con IA, entendemos que toda transformación empresarial necesita una base sólida. Por eso, seguimos ofreciendo nuestros servicios contables y fiscales con el mismo compromiso, precisión y visión estratégica que nos ha definido desde el inicio.
                  </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {traditionalServices.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group h-full"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{service.title}</h4>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{service.description}</p>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="text-center mt-8 sm:mt-12">
                  <motion.a
                    href="/contacto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base"
                  >
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Consultar servicios</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Services 