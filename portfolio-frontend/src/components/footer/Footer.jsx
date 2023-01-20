import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>made by Emily Sheil</li>
                <Link to="/impressum"><li>Impressum</li></Link>
            </ul>
        </footer>
    );
}

export default Footer;