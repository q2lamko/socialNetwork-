import {ActionsTypes} from "./state";
import {usersAPI} from "../../API/API";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS'

export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: { small: string, large: string }
    large: string
    small: string
    status: string
    uniqueUrlName: string
    contacts: { facebook: string, vk: string, twitter: string, instagram: string }
    aboutMe: string
}
export type InitialStateType = typeof initialState;
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followInProgress: []
// }

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: true};
                    }
                    return e;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: false};
                    }
                    return e;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW_IN_PROGRESS:
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

export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS, users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalCount
    } as const
}
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    } as const
}
export const setToggleInFollow = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleInFollow(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(setToggleInFollow(false, userId))
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleInFollow(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(setToggleInFollow(false, userId))
        })
    }
}

