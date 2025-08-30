import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from '../Ui/TiltCard';
import AnimatedCard from '../Ui/AnimatedCard';

const FeaturedProjects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <AnimatedCard key={project.id} delay={index * 0.1} className="h-full">
          <TiltCard className="h-full flex flex-col">
            <div className="rounded-t-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
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
};

export default FeaturedProjects;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import TiltCard from '../UI/TiltCard';
// import AnimatedCard from '../UI/AnimatedCard';

// // Small helper to ensure links always have a protocol
// const normalizeUrl = (url) => {
//   if (!url) return '';
//   return /^https?:\/\//i.test(url) ? url : `https://${url}`;
// };

// const FeaturedProjects = ({ projects = [], limit = 6 }) => {
//   const visibleProjects = projects.slice(0, limit);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {visibleProjects.map((project, index) => {
//         const demoHref = normalizeUrl(project.demoLink);
//         // Fallback to your GitHub profile if a specific repo link is missing
//         const codeHref = normalizeUrl(project.codeLink || 'https://github.com/mustafa-mmd');

//         return (
//           <AnimatedCard key={project.id ?? index} delay={index * 0.1} className="h-full">
//             <TiltCard className="h-full flex flex-col">
//               <div className="rounded-t-xl overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title || 'Project image'}
//                   className="w-full h-48 object-cover"
//                   loading="lazy"
//                 />
//               </div>

//               <div className="p-6 flex-grow">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {Array.isArray(project.tech) &&
//                     project.tech.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="bg-primary-900 text-primary-200 text-sm px-3 py-1 rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                 </div>
//               </div>

//               <div className="p-6 pt-0 flex justify-between">
//                 {/* Live Demo */}
//                 <motion.a
//                   href={demoHref}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
//                   title="Open Live Demo"
//                 >
//                   <FaExternalLinkAlt />
//                   Live Demo
//                 </motion.a>

//                 {/* Code (GitHub) */}
//                 <motion.a
//                   href={codeHref}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
//                   title="View Code on GitHub"
//                   aria-label="View Code on GitHub"
//                 >
//                   <FaGithub />
//                   Code
//                 </motion.a>
//               </div>
//             </TiltCard>
//           </AnimatedCard>
//         );
//       })}
//     </div>
//   );
// };

// export default FeaturedProjects;
