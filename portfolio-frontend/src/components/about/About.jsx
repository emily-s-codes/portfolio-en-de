import "./About.css"
import github from "../../assets/img/github.svg"
import linkedin from "../../assets/img/linkedin.svg"
import xing from "../../assets/img/xing.svg"

const About = ({ english }) => {
    return (
        <section className="about" id="about">
            <article className="aboutLeft">
                <h2>{english ? "ABOUT" : "ÜBER"}<br />{english ? "ME" : "MICH"}</h2>
            </article>
            <article className="aboutRight">
                <p>{english ? "I'm excited to bring the passions I first developed as a classical musician to web development: creative problem solving, structured independent work and communicative teamwork." : "Ich freue mich darauf, die Leidenschaften, die ich als klassische Musikerin entwickelt habe, in die Webentwicklung einzubringen: kreative Problemlösung, strukturierte, selbstständige Arbeit und kommunikative Teamarbeit."}
                </p>
                {/*  */}
                <section className="social">
                    <a href="https://github.com/emily-s-codes" target="_blank" rel="noopener noreferrer"><div className="icon_color_filter"><img src={github} alt="github" /></div></a>
                    <a href="https://www.linkedin.com/in/emilyscodes/" target="_blank" rel="noopener noreferrer"><div className="icon_color_filter"><img src={linkedin} alt="linkedin" />
                    </div></a>
                    <a href="https://www.xing.com/profile/Emily_Sheil2"><div className="icon_color_filter"><img src={xing} alt="xing" /></div></a>
                </section>
            </article>
        </section>
    );
}

export default About;