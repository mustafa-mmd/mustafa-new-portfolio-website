import React from 'react';
import { motion } from 'framer-motion';
import Skills from '../components/Sections/Skills';

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <Skills />
    </motion.div>
  );
};

export default SkillsPage;



