import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    InitialStateType,
    setCurrentPage,
    setToggleInFollow,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../Redux/users-reducer";
import {AppStateType} from "../Redux/redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../API/API";

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
    setToggleIsFetching: (isFetching: boolean) => void
    setToggleInFollow: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator:  (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, this.props.pageSize).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    : null}
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
                    isFetching={this.props.isFetching}
                    setToggleIsFetching={this.props.setToggleIsFetching}
                    setToggleInFollow={this.props.setToggleInFollow}
                    followInProgress={this.props.followInProgress}
                    getUsersThunkCreator={this.props.getUsersThunkCreator}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followInProgress: state.UsersPage.followInProgress
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching: boolean) => {
//             dispatch(setToggleIsFetchingAC(isFetching))
//
//         }
//     }
// }
let DispatchObject: MapDispatchToPropsType = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    setToggleInFollow,
    getUsersThunkCreator
}
export type  UsersPropsType = MapDispatchToPropsType & MapStateToPropsType
// export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export const UserContainer = connect(mapStateToProps, DispatchObject)(UsersContainer);
export default UserContainer;