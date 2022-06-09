import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {UserType} from "../Redux/users-reducer";
import {ProfileType} from "../Redux/profile-reducer";


type profileType = {
    profile: ProfileType | null
    status:string
    updateStatus:(status:string) => void
    isOwner: boolean
    savePhoto: (e: File | undefined) => void
}
const Profile: React.FC<profileType> = (props) => {

    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>)
}

export default Profile;
