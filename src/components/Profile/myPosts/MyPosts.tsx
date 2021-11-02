import React from 'react';

import classes from './MyPosts.module.css';
import {ProfilePageType} from "../../Redux/profile-reducer";


type PropsType = {
    profilePage: ProfilePageType
    newTextChangeHandler: (text: string) => void
    addPost: () => void
    postDataMap: JSX.Element[]
}


const MyPosts: React.FC<PropsType> = (props) => {
    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.newTextChangeHandler(e.currentTarget.value)
    }
    return (
        <div className={classes.PostWrapper}>
            <h2>post</h2>
            <div>
                <div>
                    <textarea className={classes.textarea}
                              onChange={onChangeText}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button className={classes.btn}
                            onClick={props.addPost}
                    >
                        Добавить
                    </button>
                </div>
            </div>
            <div className={classes.post_data}>
                {props.postDataMap}
            </div>

        </div>
    )
}


export default MyPosts;