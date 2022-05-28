import {ActionsTypes} from "./state";
import {Dispatch} from "redux";
import {authAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA"

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null
};

export type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) => {
    return {
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
    } as const
};

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
};

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
};

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};






