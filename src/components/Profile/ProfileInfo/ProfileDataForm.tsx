import React from "react";
import s from "./../ProfileInfo/ProfileInfo.module.css"
import {ProfileType} from "../../Redux/profile-reducer";
import {createField, GetStringKeys, Input, Textarea} from "../../Common/formControls/formControls";
import { InjectedFormProps, reduxForm} from "redux-form";
import style from "./../../Common/formControls/formControl.module.css";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit,profile,error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Сохранить</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <div>
                <b>Полное имя: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}</b>
            </div>
            <div>
                <b>About me</b>:
                {createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Looking for a
                    job</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>Мои
                    навыки: </b>:{createField<ProfileTypeKeys>("Мои навыки", "lookingForAJobDescription", [], Textarea)}
            </div>
        </div>
        <div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>(
    {form: "edit-profile",enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm)

export default ProfileDataFormReduxForm;
