import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes,  ProfilePageType} from "../Redux/state";


type PropsType = {
    profilePage: ProfilePageType
    dispatch:(action: ActionsTypes)=> void
}

const Profile: React.FC<PropsType>= (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>)
}

export default Profile;