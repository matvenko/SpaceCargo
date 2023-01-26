import React from "react";
import {profileAPI} from "../Components/api/api";

const SET_USER_DATA = 'spaceCargo/auth/set-user-profile'
const LOGIN_USER = "LOGIN_USER";

let initialState = {
    userId: null,
    email: null,
    login: "space",
    isFetching: false,
    isAuth: false,
    authUserData: null,
    authorizedUserId: 0
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, ...action.payload
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

export const getAuthUserData = () => async (dispatch) => {
    let response = await profileAPI.authMeAx();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await profileAPI.LoginUserAx(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(response.data))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        // dispatch(stopSubmit("login", {error: message}));
        console.log(message);
    }
}

export const logOutUser = () => async (dispatch) => {
    let response = await profileAPI.LogoutUserAx();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;