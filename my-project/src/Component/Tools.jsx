import React, { useState } from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { PiFramerLogoFill } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import Framer Motion

const Tools = () => {
  const tools = [
    { icon: <FaHtml5 className="text-orange-600 text-7xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600 text-7xl" />, name: "CSS" },
    { icon: <IoLogoJavascript className="text-7xl text-yellow-400" />, name: "JavaScript" },
    { icon: <FaBootstrap className="text-purple-600 text-7xl" />, name: "Bootstrap" },
    { icon: <RiReactjsLine className="text-blue-400 text-7xl" />, name: "React" },
    { icon: <RiTailwindCssFill className="text-blue-400 text-7xl" />, name: "Tailwind CSS" },
    { icon: <PiFramerLogoFill className="text-7xl" />, name: "Framer Motion" },
    { icon: <FaGitAlt className="text-red-500 text-7xl" />, name: "Git" },
  ];

  // Framer Motion animation variant for flip effect
  const flipVariant = {
    hidden: { rotateY: 90, opacity: 0 }, // Initial state (flipped and invisible)
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeInOut' }, // Smooth flip animation
    },
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?technology')` }}
    >
      <div className="pt-60 px-10 grid grid-cols-3 lg:grid-cols-4 gap-8 pb-28 md:pb-16 lg:pb-80">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="group w-20 md:w-24 flex flex-col items-center"
            variants={flipVariant}
            initial="hidden"
            animate="visible"
          >
            {tool.icon}
            <h1
              className={`bg-[#203857] text-[#E8DAB2] w-full h-10 pt-2 mt-2 flex justify-center items-center 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {tool.name}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
