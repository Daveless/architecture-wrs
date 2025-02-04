import { motion } from 'framer-motion';

export const CleaningIcon = () => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-16 h-16"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.path
        d="M30 70l40-40M50 20l30 30M20 50l30 30"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
};