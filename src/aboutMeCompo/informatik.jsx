import reactP from "./pictures/reactP.png"
import javaP from "./pictures/java.png"
import jsP from "./pictures/jsP.png"
import htmlP from "./pictures/html.png"

function Informatik(){

    return(
        <div id="informatik">
            <h3>Informatik Kentnisse</h3>
            <div id="InformatikPics">
                <img src={reactP}/>
                <img src={javaP}/>
                <img src={jsP}/>
                <img src={htmlP}/>
            </div>
            <p>
                Ich habe Erfahrung in der Webentwicklung mit React sowie mit reinem HTML, JavaScript, CSS und kann mit Java simple Backends erstellen.
                Zudem habe ich Grundkenntnisse in SQL und Python.
            </p>
            <p>
                Am Programmieren gefällt mir besonders, dass ich ständig Neues lerne und mich weiterentwickeln kann.
                In meiner Freizeit setze ich eigene kleine Projekte um, um praktische Erfahrungen zu sammeln und kreativ zu bleiben.
            </p>
            <p>
                Aktuell bin ich mit meinem Kollegen an einem Projekt am Arbeiten, bestehend aus einem Backend und Frontend.
                Das macht mir besonders Spass, da es Programmierung, Logik und kreatives Problemlösen miteinander verbindet.
            </p>
        </div>
    )
}

export default Informatik