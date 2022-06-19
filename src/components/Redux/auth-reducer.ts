
import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../../API/API";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captchaUrl: null as string | null
};

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/auth/SET_USER_DATA":
        case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
};

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null)=>
        ({type: "SN/auth/SET_USER_DATA", payload: {userId, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: "SN/auth/GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}} as const),
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe,captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
};

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>



