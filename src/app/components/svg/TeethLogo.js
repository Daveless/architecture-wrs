import { motion } from 'framer-motion';

export const TeethLogo = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-12 h-12"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M50 15c-8 0-15 4-20 10c-5 6-8 14-8 22c0 8 3 16 8 22c5 6 12 10 20 10s15-4 20-10c5-6 8-14 8-22c0-8-3-16-8-22c-5-6-12-10-20-10z"
        stroke="#68c6f1"
        strokeWidth="4"
        fill="none"
        variants={pathVariants}
      />
      <motion.path
        d="M35 40v30M50 40v30M65 40v30"
        stroke="#68c6f1"
        strokeWidth="4"
        strokeLinecap="round"
        variants={pathVariants}
      />
    </motion.svg>
  );
};