//rafce
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'
import '../sytles/Navbar.css'

export default function ScrollToTop() {

    const [showScrollToButton, setShowScrollTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        })        
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='scroll-to-top'>
             {showScrollToButton && (<FaAngleDoubleUp className="top-btn-position top-btn-style" onClick={scrollTop} />)}
        </div>
    )

}