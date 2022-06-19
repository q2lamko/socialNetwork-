import React, {ChangeEvent, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userAvatar from "./../../../assets/img/userPhoto.jpg";
import style from "./ProfileInfo.module.css"
import {ContactsType, ProfileType} from "../../Redux/profile-reducer";
import ProfileDataForm from "./ProfileDataForm";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: File | undefined) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}: ProfileInfoProps) => {
    let [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true)
    };

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

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
            <div className={style.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userAvatar} alt="" className={style.mainPhoto}/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>
                }
            </div>
        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
export const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Редактировать</button>
        </div>}
        <div>
            <div>
                <b>В поиске работы: {profile.lookingForAJob ? "yes" : "no"}</b>
            </div>
            <div>
                <b>Contacts</b>: {Object
                .keys(profile.contacts)
                .map(key => {
                        return <Contact key={key} contactTitle={key}
                                        contactValue={profile.contacts[key as keyof ContactsType]}/>
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
}

export default ProfileInfo;
