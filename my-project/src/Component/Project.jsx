import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { motion } from 'framer-motion';
import image1 from '../assets/Images/Screenshot 2024-10-07 at 5.04.48 PM.png';
import image2 from '../assets/Images/Screenshot 2024-10-07 at 5.06.18 PM.png';
import image3 from '../assets/Images/Screenshot 2024-10-07 at 5.14.01 PM.png';
import image4 from '../assets/Images/Screenshot 2024-10-07 at 5.30.34 PM.png';
import image5 from '../assets/Images/Screenshot 2024-10-07 at 11.03.07 PM.png';
import image6 from '../assets/Images/Screenshot 2024-12-17 at 10.48.04 PM.png';
import image7 from '../assets/Images/Screenshot 2024-12-17 at 11.30.31 PM.png';

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active project for mobile click
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

  const datas = [
    {
      img: image1,
      liveLink: 'https://olanrewaju-dictionary.vercel.app/',
      githubLink: 'https://github.com/Olasunkanmi001/Dictionary.git',
    },
    {
      img: image2,
      liveLink: 'https://newshomepage-liard.vercel.app/',
      githubLink: 'https://github.com/Olasunkanmi001/newshomepage.git',
    },
    {
      img: image3,
      liveLink: 'https://olanrewaju-weather-web.vercel.app/',
      githubLink: 'https://github.com/Olasunkanmi001/Weather-website.git',
    },
    {
      img: image4,
      liveLink: 'https://country-api-482d.vercel.app/',
      githubLink: 'https://github.com/Olasunkanmi001/Country-API.git',
    },
    {
      img: image5,
      liveLink: 'https://product-list-with-cart-beryl-seven.vercel.app/',
      githubLink: 'https://github.com/Olasunkanmi001/product-list-with-cart.git',
    },
    {
      img: image6,
      liveLink: 'https://backstage-talks-one.vercel.app/',
      githubLink: 'https://github.com/Olasunkanmi001/backstage-talks.git',
    },
    {
      img: image7,
      liveLink: 'https://tic-tac-toe-two-fawn.vercel.app/',
      githubLink: 'https://github.com/Olasunkanmi001/tic-tac-toe.git',
    },
  ];

  // Effect to set isMobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change the threshold as needed (768px for iPad)
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    };
  }, []);

  const handleToggle = (index) => {
    // Toggle overlay
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMouseEnter = (index) => {
    // Set the active project on mouse enter
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    // Clear active project on mouse leave
    setActiveIndex(null);
  };

  return (
    <div className="pt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 lg:pr-40 md:pr-36 gap-8">
      {datas.map((data, index) => (
        <div
          key={index}
          className="relative shadow-lg rounded-xl overflow-hidden group"
          onClick={() => isMobile && handleToggle(index)} // Click event for mobile screens
          onMouseEnter={() => !isMobile && handleMouseEnter(index)} // Mouse enter for larger screens
          onMouseLeave={() => !isMobile && handleMouseLeave()} // Mouse leave to clear active project for larger screens
        >
          <img
            src={data.img}
            alt={`Project ${index + 1}`}
            className="w-full h-auto md:h-[200px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay with motion animation */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={
              activeIndex === index
                ? { y: 0, opacity: 1 }
                : { y: -200, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center pt-14 pl-4 lg:p-36 items-center gap-4 ${
              activeIndex === index ? 'block' : 'hidden'
            } group-hover:block lg:group-hover:opacity-100`}
          >
            <a
              href={data.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EE6C4D] text-white px-6 py-2 rounded-full hover:bg-[#203857] transition-colors duration-300"
            >
              View Live
            </a>
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#203857] px-6 py-2 rounded-full hover:bg-[#EE6C4D] hover:text-white transition-colors duration-300"
            >
              GitHub Repo
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Project;


