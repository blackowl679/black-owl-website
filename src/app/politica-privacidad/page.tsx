'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Users, Database, Mail, Phone, AlertCircle } from 'lucide-react'

const PoliticaPrivacidad: React.FC = () => {
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
            <Shield className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Política de Privacidad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Tu privacidad es nuestra prioridad. Conoce cómo protegemos y manejamos tu información personal.
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
            {/* Introducción */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">1. Introducción</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                En <strong>BLACK OWL</strong> (en adelante "nosotros", "nuestro" o "la empresa"), respetamos tu privacidad y nos comprometemos a proteger la información personal que compartes con nosotros. Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos tu información cuando utilizas nuestros servicios de contabilidad e inteligencia artificial, incluido nuestro agente IA SOREN, nuestro sitio web <a href="https://bwblackowl.com" className="text-primary-600 hover:text-primary-700">bwblackowl.com</a> y servicios relacionados.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con alguna parte de esta política, por favor no utilices nuestros servicios.
              </p>
            </motion.section>

            {/* Información que recopilamos */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">2. Información que Recopilamos</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Información Personal Identificable</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Datos de identificación:</strong> Nombre completo, RFC, CURP, domicilio fiscal</li>
                    <li><strong>Información de contacto:</strong> Dirección de correo electrónico, número de teléfono, dirección postal</li>
                    <li><strong>Información empresarial:</strong> Razón social, giro comercial, datos de representante legal</li>
                    <li><strong>Información financiera:</strong> Datos bancarios, información contable, estados financieros</li>
                    <li><strong>Credenciales de acceso:</strong> Usuarios y contraseñas para nuestras plataformas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Información de Uso del Servicio</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Interacciones con SOREN:</strong> Conversaciones, consultas y comandos</li>
                    <li><strong>Datos de facturación:</strong> CFDIs generados, complementos, cancelaciones</li>
                    <li><strong>Actividad del sistema:</strong> Logs de acceso, timestamps, IP addresses</li>
                    <li><strong>Preferencias de usuario:</strong> Configuraciones de dashboard y notificaciones</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Información Técnica</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Datos del navegador:</strong> Tipo de navegador, versión, sistema operativo</li>
                    <li><strong>Información de dispositivo:</strong> Identificadores únicos, características del dispositivo</li>
                    <li><strong>Datos de conectividad:</strong> Dirección IP, proveedor de servicios de internet</li>
                    <li><strong>Cookies y tecnologías similares:</strong> Como se describe en nuestra Política de Cookies</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Cómo utilizamos la información */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">3. Cómo Utilizamos tu Información</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Prestación de Servicios</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Procesamiento de información contable y fiscal</li>
                    <li>Generación y timbrado de CFDIs</li>
                    <li>Operación del agente IA SOREN</li>
                    <li>Elaboración de reportes financieros y dashboards</li>
                    <li>Consultoría especializada en IA y automatización</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Comunicación y Soporte</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Responder a consultas y proporcionar soporte técnico</li>
                    <li>Enviar notificaciones importantes sobre tu cuenta</li>
                    <li>Comunicar actualizaciones de servicios y nuevas funcionalidades</li>
                    <li>Programar citas y sesiones de consultoría</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Mejora de Servicios</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Análisis de uso para mejorar nuestras plataformas</li>
                    <li>Desarrollo y entrenamiento de modelos de IA</li>
                    <li>Identificación y resolución de problemas técnicos</li>
                    <li>Personalización de la experiencia del usuario</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Cumplimiento Legal</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cumplimiento con obligaciones fiscales ante el SAT</li>
                    <li>Conservación de registros según normativas aplicables</li>
                    <li>Cooperación con autoridades competentes cuando sea requerido</li>
                    <li>Prevención de fraudes y actividades ilícitas</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Base legal */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">4. Base Legal para el Tratamiento</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Procesamos tu información personal bajo las siguientes bases legales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Consentimiento:</strong> Cuando nos proporciones tu consentimiento expreso</li>
                <li><strong>Ejecución contractual:</strong> Para cumplir con nuestros servicios contratados</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicación comercial</li>
                <li><strong>Obligación legal:</strong> Para cumplir con requerimientos fiscales y legales</li>
              </ul>
            </motion.section>

            {/* Compartir información */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Compartir tu Información</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos tu información personal. Podemos compartir tu información únicamente en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Con tu consentimiento:</strong> Cuando hayas autorizado expresamente el compartir</li>
                <li><strong>Proveedores de servicios:</strong> Terceros que nos ayudan a operar nuestros servicios (hosting, procesamiento de pagos, etc.)</li>
                <li><strong>Autoridades competentes:</strong> Cuando sea requerido por ley o autoridad judicial</li>
                <li><strong>Transferencias empresariales:</strong> En caso de fusión, adquisición o venta de activos</li>
                <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos legales o los de terceros</li>
              </ul>
            </motion.section>

            {/* Seguridad */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">6. Seguridad de la Información</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Encriptación:</strong> Datos en tránsito y en reposo protegidos con encriptación de grado militar</li>
                <li><strong>Control de acceso:</strong> Autenticación multifactor y principio de menor privilegio</li>
                <li><strong>Monitoreo:</strong> Supervisión continua de sistemas y detección de amenazas</li>
                <li><strong>Auditorías:</strong> Revisiones periódicas de seguridad y cumplimiento</li>
                <li><strong>Capacitación:</strong> Personal entrenado en mejores prácticas de seguridad</li>
                <li><strong>Respaldo:</strong> Copias de seguridad automáticas y planes de continuidad</li>
              </ul>
            </motion.section>

            {/* Retención de datos */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">7. Retención de Datos</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conservamos tu información personal durante el tiempo necesario para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Prestación del servicio:</strong> Mientras mantengas una cuenta activa</li>
                <li><strong>Obligaciones fiscales:</strong> 5 años después de la última transacción (según el Código Fiscal)</li>
                <li><strong>Resolución de disputas:</strong> Hasta que se resuelvan todos los asuntos pendientes</li>
                <li><strong>Cumplimiento legal:</strong> Según requieran las leyes aplicables</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Después de estos períodos, procederemos a la eliminación segura de tu información personal.
              </p>
            </motion.section>

            {/* Derechos del titular */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">8. Tus Derechos (Derechos ARCO)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como titular de datos personales, tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos y cómo los usamos</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos cuando no sean necesarios</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos para fines específicos</li>
                <li><strong>Portabilidad:</strong> Obtener una copia de tus datos en formato estructurado</li>
                <li><strong>Limitación:</strong> Solicitar que limitemos el procesamiento de tus datos</li>
                <li><strong>Revocación del consentimiento:</strong> Retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer estos derechos, contáctanos a través de los medios indicados en la sección de contacto.
              </p>
            </motion.section>

            {/* Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">9. Cookies y Tecnologías Similares</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Para información detallada sobre nuestro uso de cookies, consulta nuestra <a href="/politica-cookies" className="text-primary-600 hover:text-primary-700 font-medium">Política de Cookies</a>.
              </p>
            </motion.section>

            {/* Menores de edad */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">10. Menores de Edad</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios están dirigidos a empresas y personas físicas con actividad empresarial. No recopilamos conscientemente información personal de menores de 18 años. Si tienes conocimiento de que un menor ha proporcionado información personal, contáctanos inmediatamente para tomar las medidas apropiadas.
              </p>
            </motion.section>

            {/* Cambios a la política */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">11. Cambios a esta Política</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas, servicios o requisitos legales. Te notificaremos sobre cambios significativos por correo electrónico o mediante un aviso prominente en nuestro sitio web. La fecha de la última actualización se indica al inicio de esta política.
              </p>
            </motion.section>

            {/* Contacto */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">12. Contacto</h2>
              </div>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para consultas sobre esta Política de Privacidad, ejercer tus derechos ARCO, o cualquier asunto relacionado con el tratamiento de tus datos personales, puedes contactarnos:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">Email:</span>
                    <a href="mailto:privacidad@bwblackowl.com" className="text-primary-600 hover:text-primary-700">privacidad@bwblackowl.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">Teléfono:</span>
                    <a href="tel:+523321650075" className="text-primary-600 hover:text-primary-700">+52 33 2165 0075</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Responsable del tratamiento:</span>
                      <p className="text-gray-700 mt-1">BLACK OWL<br />Guadalajara, Jalisco, México</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Responderemos a tu solicitud dentro de un plazo máximo de 20 días hábiles conforme a la legislación aplicable.
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PoliticaPrivacidad