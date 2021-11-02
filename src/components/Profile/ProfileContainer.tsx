import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {InitialStateType, UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

import {setUserProfile} from "../Redux/profile-reducer";


type ResponseType = {
    error: string
    items: Array<UserType>
    totalCount: number
}

class ProfileContainer extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            let a = response.data.items
            this.props.setUserProfile(response.data.items);

        })

    }

    render() {
        return (
            <Profile
                {...this.props}/>
        )
    }
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type mapStateToPropsType = InitialStateType
let mapStateToProps = (state: any) => ({})

type  UsersPropsType = mapDispatchToPropsType
let DispatchObject: mapDispatchToPropsType = {setUserProfile}
export default connect(mapStateToProps, DispatchObject)(ProfileContainer);