import React from "react";
import {profileAPI} from "../Components/api/api";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    userProfile: null,
    userStatus: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {  ...state, userProfile: action.userProfile  }
        }
        case SET_USER_STATUS: {
            return {  ...state, userStatus: action.userStatus  }
        }
        default:
            return state
    }
}

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const getUserProfile = (userId) => (dispatch) =>{
    profileAPI.getProfileAx(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        });
}


export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})

export const getUserStatus = (userId) => (dispatch) =>{
    profileAPI.getProfileStatusAx(userId)
        .then(data => {
            dispatch(setUserStatus(data))
        });
}

export const updateUserStatus = (status) => (dispatch) =>{
    profileAPI.updateStatusAx(status)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        });
}


export default profileReducer;