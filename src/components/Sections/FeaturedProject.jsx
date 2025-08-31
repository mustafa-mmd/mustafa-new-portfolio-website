// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import TiltCard from '../Ui/TiltCard';
// import AnimatedCard from '../Ui/AnimatedCard';

// const FeaturedProjects = ({ projects }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project, index) => (
//         <AnimatedCard key={project.id} delay={index * 0.1} className="h-full">
//           <TiltCard className="h-full flex flex-col">
//             <div className="rounded-t-xl overflow-hidden">
//               <img 
//                 src={project.image} 
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="p-6 flex-grow">
//               <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//               <p className="text-gray-300 mb-4">{project.description}</p>
              
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <span key={i} className="bg-primary-900 text-primary-200 text-sm px-3 py-1 rounded-full">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="p-6 pt-0 flex justify-between">
//               <motion.a 
//                 href={project.demoLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
//               >
//                 <FaExternalLinkAlt /> Live Demo
//               </motion.a>
              
//               <motion.a 
//                 href={project.codeLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
//               >
//                 <FaGithub /> Code
//               </motion.a>
//             </div>
//           </TiltCard>
//         </AnimatedCard>
//       ))}
//     </div>
//   );
// };

// export default FeaturedProjects;





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
            {/* Project Image */}
            <div className="rounded-t-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            
            {/* Project Content */}
            <div className="p-6 flex-grow font-sans">
              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-800/70 text-gray-200 text-xs font-medium px-3 py-1 rounded-full tracking-wide shadow-sm hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Buttons */}
            <div className="p-6 pt-0 flex justify-between text-sm font-medium">
              <motion.a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
              >
                <FaExternalLinkAlt className="text-sm" /> Live Demo
              </motion.a>
              
              <motion.a 
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
              >
                <FaGithub className="text-base" /> Code
              </motion.a>
            </div>
          </TiltCard>
        </AnimatedCard>
      ))}
    </div>
  );
};

export default FeaturedProjects;


