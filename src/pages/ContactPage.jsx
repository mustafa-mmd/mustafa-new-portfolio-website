// import React from 'react';
// import { motion } from 'framer-motion';
// import Contact from '../components/Sections/Contact';

// const ContactPage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="pt-20 pb-16"
//     >
//       <Contact />
//     </motion.div>
//   );
// };

// export default ContactPage;



import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Sections/Contact';

const ContactPage = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20 pb-16"
    >
      <Contact />
    </motion.div>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;