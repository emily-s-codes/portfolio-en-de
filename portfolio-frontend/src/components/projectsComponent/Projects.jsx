import "./Projects.css"
import { projects } from "./projectData.js";
import arrow from "../../assets/img/Arrow1.svg"
import { Link } from "react-router-dom";

const Projects = ({ english }) => {
    return (
        <section className="projekte">
            <p className="yellow_highlight"><img src={arrow} alt="long right arrow" /> LOOK WHAT I CAN
                BUILD</p>
            <h2>{english ? "PROJECTS" : "PROJEKTE"}</h2>
            <section className="projektGrid">
                {
                    projects.map((project) => {
                        return (
                            <Link to={`/projects/${project.name}`} target="_blank" rel="noopener noreferrer" key={project.name}>
                                <div className="displayToggleDiv" >
                                    <div className="project" >
                                        <h3>{project.name}</h3>
                                        <div className="stackMap">
                                            {project.stack.map((tech, key) => {
                                                return <p key={key}>{tech}</p>
                                            })}
                                        </div>
                                    </div>
                                    <img src={`${project.img}`} alt={project.name} />
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </section>
    );
}

export default Projects;