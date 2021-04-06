import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from "./Post/Post";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                PostsData={props.PostsData}
            />
        </div>)
}

export default Profile;