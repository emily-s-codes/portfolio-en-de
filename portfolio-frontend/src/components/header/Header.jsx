import { Link } from "react-router-dom"
import "./Header.css"

const Header = ({ english, setEnglish }) => {

    const handleEnglish = () => {
        setEnglish(true)
    }

    const handleDeutsch = () => {
        setEnglish(false)
    }

    return (
        <header>
            <nav>
                <Link to="/"><h1>Emily Sheil</h1></Link>
                <ul>
                    <li><a href="#about">{english ? "About Me" : "Über mich"}</a></li>
                    <li><a href="#techstack">Skills</a></li>
                    <li><a href="#CV">{english ? "My Journey" : "Werdegang"}</a></li>
                    <li className="navContact"><a href="#emailMe">{english ? "Email Me" : "E-Mail Schicken"}</a></li>
                </ul>
            </nav>
            <div className="langToggleDiv">
                <p className={english ? "EN active" : "EN"} onClick={handleEnglish}>EN</p>
                <span> || </span>
                <p className={english ? "DE" : "DE active"} onClick={handleDeutsch}>DE</p>
            </div>
        </header>
    );
}

export default Header;