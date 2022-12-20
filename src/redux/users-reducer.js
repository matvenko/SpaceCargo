const FOLLOW = 'Follow'
const UNFOLLOW = 'UnFollow'
const SET_USERS = 'Set-Users'
const SET_CURRENT_PAGE = 'Set-current-page'
const SET_TOTAL_USERS_COUNT = 'Set-total-users-count'
const TOGGLE_IS_FETCHING = 'fetching'

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed: false}
                    }
                    return u;
                })
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
        case TOGGLE_IS_FETCHING:{
            return {  ...state, isFetching: action.isFetching  }
        }
        default:
            return state
    }
}

export const followUser = (userId) => ({type: FOLLOW, userId})
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer;