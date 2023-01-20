import "./Hero.css"
import arrow from "../../assets/img/Arrow1.svg"
import headshot from "../../assets/img/Emily_headshot.jpg"

const Hero = ({ english }) => {
    return (
        <section className="hero">
            <article className="heroLeft">
                <p className="yellow_highlight">
                    <img src={arrow} alt="long right arrow" /> {english ? "WELCOME" : "WILLKOMMEN"}</p>
                <h2>{english ? "I AM" : "ICH BIN"}<br />EMILY <br />SHEIL</h2>
                <h3>FULLSTACK DEVELOPER</h3>
                <p className="german"><a href="#">{english ? "Download CV" : "Lebenslauf Herunterladen"}</a></p>
            </article>
            {/* DIFF DOWNLOADS BASED ON STATE OF ENGLISH  */}
            <article className="heroRight">
                <img src={headshot} alt="emily headshot" />
            </article>
        </section>
    );
}

export default Hero;