import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {UserType} from "../Redux/users-reducer";


type profileType = {
    profile: UserType | null
    // getUserProfile: (userId:string) => void

}
const Profile: React.FC<profileType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>)
}

export default Profile;