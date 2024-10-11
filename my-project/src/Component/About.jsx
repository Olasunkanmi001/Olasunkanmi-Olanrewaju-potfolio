import React from 'react'
import image from '../assets/Images/IMG_3128.JPG'

const About = () => {
  return (
    <div className='px-4 pt-32 md:pt-24 md:flex md:gap-5 lg:gap-24'>

        <div className='w-full h-auto rounded-xl mb-28 md:w-[40%] lg:w-[40%] lg:h-[600px]'>
            <img className='w-full h-full rounded-2xl shadow-2xl' src={image}/>
        </div>
     

        <div className='text-[#E8DAB2] md:w-[40%] lg:w-[40%] lg:pt-36'>
        <h1 className='text-3xl font-bold mb-3 hover:underline hover:decoration-3  hover:decoration-orange-400 hover:animate-pulse'>Briefly About Me</h1>

<h5 className='md:text-sm lg:text-lg pb-5'>Hi, I’m Olasunkanmi Olanrewaju, a passionate Front-End Developer with a strong dedication to crafting seamless and visually engaging web experiences. My expertise lies in translating design concepts into fully functional, user-friendly interfaces using modern technologies like HTML5, CSS3, JavaScript, and React.js. I enjoy problem-solving, optimizing performance, and staying up-to-date with the latest web development trends to ensure the solutions I build are efficient, scalable, and accessible.
Whether I’m working on a personal project or collaborating with a team, I thrive on delivering high-quality, responsive websites that provide an intuitive user experience. My goal is to make the web a more beautiful, accessible, and functional space for everyone.
When I’m not coding, you can find me exploring new technologies, engaging with the developer community, or enjoying a good book.</h5>

        </div>

    </div>
  )
}

export default About