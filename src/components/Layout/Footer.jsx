import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const emailLink = "mailto:mustafajamalshabqadar@gmail.com";
const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=mustafajamalshabqadar@gmail.com";

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-effect mt-16 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {currentYear} Mustafa Jama Portfolio. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              href="https://github.com/mustafa-mmd" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/mustafa-jamal-60080228b/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            
            <motion.a 
              href="https://www.instagram.com/mustafajamal897/profilecard/?igsh=cmkyZTJhZHozNzVz" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </motion.a>
            
            {/* <motion.a 
              href="mailto:mustafajamalshabqadar@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </motion.a> */}

            <motion.a
  href={gmailLink}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.2, y: -5 }}
  whileTap={{ scale: 0.9 }}
  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
  aria-label="Email"
>
  <FaEnvelope size={24} />
</motion.a>

          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;