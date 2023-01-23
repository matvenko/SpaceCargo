import React from "react";
import {profileAPI} from "../Components/api/api";

const SET_USER_DATA = 'set-user-profile'
const LOGIN_USER = "LOGIN_USER";

let initialState = {
    userId: null,
    email: null,
    login: "space",
    isFetching: false,
    isAuth: false,
    authUserData: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, ...action.data, isAuth: true
            }
        }
        case LOGIN_USER:
            return ({
                ...state, authUserData: action.authUserData
            })
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
    return profileAPI.authMeAx().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

//
// export const setAuthUser = (authUserData) => ({type: LOGIN_USER, authUserData})

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    profileAPI.LoginUserAx(email, password, rememberMe).then(data => {
        if(data.resultCode === 0) {
            dispatch(getAuthUserData(data))
        }
    });
}


export const logOutUser = () => (dispatch) => {
    profileAPI.LogoutUserAx().then(data => {
        dispatch(setAuthUserData(null, null, null, false));
    });
}

export default authReducer;