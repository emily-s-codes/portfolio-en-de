import "./EmailMe.css"

const EmailMe = () => {
    return (
        <section className="emailMeSection" id="emailMe">
            <section className="emailLeft">
                <h2>schieß<br />los</h2>
            </section>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="E-Mail address" />
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <input type="submit" />
            </form>
        </section>
    );
}

export default EmailMe;