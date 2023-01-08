import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            'API-KEY': '97977109-b8b5-4738-9f7f-10e06d8c5cb4'
        }
});


export const userAPI = {
    getUsersAx(currentPage=1, pageSize=10){
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUserAx(userId){
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    },
    unFollowUserAx(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileAx(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getProfileStatusAx(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatusAx(status){
        return instance.put(`profile/status`, {
            status: status
        }).then(response => response.data)
    },
    authMeAx(){
        return instance.get(`auth/me`, ).then(response => response.data)
    },
    LoginUserAx(email, password, rememberMe=false){
        return instance.post(`auth/login`, {
            email, password, rememberMe
        })
    },
    LogoutUserAx(){
        return instance.delete(`auth/login`)
    }
}

