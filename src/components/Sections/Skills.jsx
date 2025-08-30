import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import AnimatedCard from '../UI/AnimatedCard';

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const SkillItem = ({ skill }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors group"
      >
        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </span>
        <div className="flex-1">
          <h4 className="text-white font-medium">{skill.name}</h4>
          <p className="text-gray-400 text-sm">{skill.level}</p>
        </div>
      </motion.div>
    );
  };

  const SkillCategory = ({ category, icon, items }) => {
    return (
      <AnimatedCard className="p-6 h-full">
        <div className="text-center mb-6">
          <div className="text-3xl mb-2">{icon}</div>
          <h3 className="text-xl font-bold text-white">{category}</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="space-y-3">
          {items.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </AnimatedCard>
    );
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-2">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((category) => (
            <SkillCategory
              key={category.category}
              category={category.category}
              icon={category.icon}
              items={category.items}
            />
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10% w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-15% w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Skills;