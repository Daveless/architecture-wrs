"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { TeethLogo } from './svg/TeethLogo';
import { SITE_CONFIG } from '../utils/constants';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-custom py-1 px-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2 "
            whileHover={{ scale: 1.05 }}
          >
            <TeethLogo />
            <span className="font-bold text-[18px] text-primary">
              {SITE_CONFIG.name}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Servicios', 'Testimonios'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="btn-primary text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reservar Cita
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-50 p-6" // Ensuring a solid white background
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
            >
              <div className="flex flex-col space-y-4">
                {['Inicio', 'Servicios', 'Testimonios'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => {
                      const section = document.getElementById(item.toLowerCase());
                      section?.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }}
                    whileHover={{ x: 10 }}
                    className="text-left text-xl font-semibold"
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => {
                    const contactSection = document.getElementById('contacto');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="px-6 py-2 bg-[#2A3D66] text-white rounded-lg font-semibold hover:bg-[#2A3D66]/90 transition-colors"
                >
                  Reservar Cita
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};