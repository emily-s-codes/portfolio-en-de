import { Link } from "react-router-dom"
import "./Header.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import BurgerMenu from "../burgerMenu/BurgerMenu"
import { useState } from "react"

const Header = ({ english, setEnglish }) => {
    const [burgerActive, setBurgerActive] = useState(false)

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
                <section className="burger" onClick={() => setBurgerActive(!burgerActive)}>
                    <div className="burgerIcon"></div>
                    <div className="burgerIcon"></div>
                    <div className="burgerIcon"></div>
                </section>
            </nav>
            <BurgerMenu english={english} setBurgerActive={setBurgerActive} burgerActive={burgerActive} />
            <div className="langToggleDiv">
                <p className={english ? "EN active" : "EN"} onClick={handleEnglish}>EN</p>
                <span> || </span>
                <p className={english ? "DE" : "DE active"} onClick={handleDeutsch}>DE</p>
            </div>
        </header>
    );
}

export default Header;