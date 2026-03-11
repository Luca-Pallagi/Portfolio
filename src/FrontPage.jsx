//import profilePicture from "./assets/img.png";
import profilePicture from "./assets/ProfilePicture.jpeg";

function FrontPage(){

    return(
        <>
            <div id="FrontPage">
                <img src={profilePicture} alt={"ProfilePicture"} id="ProfilePicture"/>
                <div id="FP-AboutMe">
                    <h2 id="myName">Luca Pallagi</h2>
                    <em>Ein Wenig über mich</em>
                    <p>
                        Ich bin in der Ausbildung als Applikationsentwickler in der Informatikmittelschule Buelrain.
                        In meiner Freizeit programmiere ich gerne kleine Projekte, gehe ins Fitnessstudio und bouldere gerne in der Halle.
                        Meine Projekte sind meistens in React geschrieben.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FrontPage