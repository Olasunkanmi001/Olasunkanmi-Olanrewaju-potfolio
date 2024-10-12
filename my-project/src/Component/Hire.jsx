import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Hire = () => {
  // Animation variants for the section
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts below the screen
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' }, // Smooth transition
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1, // Slight scaling effect on hover
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-[#E8DAB2] px-6" // Removed background color
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Let's Work Together!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        I’m always open to exciting opportunities and new challenges. Feel free to reach out, and let's build something amazing!
      </motion.p>

      {/* Resume Button */}
      <motion.a
        href="/path-to-resume.pdf" // Change to your actual resume path
        download
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#EE6C4D] text-[#203857] px-8 py-3 rounded-full font-semibold text-lg"
        variants={buttonVariants}
        whileHover="hover"
      >
        Check My Resume
      </motion.a>
    </motion.section>
  );
};

export default Hire;
