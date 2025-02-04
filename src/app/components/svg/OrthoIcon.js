import { motion } from 'framer-motion';

export const OrthoIcon = () => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-16 h-16"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.path
        d="M20 50h60M30 30h40M30 70h40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {[1,2,3,4,5].map((i) => (
        <motion.circle
          key={i}
          cx={20 + i * 15}
          cy="50"
          r="3"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </motion.svg>
  );
};