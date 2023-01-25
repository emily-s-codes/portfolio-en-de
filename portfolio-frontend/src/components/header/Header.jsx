import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./Header.css"
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
                    <li><HashLink smooth to='/#about'>{english ? "About Me" : "Über mich"}</HashLink></li>
                    <li><HashLink smooth to='/#techstack'>Skills</HashLink></li>
                    <li><HashLink smooth to='/#experience'>{english ? "My Journey" : "Werdegang"}</HashLink></li>
                    <li className="navContact"><HashLink smooth to='/#emailMe'>{english ? "Email Me" : "E-Mail Schicken"}</HashLink></li>
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