import React from "react";
import {profileAPI} from "../Components/api/api";
import profile from "../Components/Profile/Profile";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'

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
        case SET_PROFILE_PHOTO: {
            return {...state, userProfile:{ ...state.userProfile, photos: action.photos}}
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
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhotoSuccess = (photos) => ({type: SET_PROFILE_PHOTO, photos})
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}

export default profileReducer;