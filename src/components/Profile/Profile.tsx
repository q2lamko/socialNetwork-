import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";





const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>)
}

export default Profile;