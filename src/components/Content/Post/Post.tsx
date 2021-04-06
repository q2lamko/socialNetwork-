import React from 'react';
import cl from './Post.module.css';
import {PostType} from "../../Redux/state";

type PropsType = PostType;

const Post: React.FC<PropsType> = (props) => {

    return (
        <div>
            <div className={cl.postWrapper}>
                {props.message}
            </div>

            <div>
                <span>like</span>
                <div>{props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;