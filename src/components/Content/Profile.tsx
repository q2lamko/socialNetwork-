import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType, StoreType} from "../Redux/state";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import store from "../Redux/redux-store";


type PropsType = {
    // profilePage: ProfilePageType
    // dispatch:(action: ActionsTypes)=> void
    store: StoreType
}

const Profile: React.FC<PropsType>= (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={store}
            />
        </div>)
}

export default Profile;