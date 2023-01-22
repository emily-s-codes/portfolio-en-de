import "./CV.css"
import arrow from "../../assets/img/Arrow1.svg"

const CV = () => {
    return (
        <section className="experience" id="experience">
            <p className="yellow_highlight"><img src={arrow} alt="long right arrow" /> MEINE ERFAHRUNG</p>
            <h2>WERDEGANG</h2>
            <article className="workExperienceGrid">
                <div className="workExperienceHeadline">
                    <h3>Berufserfahrung</h3>
                </div>
                <div className="edHeadline">
                    <h3>Ausbildung</h3>
                </div>
                <div className="bootcamp">
                    <p>Sep 2022 — Feb 2023</p>
                    <p className="jobTitle">Full-Stack Web Development Bootcamp</p>
                    <ul>
                        <li>Front-End: HTML, CSS, JavaScript, React</li>
                        <li>Back-End: MongoDB, Express.js, React,
                            Node.js
                        </li>
                        <li>Plus: GitHub, Figma, Miro, SASS, Webflow, VS Code </li>
                    </ul>
                </div>
                <div className="MM">
                    <p>Aug 2013 — Mai 2015</p>
                    <p className="jobTitle">Master of Music</p>
                    <p>Eastman School of Music</p>
                    <ul>
                        <li>Kammer- und Orchestermusik</li>
                        <li>Musiktheorie</li>
                        <li>Musikgeschichte</li>
                        <li>Music Leadership</li>
                    </ul>
                </div>
                <div className="BM">
                    <p>Aug 2009 — Mai 2013</p>
                    <p className="jobTitle">Bachelor of Music</p>
                    <p>University of Maryland, College Park</p>
                    <ul>
                        <li>Kammer- und Orchestermusik</li>
                        <li>Grundlagen der Musiktheorie</li>
                        <li>Grundlagen der Musikgeschichte</li>
                        <li>Honors Humanities</li>
                    </ul>
                </div>
                <div className="violist">
                    <p>Jan 2009 — Mär 2021</p>
                    <p className="jobTitle">Freiberufliche Bratschistin</p>
                    <ul>
                        <li>Konzerte und Events aller Arten: Kammermusik, Orchester, Hochzeiten</li>
                        <li>Lehrerin in Einzelunterricht: Anfänger bis Fortgeschrittene jeden Alters</li>
                        <li>Lehrerin in Gruppenunterricht: Anfänger jeden Alters</li>
                    </ul>
                </div>
                <div className="student-services">
                    <p>Jan 2016 — Jul 2018</p>
                    <p className="jobTitle">Graduate Enrollment Services Coordinator</p>
                    <p>University of Maryland, College Park</p>
                    <ul>
                        <li>Beratung der Student:innen & Verwaltung der Studienakten</li>
                        <li>Kommunikation und Koordinierung zwischen School of Music und Graduate School</li>
                        <li>Schreiben und Redigieren des Schriftverkehrs im Namen des Graduate Directors</li>
                    </ul>
                </div>
                <div className="RPO">
                    <p>Feb 2014 — Nov 2016</p>
                    <p className="jobTitle">Tutti Bratschistin</p>
                    <p>Rochester Philharmonic Orchestra</p>
                    <ul>
                        <li>Festes Mitglied des philharmonischen Orchesters  für Teilnahme an allen Sinfoniekonzerten und dazugehörigen Proben </li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default CV;