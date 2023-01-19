import Projects from "../components/projectsComponent/Projects";
import Techstack from "../components/techstack/Techstack";
import "./Project.css"

const Project = () => {
    return (
        <div>
            <h1>here is a single project</h1>
            <section className="projectHero">
                <p>image with frame</p>
            </section>
            <section className="projectDescription">
                <h2>Project Title</h2>
                <p>description</p>
                <button>to live site</button>
                <button>to repo</button>
            </section>
            <section className="projectGrid">
                <p>more preview images</p>
            </section>
            <Techstack />
            <Projects />
        </div>
    );
}

export default Project;
