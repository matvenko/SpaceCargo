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
            return {...state, userProfile: action.userProfile}
        }
        case SET_USER_STATUS: {
            return {...state, userStatus: action.userStatus}
        }
        default:
            return state
    }
}

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileAx(userId);
    dispatch(setUserProfile(response))
}

export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileStatusAx(userId);
    dispatch(setUserStatus(response))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatusAx(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export default profileReducer;