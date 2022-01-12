import {ActionsTypes} from "./state";
import {Dispatch} from "redux";
import {authAPI} from "../../API/API";

const SET_USER_DATA = "SET_USER_DATA"

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

let initialState: InitialStateType = {
    userId: 2,
    email: "",
    login: "",
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export type dataType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) => {
    return {
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {userId, email, login} = response.data
                dispatch(setAuthUserData(userId, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
}
export const logout = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}






