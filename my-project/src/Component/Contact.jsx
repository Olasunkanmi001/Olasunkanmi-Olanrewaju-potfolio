import React from 'react'
import { ImMail2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='pt-40'>
       <div className='flex'>
       <h1 className='flex gap-3'><ImMail2 />:</h1>

       <a href='https://mail.google.com/mail/u/0/#inbox?compose=new'>fuadolasunkanmi9@gmail.com</a>
       </div>

       <div className='flex'>
        <h1 className='flex'><FaLinkedin />:</h1>

        <a href='https://www.linkedin.com/in/olasunkanmi-olanrewaju-333b192a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Olasunkanmi Olanrewaju</a>
       </div>

    </div>
  )
}

export default Contact