import {ActionsTypes} from "./state";
import {UserType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type PostType = {
    message: string
    id: number
    likesCount: number
}
export type PostsDataType = Array<PostType>
export type ProfilePageType = {
    PostsData: PostsDataType
    newPostText: string
    profile: UserType | null
    status: string

}
export type InitialStateType = ProfilePageType
let initialState: InitialStateType = {
    newPostText: '',
    PostsData: [
        {message: 'my first post on this page', id: 1, likesCount: 1},
        {message: 'my second post on this page', id: 2, likesCount: 3},
        {message: 'this is realy hardcore ', id: 3, likesCount: 3}
    ],
    profile: null,
    status:'123',
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
                newPostText: "",
            }

        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS" :
            return {...state, status: action.status}
    }
    return state
}

export const addPostActionCreator = (newPost:string) => {
    return {
        type: ADD_POST, newPost
    } as const
}
export const setUserProfile = (profile: UserType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}

export const setStatus = (status :string) => {
    debugger
    return {
        type:SET_STATUS, status
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        if (!userId) {
            userId = "2"
        }
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            console.log(response)
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0 ) {
                dispatch(setStatus(status))
            }
        })
    }
}




