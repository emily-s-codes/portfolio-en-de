import "./Projects.css"
import { projects } from "./projectData.js";
import arrow from "../../assets/img/Arrow1.svg"

const Projects = () => {
    return (
        <section class="projekte">
            <p class="yellow_highlight"><img src={arrow} alt="long right arrow" /> LOOK WHAT I CAN
                BUILD</p>
            <h2>PROJEKTE</h2>
            <section className="projektGrid">
                {
                    projects.map((project) => {
                        return (
                            <div className="displayToggleDiv" key={project.name}>
                                <div className="project" >
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <h3>{project.name}</h3>
                                        <div className="stackMap">
                                            {project.stack.map((tech, key) => {
                                                return <p key={key}>{tech}</p>
                                            })}
                                        </div>
                                    </a>
                                </div>
                                <img src={`${project.img}`} alt={project.name} />
                            </div>
                        )
                    })
                }
            </section>
        </section>
    );
}

export default Projects;