import { Link } from "react-router-dom"
import "./Header.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
                    <li><AnchorLink href="#about">{english ? "About Me" : "Über mich"}</AnchorLink></li>
                    <li><AnchorLink href="#techstack">Skills</AnchorLink></li>
                    <li><AnchorLink href="#experience">{english ? "My Journey" : "Werdegang"}</AnchorLink></li>
                    <li className="navContact"><AnchorLink href="#emailMe">{english ? "Email Me" : "E-Mail Schicken"}</AnchorLink></li>
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