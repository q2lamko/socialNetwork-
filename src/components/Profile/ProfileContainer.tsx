import React from "react";
import Profile from "./Profile";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getStatus(userId as number)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: number ) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
}
type mapStateToPropsType = {
    profile: UserType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean | null
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

type PathParamsType = {
    userId: string | undefined
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getUserProfile,
            getStatus,
            updateStatus
        }),
    // WithAuthRedirect,
    withRouter,
)(ProfileContainer)


