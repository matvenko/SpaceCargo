import axios from "axios";

const http = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '97977109-b8b5-4738-9f7f-10e06d8c5cb4'
    }
});


export const userAPI = {
    getUsersAx(currentPage = 1, pageSize = 10) {
        return http.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUserAx(userId) {
        return http.post(`follow/${userId}`, {}).then(response => response.data)
    },
    unFollowUserAx(userId) {
        return http.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileAx(userId) {
        return http.get(`profile/${userId}`).then(response => response.data)
    },
    getProfileStatusAx(userId) {
        return http.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatusAx(status) {
        return http.put(`profile/status`, {
            status: status
        }).then(response => response.data)
    },
    authMeAx() {
        return http.get(`auth/me`,).then(response => response.data)
    },
    LoginUserAx(email, password, rememberMe = false) {
        return http.post(`auth/login`, {
            email, password, rememberMe
        })
    },
    LogoutUserAx() {
        return http.delete(`auth/login`)
    }
}

