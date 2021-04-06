import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../Redux/state";


type PropsType = {
    profilePage: ProfilePageType
}

const Profile: React.FC<PropsType>= (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                PostsData={props.profilePage.PostsData}
            />
        </div>)
}

export default Profile;