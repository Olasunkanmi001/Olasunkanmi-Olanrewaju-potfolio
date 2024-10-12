import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { PiToolboxFill } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";
import { RiCupFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion

const Navbar = () => {
  const [display, setDisplay] = useState(null);

  const showup = (title) => {
    setDisplay(title);
    console.log(display);
  };

  // Animation variant for the navbar container
  const containerVariants = {
    hidden: { opacity: 0, y: -50 }, // Start hidden and above screen
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" }, // Smooth transition
    },
  };

  // Animation variant for the icons
  const iconVariants = {
    hover: {
      scale: 1.2, 
      rotate: 15,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="flex fixed md:grid md:justify-end md:mt-[14%] md:fixed pt-4 justify-center h-20 rounded-2xl shadow-2xl w-[90%] md:w-[10%] md:bg-transparent md:ml-[85%] ml-[5%] bg-transparent md:gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex md:grid md:gap-4">
        {/* Home Icon */}
        <ul>
          <Link to="/">
            <motion.button
              className="rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <IoMdHome className="text-[#203857] text-2xl md:pt-3 md:text-5xl" />
            </motion.button>
          </Link>
        </ul>
        <p className="bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden"></p>

        {/* About Icon */}
        <ul>
          <Link to="/about">
            <motion.button
              className="rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <BsInfoCircleFill className="text-[#203857] text-2xl md:pt-3 md:text-5xl" />
            </motion.button>
          </Link>
        </ul>
        <p className="bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden"></p>

        {/* Projects Icon */}
        <ul>
          <Link to="/projects">
            <motion.button
              className="rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <PiToolboxFill className="text-[#203857] text-2xl md:pt-3 md:text-5xl" />
            </motion.button>
          </Link>
        </ul>
        <p className="bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden"></p>

        {/* Tools Icon */}
        <ul>
          <Link to="/tools">
            <motion.button
              className="rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaTools className="text-[#203857] text-2xl md:pt-3 md:text-5xl" />
            </motion.button>
          </Link>
        </ul>
        <p className="bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden"></p>

        {/* Contact Icon */}
        <ul>
          <Link to="/contact">
            <motion.button
              className="rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <IoMailSharp className="text-[#203857] text-2xl md:pt-3 md:text-5xl" />
            </motion.button>
          </Link>
        </ul>
        <p className="bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden"></p>

        {/* Hire Me Icon */}
        <ul>
          <Link to="/hire">
            <motion.button
              className="rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <RiCupFill className="text-[#203857] text-2xl md:pt-3 md:text-5xl" />
            </motion.button>
          </Link>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
