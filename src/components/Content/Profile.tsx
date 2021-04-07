import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost, ProfilePageType} from "../Redux/state";


type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

const Profile: React.FC<PropsType>= (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                addPost={addPost}
                changeNewText={props.changeNewText}
            />
        </div>)
}

export default Profile;