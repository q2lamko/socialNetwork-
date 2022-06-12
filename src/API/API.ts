import axios from "axios";
import {UserType} from "../components/Redux/users-reducer";
import {PhotosType, ProfileType} from "../components/Redux/profile-reducer";

type UsersResponseType = {
    error: string
    items: Array<UserType>
    totalCount: number
}
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "aadc669d-1160-4bb6-9593-bfb607ec835d"
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getProfile(userId: number) {
        return instance.get<any>(`profile/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<getFollowResponseType>(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post<getFollowResponseType>(`follow/${userId}`)
    }
}

export const profileAPI = {
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType<SavePhotoResponseDataType>>("profile/status", {status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<any>("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile (profile:ProfileType) {
        return instance.put<APIResponseType>("profile", profile)
    }
}
type SavePhotoResponseDataType = {
    photos: PhotosType
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

type getAuthResponseType = {
    data: { id: number, login: string, email: string, isAuth: boolean }
    resultCode: number
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<getAuthResponseType>("auth/me")
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<getAuthResponseType>("auth/login", {
            email,
            password,
            rememberMe
        })
    },
    logout() {
        return instance.delete<getAuthResponseType>("auth/login").then(response => response.data)
    }
}

type getFollowResponseType = {
    data: { userId: number, login: string, email: string, isAuth: boolean }
    resultCode: number
}


