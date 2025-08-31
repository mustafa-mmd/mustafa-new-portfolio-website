// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Navigation from './Navigation';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/projects", label: "Projects" },
//     { path: "/skills", label: "Skills" },
//     { path: "/contact", label: "Contact" }
//   ];

//   return (
//     <motion.header 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 100 }}
//       className="fixed top-0 left-0 w-full z-50 glass-effect"
//     >
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold gradient-text">
//             Mustafa Jamal 
//           </Link>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link 
//                 key={item.path}
//                 to={item.path} 
//                 className={`transition-all duration-300 hover:text-primary-400 ${
//                   location.pathname === item.path ? 'text-primary-400 font-medium' : 'text-gray-300'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden flex flex-col space-y-1.5 z-50"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//             <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//             <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Navigation */}
//       <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
//     </motion.header>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 w-full z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold gradient-text">
          Mustafa Jamal
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all duration-300 hover:text-primary-400 ${
                location.pathname === item.path ? 'text-primary-400 font-medium' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 flex flex-col space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <Navigation navItems={navItems} setIsMenuOpen={setIsMenuOpen} />}
    </motion.header>
  );
};

export default Header;


