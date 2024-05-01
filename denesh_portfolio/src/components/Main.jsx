import React ,{ useRef } from 'react'
// import { Routes, Route, Router } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import AboutMe from './AboutMe'
import SkillSet from './SkillSet'
import Navbar from './Navbar'

export default function Main() {

  // const homeRef = useRef(null)
  // const aboutmeRef = useRef(null)
  // const skillsetRef = useRef(null)
  // const experienceRef = useRef(null)
  // const projectRef = useRef(null)


  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId)
  //   if (element) {
  //       console.log("Element => ",element)
  //     window.scrollTo({
  //       top: element.offsetTop,
  //       behavior: 'smooth'
  //     })
  //   }
    
  // }

  return (
    
    <div>
     
    {/* <Navbar scrollToSection={{ homeRef, aboutmeRef, skillsetRef, experienceRef, projectRef }} /> */}
      {/* <Navbar scrollToSection={{ homeRef, aboutmeRef, skillsetRef }} /> */}
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path='/' exact element={<Home homeRef={homeRef} aboutmeRef={aboutmeRef} skillsetRef={skillsetRef}/>}></Route> */}
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/skillset' element={<SkillSet />}></Route>
      </Routes>
      
    </div>
    
    
  )
}