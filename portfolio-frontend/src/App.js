import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import ProjectPage from './pages/ProjectPage'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import EmailMe from "./components/emailMe/EmailMe"
import { useState } from 'react';
import Scroll from './components/scroll/Scroll';

function App() {
  const [english, setEnglish] = useState(false)

  return (
    <div className="App">
      <Router>
        <Header english={english} setEnglish={setEnglish} />
        <Routes>
          <Route path={"/"} element={<Home english={english} />} />
          <Route path={"/projects/:id"} element={<ProjectPage english={english} />} />
          <Route path={"/impressum"} element={<Impressum english={english} />} />
        </Routes>
        <Scroll />
        <EmailMe english={english} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
