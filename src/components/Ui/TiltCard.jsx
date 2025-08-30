import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const TiltCard = ({ children, className = "", options = {} }) => {
  const defaultOptions = {
    max: 15,
    scale: 1.05,
    speed: 1000,
    perspective: 1000,
    ...options,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Tilt
        className={className}
        tiltMaxAngleX={defaultOptions.max}
        tiltMaxAngleY={defaultOptions.max}
        perspective={defaultOptions.perspective}
        transitionSpeed={defaultOptions.speed}
        scale={defaultOptions.scale}
      >
        {children}
      </Tilt>
    </motion.div>
  );
};

export default TiltCard;
