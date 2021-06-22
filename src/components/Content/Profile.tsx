import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';

import MyPostsContainer from "./myPosts/MyPostsContainer";
import store, {StoreType} from "../Redux/redux-store";


type PropsType = {
    // profilePage: ProfilePageType
    // dispatch:(action: ActionsTypes)=> void
    store: StoreType
}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={store}
            />
        </div>)
}

export default Profile;