import profilePicture from "./assets/img.png";

function FrontPage(){

    return(
        <>
            <div id="FrontPage">
                <img src={profilePicture} alt={"ProfilePicture"} id="ProfilePicture"/>
            </div>
        </>
    )
}

export default FrontPage