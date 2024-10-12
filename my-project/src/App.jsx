import React from 'react'
import About from './Component/About'
import Project from './Component/Project'
import Navbar from './Component/Navbar'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Hire from './Component/Hire'
import Tools from './Component/Tools'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className=' bg-mountain-dark bg-cover bg-center pt-4 text-white'>
      <Navbar/>

          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>

      

</div>

    </Router>
    
  )
}

export default App