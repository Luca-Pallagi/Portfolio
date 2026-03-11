import boulderPic from './pictures/boulder.png';

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

            </div>
        </div>
    )
}

export default Hobbys