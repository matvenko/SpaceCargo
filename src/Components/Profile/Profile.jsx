import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import PreLoader from "../common/PreLoader";
import { useParams } from 'react-router-dom';
import {profileAPI} from "../api/api";


export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends  React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=17734;
        }
        profileAPI.GetProfileAx(userId)
            .then(data => {
               this.props.setUserProfile(data)
            });
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let Profile = (props) => {
    if(!props.userProfile){
        return <PreLoader/>
    }
    console.log(props.userProfile)
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
        </div>
    )
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile
})


export default  connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));