import {ActionsTypes} from "./state";

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLLOW'
const SET_USERS = 'SET_USERS'

export type InitialStateType = typeof initialState

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Konstantin',
            status: 'learn react',
            location: {country: 'Russia', city: 'Novosibirsk'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Maxim',
            status: 'work react',
            location: {country: 'Russia', city: 'Novosibirsk'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Lena',
            status: 'work cook',
            location: {country: 'Russia', city: 'Novosibirsk'}
        },
        {
            id: 4,
            followed: false,
            fullName: 'Kosha',
            status: 'doing myav',
            location: {country: 'Russia', city: 'Novosibirsk'}
        },
    ]
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
                ...state, users: [...state.users, ...action.users]
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

export const setUsersAC = (users: Array<any>) => {
    return {
        type: SET_USERS, users
    } as const
}