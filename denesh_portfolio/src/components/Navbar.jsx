import "../App.css"
export default function Navbar (){
    return(
        <div className="nav-container">
            <div className="img-nav-div">
            <img className="bar-nav" src="/src/assets/icons/bars.svg" alt="" />
            </div>
            <div className="ul-nav-div">
            <ul className="nav-ul">
                <li>HOME</li>
                <li>ABOUT ME</li>
                <li>EXPERIENCES</li>
                <li>PROJECTS</li>
                <li>EDUCATION</li>
                <li>CONTACT ME</li>
            </ul>
            </div>
           
        </div>
    )
}