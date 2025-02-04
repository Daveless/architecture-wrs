'use client'
import { motion } from 'framer-motion';

export const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 w-[45rem] h-[32rem] bg-primary/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 200, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-mint/25 rounded-full filter blur-3xl"
        animate={{
          x: [0, -400, 0],
          y: [0, -100, 0],
          scale: [1, 1.7, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray/25 rounded-full filter blur-2xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default BackgroundShapes;