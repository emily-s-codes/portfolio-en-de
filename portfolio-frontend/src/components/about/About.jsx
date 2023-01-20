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
                <p>{english ? "As I approach the end of a fullstack web development bootcamp I'm excited to bring the passions I first developed as a classical musician to web development: creative problem solving, structured independent work and communicative teamwork." : "Ich freue mich darauf, die Leidenschaften, die ich als klassische Musikerin entwickelt habe, in die Webentwicklung einzubringen: kreative Problemlösung, strukturierte, selbstständige Arbeit und kommunikative Teamarbeit."}
                </p>
                {/*  */}
                <section className="social">
                    <div className="icon_color_filter"><img src={github} alt="github" /></div>
                    <div className="icon_color_filter"><img src={linkedin} alt="linkedin" />
                    </div>
                    <div className="icon_color_filter"><img src={xing} alt="xing" /></div>
                </section>
            </article>
        </section>
    );
}

export default About;