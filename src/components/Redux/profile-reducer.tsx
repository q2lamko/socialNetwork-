import {profileAPI, usersAPI} from "../../API/API";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

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
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

let initialState = {
    PostsData: [
        {message: "my first post on this page", id: 1, likesCount: 1},
        {message: "my second post on this page", id: 2, likesCount: 3},
        {message: "this is hardcore ", id: 3, likesCount: 3}
    ] as PostsDataType,
    profile: null as ProfileType | null,
    status: "",
}

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST":
            return {
                ...state,
                PostsData: [...state.PostsData, {
                    id: new Date().getTime(),
                    likesCount: 0,
                    message: action.newPostText
                }],
            }
        case "SN/PROFILE/DELETE_POST":
            return {
                ...state, PostsData: state.PostsData.filter(m => m.id !== action.postId)
            }
        case "SN/PROFILE/SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SN/PROFILE/SET_STATUS" :
            return {...state, status: action.status}
        case "SN/PROFILE/SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    }
    return state
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: "SN/PROFILE/ADD-POST", newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: "SN/PROFILE/SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) => ({type: "SN/PROFILE/SET_STATUS", status} as const),
    deletePost: (postId: number) => ({type: "SN/PROFILE/DELETE_POST", postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: "SN/PROFILE/SAVE_PHOTO_SUCCESS", photos} as const)
}
// export const addPostActionCreator = (newPost: string) => {
//     return {
//         type: ADD_POST, newPost
//     } as const
// }
// export const setUserProfile = (profile: ProfileType) => {
//     return {
//         type: SET_USER_PROFILE, profile
//     } as const
// }
// export const setStatus = (status: string) => {
//     return {
//         type: SET_STATUS, status
//     } as const
// }
// export const deletePost = (postId: number) => {
//     return {
//         type: DELETE_POST, postId
//     } as const
// }
// export const savePhotoSuccess = (photos: PhotosType) => {
//     return {
//         type: SAVE_PHOTO_SUCCESS, photos
//     } as const
// }

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response.data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try { let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {
        //
    }

}

export const savePhoto = (photos: PhotosType): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.data.resultCode === 0) {
        if (userId !== null) {
            await dispatch(getUserProfile(userId))
    } else {
        throw new Error("userId can't be null")
    }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.data.messages[0] }))
        return Promise.reject(data.data.messages[0])
    }
}


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>


