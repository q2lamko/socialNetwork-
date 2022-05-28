import {ActionsTypes} from "./state";
import {UserType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"

export type PostType = {
    message: string
    id: number
    likesCount: number
}
export type PostsDataType = Array<PostType>
export type ProfilePageType = {
    PostsData: PostsDataType
    profile: UserType | null
    status: string
}
export type InitialStateType = ProfilePageType
let initialState: InitialStateType = {
    PostsData: [
        {message: "my first post on this page", id: 1, likesCount: 1},
        {message: "my second post on this page", id: 2, likesCount: 3},
        {message: "this is hardcore ", id: 3, likesCount: 3}
    ],
    profile: null,
    status: "",
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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
    }
    return state
}

export const addPostActionCreator = (newPost: string) => {
    return {
        type: ADD_POST, newPost
    } as const
}
export const setUserProfile = (profile: UserType) => {
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

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    // console.log(`мой айди ${userId}`)
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




