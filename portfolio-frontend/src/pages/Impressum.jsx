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
                <h2>{english ? "Disclaimer" : "Haftungsausschluss"}</h2>
                <h3>{english ? "Liability for contents" : "Haftung für Inhalte"}</h3>
                <p>{english ?
                    "The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with the general laws pursuant to § 7 Para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under the general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove the relevant content immediately." :
                    "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."}</p>
                <h3>{english ? "Liability for links" : "Haftung für Links"}</h3>
                <p>{english ?
                    "Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately." :
                    "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."}</p>
                <h3>{english ? "Copyright" : "Urheberrecht"}</h3>
                <p>{english ?
                    "The contents and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately." :
                    "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."}</p>
                <h3>{english ? "Data protection" : "Datenschutz"}</h3>
                <p>{english ?
                    "The use of our website is generally possible without providing personal data. As far as on our sides personal data (such as name, address or e-mail addresses) are collected, this is as far as possible on a voluntary basis. This data will not be passed on to third parties without your express consent."
                    : "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben."}</p>
                <p>{english ?
                    "We point out that data transmission over the Internet (eg communication by e-mail) security gaps. A complete protection of data against access by third parties is not possible." :
                    "Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich."}</p>
                <p>{english ?
                    "The use of contact data published within the framework of the imprint obligation by third parties for the purpose of sending unsolicited advertising and information material is hereby expressly prohibited. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as spam e-mails." :
                    "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."}</p>
            </section >
            <section>
                <p>{english ?
                    "The English translation of this disclaimer was created using DeepL and cannot be guaranteed to be legally accurate. In all legal proceedings the original German text shall be considered the only valid text." :
                    "Die englische Übersetzung dieses Haftungsausschlusses wurde mit Hilfe von DeepL erstellt und es kann nicht garantiert werden, dass sie rechtlich korrekt ist. In allen rechtlichen Verfahren gilt der deutsche Originaltext als der einzig gültige Text."}</p>
            </section>
        </main >
    );
}

export default Impressum;