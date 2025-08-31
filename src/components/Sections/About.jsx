// import React from 'react';
// import { motion } from 'framer-motion';
// import { timelineData } from '../../data/dataTimeline';
// import AnimatedCard from '../Ui/AnimatedCard';
// import TiltCard from '../Ui/TiltCard';
// import mus from '../../assets/mus.jpeg'
// const About = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="lg:w-1/3"
//           >
//             <TiltCard className="glass-effect p-2 rounded-2xl">
//               <div className="rounded-2xl overflow-hidden">
//                 <img 
//                   src={mus}
//                   alt="Profile" 
//                   className="w-full h-auto rounded-2xl object-cover"
//                 />
//               </div>
//             </TiltCard>
//           </motion.div>
          
//           <div className="lg:w-2/3">
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
//             >
//               About Me
//             </motion.h2>
            
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="text-gray-300 mb-6 text-lg"
//             >
//               Hello! My name is Mustafa Jamal, a passionate and goal-driven Bachelor of Computer Science (BSCS) student (2022–2026) with a strong focus on Full-Stack Web Development (MERN Stack). Through continuous learning and hands-on projects, I’ve developed solid expertise in building modern, user-centric web applications.
// I specialize in crafting clean, responsive, and interactive digital experiences using technologies such as HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. With strong foundations in version control (Git, GitHub) and deployment platforms like Vercel and Netlify,Render, I ensure that every project I build is scalable, fast, and secure.
// Driven by a love for technology and innovation, my mission is to design and deliver web solutions that create real impact for users, clients, and teams. I’m constantly exploring new tools and best practices to stay ahead in this ever-evolving tech landscape, with the ultimate goal of growing as a developer and contributing to meaningful, real-world projects.
//             </motion.p>

//           </div>
//         </div>
        
//         <motion.h3 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center my-16 gradient-text"
//         >
//           Education & Experience
//         </motion.h3>
        
//         <div className="relative">
//           <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-primary-600 transform -translate-x-1/2"></div>
          
//           {timelineData.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
//             >
//               <div className="md:w-1/2"></div>
//               <div className="md:w-5/12">
//                 <AnimatedCard delay={index * 0.1} className="p-6">
//                   <div className="flex items-start mb-4">
//                     <span className="text-2xl mr-3">{item.icon}</span>
//                     <div>
//                       <h4 className="text-xl font-bold text-white">{item.title}</h4>
//                       <p className="text-primary-400 font-medium">{item.company} • {item.period}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-300 mb-4">{item.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {item.skills.map((skill, i) => (
//                       <span key={i} className="bg-primary-900 text-primary-200 text-sm px-3 py-1 rounded-full">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </AnimatedCard>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;








import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "../../data/dataTimeline";
import AnimatedCard from "../Ui/AnimatedCard";
import TiltCard from "../Ui/TiltCard";
import mus from "../../assets/mus.jpeg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <TiltCard className="glass-effect p-2 rounded-3xl shadow-xl hover:shadow-primary-600/40 transition">
              <div className="overflow-hidden rounded-3xl border-4 border-primary-600/50">
                <img
                  src={mus}
                  alt="Profile"
                  className="w-full h-auto object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </TiltCard>
          </motion.div>

          {/* About Text */}
          <div className="lg:w-2/3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed text-lg md:text-xl mb-6"
            >
              Hello! I’m{" "}
              <span className="font-semibold text-primary-400">
                Mustafa Jamal
              </span>
              , a passionate and goal-driven{" "}
              <span className="text-primary-300 font-medium">
                BSCS student (2022–2026)
              </span>{" "}
              specializing in{" "}
              <span className="text-primary-300 font-medium">
                Full-Stack Web Development (MERN Stack)
              </span>
              . I thrive on crafting responsive, user-centric applications with
              clean code and modern design principles.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed text-md"
            >
              My stack includes{" "}
              <span className="text-primary-400">
                HTML, CSS, JavaScript, Tailwind, React.js, Redux Toolkit,
                Node.js, Express.js, MongoDB
              </span>
              . I’m experienced with Git/GitHub and deployment platforms like{" "}
              <span className="text-primary-400">Vercel, Netlify, Render</span>.
              I constantly explore new tools to stay ahead in the tech world,
              aiming to build impactful, scalable, and secure solutions.
            </motion.p>
          </div>
        </div>

        {/* Education & Experience */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mt-20 mb-12 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
        >
          Education & Experience
        </motion.h3>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary-500 via-primary-700 to-primary-900 transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2"></div>
              <div className="md:w-5/12">
                <AnimatedCard delay={index * 0.15} className="p-6 glass-card">
                  <div className="flex items-start mb-4">
                    <span className="text-3xl mr-4 text-primary-400">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-primary-300 font-medium">
                        {item.company} • {item.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-primary-900/50 border border-primary-700 text-primary-200 text-sm px-3 py-1 rounded-full shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
