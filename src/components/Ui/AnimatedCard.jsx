// import React from 'react';
// import { motion } from 'framer-motion';

// const AnimatedCard = ({ children, className = '', delay = 0 }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30, scale: 0.95 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.5, delay }}
//       viewport={{ once: true, margin: "-50px" }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//       className={`bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimatedCard;




import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, delay }}
      viewport={{ once: true, margin: "-5px" }}
      whileHover={{ y: -1, transition: { duration: 0.15 } }}
      className={`bg-gray-900/10 backdrop-blur-sm border border-gray-700/5 
        rounded-sm p-1 shadow-sm hover:shadow 
        transition-all duration-150
        text-[10px] sm:text-[11px] md:text-xs leading-snug
        h-auto ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;










