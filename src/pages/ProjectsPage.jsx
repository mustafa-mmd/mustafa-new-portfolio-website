// import React from 'react';
// import { motion } from 'framer-motion';
// import AllProjects from '../components/Sections/AllProjects';
// import { allProjects } from '../data/projects';

// const ProjectsPage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="pt-20 pb-16"
//     >
//       <div className="container mx-auto px-4">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
//         >
//           All Projects
//         </motion.h1>
//         <AllProjects projects={allProjects} />
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectsPage;



import React, { memo } from 'react';
import { motion } from 'framer-motion';
import AllProjects from '../components/Sections/AllProjects';
import { allProjects } from '../data/projects';

const ProjectsPage = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20 pb-16"
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
        >
          All Projects
        </motion.h1>
        <AllProjects projects={allProjects} />
      </div>
    </motion.div>
  );
});

ProjectsPage.displayName = 'ProjectsPage';

export default ProjectsPage;