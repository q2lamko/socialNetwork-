import axios from "axios";
import {UserType} from "../components/Redux/users-reducer";
import {log} from "util";

type UsersResponseType = {
    error: string
    items: Array<UserType>
    totalCount: number
}
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "aadc669d-1160-4bb6-9593-bfb607ec835d"
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getProfile(userId: string) {
        return instance.get<UserType>(`profile/` + userId)
            .then(response => response.data)

        // profileAPI.getSingleUser(userId)
    },
    unfollow(userId: number) {
        return instance.delete<getFollowResponseType>(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post<getFollowResponseType>(`follow/${userId}`)
    }
}

export const profileAPI = {
    getStatus(userId: string) {
        return instance.get<any>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<updateStatusType>(`profile/status`, {status})
    }
}

type getStatus ={
    data:string
}
type updateStatusType = {
    resultCode: number
    messages: string
    data: any
}

type getAuthResponseType = {
    data: { id: number, login: string, email: string }
    resultCode: number
}
export const authAPI = {
    getAuth() {
        return instance.get<getAuthResponseType>(`auth/me`).then(response => response.data)
    }
}

type getFollowResponseType = {
    data: { id: number, login: string, email: string }
    resultCode: number
}


