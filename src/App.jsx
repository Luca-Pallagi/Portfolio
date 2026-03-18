import './App.css'
import FrontPage from "./FrontPage.jsx"
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import AboutMe from "./AboutMe.jsx";
import Projekte from "./Projekte.jsx";
import { SocialIcon } from "react-social-icons";

function App() {

  return (
    <>
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutMe">About Me</Link>
                    </li>
                    <li>
                        <Link to="/meineProjekte">Meine Projekte</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="/meineProjekte" element={<Projekte />} />
            </Routes>
        </HashRouter>
        <section className="links" id="links">
            <div className="socials">
                <SocialIcon url="https://github.com/Luca-Pallagi" className="socialicon"/>
                <SocialIcon url="https://www.youtube.com/" className="socialicon"/>
                <SocialIcon url="https://discord.gg/23Q5Zy4h" className="socialicon"/>
            </div>
        </section>
    </>
  )
}

export default App