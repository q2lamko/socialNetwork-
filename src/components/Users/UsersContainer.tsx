import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../Redux/users-reducer";
import {AppStateType} from "../Redux/redux-store";
import axios from "axios";
import Users from "./Users";


type MapStateToPropsType = InitialStateType
// users: Array<UserType>
// pageSize: number
// totalUsersCount: number
// currentPage: number


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type ResponseType = {
    error: string
    items: Array<UserType>
    totalCount: number
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            let a = response.data.items
            this.props.setUsers(a);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            let a = response.data.items
            this.props.setUsers(a)
        })
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
            />
        )
    }
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export type  UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default UserContainer;