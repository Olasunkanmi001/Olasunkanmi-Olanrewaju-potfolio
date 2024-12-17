import React from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import image from '../assets/Images/IMG_3127.JPG';
import { motion } from 'framer-motion';

const Contact = () => {
    const profile = [
        { "link": 'mailto:fuadolasunkanmi9@gmail.com', "icon": <AiFillGoogleCircle /> },
        { "link": 'https://www.linkedin.com/in/olasunkanmi-olanrewaju-333b192a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', "icon": <SiLinkedin /> },
        { "link": 'https://www.facebook.com/profile.php?id=61557909239272&mibextid=LQQJ4d', "icon": <FaFacebook /> },
        { "link": 'https://x.com/Vintage044', "icon": <FaSquareXTwitter /> },
        { "link": 'https://github.com/Olasunkanmi001', "icon": <SiGithub /> },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, y: -50 }, // Start from above
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    const iconVariants = {
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            className='pt-40 px-4 pb-24 md:flex md:gap-4 lg:gap-10 md:pb-36'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className='md:w-[40%] md:rounded-xl'
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ rotate: -5 }} // Slant effect on hover
            >
                <img className='md:w-[400px] lg:w-[800px] lg:h-[500px] md:rounded-xl transition-transform duration-300 ease-in-out' src={image} alt="Contact" />
            </motion.div>

            <div className='pt-10 md:w-[40%] lg:w-[45%]'>
                <h1 className='text-4xl font-extrabold mb-3 flex justify-center lg:justify-start text-[#EE6C4D] md:mb-14 lg:text-6xl'>Contact Me</h1>

                <h5 className='lg:text-3xl lg:font-light'>I’m always excited to collaborate on innovative projects, share ideas, and help bring creative visions to life through modern web development. Whether you want to discuss a potential opportunity, need help with a frontend challenge, or just want to say hello, feel free to reach out!</h5>

                <div className='flex justify-center lg:justify-start lg:mt-16 pt-5 gap-5'>
                    {profile.map((use, index) => (
                        <motion.div key={index} variants={iconVariants} whileHover="hover">
                            <a className='rounded-full text-5xl text-[#EE6C4D] hover:text-[#203857]' href={use.link}>
                                {use.icon}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
