import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {

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