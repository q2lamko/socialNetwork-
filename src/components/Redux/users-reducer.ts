import {ActionsTypes} from "./state";

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLLOW'
const SET_USERS = 'SET_USERS'


// export type UsersPageType = {
//     users: Array<UserType>
// }
export type UserType = {

    id: number
    followed: boolean



    name: string
    photos: {small: string, large: string}
    large: string
    small: string
    status: string
    uniqueUrlName: string
}

export type LocationType = {
    country: string
    city: string
}

 // type InitialStateType = typeof initialState
export type InitialStateType = {
    users: Array<UserType>
}

let initialState: InitialStateType= {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
        //     followed: false,
        //     fullName: 'Konstantin',
        //     status: 'learn react',
        //     location: {country: 'Russia', city: 'Novosibirsk'}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
        //     followed: true,
        //     fullName: 'Maxim',
        //     status: 'work react',
        //     location: {country: 'Russia', city: 'Novosibirsk'}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
        //     followed: true,
        //     fullName: 'Lena',
        //     status: 'work cook',
        //     location: {country: 'Russia', city: 'Novosibirsk'}
        // },
        // {
        //     id: 4,
        //     photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
        //     followed: false,
        //     fullName: 'Kosha',
        //     status: 'doing myav',
        //     location: {country: 'Russia', city: 'Novosibirsk'}
        // },
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
            console.log(action.users)
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

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS, users
    } as const
}