import "./Techstack.css"
import htmlIcon from "../../assets/img/HTML.svg"
import cssIcon from "../../assets/img/CSS.svg"
import jsIcon from "../../assets/img/JavaScript-logo.svg"
import reactIcon from "../../assets/img/react.png"
import figmaIcon from "../../assets/img/Figma.svg"
import webflowIcon from "../../assets/img/webflow.png"
import sassIcon from "../../assets/img/sass.svg"
import miroIcon from "../../assets/img/miro.svg"
import mongodbIcon from "../../assets/img/mongodb.png"
import githubIcon from "../../assets/img/GitHub-Mark-64px.png"
import nodeIcon from "../../assets/img/nodejs.png"
import expressIcon from "../../assets/img/express.png"
import vscodeIcon from "../../assets/img/vscode.svg"

const Techstack = () => {
    return (
        <section className="techstack" id="techstack">
            <article>
                <h2>TECH STACK & TOOLS</h2>
            </article>
            <article className="techstack1">
                <div>
                    <img src={htmlIcon} alt="html" />
                    <p>HTML5</p>
                </div>
                <div>
                    <img src={cssIcon} alt="css" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={jsIcon} alt="js" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={reactIcon} alt="react" />
                    <p>React</p>
                </div>
            </article>
            <article className="techstack2">
                <div>
                    <img src={figmaIcon} alt="figma" />
                    <p>Figma</p>
                </div>
                <div>
                    <img src={webflowIcon} alt="Webflow" />
                    <p>Webflow</p>
                </div>
                <div>
                    <img src={sassIcon} alt="scss" />
                    <p>SASS/SCSS</p>
                </div>
                <div>
                    <img src={miroIcon} alt="miro" />
                    <p>Miro</p>
                </div>
                <div>
                    <img src={mongodbIcon} alt="mongoDB" />
                    <p>MongoDB</p>
                </div>
            </article>
            <article className="techstack3">
                <div>
                    <img src={githubIcon} alt="github" />
                    <p>GitHub</p>
                </div>
                <div>
                    <img src={nodeIcon} alt="nodeJS" />
                    <p>node.js</p>
                </div>
                <div>
                    <img src={expressIcon} alt="express" />
                    <p>express</p>
                </div>
                <div>
                    <img src={vscodeIcon} alt="visual studio code" />
                    <p>Visual Studio Code</p>
                </div>
            </article>
        </section>
    );
}

export default Techstack;