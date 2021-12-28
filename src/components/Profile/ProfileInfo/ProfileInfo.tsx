import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import {UserType} from "../../Redux/users-reducer";
import ProfileStatus from "../profileStatus/profileStatus";


type ProfileInfoProps = {
    profile: UserType | null
    status:string
    updateStatus:(status:string) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>
                <p>Страница в ВК: {props.profile.contacts.vk}</p>
                <p>Страница в Твиттер: {props.profile.contacts.twitter}</p>
                <p>Страница в инсте: {props.profile.contacts.instagram}</p>
            </div>
            <div>
                <p>Немного обо мне: {props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;