import React from 'react';
import {PostType} from "../../Redux/profile-reducer";
import cl from './Post.module.css';


type PropsType = PostType;

const Post: React.FC<PropsType> = (props) => {

    return (
        <div className={cl.PostContainer}>
            <div className={cl.postWrapper}>
                {props.message}
            </div>

            <div>
                <span className={cl.like}>like</span>
                <div>{props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;