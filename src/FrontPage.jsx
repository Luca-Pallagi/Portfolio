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
                        Ich bin in der Ausbildung als Applikationsentwickler an der Informatikmittelschule Buelrain.
                        In meiner Freizeit programmiere ich gerne kleine Projekte.
                        Ausserdem gehe ich ins Fitnessstudio und bouldere in der Halle.
                        Meine Projekte schreibe ich meist in React.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FrontPage