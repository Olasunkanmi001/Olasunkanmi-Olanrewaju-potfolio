import React from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import image from '../assets/Images/IMG_3127.JPG'


const Contact = () => {

    let profile = [{
        "link": 'https://mail.google.com/mail/u/0/#inbox?compose=new', "icon": <AiFillGoogleCircle />},
        {
            "link": 'https://www.linkedin.com/in/olasunkanmi-olanrewaju-333b192a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', "icon": <SiLinkedin />},
            {
                "link": 'https://www.facebook.com/profile.php?id=61557909239272&mibextid=LQQJ4d', "icon": <FaFacebook />},
                {
                    "link": 'https://x.com/Vintage044', "icon": <FaSquareXTwitter />},
                    {
                        "link": 'https://github.com/Olasunkanmi001', "icon": <SiGithub />},
                    ]
  return (
    <div className='pt-40 px-4 pb-24 md:flex md:gap-4 lg:gap-10  md:pb-40'>

        <div className=' md:w-[40%]'>
            <img className='md:w-[400px] lg:w-[800px]' src={image}/>
        </div>

        <div className='pt-10 md:w-[40%] lg:w-[45%]'>
            <h1 className='text-4xl font-extrabold mb-3 flex justify-center lg:justify-start hover:underline text-[#EE6C4D] md:mb-14 lg:text-6xl'>Contact Me</h1>

            <h5 className='lg:text-3xl lg:font-light'>I’m always excited to collaborate on innovative projects, share ideas, and help bring creative visions to life through modern web development. Whether you want to discuss a potential opportunity, need help with a frontend challenge, or just want to say hello, feel free to reach out!</h5>

            <div className='flex justify-center lg:justify-start lg:mt-16 pt-5 gap-5'>
            {profile.map((use)=>{
                return(
                    <div className=' '>
                        <a className=' rounded-full text-5xl text-[#EE6C4D] hover:text-[#203857]' href={use.link}>{use.icon}</a>

                    </div>
                )
            })}


        </div>
            </div>



       {/* <div className='flex border justify-center pt-3 mb-5 gap-4 px-3 border-5 border-[#EE6C4D] rounded-lg h-[60px]  '>
       <h1 className='flex justify-center pt-2 w-10 h-10 rounded-full bg-[#EE6C4D]'><GrMailOption className='text-[#203857] text-2xl ' /></h1>

       <a className=' font-extrabold text-[#EE6C4D]' href='https://mail.google.com/mail/u/0/#inbox?compose=new'>fuadolasunkanmi9@gmail.com</a>
       </div>

       <div className='flex border justify-center pt-3 mb-5 gap-4 px-3 border-5 border-[#EE6C4D] rounded-lg h-[60px] '>
        <h1 className='flex justify-center pt-2 w-10 h-10 rounded-full bg-[#EE6C4D]'><AiOutlineLinkedin className='text-[#203857] text-2xl ' /></h1>

        <a className=' font-extrabold text-[#EE6C4D]' href='https://www.linkedin.com/in/olasunkanmi-olanrewaju-333b192a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Olasunkanmi Olanrewaju</a>
       </div>

       <div className='flex border justify-center pt-3 mb-5 gap-4 px-3 border-5 border-[#EE6C4D] rounded-lg h-[60px] '>
        <h1 className='flex justify-center pt-2 w-10 h-10 rounded-full bg-[#EE6C4D]'><FaSquareFacebook className='text-[#203857] text-2xl '/></h1>
        <a className=' font-extrabold text-[#EE6C4D]' href='https://www.facebook.com/profile.php?id=61557909239272&mibextid=LQQJ4d'>Fuad Olasunkanmi</a>
       </div>

       <div className='flex border justify-center  pt-3 mb-5 gap-4 px-3 border-5 border-[#EE6C4D] rounded-lg h-[60px] '>
        <h1 className='flex justify-start pt-2 w-10 h-10 rounded-full bg-[#EE6C4D]'><BsTwitterX className='text-[#203857] text-2xl '/></h1>
        <a  className=' font-extrabold text-[#EE6C4D] flex' href='https://x.com/Vintage044'>Olanrewaju</a>
       </div>
       <div className='flex border justify-center pt-3 mb-5 gap-4 px-3 border-5 border-[#EE6C4D] rounded-lg h-[60px] '>
        <h1 className='flex justify-center pt-2 w-10 h-10 rounded-full bg-[#EE6C4D]'><FaGithub className='text-[#203857] text-2xl '/></h1>
        <a className=' font-extrabold text-[#EE6C4D]' href='https://github.com/Olasunkanmi001'>Olasunkanmi001</a> */}
       {/* </div> */}

    </div>
  )
}

export default Contact