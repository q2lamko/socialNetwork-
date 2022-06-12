import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {getStatus, getUserProfile, ProfileType, savePhoto, saveProfile, updateStatus} from "../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string | undefined
}

type PropsType = RouteComponentProps<PathParamsType> & mapDispatchToPropsType & mapStateToPropsType;

class ProfileContainer extends React.Component <PropsType> {
    refreshProfile() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getStatus(userId as number)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (Number(this.props.match.params.userId) !== Number(prevProps.match.params.userId)) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File | undefined) => void
    saveProfile:(profile: ProfileType) => Promise<any>
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getUserProfile,
            getStatus,
            updateStatus,
            savePhoto,
            saveProfile
        }),
    // WithAuthRedirect,
    withRouter,
)(ProfileContainer)


