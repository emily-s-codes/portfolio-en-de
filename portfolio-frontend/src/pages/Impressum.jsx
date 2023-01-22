import "./Impressum.css"
import arrow from "../assets/img/Arrow1.svg"

const Impressum = ({ english }) => {
    return (
        <main className="impressumMain">
            <p className="yellow_highlight"><img src={arrow} alt="long right arrow" /> GOOD TO KNOW</p>
            <h2>IMPRESSUM</h2>
            <section>
                <p>{english ? "Emily Sheil is the sole provider of this website" : "Anbieter dieser Internetseiten ist Emily Sheil"}</p>
                <p>E-Mail: sheil[dot]emily1[at]gmail[dot]com </p>
            </section>
            <section>
                <h3>{english ? "Information pursuant to § 5 TMG" : "Angaben gemäß § 5 TMG"}</h3>
                <p>Emily Sheil</p>
                <p>Ferdinand-Jost-Str 18</p>
                <p>04299 Leipzig</p>
            </section>
            <section>
                <h3>{english ? "Contact" : "Kontakt"}</h3>
                <p>Tel: <a href="tel:0049015737577257">+49 0157 3757 7257</a>
                </p>
                <p>E-Mail: <a href="mailto:sheil.emily1@gmail.com">sheil[dot]emily1[at]gmail[dot]com</a></p>
            </section>
            <section>
                <p>{english ? "All rights to the contents of these web pages are reserved. Any commercial exploitation requires the prior consent of the copyright holder. This website may contain links to third-party websites. At the time the link was created, we were unable to identify any unlawful content of the target of the link. We cannot assume any liability for the current content and any changes after the link has been set." : "Alle Rechte an den Inhalten dieser Webseiten bleiben vorbehalten. Jede kommerzielle Verwertung bedarf der vorherigen Zustimmung des Rechtsinhabers. Diese Internetseite enthält gegebenenfalls Verknüpfungen (Links) zu Internetangeboten Dritter. Wir haben bei Setzen der Verknüpfung keine rechtswidrigen Inhalte des Verknüpfungsziels feststellen können. Für den aktuellen Inhalt und etwaige Änderungen nach Setzen der Verknüpfung können wir keine Gewähr übernehmen."}</p>
            </section>
        </main>
    );
}

export default Impressum;