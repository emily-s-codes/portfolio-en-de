import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineClose } from "react-icons/ai";
import "./BurgerMenu.css"

const BurgerMenu = ({ burgerActive, setBurgerActive, english }) => {
    return (
        <section className={burgerActive ? "burgerSection showBurger" : "burgerSection hideBurger"}>
            <AiOutlineClose className="burger-X" size={"40"} color="white" onClick={() => setBurgerActive(!burgerActive)} />
            <ul>
                <li><AnchorLink href="#about">{english ? "About Me" : "Über mich"}</AnchorLink></li>
                <li><AnchorLink href="#techstack">Skills</AnchorLink></li>
                <li><AnchorLink href="#experience">{english ? "My Journey" : "Werdegang"}</AnchorLink></li>
                <li className="navContact"><AnchorLink href="#emailMe">{english ? "Email Me" : "E-Mail Schicken"}</AnchorLink></li>
            </ul>
        </section>
    );
}

export default BurgerMenu;