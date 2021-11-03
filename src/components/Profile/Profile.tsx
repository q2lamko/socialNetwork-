import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {UsersPropsType} from "../Users/UsersContainer";
import {ProfilePropsType} from "./ProfileContainer";


//
// type PropsType = {
//     // profilePage: ProfilePageType
//     // dispatch:(action: ActionsTypes)=> void
//     store: StoreType
// }
type ProfileType = {
    profile: any
}

type OverProfileType = ProfilePropsType & ProfileType;

const Profile: React.FC<OverProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>)
}

export default Profile;