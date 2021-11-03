import React from 'react';
import classes from './ProfileInfo.module.css';



type ProfileInfoProps = {
  profile: any
}

const ProfileInfo = (props:any) => {
  return <div >
    <div>
      <img className={classes.img} src="https://i.playground.ru/p/Va7pSKtxxjf3QRTzLHMbRg.jpeg" />
    </div>
    <div>
      <img className={classes.img} src="https://i.pinimg.com/236x/20/fa/9d/20fa9d7a51baab636700e9680fa4b7f7.jpg" />
    </div>
    <div>
      <img src={props.profile.photos.large} alt=""/>
    </div>
  </div>
}

export default ProfileInfo;