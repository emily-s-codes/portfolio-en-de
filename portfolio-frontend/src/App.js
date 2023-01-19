import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Project from './pages/Project'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import EmailMe from "./components/emailMe/EmailMe"
import { useState } from 'react';

function App() {
  const [english, setEnglish] = useState(false)

  return (
    <div className="App">
      <Router>
        <Header english={english} setEnglish={setEnglish} />
        <Routes>
          <Route path={"/"} element={<Home english={english} />} />
          <Route path={"/projects/:id"} element={<Project english={english} />} />
          <Route path={"/impressum"} element={<Impressum english={english} />} />
        </Routes>
        <EmailMe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
