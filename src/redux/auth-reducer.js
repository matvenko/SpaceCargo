import React from "react";
import {profileAPI} from "../Components/api/api";
const SET_USER_DATA = 'set-user-profile'

let initialState = {
    userId: null,
    email: null,
    login: "space",
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => (dispatch) => {
    profileAPI.AuthMeAx().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}


export default authReducer;