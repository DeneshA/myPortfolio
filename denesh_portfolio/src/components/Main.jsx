import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Navbar from './Navbar'

export default function Main() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        console.log("Element => ",element)
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
    
  }

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
      </Routes>
    </div>
  )
}