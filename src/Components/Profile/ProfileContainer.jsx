import React from "react";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "./Profile";


export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=17734;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

    }

    render(){
        return (
            <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.userStatus} updateUserStatus={this.props.updateUserStatus} />
        )
    }

}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)