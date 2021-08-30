import React from 'react';

import {connect} from "react-redux";
import {StateType, UsersPageType} from "../Redux/state";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC} from "../Redux/users-reducer";


type MapStateToPropsType = {
    users: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userId:number) => void
    unfollow: (userId: number) => void
    setUsers: (users:UsersPageType) => void
}

let mapStateToProps = (state: StateType) => {
    return {
        users: state.UsersPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

export type  UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UserContainer;