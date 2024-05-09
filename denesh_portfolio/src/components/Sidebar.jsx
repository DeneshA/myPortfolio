import React,{useRef} from 'react'
import { slide as Menu } from 'react-burger-menu'

export default function props (){

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

    return(
        <div className="sidebar-container">
            <Menu {...props}>
                <div className='slid-menu-home'  onClick={() => scrollToSection('home')} >HOME</div>
                <div className='slid-menu-aboutme'  onClick={() => scrollToSection('aboutme')}>ABOUT ME</div>
                <div className='slid-menu-skills'  onClick={() => scrollToSection('skills')}>SKILLS</div>
                <div className='slid-menu-project'  onClick={() => scrollToSection('projects')} >PROJECTS</div>
            </Menu>

        </div>
    )

}