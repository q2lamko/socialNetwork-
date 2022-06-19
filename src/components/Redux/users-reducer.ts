import {APIResponseType, usersAPI} from "../../API/API";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../../utils/object-helper";
import {PhotosType} from "./profile-reducer";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {FormAction} from "redux-form";

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

export type UserType = {
    id: number
    name: string
    photos: PhotosType
    status: string
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/USERS/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
                }
        case "SN/USERS/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
               }
        case "SN/USERS/SET_USERS":
            return {
                ...state, users: action.users
            }
        case "SN/USERS/SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SN/USERS/SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "SN/USERS/SET_TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "SN/USERS/SET_TOGGLE_IS_FOLLOW":
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress.filter(id => id !== action.userId)]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const actions = {
    followSuccess:(userId: number) => ({type: "SN/USERS/FOLLOW", userId} as const),
    unfollowSuccess:(userId: number) => ({type: "SN/USERS/UNFOLLOW", userId} as const),
    setUsers:(users: Array<UserType>) => ({type: "SN/USERS/SET_USERS", users} as const),
    setCurrentPage:(currentPage: number) => ({type: "SN/USERS/SET_CURRENT_PAGE", currentPage} as const),
    setTotalUsersCount:(totalCount: number) => ({type: "SN/USERS/SET_TOTAL_USERS_COUNT", totalCount} as const),
    setToggleIsFetching:(isFetching: boolean) => ({type: "SN/USERS/SET_TOGGLE_IS_FETCHING", isFetching} as const),
    setToggleInFollow:(isFetching: boolean, userId: number) => ({type: "SN/USERS/SET_TOGGLE_IS_FOLLOW", isFetching, userId} as const),

}



export const requestUsers = (currentPage: number, pageSize: number):ThunkType => async (dispatch) => {
    dispatch(actions.setToggleIsFetching(true));
    dispatch(actions.setCurrentPage(currentPage));
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setToggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUsersCount(response.totalCount));
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsType>,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<APIResponseType>,
                                  actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.setToggleInFollow(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.setToggleInFollow(false, userId));
}

export const follow = (userId: number):ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
}

export const unfollow = (userId: number):ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
}

