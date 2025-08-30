
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import AnimatedCard from '../Ui/AnimatedCard';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);
      formData.append("access_key", "419531b8-90d4-4a48-ab8c-d0fafa9d607a"); // ✅ your Web3Forms API key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("✅ Message sent successfully!");
        form.current.reset();
      } else {
        setSubmitMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("⚠️ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg"
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out! I'm always open to new challenges and collaborations.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedCard delay={0.2} className="p-8 h-full glass-effect">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <FaEnvelope className="text-primary-400 text-xl mt-1 mr-4" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-300">mustafajamalshabqadar@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 text-xl mt-1 mr-4" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-300">Rawalpindi, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-primary-400 text-xl mt-1 mr-4" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-300">03479749239</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-400 text-xl mt-1 mr-4">⏰</div>
                <div>
                  <p className="font-medium text-white">Availability</p>
                  <p className="text-gray-300">Open for freelance projects and onsite position</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/mustafa-mmd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/mustafa-jamal-60080228b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                
                <motion.a 
                  href="https://www.instagram.com/mustafajamal897/profilecard/?igsh=cmkyZTJhZHozNzVz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </motion.a>
              </div>
            </div>
          </AnimatedCard>
          
          {/* Contact Form */}
          <AnimatedCard delay={0.3} className="p-8 h-full glass-effect">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              
              {submitMessage && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center p-3 rounded-lg ${
                    submitMessage.includes('successfully') 
                      ? 'bg-green-900/20 text-green-400 border border-green-800' 
                      : 'bg-red-900/20 text-red-400 border border-red-800'
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
