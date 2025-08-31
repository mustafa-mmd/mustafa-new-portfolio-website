// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Navigation = ({ isOpen, setIsOpen }) => {
//   const location = useLocation();
  
//   const menuVariants = {
//     open: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     closed: {
//       opacity: 0,
//       x: "100%",
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         delay: 0.1
//       }
//     }
//   };
  
//   const linkVariants = {
//     open: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 24
//       }
//     },
//     closed: {
//       y: 20,
//       opacity: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 24
//       }
//     }
//   };

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/projects", label: "Projects" },
//     { path: "/skills", label: "Skills" },
//     { path: "/contact", label: "Contact" }
//   ];

//   return (
//     <motion.div
//       initial="closed"
//       animate={isOpen ? "open" : "closed"}
//       variants={menuVariants}
//       className="fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-md md:hidden flex items-center justify-center z-40"
//     >
//       <nav className="flex flex-col items-center space-y-8 text-xl">
//         {navItems.map((item, index) => (
//           <motion.div key={item.path} variants={linkVariants}>
//             <Link 
//               to={item.path} 
//               className={`transition-all duration-300 hover:text-primary-400 text-2xl font-medium ${
//                 location.pathname === item.path ? 'text-primary-400' : 'text-gray-300'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               {item.label}
//             </Link>
//           </motion.div>
//         ))}
//       </nav>

//       {/* Close button */}
//       <motion.button
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         onClick={() => setIsOpen(false)}
//         className="absolute top-6 right-6 text-white text-3xl"
//         aria-label="Close menu"
//       >
//         &times;
//       </motion.button>
//     </motion.div>
//   );
// };

// export default Navigation;








import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  // Sidebar animation
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.1 }
    }
  };

  // Links animation
  const linkVariants = {
    open: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
    closed: { y: 20, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="fixed inset-0 z-50 md:hidden flex flex-col items-center justify-start pt-24"
      
    >
      {/* Navigation links */}
      <nav className="flex flex-col items-center w-full space-y-6">
        {navItems.map((item) => (
          <motion.div key={item.path} variants={linkVariants}>
            <Link
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold transition-colors duration-300 hover:text-primary-400 ${
                location.pathname === item.path ? "text-primary-400" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Close button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl font-bold"
        aria-label="Close menu"
      >
        &times;
      </motion.button>
    </motion.div>
  );
};

export default Navigation;

