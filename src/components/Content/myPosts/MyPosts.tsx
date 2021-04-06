import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';
import {PostsDataType} from "../../Redux/state";

type PropsType = {
    PostsData: PostsDataType
}
const MyPosts: React.FC<PropsType> = (props) => {
    let postDataMap = props.PostsData.map(p => (<Post message={p.message} id={p.id} likesCount={p.likesCount}/>
    ))

    return (
        <div className={classes.PostWrapper}>
            <h3>post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={() => {}}>Добавить</button>
                </div>
            </div>
            <div>
                {postDataMap}
            </div>

        </div>
    )
}

export default MyPosts;