import React, { useRef, useState } from 'react'
import home from './Home'
import aboutMe from './AboutMe'
import '../sytles/Navbar.css'
import HamburgerMenu from './HamburgerMenu'
import Home from './Home'

// import AboutMe from './AboutMe'

export default function Navbar() {

  const homeRef = useRef(null)
  const aboutmeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
       window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
       })
    }
 }

  // const [hamburgerOpen, setHamburgerOpen] =useState(false)

  // const  toggleHamburgur = () => {
  //   setHamburgerOpen(!hamburgerOpen)
  // }

  return (
    <div className="nav-container">
    <div className="img-nav-div">
      {/* <img className="bar-nav" src="/assets/icons/bars.svg" alt="Navigation Toggle" /> */}
     
    </div>
    <div className='navigation'>
    {/* <ul className={`nav-ul" ${hamburgerOpen ? 'open' : '' }`}> */}
    <ul className="nav-ul">
      <li>
        <button  className='btn-home transparent-button' onClick={() => scrollToSection('home')}>HOME</button>
      </li>
      <li>
        <button className='btn-aboutme transparent-button' onClick={() => scrollToSection('aboutme')} >ABOUT ME</button>
      </li>
      <li>
        <button className='btn-skills transparent-button' onClick={() => scrollToSection('skills')} >SKILLS</button>
      </li>
      <li>
        <button className='btn-projects transparent-button' onClick={() => scrollToSection('projects')} >PROJECTS</button>
      </li>
    </ul>
      {/* <div className='hamburger-menu' onClick={toggleHamburgur}>
        <HamburgerMenu />

      </div> */}
    </div>
    
  </div>
  )
}