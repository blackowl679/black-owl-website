'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Settings, Check, X, Shield, BarChart3, Target, Zap } from 'lucide-react'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  performance: boolean
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Siempre activas
    analytics: false,
    marketing: false,
    performance: false
  })

  useEffect(() => {
    // Verificar si ya se han configurado las cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Mostrar banner después de 2 segundos
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      performance: true
    }
    savePreferences(allAccepted)
  }

  const handleAcceptEssential = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      performance: false
    }
    savePreferences(essentialOnly)
  }

  const handleSaveCustom = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', 'true')
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs))
    
    // Aquí puedes agregar la lógica para activar/desactivar cookies según las preferencias
    if (prefs.analytics) {
      // Activar Google Analytics, etc.
      console.log('Activando cookies analíticas')
    }
    if (prefs.marketing) {
      // Activar Meta Pixel, Google Ads, etc.
      console.log('Activando cookies de marketing')
    }
    if (prefs.performance) {
      // Activar cookies de rendimiento
      console.log('Activando cookies de rendimiento')
    }
    
    setShowBanner(false)
  }

  const handleTogglePreference = (type: keyof CookiePreferences) => {
    if (type === 'essential') return // No se pueden desactivar
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />
          
          {/* Banner Principal */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {!showDetails ? (
                  // Vista Simple
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                          <Cookie className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                          🍪 Respetamos tu Privacidad
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                          Utilizamos cookies para mejorar tu experiencia, analizar el uso del sitio y mostrar contenido relevante. 
                          Las cookies esenciales son necesarias para el funcionamiento del sitio.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={handleAcceptAll}
                            className="flex-1 sm:flex-none bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                          >
                            <Check className="w-4 h-4" />
                            Aceptar Todas
                          </button>
                          
                          <button
                            onClick={handleAcceptEssential}
                            className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-300"
                          >
                            Solo Esenciales
                          </button>
                          
                          <button
                            onClick={() => setShowDetails(true)}
                            className="flex-1 sm:flex-none bg-white hover:bg-gray-50 text-accent-600 px-6 py-3 rounded-lg font-semibold transition-colors border border-accent-300 flex items-center justify-center gap-2"
                          >
                            <Settings className="w-4 h-4" />
                            Personalizar
                          </button>
                        </div>
                        
                        <div className="mt-4 text-xs text-gray-500">
                          Al continuar navegando, aceptas nuestras{' '}
                          <a href="/politica-cookies" className="text-accent-600 hover:text-accent-700 underline">
                            Políticas de Cookies
                          </a>{' '}
                          y{' '}
                          <a href="/politica-privacidad" className="text-accent-600 hover:text-accent-700 underline">
                            Privacidad
                          </a>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setShowBanner(false)}
                        className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Cerrar"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                ) : (
                  // Vista Detallada
                  <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                          <Settings className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Configuración de Cookies
                        </h3>
                      </div>
                      <button
                        onClick={() => setShowDetails(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      Personaliza qué tipos de cookies quieres aceptar. Puedes cambiar estas preferencias en cualquier momento.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      {/* Cookies Esenciales */}
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Cookies Esenciales</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-2">Siempre activas</span>
                          <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Cookies Analíticas */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-start gap-3">
                          <BarChart3 className="w-5 h-5 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Cookies Analíticas</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Nos ayudan a entender cómo usas el sitio para mejorarlo.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleTogglePreference('analytics')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.analytics 
                              ? 'bg-blue-500 justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </button>
                      </div>

                      {/* Cookies de Marketing */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-purple-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Cookies de Marketing</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Para mostrarte contenido y anuncios relevantes.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleTogglePreference('marketing')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.marketing 
                              ? 'bg-purple-500 justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </button>
                      </div>

                      {/* Cookies de Rendimiento */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-orange-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Cookies de Rendimiento</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Optimizan el rendimiento y velocidad del sitio.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleTogglePreference('performance')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.performance 
                              ? 'bg-orange-500 justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleSaveCustom}
                        className="flex-1 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Check className="w-4 h-4" />
                        Guardar Preferencias
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 bg-white hover:bg-gray-50 text-accent-600 py-3 px-6 rounded-lg font-semibold transition-colors border border-accent-300"
                      >
                        Aceptar Todas
                      </button>
                    </div>
                    
                    <div className="mt-4 text-xs text-gray-500 text-center">
                      Puedes cambiar estas preferencias en cualquier momento visitando nuestra{' '}
                      <a href="/politica-cookies" className="text-accent-600 hover:text-accent-700 underline">
                        Política de Cookies
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner