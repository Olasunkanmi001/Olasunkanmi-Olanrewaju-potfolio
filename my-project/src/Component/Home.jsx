import React from 'react';
import image1 from '../assets/Images/IMG_3129.JPG';
import { motion } from "framer-motion";

const Home = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Animation variants for the image
  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div className='grid justify-center pt-[30%] md:pt-[18%] pb-28'>
      <motion.h1
        className='text-[#E8DAB2] flex justify-center text-4xl md:text-6xl font-bold mb-6'
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Hello Friends!
      </motion.h1>
      <motion.h1
        className='text-[#E8DAB2] flex justify-center gap-1 text-xl md:text-3xl font-extrabold'
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }} // Add delay for the second heading
      >
        My Name Is <span className='text-[#EF6C4D]'>Olasunkanmi Olanrewaju</span>
      </motion.h1>
      <motion.h1
        className='text-[#E8DAB2] flex justify-center gap-1 text-2xl md:text-3xl md:mb-14 font-extrabold'
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }} // Add delay for the third heading
      >
        I'm A <span className='text-[#EF6C4D]'>Front End Developer</span>
      </motion.h1>

      <motion.div
        className='rounded-full w-40 h-40 border-2 border-[#EF6C4D] m-auto flex justify-center mt-40 md:mt-16'
      >
        <motion.img
          src={image1}
          alt="Olasunkanmi Olanrewaju"
          className='rounded-full w-36 h-36 mt-2 object-cover'
          whileHover="hover" // Apply hover animation
          variants={imageVariants} // Pass image variants
        />
      </motion.div>
    </div>
  );
}

export default Home;
