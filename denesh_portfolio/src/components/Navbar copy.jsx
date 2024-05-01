import React from 'react'
import { Link } from 'react-router-dom'
// import AboutMe from './AboutMe'

export default function Navbar({ scrollToSection }) {
  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="nav-container">
    <div className="img-nav-div">
      <img className="bar-nav" src="/assets/icons/bars.svg" alt="Navigation Toggle" />
    </div>
    <ul className="nav-ul">
      <li>
        <button onClick={() => handleScrollTo(scrollToSection.homeRef)}>HOME</button>
      </li>
      <li>
        <button onClick={() => handleScrollTo(scrollToSection.aboutmeRef)}>ABOUT ME</button>
      </li>
      <li>
        <button onClick={() => handleScrollTo(scrollToSection.skillsetRef)}>SKILLS</button>
      </li>
    </ul>
  </div>
  )
}