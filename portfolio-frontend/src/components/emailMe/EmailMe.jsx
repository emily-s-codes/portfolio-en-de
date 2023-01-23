import { Link } from "react-router-dom"
import "./EmailMe.css"


const EmailMe = ({ english }) => {

    const emailHandler = (e) => {
        emailMe(e)
        emailYou(e)
    }

    const emailYou = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        fetch(`${process.env.REACT_APP_BACKENDURL}/api/emailyou`, {
            method: 'POST',
            body: form
        })
            .then(console.log('emailed you'))
    }

    const emailMe = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        fetch(`${process.env.REACT_APP_BACKENDURL}/api/emailme`, {
            method: 'POST',
            body: form
        })
            .then(console.log('emailed me'))
    }

    return (
        <section className="emailMeSection" id="emailMe">
            <section className="emailLeft">
                <h2>{english ? "get in" : "schieß"}<br />{english ? "touch" : "los"}</h2>
            </section>
            <form onSubmit={emailHandler}>
                <input type="text" name="name" placeholder={english ? "Name" : "Name"} />
                <input type="email" name="email" placeholder={english ? "Email Address" : "E-Mail Adresse"} />
                <textarea name="message" placeholder={english ? "Message" : "Nachricht"} cols="30" rows="10"></textarea>
                <label htmlFor="datenschutz"><input type="checkbox" id="datenschutz" required />{english ? "I consent to Emily Sheil using my personal information (name and email address) to contact me." : "Ich willige ein, dass Emily Sheil meine personenbezogenen Daten (Name und E-Mail-Adresse) benutzen darf, um Kontakt mit mir aufzunehmen."}</label>
                <p>{english ? "By submitting this request you declare that you have read the " : "Mit dem Absenden dieser Anfrage erklären Sie, die "}<Link to="/datenschutz">{english ? "Privacy Policy" : "Datenschutzerklärung"}</Link>{english ? "." : "gelesen zu haben."}</p>
                <input type="submit" value={english ? "Submit" : "Senden"} />
            </form>
        </section>
    );
}

export default EmailMe;