import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';


const MyPosts = (props) => {
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
                    <button>Добавить</button>
                </div>
            </div>
            <div>
                {postDataMap}
            </div>

        </div>
    )
}

export default MyPosts;