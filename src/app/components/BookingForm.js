"use client"
import { motion } from 'framer-motion';
import { Calendar, Clock, Send } from 'lucide-react';
import { BOOKING_SERVICES } from '../utils/constants';
import { useState } from 'react';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section-padding bg-gray-50" id="contacto">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2A3D66]">
            Solicita una consulta
          </h2>
          <p className="text-[#4F4F4F] max-w-2xl mx-auto">
            Agenda una reunión para discutir tu proyecto. Nuestro equipo te contactará para confirmar los detalles.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#4F4F4F]">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2A3D66] focus:ring-2 focus:ring-[#2A3D66]/20 transition-colors"
                  required
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#4F4F4F]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2A3D66] focus:ring-2 focus:ring-[#2A3D66]/20 transition-colors"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-[#4F4F4F]">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2A3D66] focus:ring-2 focus:ring-[#2A3D66]/20 transition-colors"
                required
              />
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-[#4F4F4F]">Servicio</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2A3D66] focus:ring-2 focus:ring-[#2A3D66]/20 transition-colors"
                required
              >
                <option value="">Selecciona un servicio</option>
                {BOOKING_SERVICES.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#4F4F4F]">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    Fecha preferida
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2A3D66] focus:ring-2 focus:ring-[#2A3D66]/20 transition-colors"
                  required
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#4F4F4F]">
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    Hora preferida
                  </span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2A3D66] focus:ring-2 focus:ring-[#2A3D66]/20 transition-colors"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-[#4F4F4F]">Detalles del proyecto</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2A3D66] focus:ring-2 focus:ring-[#2A3D66]/20 transition-colors"
                placeholder="Describe brevemente tu proyecto y sus requerimientos..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-[#2A3D66] text-white py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2A3D66]/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Enviar solicitud
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};