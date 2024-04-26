import Navbar from "./Navbar"

export default function Header() {
    return (
        <div>
            <header className="header-container">
                <div className="header-container-top">
                    <div className="header-name-title">
                        <p className="header-first-name full-name"><span className="fisrt-initial">D</span>enesh</p>
                        <p className="header-second-name full-name"><span className="fisrt-initial">A</span>nandathasan</p>
                        <p className="header-title">Full-Stack Developer</p>
                    </div>
                    <div className="header-middle">

                    </div>
                    <div className="header-social-container">
                        <ul className='social-ul'>
                            <li>
                                <a href='https://github.com/DeneshA/myPortfolio' target='_blank'>
                                    <img className="github-icon" src="/assets/icons/github.svg" alt="github" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/deneshananthadasan' target='_blank'>
                                    <img className="linkedin-icon" src="/assets/icons/linkedin.svg" alt="linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Navbar />
            </header>


        </div>
    )
}