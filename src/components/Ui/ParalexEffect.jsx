import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const ParallaxEffect = ({ children, className = '', speed = 10 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxEffect;