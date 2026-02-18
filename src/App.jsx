import './App.css'
import FrontPage from "./FrontPage.jsx"
import { HashRouter, Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <>
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<FrontPage />} />
            </Routes>
        </HashRouter>
    </>
  )
}

export default App
