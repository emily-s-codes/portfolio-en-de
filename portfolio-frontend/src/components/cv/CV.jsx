import "./CV.css"
import arrow from "../../assets/img/Arrow1.svg"

const CV = () => {
    return (
        <section class="experience" id="experience">
            <p class="yellow_highlight"><img src={arrow} alt="long right arrow" /> MEINE ERFAHRUNG</p>
            <h2>WERDEGANG</h2>
            <article class="workExperienceGrid">
                <div class="workExperienceHeadline">
                    <h3>Berufserfahrung</h3>
                </div>
                <div class="edHeadline">
                    <h3>Ausbildung</h3>
                </div>
                <div class="bootcamp">
                    <p>Sep 2022 — Feb 2023</p>
                    <p class="jobTitle">Full-Stack Web Development Bootcamp</p>
                    <ul>
                        <li>Front-End: HTML, CSS, JavaScript, React</li>
                        <li>Back-End: MongoDB, Express.js, React,
                            Node.js
                        </li>
                        <li>Plus: GitHub, Figma, Miro, SASS, Webflow, VS Code </li>
                    </ul>
                </div>
                <div class="MM">
                    <p>Aug 2013 — Mai 2015</p>
                    <p class="jobTitle">Master of Music</p>
                    <p>Eastman School of Music</p>
                    <ul>
                        <li>Kammer- und Orchestermusik</li>
                        <li>Musiktheorie</li>
                        <li>Musikgeschichte</li>
                        <li>Music Leadership</li>
                    </ul>
                </div>
                <div class="BM">
                    <p>Aug 2009 — Mai 2013</p>
                    <p class="jobTitle">Bachelor of Music</p>
                    <p>University of Maryland, College Park</p>
                    <ul>
                        <li>Kammer- und Orchestermusik</li>
                        <li>Grundlagen der Musiktheorie</li>
                        <li>Grundlagen der Musikgeschichte</li>
                        <li>Honors Humanities</li>
                    </ul>
                </div>
                <div class="violist">
                    <p>Jan 2009 — Mär 2021</p>
                    <p class="jobTitle">Freiberufliche Bratschistin</p>
                    <ul>
                        <li>Konzerte und Events aller Arten: Kammermusik, Orchester, Hochzeiten</li>
                        <li>Lehrerin in Einzelunterricht: Anfänger bis Fortgeschrittene jeden Alters</li>
                        <li>Lehrerin in Gruppenunterricht: Anfänger jeden Alters</li>
                    </ul>
                </div>
                <div class="student-services">
                    <p>Jan 2016 — Jul 2018</p>
                    <p class="jobTitle">Graduate Enrollment Services Coordinator</p>
                    <p>University of Maryland, College Park</p>
                    <ul>
                        <li>Beratung der Student:innen & Verwaltung der Studienakten</li>
                        <li>Kommunikation und Koordinierung zwischen School of Music und Graduate School</li>
                        <li>Schreiben und Redigieren des Schriftverkehrs im Namen des Graduate Directors</li>
                    </ul>
                </div>
                <div class="RPO">
                    <p>Feb 2014 — Nov 2016</p>
                    <p class="jobTitle">Tutti Bratschistin</p>
                    <p>Rochester Philharmonic Orchestra</p>
                    <ul>
                        <li>Tätigkeit in der Bratschen-Gruppe des Berufsorchesters</li>
                        <li>Alle Sinfoniekonzerten und dazugehörigen
                            Proben der Saison</li>
                        <li>1. Vertretung in der Bratschen Gruppe bei allen anderen Aufführungen</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default CV;