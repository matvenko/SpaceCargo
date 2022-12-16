const FOLLOW = 'Follow'
const UNFOLLOW = 'UnFollow'
const SET_USERS = 'Set-Users'
const SET_CURRENT_PAGE = 'set-current-page'
const SET_TOTAL_USERS_COUNT = 'set-total-users-count'

let initialState = {
    users: [ ],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed: true}
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false} : u)
            }
        case SET_USERS:{
            return {  ...state, users: action.users  }
        }
        case SET_CURRENT_PAGE:{
            return {  ...state, currentPage: action.currentPage  }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {  ...state, totalUsersCount: action.totalUsersCount  }
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer;