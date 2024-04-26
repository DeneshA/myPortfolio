import Header from "./Header"
import AboutMe from "./AboutMe"
import SkillSet from './SkillSet'
import React, { useRef } from "react"
import profileData from '../data/profile.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import '../sytles/Home.css'

export default function Home() {

    console.log(profileData.projects)
    const homeRef = useRef(null)
    const aboutmeRef = useRef(null)
    const skillsetRef = useRef(null)
    const experience = useRef(null)
    const project = useRef(null)

    return (
        <div className="main-container">
            <div className="header-container">
                <Header />
            </div>
            
            <div className="home-container" id="home" ref={homeRef}>
                <h1>Hi <img lclassname="hand-hi" src="/assets/icons/hi.png" alt="hi" /> !  I'm Denesh Anandathasan,<br/>Welcome to my portfolio!</h1><br />
                <p className="home-text">I'm a Software Engineer passionate about innovation and quality. With expertise in QA testing, I'm now diving into full-stack development to push boundaries and make a lasting impact. Join me on this exciting journey through technology!</p> 
                  <div className="background-image-aboutme">
                    <img className="mountain-sun-raise" src="/assets/images/Backgrounds/MountainSunRaise.png" alt="" />
                  </div>
            </div>
        
            <div className="aboutme-container" id="aboutme" ref={aboutmeRef} >
                <h1>About Me</h1>
                <AboutMe />
                <div className="background-image-aboutme">
                    <img className="mountain-sun-raise" src="/assets/images/Backgrounds/Trees.png" alt="" />
                  </div>
            </div>

            <div className="skillset-container" id="skillset" ref={skillsetRef} >
                <h1>SKILLS</h1>
                <SkillSet />
            </div>

            {/* <div className="work-container">
                <h1>EXPERIENCES</h1>

            </div> */}
            <div className="project-container">
                <h1>PROJECTS</h1>
                <div className="list-projects">
                    {profileData.projects.map((project) => (
                            <div className="project-details" key={project.project_id}>
                            <div className="project-header"><h2>{project.title}</h2></div>
                            <div className="project-image"><img className="project-img" src={project.image} alt={project.title} /></div>
                            <div className="project-display"><h3>{project.details}</h3></div>
                            <div className="project-footer"><h3>{project.content}</h3>
                            <div className="links">
                                 {project.link_www!=="N/A" ? 
                                <div className="link-www link">
                                    <a href={project.link_github}><FontAwesomeIcon icon={faGlobe} bounce size="2xl" /></a>
                                </div>
                               : console.log("N/A") }
                                <div className="link-github link">
                                    <a href={project.link_url}><FontAwesomeIcon icon={faGithubAlt} shake size="2xl" /></a>
                                </div>
                                
                            </div>
                            </div>
                            
                        </div>
                    ))}                                
                </div>
            </div>
        <div>
            <a target="_blank" href="https://icons8.com/icon/1H52efUsDX7A/waving-hand-emoji">Waving Hand Emoji</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        </div>
    )
}