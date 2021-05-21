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
    dispatch: (action: ActionsTypes) => void

}


const MyPosts: React.FC<PropsType> = (props) => {
    let postDataMap = props.profilePage.PostsData.map(p => (
        <Post message={p.message} id={p.id} likesCount={p.likesCount}/>
    ))


    let addPost = () => {
        // props.dispatch({type: "ADD-POST", postMessage: props.profilePage.newPostText})
        props.dispatch(addPostActionCreator(props.profilePage.newPostText))
    }

    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newTextChangeActionCreator(e.currentTarget.value))
    }

    return (
        <div className={classes.PostWrapper}>
            <h2>post</h2>
            <div>
                <div>
                    <textarea className={classes.textarea}
                              onChange={newTextChangeHandler}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button className={classes.addPost}
                            onClick={addPost}>
                        Добавить
                    </button>
                </div>
            </div>
            <div>
                {postDataMap}
            </div>

        </div>
    )
}

export default MyPosts;