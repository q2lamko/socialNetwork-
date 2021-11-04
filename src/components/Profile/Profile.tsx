import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {UserType} from "../Redux/users-reducer";


//
// type PropsType = {
//     // profilePage: ProfilePageType
//     // dispatch:(action: ActionsTypes)=> void
//     store: StoreType
// }
type ProfileType = {
    profile: UserType
}

type OverProfileType = ProfilePropsType & ProfileType;

const Profile: React.FC<OverProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>)
}

export default Profile;