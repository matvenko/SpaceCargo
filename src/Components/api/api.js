import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/"
});


export const userAPI = {
    axGetUsers(currentPage=1, pageSize=10){
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    axUnFollowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    axFollowUser(userId){
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    }
}

export const profileAPI = {
    axGetProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    axAuthMe(){
        return instance.get(`auth/me`, ).then(response => response.data)
    }
}

