import React from "react";
import styles from "./users.module.css";
import userAvatar from "../../assets/img/userPhoto.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../Redux/users-reducer";


type PropsType = {
    followInProgress: Array<number>
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let User: React.FC<PropsType> = ({follow,unfollow, user ,followInProgress}) => {

    return (
        <div>
           <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userAvatar} className={styles.photo}
                             alt={""}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>UNFOLLOW</button>

                            : <button disabled={followInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>FOLLOW</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>NAME: {user.name}</div>
                        <div>ID : {user.id}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
        </div>
    )

}

export default User;
