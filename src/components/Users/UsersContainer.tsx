import React from "react";
import {connect} from "react-redux";
import {
    requestUsers,
    follow, unfollow,
    InitialStateType,
    setCurrentPage,
    setToggleInFollow,
} from "../Redux/users-reducer";
import {AppStateType} from "../Redux/redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
     getUsersSelector
} from "../Redux/users-selectors";

class UsersContainer extends React.Component<UsersPropsType> {
    state: IState = {
        currentPage: 1,
    }

    componentDidMount() {
        const {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
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

// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followInProgress: state.usersPage.followInProgress
//     }
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        // users: getUsers(state),
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setToggleInFollow: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type MapStateToPropsType = InitialStateType

interface IState {
    currentPage: number
}
let DispatchObject: MapDispatchToPropsType = {
    follow,
    unfollow,
    setCurrentPage,
    setToggleInFollow,
    getUsers: requestUsers,
}
export type  UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export default compose(
    connect(mapStateToProps, DispatchObject)
)(UsersContainer)
