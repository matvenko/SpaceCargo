import React from "react";
const SET_USER_PROFILE = 'set-user-profile'

let initialState = {
    userProfile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {  ...state, userProfile: action.userProfile  }
        }
        default:
            return state
    }
}

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export default profileReducer;