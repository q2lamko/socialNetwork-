import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';
import {PostsDataType, ProfilePageType} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}


const MyPosts: React.FC<PropsType> = (props) => {
    let postDataMap = props.profilePage.PostsData.map(p => (
        <Post message={p.message} id={p.id} likesCount={p.likesCount}/>
    ))


    let addPost = () => {
        props.addPost(props.profilePage.newPostText)
    }

    return (
        <div className={classes.PostWrapper}>
            <h2>post</h2>
            <div>
                <div>
                    <textarea className={classes.textarea}
                              onChange={e => props.changeNewText(e.currentTarget.value)}
                              value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button className={classes.addPost}
                            onClick={addPost}>
                            Добавить</button>
                </div>
            </div>
            <div>
                {postDataMap}
            </div>

        </div>
    )
}

export default MyPosts;