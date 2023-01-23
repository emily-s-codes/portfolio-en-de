import "./CV.css"
import arrow from "../../assets/img/Arrow1.svg"

const CV = ({ english }) => {
    return (
        <section className="experience" id="experience">
            <p className="yellow_highlight"><img src={arrow} alt="long right arrow" />{english ? "MY EXPERIENCE" : "MEINE ERFAHRUNG"}</p>
            <h2>{english ? "MY JOURNEY" : "WERDEGANG"}</h2>
            <article className="workExperienceGrid">
                <div className="edHeadline">
                    <h3>{english ? "Education" : "Ausbildung"}</h3>
                </div>
                <div className="bootcamp">
                    <p>Sep 2022 — Feb 2023</p>
                    <p className="jobTitle">Full-Stack Web {english ? "Development" : "Entwicklung"} Bootcamp</p>
                    <p className="jobDescription">MERN Stack + HTML5, CSS3, JavaScript</p>
                    <p className="jobDescription">+ GitHub, Figma, SASS, VS Code {english ? "and more" : "und mehr"}</p>
                </div>
                <div className="MM">
                    <p>Aug 2013 — {english ? "May" : "Mai"} 2015</p>
                    <p className="jobTitle">Master of Music</p>
                    <p>Eastman School of Music</p>
                    <p className="jobDescription">{english ? "Chamber music, orchestral music, music theory, music history, and Music Leadership" : "Kammermusik, Orchestermusik, Musiktheorie, Musikgeschichte und Music Leadership"}</p>
                </div>
                <div className="BM">
                    <p>Aug 2009 — {english ? "May" : "Mai"} 2013</p>
                    <p className="jobTitle">Bachelor of Music</p>
                    <p>University of Maryland, College Park</p>
                    <p className="jobDescription">{english ? "Chamber music, orchestral music, fundamentals of music theory and music history, and Honors Humanities" : "Kammermusik, Orchestermusik, Grundlagen der Musiktheorie und Musikgeschichte und Honors Humanities"}</p>
                </div>
                <div className="workExperienceHeadline">
                    <h3>{english ? "Professional Experience" : "Berufserfahrung"}</h3>
                </div>
                <div className="violist">
                    <p>Jan 2009 — {english ? "Mar" : "Mär"} 2021</p>
                    <p className="jobTitle">{english ? "Freelance Violist" : "Freiberufliche Bratschistin"}</p>
                    <p className="jobDescription">{english ? "I actively performed as a chamber and orchestral musician, as well as for events. Additionally I taught private lessons in my own studio and on a contract basis for several music schools." : "Zu meiner Tätigkeit gehörten Kammermusik, Orchestermusik, Eventsmusik und Unterricht."}</p>
                    <p className="jobDescription">{english ? "But ultimately my job was to practice." : "Und natürlich, das Üben"}.</p>
                </div>
                <div className="student-services">
                    <p>Jan 2016 — Jul 2018</p>
                    <p className="jobTitle">Graduate Enrollment Services Coordinator</p>
                    <p>University of Maryland, College Park</p>
                    <p className="jobDescription">{english ? "In this position I was the first point of contact for all School of Music Graduate Students and I worked closely with the Director for Graduate Studies." : "In dieser Stelle war ich die erste Kontakt für Graduate Students in der School of Music. Dabei habe ich eng mit dem Director of Graduate Studies zusammengearbeitet. "}</p>
                </div>
                <div className="RPO">
                    <p>Feb 2014 — Nov 2016</p>
                    <p className="jobTitle">{english ? "Section Violist" : "Tutti Bratschistin"}</p>
                    <p>Rochester Philharmonic Orchestra</p>
                    <p className="jobDescription">{english ? "As a member of the RPO viola section I took part in all symphony concerts and related rehearsals." : "Als festes Mitglied der Bratschengruppe des philharmonischen Orchesters habe ich an allen Sinfoniekonzerten und dazugehörigen Proben teilgenommen."}</p>
                </div>
            </article>
        </section >
    )
}

export default CV;