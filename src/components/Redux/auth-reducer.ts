import {ActionsTypes} from "./state";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../../API/API";
import {setToggleInFollow, unfollowSuccess} from "./users-reducer";

const SET_USER_DATA = "SET_USER_DATA"

export type InitialStateType = {
    id: number
    email: string
    login: string
    autorisation: boolean

}
let initialState: InitialStateType = {
    id: 2,
    email: "",
    login: "",
    autorisation: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                autorisation: true
            }
        default:
            return state
    }
}

export type dataType = {
    id: number, email: string, login: string,
}
export const setAuthUserData = (data: dataType) => {
    return {
        type: SET_USER_DATA, data
    } as const
}

export const auth = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                // let {id,login,email} = response.data.data
                dispatch(setAuthUserData(response.data))
            }
        })
    }
}




