import React from 'react'
import { IoMdHome } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { PiBagFill } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";
import { RiCupFill } from "react-icons/ri";
import { useState } from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => {

 

let bars = [{"tittle": 'Home', "icon":<IoMdHome />},
    {"tittle":'About', "icon":<BsInfoCircleFill />}, {"tittle":'Project',"icon":<PiBagFill />},{"tittle":'Tools',"icon":<IoMailSharp />},{"tittle":'Hire Me',"icon":<RiCupFill />}]



    const [display, setDisplay] = useState(null)
    // console.log(display)

   

    const showup = (tittle)=>{
       setDisplay(tittle)
       console.log(display)
    }


  return (
    <div className='flex fixed md:grid md:justify-end md:mt-[14%] md:fixed pt-4 justify-center h-20 rounded-2xl shadow-2xl w-[90%] md:w-[10%] md:bg-transparent md:ml-[85%] ml-[5%] bg-transparent md:gap-3'>

   <div className='flex md:grid md:gap-4'>
    
   <ul><Link to="/"><button className='rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center'><IoMdHome className='text-[#203857]  text-2xl md:pt-3  md:text-5xl'/></button></Link></ul>
   <p className='bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden'></p>

    <ul><Link to="/about"><button className='rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center'><BsInfoCircleFill className='text-[#203857]  text-2xl  md:pt-3  md:text-5xl'/></button></Link></ul>
    <p className='bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden'></p>

    <ul><Link to="/projects"><button className='rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center'><PiBagFill className='text-[#203857]  text-2xl md:pt-3  md:text-5xl'/></button></Link></ul>
    <p className='bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden'></p>

    <ul><Link to="/contact"><button className='rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center'><IoMailSharp className='text-[#203857]  text-2xl md:pt-3  md:text-5xl'/></button></Link></ul>
    <p className='bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden'></p>
    <ul><Link to="/Hire"><button className='rounded-full md:w-16 md:h-16 bg-[#EE6C4D] pt-2 w-10 h-10 flex justify-center'><RiCupFill className='text-[#203857]  text-2xl md:pt-3  md:text-5xl'/></button></Link></ul>

   </div>
        {/* {bars.map((bar, index)=>{
            return(
                <div className='flex md:gap-4' key={index}>
                    {display && <h1 className='hidden md:flex bg-[#203857] w-20 h-12 text-lg pt-2 pl-3 rounded-lg mt-6 text-yellow-100 '>{display}</h1>}
                    <button className='rounded-full md:rounded-full md:h-16 md:w-16 bg-[#EE6C4D] w-10 h-10 text-2xl md:text-3xl md:pt-4 flex justify-center pt-2 text-[#203857] font-extrabold' onMouseOver={()=>{showup(bar.tittle)}}>{bar.icon}</button>
                   
                    <p className='bg-[#EE6C4D] w-4 h-2 mt-4 md:hidden'></p>
                </div>
            )
        })} */}


    </div>
  )
}

export default Navbar