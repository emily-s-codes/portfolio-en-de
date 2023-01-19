import "./Home.css"
import Techstack from "../components/techstack/Techstack"
import Hero from "../components/hero/Hero";
import About from "../components/about/About"
import CV from "../components/cv/CV"
import Projects from "../components/projectsComponent/Projects"

const Home = ({ english }) => {
    return (
        <div>
            <Hero english={english} />
            <About english={english} />
            <Techstack />
            <CV english={english} />
            <Projects />
        </div>
    );
}

export default Home;