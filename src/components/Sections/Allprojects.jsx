import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from '../UI/TiltCard';
import AnimatedCard from '../UI/AnimatedCard';
import ProjectSkeleton from '../UI/ProjectSkeleton';

const AllProjects = memo(({ projects, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <ProjectSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <AnimatedCard key={project.id} delay={index * 0.1} className="h-full">
          <TiltCard className="h-full flex flex-col glass-card overflow-hidden">
            <div className="overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-primary-900 text-primary-200 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 pt-0 flex justify-between">
              <motion.a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
              
              <motion.a 
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <FaGithub /> Code
              </motion.a>
            </div>
          </TiltCard>
        </AnimatedCard>
      ))}
    </div>
  );
});

AllProjects.displayName = 'AllProjects';

export default AllProjects;