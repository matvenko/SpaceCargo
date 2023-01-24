import React from "react";
import PreLoader from "../common/PreLoader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


let Profile = (props) => {
    if(!props.userProfile){
        return <PreLoader/>
    }
    return (
        <div className={"twoColumnContent"}>

            <div><img src={props.userProfile.photos.small} /> </div>
            <div>{props.userProfile.lookingForAJobDescription}</div>

            <div>FullName</div>
            <div>{props.userProfile.fullName}</div>

            <div>About Me</div>
            <div>{props.userProfile.aboutMe}</div>

            <div>contacts</div>
            <div>
                <ul>
                    <li>{props.userProfile.contacts.facebook}</li>
                    <li>{props.userProfile.contacts.github}</li>
                    <li>{props.userProfile.contacts.instagram}</li>
                </ul>
            </div>

            <ProfileStatusWithHooks userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} />

        </div>
    )
}

export default Profile




