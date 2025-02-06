'use client';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../utils/constants';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const duration = 2; // Duración de la animación en segundos

    let startTime

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration * 1000) {
        setExperience(Math.min(15, (progress / 1000) * (15 / duration)));
        setProjects(Math.min(200, (progress / 1000) * (200 / duration)));
        setAwards(Math.min(50, (progress / 1000) * (50 / duration)));
        requestAnimationFrame(animate);
      } else {
        setExperience(15);
        setProjects(200);
        setAwards(50);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('contacto');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="inicio">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/architecture-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {SITE_CONFIG.name}
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
              {SITE_CONFIG.slogan}
            </p>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {SITE_CONFIG.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#2A3D66] text-white rounded-lg font-semibold 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        min-w-[200px] border border-white/20"
            >
              Contactar
            </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        onClick={scrollToNextSection}
      >
        <ChevronDown className="w-10 h-10 text-white/80" />
      </motion.div>

      {/* Optional: Floating Stats */}
      <div className="absolute bottom-20 left-0 right-0 z-20 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <p className="text-3xl font-bold text-white mb-2">{Math.round(experience)}+</p>
              <p className="text-white/80">Años de Experiencia</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <p className="text-3xl font-bold text-white mb-2">{Math.round(projects)}+</p>
              <p className="text-white/80">Proyectos Completados</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <p className="text-3xl font-bold text-white mb-2">{Math.round(awards)}+</p>
              <p className="text-white/80">Premios de Diseño</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;