import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ scrollToSection }) {
  const handleScrollTo = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className="nav-container">
      <div className="img-nav-div">
        <img className="bar-nav" src="/assets/icons/bars.svg" alt="" />
      </div>
      <div className="ul-nav-div">
        <ul className="nav-ul">
          <li>
            <Link to='/' 
            onClick={(e) => {
                e.preventDefault()
                handleScrollTo('home')}}>
              HOME
            </Link>
          </li>
          <li>
            <Link to='/aboutme' 
            onClick={(e) => {
                e.preventDefault()
                handleScrollTo('aboutme')}}>
              ABOUT ME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}