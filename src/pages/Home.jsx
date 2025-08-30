import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Sections/Hero';
import FeaturedProjects from '../components/Sections/FeaturedProject';
import { featuredProjects } from '../data/projects';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <section id="featured-projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
          >
            Featured Projects
          </motion.h2>
          {/* <FeaturedProjects projects={featuredProjects} /> */}
          <FeaturedProjects projects={featuredProjects} limit={6} />

        </div>
      </section>
    </motion.div>
  );
};

export default Home;