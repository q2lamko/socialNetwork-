import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';

import MyPostsContainer from "./myPosts/MyPostsContainer";
import store from "../Redux/redux-store";

//
// type PropsType = {
//     // profilePage: ProfilePageType
//     // dispatch:(action: ActionsTypes)=> void
//     store: StoreType
// }

const Profile: React.FC = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>)
}

export default Profile;