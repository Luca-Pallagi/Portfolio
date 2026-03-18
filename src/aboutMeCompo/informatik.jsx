import reactP from "./pictures/reactP.png"
import javaP from "./pictures/java.png"

function Informatik(){

    return(
        <div id="informatik">
            <h3>Informatik Kentnisse</h3>
            <div id="InformatikPics">
                <img src={reactP}/>
                <img src={javaP}/>
            </div>
            <p>
                Ich habe Erfahrung in der Webentwicklung mit React sowie mit reinem HTML, JavaScript und CSS.
                Zudem habe ich Grundkenntnisse in SQL und kann mit Java einfache Backends erstellen..
            </p>
            <p>
                Am Programmieren gefaellt mir besonders, dass ich staendig Neues lernen und mich weiterentwickeln kann.
                In meiner Freizeit setze ich eigene kleine Projekte um, um praktische Erfahrungen zu sammeln und kreativ zu bleiben.
            </p>
            <p>
                Aktuell lerne ich Python und arbeite an einer eigenen kleinen KI.
                Das macht mir besonders Spass, da es Programmierung, Logik und kreatives Problemloesen miteinander verbindet.
            </p>
        </div>
    )
}

export default Informatik