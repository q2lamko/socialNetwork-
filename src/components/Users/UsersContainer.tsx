import React from 'react';

import {connect} from "react-redux";

import Users from "./UsersC";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../Redux/users-reducer";
import {AppStateType} from "../Redux/redux-store";


type MapStateToPropsType = InitialStateType
    // users: Array<UserType>
    // pageSize: number
    // totalUsersCount: number
    // currentPage: number


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

export type  UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UserContainer;