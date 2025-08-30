import React from 'react';
import { motion } from 'framer-motion';

const ProjectSkeleton = () => {
  return (
    <div className="glass-card p-6 rounded-xl h-full">
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="animate-pulse"
      >
        <div className="bg-gray-700 h-48 rounded-md mb-4"></div>
        <div className="bg-gray-700 h-6 rounded-md mb-3"></div>
        <div className="bg-gray-700 h-4 rounded-md mb-2"></div>
        <div className="bg-gray-700 h-4 rounded-md mb-4 w-3/4"></div>
        <div className="flex gap-2 mb-4">
          <div className="bg-gray-700 h-6 rounded-full w-16"></div>
          <div className="bg-gray-700 h-6 rounded-full w-20"></div>
          <div className="bg-gray-700 h-6 rounded-full w-14"></div>
        </div>
        <div className="flex justify-between">
          <div className="bg-gray-700 h-10 rounded-lg w-28"></div>
          <div className="bg-gray-700 h-10 rounded-lg w-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSkeleton;