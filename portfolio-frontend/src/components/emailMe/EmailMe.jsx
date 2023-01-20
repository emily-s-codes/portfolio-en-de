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
                <input type="submit" value={english ? "Submit" : "Senden"} />
            </form>
        </section>
    );
}

export default EmailMe;