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
<<<<<<< HEAD
       let userId = this.props.match.params.userId
        usersAPI.getSingleUser(userId).then(response => {
            this.props.setUserProfile(response);
=======
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
            let a = response.data
            this.props.setUserProfile(a);
>>>>>>> 3feb48bc7b9d7d9a53eba2c8ed49d75c882e438b
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
<<<<<<< HEAD
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        setUserProfile,
    }
    ,)(withRouter(ProfileContainer));
=======
//
// let routeredContainer = withRouter(ProfileContainer);
export default (connect(mapStateToProps, DispatchObject,)(withRouter(ProfileContainer)));
>>>>>>> 3feb48bc7b9d7d9a53eba2c8ed49d75c882e438b
