import '../sytles/HamburgerMenu.css'

export default function HamburgerMenu(){
    return(
        <>
        <div className="hamburger-menu">
        <img className="bar-nav" src="/assets/icons/bars.svg" alt="Navigation Toggle" />
            <div className="burger HM-Home"></div>
            <div className="burger HM-AboutMe"></div>
            <div className="burger HM-Skills"></div>
        </div>
        </>
    )
}