import {ActionsTypes} from "./state";

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: { small: string, large: string }
    large: string
    small: string
    status: string
    uniqueUrlName: string
}

export type LocationType = {
    country: string
    city: string
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1
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
        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS, users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalCount
    } as const
}


