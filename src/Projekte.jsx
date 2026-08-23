import quizShow from "./assets/quizShow.png";
import gambling from "./assets/gambling.png";
import tictactoe from "./assets/tictactoe.png";
import spaceInvaders from "./assets/spaceInvaders.png"
import kiwiGame from "./assets/KiwiGame.png"
import { Link } from "react-router-dom";
import './App.css';

function Projekte(){

    return(
        <>
            <div id="meineProjekte">
                <div className="project-card" onClick={() => window.open("https://github.com/Luca-Pallagi/QuizShow.git", "_blank")}>
                    <img alt="Quiz Show" src={quizShow}/>
                    <div className="project-card-content">
                        <h3>Quiz Show</h3>
                        <p>In der Quiz Show wird man je nach Ausgewählten Kategorien Fragen beantworten müssen.</p>
                    </div>
                </div>

                <div className="project-card" onClick={() => window.open("https://github.com/Luca-Pallagi/TicTacToe", "_blank")}>
                    <img alt="Tic Tac Toe" src={tictactoe}/>
                    <div className="project-card-content">
                        <h3>Tic Tac Toe</h3>
                        <p>In diesem TicTacToe gibt es drei Schwierigkeitsgrade und einem Modi mit Spieler gegen
                            Spieler</p>
                    </div>
                </div>

                <div className="project-card" onClick={() => window.open("https://github.com/Luca-Pallagi/Gambling-Game", "_blank")}>
                    <img alt="Gambling Game" src={gambling}/>
                    <div className="project-card-content">
                        <h3>Gambling Game</h3>
                        <p>In diesem Spiel kann man mit einer Slot Machine einfach fiktives Geld verdienen.</p>
                    </div>
                </div>
                <div className="project-card" onClick={() => window.open("https://github.com/Luca-Pallagi/space_invaders", "_blank")}>
                    <img alt="Space Invaders IMG" src={spaceInvaders}/>
                    <div className="project-card-content">
                        <h3>Space Invaders</h3>
                        <p>Bei diesem Projekt habe ich Space Invaders mit Pygame auf Python programmiert. Die Charaktere habe ich aus einem meiner beliebten Serien gewählt</p>
                    </div>
                </div>
                <div className="project-card" onClick={() => window.open("https://github.com/Luca-Pallagi/KiwiGame", "_blank")}>
                        <img alt="Kiwi Game IMG" src={kiwiGame}/>
                        <div className="project-card-content">
                            <h3>Kiwi Game</h3>
                            <p>Dies war mein Spiel welches ich als Abschlussprojekt für die 3. Sekundarschule programmiert habe.
                                Es ist ein einfaches Jump and Run Game geschrieben mit P5.js Github Pages: https://luca-pallagi.github.io/KiwiGame/</p>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Projekte;