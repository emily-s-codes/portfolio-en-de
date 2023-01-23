import "./Datenschutz.css"
import arrow from "../assets/img/Arrow1.svg"

const Datenschutz = ({ english }) => {
    return (
        <main className="datenschutzMain">
            <p className="yellow_highlight"><img src={arrow} alt="long right arrow" /> YOUR DATA IS SAFE</p>
            <h2>{english ? "Data protection notice in accordance with the GDPR" : "Datenschutzhinweis gemäß DSGVO"}</h2>
            <section>
                <h3>{english ? "Scope and purpose of data processing" : "Umfang und Zweck der Datenverarbeitung"}</h3>
                <p>{english ? "When you visit and browse this site, none of your data is saved or tracked. In the event you voluntarily submit your name, email address and a message in the form and click submit, the data that you transmit will used only to send an email to me and as a convenience, a copy of your email to you. I do not save this information." : "Wenn Sie diese Seite besuchen und durchblättern, werden keine Ihrer Daten gespeichert oder nachverfolgt. Für den Fall, dass Sie freiwillig Ihren Namen, Ihre E-Mail-Adresse und eine Nachricht in das Formular eingeben und auf 'Senden' klicken, werden die von Ihnen übermittelten Daten nur dazu verwendet, eine E-Mail an mich zu senden und als Annehmlichkeit eine Kopie Ihrer E-Mail an Sie. Ich speichere diese Informationen nicht."} </p>
            </section>
            <section>
                <h3>{english ? "Third-party plugins, Commissioned service providers, and Cookies" : "Plugins von Drittanbietenden, eingesetzte Auftragsdienstleistende, und Cookies"}</h3>
                <p>{english ? "Easy, I don't use any." : "Ganz einfach, ich verwende keine."} </p>
            </section>
        </main>
    );
}

export default Datenschutz;