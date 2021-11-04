import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {setUserProfile} from "../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            let a = response.data
            this.props.setUserProfile(a);
        })
    }
    render() {
        return (
            <Profile
                profile={this.props.profile}
                setUserProfile={this.props.setUserProfile}
            />
        )
    }
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: UserType ) => void
}
type mapStateToPropsType = {
    profile: UserType | null
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
export type  ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType
let DispatchObject: mapDispatchToPropsType = {setUserProfile}

type PathParamsType = {
    zopa: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;
//
let routeredContainer = withRouter(ProfileContainer);
export default (connect(mapStateToProps, DispatchObject,)(withRouter(ProfileContainer)));