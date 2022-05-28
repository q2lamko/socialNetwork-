import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import {UserType} from "../../Redux/users-reducer";
import ProfileStatusWithHooks from "../profileStatus/profileStatusWithHooks";

type ProfileInfoProps = {
    profile: UserType | null
    status:string
    updateStatus:(status:string) => void
}

const ProfileInfo = ({profile, status, updateStatus}:ProfileInfoProps) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large} alt=""/>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>

                <p>{profile.fullName}</p>
                <p>Страница в ВК: {profile.contacts.vk}</p>
                <p>Страница в Твиттер: {profile.contacts.twitter}</p>
                <p>Страница в инсте: {profile.contacts.instagram}</p>
            </div>
            <div>
                <p>Немного обо мне: {profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
