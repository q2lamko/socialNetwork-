import {ActionsTypes} from "./state";
import {UserType} from "./users-reducer";
import {Dispatch} from "redux";
import {usersAPI} from "../../API/API";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

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

}
export type InitialStateType = ProfilePageType
let initialState: InitialStateType = {
    newPostText: 'it-kamaz',
    PostsData: [
        {message: 'my first post on this page', id: 1, likesCount: 1},
        {message: 'my second post on this page', id: 2, likesCount: 3},
        {message: 'this is realy hardcore ', id: 3, likesCount: 3}
    ],
    profile: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                PostsData: [...state.PostsData, {
                    id: new Date().getTime(),
                    likesCount: 0,
                    message: state.newPostText
                }],
                newPostText: "",
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPost}
        case "SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
    }
    return state
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const setUserProfile = (profile: UserType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}
export const newTextChangeActionCreator = (newPost: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPost: newPost
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        if (!userId) {
            userId = "2"
        }
        usersAPI.getSingleUser(userId).then(response => {
            dispatch(setUserProfile(response))
        })

    }
}
