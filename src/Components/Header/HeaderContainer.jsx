import React from 'react';
import './header.css'
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {profileAPI} from "../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        profileAPI.AuthMeAx().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);