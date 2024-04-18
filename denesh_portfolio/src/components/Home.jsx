import Header from "./Header"
import AboutMe from "./AboutMe"
import React, { useRef } from "react"

import '../sytles/Home.css'

export default function Home() {

    const homeRef = useRef(null)
    const aboutmeRef = useRef(null)
    const experience = useRef(null)
    const project = useRef(null)

    return (
        <div className="main-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="home-container" id="home" ref={homeRef}>
                <h1>Hi <img lclassname="hand-hi" src="/src/assets/icons/hi.png" alt="hi" /> !  I'm Denesh Anandathasan,<br/>Welcome to my portfolio!</h1><br /><br />
                <p className="home-text">I'm a Software Engineer passionate about innovation and quality. With expertise in QA testing, I'm now diving into full-stack development to push boundaries and make a lasting impact. Join me on this exciting journey through technology!</p> 
                  {/* Hello and welcome to my webpage! I'm a dedicated Software Engineer with a passion for pushing the boundaries of technology. With a background in QA testing, I've honed my skills in overcoming challenges and ensuring quality in every project I undertake. Now, I'm excited to embark on a journey as a dynamic full-stack developer, leveraging API interactions to innovate and make a lasting impact on the world of technology. Join me as I navigate through the world of software engineering and strive to make a meaningful contribution to the ever-evolving tech landscape.  */}
            </div>

            <div className="aboutme-container" id="aboutme" ref={aboutmeRef} >
                <h1>About Me</h1>
                <AboutMe />
            </div>

            {/* <div className="work-container">
                <h1>EXPERIENCES</h1>

            </div> */}
            <div className="project-container">
                <h1>PROJECTS</h1>
                <div className="list-projects">
                    <div className="project-details">
                        <div className="project-header"><h2>Header</h2></div>
                        <div className="project-dispay">Display Picture</div>
                        <div className="project-footer"><h2>Footer</h2></div>
                    </div>
                    <div className="project-details">
                        <div className="project-header"><h2>Header</h2></div>
                        <div className="project-dispay">Display Picture</div>
                        <div className="project-footer"><h2>Footer</h2></div>
                    </div>
                    <div className="project-details">
                        <div className="project-header"><h2>Header</h2></div>
                        <div className="project-dispay">Display Picture</div>
                        <div className="project-footer"><h2>Footer</h2></div>
                    </div>
                    <div className="project-details">
                        <div className="project-header"><h2>Header</h2></div>
                        <div className="project-dispay">Display Picture</div>
                        <div className="project-footer"><h2>Footer</h2></div>
                    </div>
                    <div className="project-details">
                        <div className="project-header"><h2>Header</h2></div>
                        <div className="project-dispay">Display Picture</div>
                        <div className="project-footer"><h2>Footer</h2></div>
                    </div>
                    <div className="project-details">
                        <div className="project-header"><h2>Header</h2></div>
                        <div className="project-dispay">Display Picture</div>
                        <div className="project-footer"><h2>Footer</h2></div>
                    </div>
                </div>
            </div>
        <div>
            <a target="_blank" href="https://icons8.com/icon/1H52efUsDX7A/waving-hand-emoji">Waving Hand Emoji</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        </div>
    )
}