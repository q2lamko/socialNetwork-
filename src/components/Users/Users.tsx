import React from 'react';
import styles from "./users.module.css";
import userAvatar from "../../assets/img/userPhoto.jpg";
import {UsersPropsType} from "./UsersContainer";

type UserType = {
    onPageChanged: (currentPage: number) => void
}
type OverUsersType = UsersPropsType & UserType;

let Users: React.FC<OverUsersType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p + ' '}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>

                  <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={styles.photo}
                             alt={''}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>NAME: {u.name}</div>
                        <div>ID : {u.id}</div>
                        <div>{u.status}</div>
                    </span>

                </span>
            </div>)
        }
    </div>
}

export default Users;