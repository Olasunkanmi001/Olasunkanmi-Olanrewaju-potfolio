import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/Images/IMG_3128.JPG';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 }, // Initially hidden
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, // Starts off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut'},
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -100 }, // Starts off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 }, // Starts off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className='px-4 pt-32 md:pt-24 md:flex md:gap-5 lg:gap-24 md:pb-40 lg:pb-16'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className='w-full h-auto rounded-xl mb-10 md:w-[40%] lg:w-[40%] lg:h-[600px]'
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }} // Zoom effect on hover
      >
        <img
          className='w-full h-full rounded-2xl shadow-2xl'
          src={image}
          alt="About Me"
        />
      </motion.div>

      <motion.div className='text-[#E8DAB2] md:w-[40%] lg:w-[40%] lg:pt-36'>
        <motion.h1
          className='text-3xl font-bold mb-3 hover:underline hover:decoration-3 hover:decoration-orange-400 hover:animate-pulse'
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Briefly About Me
        </motion.h1>
        
        <motion.h5
          className='md:text-sm lg:text-lg pb-5'
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
         Hi, I’m Olasunkanmi Olanrewaju, a dedicated Web and Mobile Developer with a strong passion for crafting seamless, visually engaging, and high-performing digital experiences. I specialize in turning design concepts into fully functional solutions using HTML, CSS, JavaScript, TypeScript, React.js, Node.js, and React Native.

I love solving problems, optimizing performance, and staying ahead with the latest development trends to deliver efficient, scalable, and accessible applications across web and mobile platforms. My goal is to make digital products beautiful, functional, and inclusive for everyone.

Outside of coding, I enjoy exploring new technologies, connecting with the developer community, and diving into a good book.
        </motion.h5>
      </motion.div>
    </motion.div>
  );
};

export default About;
