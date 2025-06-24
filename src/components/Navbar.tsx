'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bot, Phone, Sparkles } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' },
  ]

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-primary-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 20px rgba(26,142,235,0.3)", "0 0 30px rgba(25,235,145,0.5)", "0 0 20px rgba(26,142,235,0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <span className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'gradient-text' : 'text-white'
              }`}>
                BLACK OWL
              </span>
            </div>
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300 group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-accent-400'
                }`}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            {/* CTA Button */}
            <motion.a
              href="https://calendly.com/bwblackowl/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(26,142,235,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-2.5 px-4 lg:py-3 lg:px-6 rounded-xl transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Phone className="w-4 h-4 z-10" />
              <span className="z-10 text-sm lg:text-base">Agendar reunión</span>
              <Sparkles className="w-4 h-4 z-10 group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Menu Mobile Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-primary-500/20 shadow-2xl rounded-b-2xl overflow-hidden"
            >
              <div className="px-4 py-6 sm:px-6 sm:py-8 space-y-4 sm:space-y-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, color: '#1a8eeb' }}
                    className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 sm:py-3 text-base sm:text-lg transition-all duration-300 border-b border-gray-100 last:border-0"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.a
                  href="https://calendly.com/bwblackowl/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-xl text-center mt-4 sm:mt-6 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Agendar reunión</span>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar 