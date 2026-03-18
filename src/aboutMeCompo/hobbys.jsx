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
                    Am Wochenende gehe ich gerne klettern, besonders Bouldern.
                    Mich fasziniert der Adrenalinschub wenn ich ohne Seil eine Route bewaeltige und jeden Griff genau planen muss.
                    Besonders motiviert mich, meine Technik zu verbessern und immer schwierigere Routen zu schaffen.
                </p>
            </div>
            <div id="hobby-krafttraining">
                <img src={krafttraining} alt="Bild vom Bananenmir"/>
                <p>
                    Unter der Woche gehe ich drei bis viermal ins Fitnessstudio und verbinde mein Training mit Calisthenics.
                    Mich motiviert besonders, meine Fortschritte zu sehen und mich durch regelmaessiges Training stetig zu verbessern.
                    Oft trainiere ich mit einem Kollegen und wir treiben uns gegenseitig an.
                </p>
                <p>
                    Die Kombination aus Krafttraining und Calisthenics gefaellt mir sehr, da ich meine Kraft, Beweglichkeit und Koordination gleichzeitig verbessern kann und dabei auch etwas fuer meine Gesundheit tue.
                </p>
            </div>
        </div>
    )
}

export default Hobbys