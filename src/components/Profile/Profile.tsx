import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {UserType} from "../Redux/users-reducer";


type profileType = {
    profile: UserType | null
    status:string
    updateStatus:(status:string) => void
}
const Profile: React.FC<profileType> = (props) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>)
}

export default Profile;