import boulderPic from './pictures/boulder.png';
import krafttraining from './pictures/krafttraining.png';
import "./aboutMe.css"

function Hobbys (){

    return(
        <div id="hobby">
            <h3>Meine Hobbys</h3>
            <div id="hobby-bouldern">
                <img src={boulderPic} alt="Bild vom Bouldern"/>
                <p>
                    Am Wochenende gehe ich gerne klettern, besonders Bouldern. Dabei fasziniert mich der Adrenalinschub,
                    wenn man ohne Seil eine Route bewältigt und jeden Griff genau planen muss. Besonders motiviert mich,
                    meine Technik zu verbessern und immer schwierigere Routen zu schaffen.
                </p>
            </div>
            <div id="hobby-krafttraining">
                <img src={krafttraining} alt="Bild vom Bananenmir"/>
                <p>
                    Unter der Woche gehe ich drei- bis viermal ins Fitnessstudio. Besonders motiviert mich,
                    meine Fortschritte zu sehen und mich durch regelmäßiges Training kontinuierlich zu verbessern.
                    Außerdem trainiere ich häufig mit einem Kollegen, wobei wir uns gegenseitig motivieren und antreiben.
                    Ergänzend zum Krafttraining betreibe ich Calisthenics.
                    Mir gefällt dabei besonders, dass ich meine Beweglichkeit, Kraft und Koordination verbessern kann,
                    während ich gleichzeitig etwas für meine Gesundheit tue.
                </p>
            </div>
        </div>
    )
}

export default Hobbys