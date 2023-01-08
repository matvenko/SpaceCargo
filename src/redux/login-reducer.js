import React from "react";
import {profileAPI} from "../Components/api/api";

const LOGIN_USER = "LOGIN_USER";

let initialStete = {
    authUserData: null
}

const loginReducer = (state = initialStete, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return ({
                ...state, authUserData: action.authUserData
            })
        default:
            return state
    }
}


export const setAuthUser = (authUserData) => ({type: LOGIN_USER, authUserData})

export const loginUser = (authUserData) => (dispatch) => {
    profileAPI.LoginUserAx(authUserData).then(data => {
        dispatch(setAuthUser(data))
    });
}



export default loginReducer;