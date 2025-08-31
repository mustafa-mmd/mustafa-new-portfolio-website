// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Navigation = ({ isOpen, setIsOpen }) => {
//   const location = useLocation();

//   const menuVariants = {
//     open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
//     closed: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
//   };

//   const linkVariants = {
//     open: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
//     closed: { y: 20, opacity: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
//   };

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/skills', label: 'Skills' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   return (
//     <motion.div
//       initial="closed"
//       animate={isOpen ? 'open' : 'closed'}
//       variants={menuVariants}
//       className="fixed inset-0 z-50 md:hidden  backdrop-blur-md flex flex-col items-center pt-24 pb-12"
//     >
//       {/* Close button */}
//       <motion.button
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         onClick={() => setIsOpen(false)}
//         className="absolute top-6 right-6 text-white text-3xl"
//         aria-label="Close menu"
//       >
//         &times;
//       </motion.button>

//       {/* Navigation links */}
//       <nav className="flex flex-col items-center space-y-6 w-full px-6">
//         {navItems.map((item) => (
//           <motion.div key={item.path} variants={linkVariants} className="w-full text-center">
//             <Link
//               to={item.path}
//               onClick={() => setIsOpen(false)}
//               className={`block text-2xl font-semibold transition-colors duration-300 hover:text-primary-400 ${
//                 location.pathname === item.path ? 'text-primary-400' : 'text-gray-200'
//               }`}
//             >
//               {item.label}
//             </Link>
//           </motion.div>
//         ))}
//       </nav>
//     </motion.div>
//   );
// };

// export default Navigation;







import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = ({ navItems, setIsMenuOpen }) => {
  const location = useLocation();

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const linkVariants = {
    open: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    closed: { y: 20, opacity: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div
      initial="closed"
      animate="open"
      variants={menuVariants}
      className="fixed inset-0 z-40 md:hidden  backdrop-blur-md flex flex-col justify-start items-center pt-24"
    >
      {/* Navigation links */}
      <nav className="flex flex-col items-center space-y-6 w-full px-6">
        {navItems.map((item) => (
          <motion.div key={item.path} variants={linkVariants} className="w-full text-center">
            <Link
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-2xl font-semibold transition-colors duration-300 hover:text-primary-400 ${
                location.pathname === item.path ? 'text-primary-400' : 'text-gray-200'
              }`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navigation;
