import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {setUserProfile} from "../Redux/profile-reducer";

type ResponseType = {
    data: any
}



class ProfileContainer extends React.Component <ProfilePropsType> {

    componentDidMount() {
        axios.get<Array<UserType>>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            let a = response.data
            this.props.setUserProfile(a);
            debugger
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
    setUserProfile: (profile: Array<UserType>) => void
}

type mapStateToPropsType = {
    profile: any
}


let mapStateToProps = (state: AppStateType):mapStateToPropsType=> {
    return {
        profile: state.profilePage.profile
    }
}

export type  ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType
let DispatchObject: mapDispatchToPropsType = {setUserProfile}
export default connect(mapStateToProps, DispatchObject)(ProfileContainer);