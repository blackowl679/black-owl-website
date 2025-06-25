'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Mail, Phone, Calendar, ArrowRight, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-dark-800 to-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo y descripción */}
          <div className="md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4 sm:mb-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold gradient-text">BLACK OWL</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-6 max-w-md text-sm sm:text-base leading-relaxed"
            >
              La firma que revoluciona tu negocio y contabilidad con inteligencia artificial. 
              Convertimos la IA en una ventaja real para tu empresa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <motion.a
                href="https://calendly.com/bwblackowl/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar reunión
              </motion.a>
              <motion.a
                href="https://t.me/Soren_BW_Bot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <Bot className="w-4 h-4 mr-2" />
                Probar Soren gratis
              </motion.a>
            </motion.div>
          </div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/servicios", label: "Servicios" },
                { href: "/contacto", label: "Contacto" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Soluciones Integrales con IA",
                "SOREN - Agente IA",
                "Contabilidad Tradicional"
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-gray-300 text-sm sm:text-base flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <a 
                  href="mailto:bwblackowl@gmail.com" 
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                >
                  <Mail className="w-4 h-4 mr-3 text-accent-500" />
                  bwblackowl@gmail.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <a 
                  href="https://wa.me/523321650075" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                >
                  <Phone className="w-4 h-4 mr-3 text-green-500" />
                  Ventas: +52 33 2165 0075
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              >
                <a 
                  href="https://wa.me/523321654671" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                >
                  <Phone className="w-4 h-4 mr-3 text-blue-500" />
                  Soporte: +52 33 2165 4671
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <div className="flex flex-col gap-4">
            {/* Enlaces legales */}
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              <motion.a
                href="/politica-privacidad"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              >
                Política de Privacidad
              </motion.a>
              <span className="text-gray-600">•</span>
              <motion.a
                href="/politica-cookies"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              >
                Política de Cookies
              </motion.a>
              <span className="text-gray-600">•</span>
              <motion.a
                href="/terminos-condiciones"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              >
                Términos y Condiciones
              </motion.a>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © 2025 BLACK OWL. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
                <span>Desarrollado con</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
                <span>y tecnología IA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 