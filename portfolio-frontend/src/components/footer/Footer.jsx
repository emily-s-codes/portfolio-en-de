import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = ({ english }) => {
    return (
        <footer>
            <ul>
                <li>made by Emily Sheil</li>
                <Link to="/datenschutz"><li>{english ? "Privacy Policy" : "Datenschutz"}</li></Link>
                <Link to="/impressum"><li>Impressum</li></Link>
            </ul>
        </footer>
    );
}

export default Footer;