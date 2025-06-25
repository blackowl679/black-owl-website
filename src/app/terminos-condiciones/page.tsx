'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Scale, AlertCircle, Shield, Users, Mail, Phone, Clock } from 'lucide-react'

const TerminosCondiciones: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
          >
            <FileText className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Términos y Condiciones
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Las condiciones legales que rigen el uso de nuestros servicios de contabilidad e inteligencia artificial.
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
        >
          {/* Última actualización */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 p-4 bg-gray-50 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span><strong>Última actualización:</strong> Enero 2025</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Aceptación de términos */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">1. Aceptación de los Términos</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Al acceder y utilizar los servicios de <strong>BLACK OWL</strong> (la "Empresa"), incluido nuestro sitio web <a href="https://bwblackowl.com" className="text-primary-600 hover:text-primary-700">bwblackowl.com</a>, nuestro agente de inteligencia artificial SOREN, y cualquier servicio relacionado (colectivamente, los "Servicios"), usted acepta estar sujeto a estos Términos y Condiciones ("Términos").
              </p>
              <p className="text-gray-700 leading-relaxed">
                Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros Servicios. Nos reservamos el derecho de modificar estos términos en cualquier momento, y su uso continuado de los Servicios constituye su aceptación de dichas modificaciones.
              </p>
            </motion.section>

            {/* Descripción de servicios */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">2. Descripción de los Servicios</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Servicios Principales</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Servicios Contables:</strong> Elaboración de estados financieros, revisiones fiscales, compliance regulatorio</li>
                    <li><strong>SOREN (Agente IA):</strong> Asistente de inteligencia artificial para facturación, consultas contables y automatización</li>
                    <li><strong>Consultoría en IA:</strong> Implementación de soluciones de inteligencia artificial para empresas</li>
                    <li><strong>Facturación Electrónica:</strong> Generación, timbrado y gestión de CFDIs</li>
                    <li><strong>Soporte Técnico:</strong> Asistencia para el uso de nuestras plataformas y servicios</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Disponibilidad del Servicio</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nos esforzamos por mantener nuestros Servicios disponibles las 24 horas del día, los 7 días de la semana. Sin embargo, pueden ocurrir interrupciones por mantenimiento programado, actualizaciones del sistema o circunstancias imprevistas. Notificaremos sobre el mantenimiento programado con anticipación razonable.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Registro y cuentas */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">3. Registro y Cuentas de Usuario</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Requisitos de Registro</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Proporcionar información precisa, actual y completa durante el proceso de registro</li>
                    <li>Mantener actualizada su información de contacto y empresarial</li>
                    <li>Ser mayor de edad y tener capacidad legal para celebrar contratos</li>
                    <li>Contar con RFC válido para personas físicas o morales en México</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Seguridad de la Cuenta</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta. Debe notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta o cualquier otra violación de seguridad.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Uso aceptable */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">4. Uso Aceptable</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Usos Permitidos</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Puede utilizar nuestros Servicios únicamente para fines comerciales legítimos y de acuerdo con estos Términos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Usos Prohibidos</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Está estrictamente prohibido:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Utilizar los Servicios para actividades ilegales o fraudulentas</li>
                    <li>Intentar acceder sin autorización a sistemas o datos de otros usuarios</li>
                    <li>Interferir con el funcionamiento normal de los Servicios</li>
                    <li>Transmitir virus, malware o código malicioso</li>
                    <li>Realizar ingeniería inversa de nuestro software o sistemas</li>
                    <li>Violar derechos de propiedad intelectual</li>
                    <li>Proporcionar información fiscal falsa o engañosa</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Facturación y pagos */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Facturación y Pagos</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Tarifas y Precios</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Las tarifas están disponibles en nuestro sitio web y pueden variar según el tipo de servicio</li>
                    <li>Los precios pueden cambiar con previo aviso de 30 días</li>
                    <li>Ofrecemos descuentos especiales que pueden tener términos específicos</li>
                    <li>Todos los precios están expresados en pesos mexicanos (MXN) e incluyen IVA cuando aplicable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Términos de Pago</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Los pagos son mensuales y se cobran por adelantado</li>
                    <li>Aceptamos transferencias bancarias, tarjetas de crédito y otros métodos autorizados</li>
                    <li>Los pagos vencidos pueden resultar en la suspensión temporal del servicio</li>
                    <li>No hay reembolsos por servicios ya prestados, salvo excepciones específicas</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Propiedad intelectual */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">6. Propiedad Intelectual</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Nuestros Derechos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    BLACK OWL retiene todos los derechos, títulos e intereses en los Servicios, incluido el software SOREN, algoritmos de IA, interfaces de usuario, documentación y cualquier contenido proporcionado por nosotros. Estos están protegidos por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Sus Derechos y Datos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Usted retiene la propiedad de todos los datos, información financiera y contenido que proporcione. Nos otorga una licencia limitada para usar esta información únicamente para proporcionar los Servicios acordados.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Privacidad y confidencialidad */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">7. Privacidad y Confidencialidad</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos comprometemos a proteger su información conforme a nuestra <a href="/politica-privacidad" className="text-primary-600 hover:text-primary-700 font-medium">Política de Privacidad</a>. Mantenemos estricta confidencialidad sobre su información financiera y empresarial, cumpliendo con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</li>
                <li>Código Fiscal de la Federación y disposiciones del SAT</li>
                <li>Estándares internacionales de seguridad de datos</li>
                <li>Secreto profesional contable</li>
              </ul>
            </motion.section>

            {/* Limitación de responsabilidad */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">8. Limitación de Responsabilidad</h2>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-gray-800 font-medium mb-2">⚠️ IMPORTANTE - LEA CUIDADOSAMENTE:</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Esta sección establece límites importantes sobre nuestra responsabilidad legal.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Servicios "Tal Como Son"</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Los Servicios se proporcionan "tal como son" y "según disponibilidad". No garantizamos que sean ininterrumpidos, libres de errores o que cumplan con todos sus requisitos específicos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Límites de Responsabilidad</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En la medida máxima permitida por la ley, BLACK OWL no será responsable por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Daños indirectos, incidentales, especiales o consecuenciales</li>
                    <li>Pérdida de ganancias, datos o oportunidades comerciales</li>
                    <li>Interrupciones del servicio por causas fuera de nuestro control</li>
                    <li>Acciones de terceros o fallas de servicios externos</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Nuestra responsabilidad total no excederá el monto pagado por los Servicios en los 12 meses anteriores al evento que generó la reclamación.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Terminación */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">9. Terminación del Servicio</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Terminación por el Cliente</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Puede cancelar su cuenta en cualquier momento con 30 días de aviso previo. La cancelación será efectiva al final del período de facturación actual. No se proporcionan reembolsos por servicios ya pagados.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Terminación por BLACK OWL</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos suspender o terminar su acceso a los Servicios inmediatamente si:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                    <li>Viola estos Términos y Condiciones</li>
                    <li>No realiza los pagos requeridos</li>
                    <li>Proporciona información falsa o engañosa</li>
                    <li>Usa los Servicios de manera que cause daño a otros usuarios o a nosotros</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Ley aplicable */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">10. Ley Aplicable y Jurisdicción</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa que surja en relación con estos Términos o los Servicios será resuelta ante los tribunales competentes de Guadalajara, Jalisco, México.
              </p>
            </motion.section>

            {/* Contacto */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">11. Contacto e Información Legal</h2>
              </div>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para consultas sobre estos Términos y Condiciones o cualquier asunto legal relacionado con nuestros servicios:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">Email Legal:</span>
                    <a href="mailto:legal@bwblackowl.com" className="text-primary-600 hover:text-primary-700">legal@bwblackowl.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">Teléfono:</span>
                    <a href="tel:+523321650075" className="text-primary-600 hover:text-primary-700">+52 33 2165 0075</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Domicilio Legal:</span>
                      <p className="text-gray-700 mt-1">BLACK OWL<br />Guadalajara, Jalisco, México</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Responderemos a consultas legales dentro de 5 días hábiles.
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TerminosCondiciones