import Projects from "../components/projectsComponent/Projects";
import "./ProjectPage.css"
import { useParams } from "react-router-dom";
import { projects as projectData } from "../components/projectsComponent/projectData";

const Project = ({ english }) => {
    const params = useParams()
    const project = projectData.filter(project => project.name === params.id).map(project => project)

    return (
        <main className="projectMain">
            <section className="projectHero">
                <img src={project[0].img} alt={project[0].name} />
            </section>
            <section className="projectDescription">
                <h2>{project[0].name}</h2>
                <p>{english ? project[0].description.en : project[0].description.de}</p>
                <section className="projectLinks">
                    <a href={project[0].links.liveSite}>live site</a>
                    <a href={project[0].links.repo}>repo</a>
                </section>
            </section>
            <section className="projectGrid">
                {project[0].imageGrid.map((image, key) => {
                    return <img key={key} src={image} alt={project[0].name} className="imageGridimg" />
                })}
            </section>
            <section className="version2Section">
                <h2>Version 2.0</h2>
                <ul>
                    {english ?
                        project[0].V2.en.map((feature, key) => {
                            return <li key={key}>{feature}</li>
                        }) :
                        project[0].V2.de.map((feature, key) => {
                            return <li key={key}>{feature}</li>
                        })}
                </ul>
            </section>
            <Projects />
        </main>
    );
}

export default Project;
