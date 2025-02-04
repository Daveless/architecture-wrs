'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../utils/constants';

export const WhatsappButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="bg-green-500 text-white p-4 rounded-full shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MessageCircle size={24} />
      </motion.div>
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </motion.a>
  );
};