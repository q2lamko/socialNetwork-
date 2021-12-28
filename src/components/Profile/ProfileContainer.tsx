import React from 'react';
import Profile from "./Profile";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {getStatus, getUserProfile,updateStatus} from "../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from 'redux';

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
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
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type mapStateToPropsType = {
    profile: UserType | null
    status: string
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
export type  ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {
            getUserProfile,
            getStatus,
            updateStatus
        }),
    // WithAuthRedirect,
    withRouter,
)(ProfileContainer)


