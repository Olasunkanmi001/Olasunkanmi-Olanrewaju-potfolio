import React from 'react'
import image1 from '../assets/Images/IMG_3129.JPG'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className='grid justify-center pt-[30%] md:pt-[18%] pb-28'>
        <h1 className='text-[#E8DAB2] flex justify-center text-4xl md:text-6xl font-bold mb-6'>Hello Friends!</h1>
        <h1 className='text-[#E8DAB2] flex justify-center gap-1 text-xl md:text-3xl font-extrabold'>My Name Is <h1 className='text-[#EF6C4D]'>Olasunkanmi Olanrewaju</h1></h1>
        <h1 className='text-[#E8DAB2] flex justify-center gap-1 text-2xl md:text-3xl md:mb-14 font-extrabold'>I'm A <h1 className='text-[#EF6C4D]'>Front End Developer</h1></h1>

        <motion.div  className='rounded-full w-40 h-40 border-2 border-[#EF6C4D] m-auto flex justify-center mt-40 md:mt-16'>
        <motion.img src={image1} alt="Olasunkanmi Olanrewaju" className='rounded-full w-36 h-36 mt-2 object-cover hover:w-full hover:h-full hover:duration-1000 '/>

        </motion.div>
    </div> 
  )
}

export default Home