import React from 'react';
import Profile from "./Profile";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {setUserProfile} from "../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../API/API";

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
       let userId = this.props.match.params.userId
        usersAPI.getSingleUser(userId).then(response => {
            this.props.setUserProfile(response);
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
    setUserProfile: (profile: UserType) => void
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
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        setUserProfile,
    }
    ,)(withRouter(ProfileContainer));