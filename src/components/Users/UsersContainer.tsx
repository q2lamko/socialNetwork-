import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    follow, unfollow,
    InitialStateType,
    setCurrentPage,
    setToggleInFollow,
} from "../Redux/users-reducer";
import {AppStateType} from "../Redux/redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

type MapStateToPropsType = InitialStateType

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setToggleInFollow: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

interface IState {
    currentPage: number
}

class UsersContainer extends React.Component<UsersPropsType> {
    state: IState = {
        currentPage: 1,
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    componentDidUpdate(prevProps: UsersPropsType, prevState: IState): void {
        if (prevState.currentPage !== this.state.currentPage) {
            this.props.getUsers(this.state.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (currentPage: number) => {
        this.setState({currentPage})
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
                    followInProgress={this.props.followInProgress}
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
    setCurrentPage,
    setToggleInFollow,
    getUsers,
}
export type  UsersPropsType = MapDispatchToPropsType & MapStateToPropsType
// export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export const UserContainer = connect(mapStateToProps, DispatchObject)(UsersContainer);
export default UserContainer;