'use client';
import { motion } from 'framer-motion';
import { SERVICES } from '../utils/constants';
import { Ruler, Home, Building2, Lightbulb } from 'lucide-react';

const icons = {
  'architectural-design': Ruler,
  'renovation': Home,
  'construction': Building2,
  'consulting': Lightbulb,
};

export const ServicesGrid = () => {
  return (
    <section className="section-padding bg-gray-50" id="servicios">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2A3D66]">
            Nuestros Servicios
          </h2>
          <p className="text-[#4F4F4F] max-w-2xl mx-auto">
            Ofrecemos soluciones arquitectónicas integrales con un enfoque en la innovación,
            la sostenibilidad y la excelencia en el diseño.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#D5C4A1]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-[#2A3D66] mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2A3D66]">{service.title}</h3>
                <p className="text-[#4F4F4F] mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-sm text-[#4F4F4F]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#D5C4A1] rounded-full mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};