
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import ThreeScene from '../Ui/ThreeScene';
import ParallaxEffect from '../Ui/ParalexEffect';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fixed CV download function
  const handleDownloadCV = async () => {
    setIsDownloading(true);
    setDownloadStatus(null);

    try {
      const link = document.createElement('a');
      link.href = '/Mustafa_jamal_resume.pdf'; // File should be inside public/
      link.download = 'Mustafa_jamal_FullStack_developer_cv.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      setTimeout(() => {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsDownloading(false);
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus(null), 3000);
      }, 800);

    } catch (error) {
      console.error('Download error:', error);
      setIsDownloading(false);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus(null), 5000);
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mustafa-mmd", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mustafa-jamal-60080228b/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/mustafajamal897/profilecard/?igsh=cmkyZTJhZHozNzVz", label: "Instagram" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-section pt-16">
      <ThreeScene />

      {/* Download Status Messages */}
      {downloadStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg">
            <FaCheck className="text-sm" />
            <span>CV Downloaded Successfully!</span>
          </div>
        </motion.div>
      )}

      {downloadStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg">
            <FaExclamationTriangle className="text-sm" />
            <span>Failed to download CV. Please try again.</span>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Mustafa Jamal</span>
          </motion.h1>

          {/* Subtitle - Made shorter and more concise */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            A passionate <span className="text-primary-400 font-semibold">Full-Stack (MERN) Developer </span>crafting sleek, responsive, and scalable web applications. I blend modern design with powerful frontend and backend solutions to deliver seamless user experiences that make an impact.
          </motion.h2>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Downloading...
                </>
              ) : (
                <>
                  <FaDownload className="text-lg" />
                  Download CV
                </>
              )}
            </motion.button>

            <motion.button
              onClick={scrollToProjects}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#3B82F6",
                color: "white",
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-600 text-primary-400 hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="flex space-x-5 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -3,
                  color: "#3B82F6",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Moved further down and made more visible */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer space-y-2"
          onClick={scrollToProjects}
        >
          <div className="text-gray-400 text-xs font-medium mb-1">Scroll to explore</div>
          <div className="w-5 h-8 border-2 border-primary-400/70 rounded-full flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;