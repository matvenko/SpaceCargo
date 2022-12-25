import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            'API-KEY': '97977109-b8b5-4738-9f7f-10e06d8c5cb4'
        }
});


export const userAPI = {
    GetUsersAx(currentPage=1, pageSize=10){
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    FollowUserAx(userId){
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    },
    UnFollowUserAx(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    GetProfileAx(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    AuthMeAx(){
        return instance.get(`auth/me`, ).then(response => response.data)
    }
}

