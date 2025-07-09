'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cookie, Settings, Shield, BarChart3, Target, Zap, Info, Check, X } from 'lucide-react'

const PoliticaCookies: React.FC = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Siempre activadas
    analytics: false,
    marketing: false,
    performance: false
  })

  const handleCookieToggle = (type: string) => {
    if (type === 'essential') return // No se pueden desactivar
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }))
  }

  const saveSettings = () => {
    // Aquí iría la lógica para guardar las preferencias
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings))
    alert('Preferencias de cookies guardadas correctamente')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-600 via-accent-700 to-primary-600 text-white py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
          >
            <Cookie className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Política de Cookies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Transparencia total sobre cómo utilizamos las cookies para mejorar tu experiencia en nuestro sitio web.
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Configurador de Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-accent-600" />
            <h2 className="text-2xl font-bold text-gray-900">Configurar Cookies</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Personaliza qué tipos de cookies quieres aceptar. Las cookies esenciales son necesarias para el funcionamiento del sitio y no se pueden desactivar.
          </p>

          <div className="space-y-4">
            {/* Cookies Esenciales */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cookies Esenciales</h3>
                  <p className="text-sm text-gray-600">Necesarias para el funcionamiento básico del sitio web</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Siempre activas</span>
                <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Cookies Analíticas */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cookies Analíticas</h3>
                  <p className="text-sm text-gray-600">Nos ayudan a entender cómo usas el sitio para mejorarlo</p>
                </div>
              </div>
              <button
                onClick={() => handleCookieToggle('analytics')}
                className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                  cookieSettings.analytics 
                    ? 'bg-blue-500 justify-end' 
                    : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>

            {/* Cookies de Marketing */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cookies de Marketing</h3>
                  <p className="text-sm text-gray-600">Para mostrarte contenido y anuncios relevantes</p>
                </div>
              </div>
              <button
                onClick={() => handleCookieToggle('marketing')}
                className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                  cookieSettings.marketing 
                    ? 'bg-purple-500 justify-end' 
                    : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>

            {/* Cookies de Rendimiento */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cookies de Rendimiento</h3>
                  <p className="text-sm text-gray-600">Optimizan el rendimiento y la velocidad del sitio</p>
                </div>
              </div>
              <button
                onClick={() => handleCookieToggle('performance')}
                className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                  cookieSettings.performance 
                    ? 'bg-orange-500 justify-end' 
                    : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={saveSettings}
              className="flex-1 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              Guardar Preferencias
            </button>
            <button
              onClick={() => setCookieSettings({ essential: true, analytics: true, marketing: true, performance: true })}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Aceptar Todas
            </button>
          </div>
        </motion.div>

        {/* Información Detallada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
        >
          {/* Última actualización */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 p-4 bg-gray-50 rounded-lg">
            <Info className="w-4 h-4" />
            <span><strong>Última actualización:</strong> Enero 2025</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* ¿Qué son las cookies? */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-6 h-6 text-accent-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">1. ¿Qué son las Cookies?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web <strong>bwblackowl.com</strong>. Estos archivos nos permiten reconocer tu navegador y, si tienes una cuenta registrada, asociarlo con tu cuenta de usuario.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Las cookies nos ayudan a personalizar tu experiencia, recordar tus preferencias y mejorar el funcionamiento de nuestros servicios de contabilidad e inteligencia artificial.
              </p>
            </motion.section>

            {/* Tipos de cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-accent-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">2. Tipos de Cookies que Utilizamos</h2>
              </div>
              
              <div className="space-y-8">
                {/* Cookies Esenciales */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">2.1 Cookies Esenciales</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Son estrictamente necesarias para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Ejemplos:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li><strong>Sesión de usuario:</strong> Mantener tu sesión activa mientras navegas</li>
                      <li><strong>Preferencias de idioma:</strong> Recordar el idioma seleccionado</li>
                      <li><strong>Carrito de servicio:</strong> Mantener los servicios seleccionados durante la navegación</li>
                      <li><strong>Seguridad:</strong> Protección contra ataques CSRF y validación de formularios</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies Analíticas */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">2.2 Cookies Analíticas</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Proveedores y finalidades:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li><strong>Google Analytics:</strong> Análisis de tráfico web, comportamiento de usuarios, páginas más visitadas</li>
                      <li><strong>Hotjar:</strong> Mapas de calor y grabaciones de sesiones para mejorar la experiencia</li>
                      <li><strong>Microsoft Clarity:</strong> Análisis de interacciones de usuario y optimización de conversiones</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-3">
                      Estos datos se recopilan de forma anónima y agregada.
                    </p>
                  </div>
                </div>

                {/* Cookies de Marketing */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">2.3 Cookies de Marketing</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Se utilizan para rastrear a los visitantes en los sitios web con la intención de mostrar anuncios relevantes y atractivos.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Plataformas utilizadas:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li><strong>Meta Pixel (Facebook):</strong> Retargeting y medición de conversiones</li>
                      <li><strong>Google Ads:</strong> Seguimiento de conversiones y remarketing</li>
                      <li><strong>LinkedIn Insight Tag:</strong> Análisis de audiencia profesional</li>
                      <li><strong>WhatsApp Business API:</strong> Integración con conversaciones de soporte</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies de Rendimiento */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">2.4 Cookies de Rendimiento</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Mejoran la velocidad y el rendimiento del sitio web recordando tus preferencias y optimizando la carga de contenido.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Funcionalidades:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li><strong>CDN Cache:</strong> Entrega rápida de contenido estático</li>
                      <li><strong>Compresión de imágenes:</strong> Optimización automática de recursos</li>
                      <li><strong>Calendly:</strong> Programación optimizada de reuniones</li>
                      <li><strong>WhatsApp API:</strong> Conexión eficiente con SOREN</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Duración de las cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-accent-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">3. Duración de las Cookies</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Cookies de Sesión</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Se eliminan automáticamente cuando cierras tu navegador.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Autenticación de usuario</li>
                    <li>Carrito de servicios temporal</li>
                    <li>Tokens CSRF</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Cookies Persistentes</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Permanecen en tu dispositivo durante un período específico.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Preferencias: 1 año</li>
                    <li>Analytics: 2 años</li>
                    <li>Marketing: 30-365 días</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Gestión de cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-accent-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">4. Gestión de Cookies</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 En Nuestro Sitio Web</h3>
                  <p className="text-gray-700 mb-4">
                    Puedes gestionar tus preferencias de cookies utilizando el configurador en la parte superior de esta página o el banner que aparece en tu primera visita.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 En tu Navegador</h3>
                  <p className="text-gray-700 mb-4">
                    También puedes controlar las cookies directamente desde la configuración de tu navegador:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Chrome</h4>
                      <p className="text-sm text-gray-600">Configuración → Privacidad y seguridad → Cookies</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Firefox</h4>
                      <p className="text-sm text-gray-600">Opciones → Privacidad y seguridad</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Safari</h4>
                      <p className="text-sm text-gray-600">Preferencias → Privacidad</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Edge</h4>
                      <p className="text-sm text-gray-600">Configuración → Privacidad, búsqueda y servicios</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Cookies de terceros */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-accent-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Cookies de Terceros</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Algunas cookies son establecidas por servicios de terceros que aparecen en nuestras páginas:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-900">Servicio</th>
                      <th className="text-left p-4 font-semibold text-gray-900">Propósito</th>
                      <th className="text-left p-4 font-semibold text-gray-900">Más información</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 font-medium">Google Analytics</td>
                      <td className="p-4 text-gray-700">Análisis de tráfico web</td>
                      <td className="p-4">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 text-sm">
                          Política de Google
                        </a>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 font-medium">Meta Pixel</td>
                      <td className="p-4 text-gray-700">Remarketing y conversiones</td>
                      <td className="p-4">
                        <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 text-sm">
                          Política de Meta
                        </a>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 font-medium">Calendly</td>
                      <td className="p-4 text-gray-700">Programación de reuniones</td>
                      <td className="p-4">
                        <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 text-sm">
                          Política de Calendly
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Contacto */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-accent-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">6. Contacto</h2>
              </div>
              <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si tienes preguntas sobre nuestra Política de Cookies o necesitas ayuda para configurar tus preferencias, no dudes en contactarnos:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:privacidad@bwblackowl.com" className="text-accent-600 hover:text-accent-700">privacidad@bwblackowl.com</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Teléfono:</strong> <a href="tel:+523321650075" className="text-accent-600 hover:text-accent-700">+52 33 2165 0075</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>WhatsApp:</strong> <a href="https://wa.me/523321650075?text=¡Hola! Me interesa conocer más sobre los servicios de BLACK OWL. ¿Podrían brindarme información?" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">Contactar por WhatsApp</a>
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PoliticaCookies