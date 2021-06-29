import React, {ChangeEvent} from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';
import {
    ActionsTypes,
    addPostActionCreator, newTextChangeActionCreator,
    ProfilePageType
} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    newTextChangeHandler: (text: string) => void
    addPost: () => void
    postDataMap: JSX.Element[]

}


const MyPosts: React.FC<PropsType> = (props) => {
    const onChangeText = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
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
                    <button className={classes.addPost}
                            onClick={props.addPost}>
                        Добавить
                    </button>
                </div>
            </div>
            <div>
                {props.postDataMap}
            </div>

        </div>
    )
}


export default MyPosts;