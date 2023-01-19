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
                <h1>Emily Sheil</h1>
                <ul>
                    <li><a href="#about">{english ? "About Me" : "Über mich"}</a></li>
                    <li><a href="#techstack">Skills</a></li>
                    <li><a href="#CV">{english ? "A to B" : "Werdegang"}</a></li>
                    <li class="navContact"><a href="#emailMe">{english ? "Email Me" : "E-Mail Schicken"}</a></li>
                </ul>
            </nav>
            <div className="langToggleDiv">
                <p className="EN" onClick={handleEnglish}>EN</p><span> || </span><p className="DE" onClick={handleDeutsch}>DE</p>
            </div>
        </header>
    );
}

export default Header;