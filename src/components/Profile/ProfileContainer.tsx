import React from 'react';
import Profile from "./Profile";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {getUserProfile} from "../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from 'redux';

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        // if (!userId) {
        //     userId = "2"
        // }
        // usersAPI.getSingleUser(userId).then(response => {
        //     this.props.setUserProfile(response)
        // })
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                // setUserProfile={this.props.setUserProfile}
                // getUserProfile={this.props.getUserProfile}
            />
        )
    }
}

// let AuthRedirectComponent = (props: PropsType) => {
//     if (!this.props.autorisation) return <Redirect to={'/login'}/>
//     return <ProfileContainer {...props}/>
// }

type mapDispatchToPropsType = {
    // setUserProfile: (profile: UserType) => void
    getUserProfile: (userId: string) => void
}
type mapStateToPropsType = {
    profile: UserType | null

}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,

    }
}
export type  ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

// export default WithAuthRedirect(connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
//     {
//         getUserProfile
//     }
//     ,)(withRouter(ProfileContainer)));

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {
            getUserProfile
        }),
    WithAuthRedirect,
    withRouter,
)(ProfileContainer)


