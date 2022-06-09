import React, {ChangeEvent} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userAvatar from "./../../../assets/img/userPhoto.jpg";
import style from "./ProfileInfo.module.css"
import {ContactsType, ProfileType} from "../../Redux/profile-reducer";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: File | undefined) => void
}

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}: ProfileInfoProps) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e?.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large || userAvatar} alt="" className={style.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>

                <p>{profile.fullName}</p>
                <p>Страница в ВК: {profile.contacts.vk}</p>
                <p>Страница в Твиттер: {profile.contacts.twitter}</p>
                <p>Страница в инсте: {profile.contacts.instagram}</p>
            </div>
            <div>
                <div>
                    <b>В поиске работы: {profile.lookingForAJob ? "yes" : "no"}</b>
                </div>
                <div>
                    <b>Полное имя: {profile.fullName}</b>
                </div>
                <div>
                    <b>Contacts</b>: {Object
                    .keys(profile.contacts)
                    .map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType] }/>
                    }
                )}
                </div>
                {profile.lookingForAJob &&
                    <div>
                        <b>Мои навыки: {profile.lookingForAJobDescription}</b>
                    </div>
                }
            </div>

        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact:React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
