import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineClose } from "react-icons/ai";
import "./BurgerMenu.css"

const BurgerMenu = ({ burgerActive, setBurgerActive, english }) => {
    return (
        <section className={burgerActive ? "burgerSection showBurger" : "burgerSection hideBurger"}>
            <AiOutlineClose className="burger-X" size={"40"} color="white" onClick={() => setBurgerActive(!burgerActive)} />
            <ul>
                <li onClick={() => setBurgerActive(!burgerActive)}>
                    <AnchorLink href="#about"
                    >{english ?
                        "About Me"
                        : "Über mich"}
                    </AnchorLink>
                </li>
                <li onClick={() => setBurgerActive(!burgerActive)}>
                    <AnchorLink href="#techstack"
                    >Skills</AnchorLink>
                </li>
                <li onClick={() => setBurgerActive(!burgerActive)}>
                    <AnchorLink href="#experience">{english ? "My Journey" : "Werdegang"}
                    </AnchorLink>
                </li>
                <li className="navContact" onClick={() => setBurgerActive(!burgerActive)}>
                    <AnchorLink href="#emailMe">{english ?
                        "Email Me" :
                        "E-Mail Schicken"}</AnchorLink>
                </li>
            </ul>
        </section>
    );
}

export default BurgerMenu;