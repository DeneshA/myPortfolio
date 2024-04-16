import Header from "./Header"
import AboutMe from "./AboutMe"
import '../sytles/Home.css'

export default function Home() {
    return (
        <div className="main-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="home-container">
                <h1>Hi <img lclassname="hand-hi" src="/src/assets/icons/hi.png" alt="hi" /> !  I'm Denesh Anandathasan, welcome to my portfolio!</h1>
                <p className="home-text">I'm a Software Engineer passionate about innovation and quality. With expertise in QA testing, I'm now diving into full-stack development to push boundaries and make a lasting impact. Join me on this exciting journey through technology!</p>
                {/* Hello and welcome to my webpage! I'm a dedicated Software Engineer with a passion for pushing the boundaries of technology. With a background in QA testing, I've honed my skills in overcoming challenges and ensuring quality in every project I undertake. Now, I'm excited to embark on a journey as a dynamic full-stack developer, leveraging API interactions to innovate and make a lasting impact on the world of technology. Join me as I navigate through the world of software engineering and strive to make a meaningful contribution to the ever-evolving tech landscape. */}
            </div>

            <div className="aboutme-container">
                <h1>About Me</h1>
                <AboutMe />
            </div>

            <div className="work-container">
                <h1>EXPERIENCES</h1>

            </div>

        <div>
            <a target="_blank" href="https://icons8.com/icon/1H52efUsDX7A/waving-hand-emoji">Waving Hand Emoji</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        </div>
    )
}