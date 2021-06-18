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
    newTextChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
    postDataMap: JSX.Element[]

}


const MyPosts: React.FC<PropsType> = (props) =>
     (
        <div className={classes.PostWrapper}>
            <h2>post</h2>
            <div>
                <div>
                    <textarea className={classes.textarea}
                              onChange={props.newTextChangeHandler}
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


export default MyPosts;