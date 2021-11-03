import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {InitialStateType, setUserProfile} from "../Redux/profile-reducer";

type ResponseType = {
    error: string
    items: Array<UserType>
    totalCount: number
}

class ProfileContainer extends React.Component <ProfilePropsType> {

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            let a = response.data.items
            this.props.setUserProfile(response.data.items);
        })
    }
    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type mapStateToPropsType = any
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export type  ProfilePropsType = mapDispatchToPropsType &mapStateToPropsType
let DispatchObject: mapDispatchToPropsType = {setUserProfile}
export default connect(mapStateToProps, DispatchObject)(ProfileContainer);