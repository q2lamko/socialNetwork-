import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';


const MyPosts = () => {

  let PostsData = [
    { messege: 'my frist post on this page', id: 1, likesCount: 1 },
    { messege: 'my second post on this page', id: 2, likesCount: 3 },
    { messege: 'this is realy hardcore ', id: 2, likesCount: 3 }
  ]
  let postDataMap = PostsData.map(p => (<Post messege={p.messege} id={p.id} likesCount={p.likesCount} />
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