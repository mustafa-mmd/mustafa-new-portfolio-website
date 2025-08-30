import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;