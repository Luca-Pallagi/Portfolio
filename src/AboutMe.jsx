import Hobbys from "./aboutMeCompo/hobbys.jsx"
import Informatik from "./aboutMeCompo/informatik.jsx"
import "./aboutMeCompo/aboutMe.css"

function AboutMe() {

    return (
        <>
            <div id="aboutMe">
                <Informatik/>
                <Hobbys/>
            </div>
        </>
    )
}

export default AboutMe;