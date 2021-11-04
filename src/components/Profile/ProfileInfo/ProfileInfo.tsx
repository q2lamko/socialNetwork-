import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {UserType} from "../../Redux/users-reducer";


type ProfileInfoProps = {
    profile: UserType
}

const ProfileInfo = (props: ProfileInfoProps) => {
  if (!props.profile) {
    return <Preloader/>
  }
    return <div>
        <div>
            <img className={classes.img} alt="" src="https://i.playground.ru/p/Va7pSKtxxjf3QRTzLHMbRg.jpeg"/>
        </div>
        <div>
            <img className={classes.img} alt="" src="https://i.pinimg.com/236x/20/fa/9d/20fa9d7a51baab636700e9680fa4b7f7.jpg"/>
        </div>
        <div>
            <img src={props.profile.photos.large} alt=""/>
        </div>
        <div>
            <p>Страница в ВК: {props.profile.contacts.vk}</p>
            <p>Страница в Твиттер: {props.profile.contacts.twitter}</p>
            <p>Страница в инсте: {props.profile.contacts.instagram}</p>
        </div>
        <div>
            <p>Немного обо мне: {props.profile.aboutMe}</p>
        </div>
    </div>
}

export default ProfileInfo;