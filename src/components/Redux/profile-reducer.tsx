import {ActionsTypes} from "./state";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export type PostType = {
    message: string
    id: number
    likesCount: number
}
export type PostsDataType = Array<PostType>

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube:string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription:string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type InitialStateType = typeof initialState

let initialState = {
    PostsData: [
        {message: "my first post on this page", id: 1, likesCount: 1},
        {message: "my second post on this page", id: 2, likesCount: 3},
        {message: "this is hardcore ", id: 3, likesCount: 3}
    ] as PostsDataType,
    profile: null as ProfileType | null,
    status: "",
}

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                PostsData: [...state.PostsData, {
                    id: new Date().getTime(),
                    likesCount: 0,
                    message: action.newPost
                }],
            }
        case "DELETE_POST":
            return {
                ...state, PostsData: state.PostsData.filter(m => m.id !== action.postId)
            }
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS" :
            return {...state, status: action.status}
        case "SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    }
    return state
}

export const addPostActionCreator = (newPost: string) => {
    return {
        type: ADD_POST, newPost
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS, status
    } as const
}
export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST, postId
    } as const
}
export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    } as const
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (photos: PhotosType) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}




