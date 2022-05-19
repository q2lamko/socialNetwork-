import React from "react";
import styles from "./users.module.css";
import userAvatar from "../../assets/img/userPhoto.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../Redux/users-reducer";

type newUserType = {
    onPageChanged: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followInProgress: Array<number>
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let Users: React.FC<newUserType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return (
                    <span className={props.currentPage === p ? styles.selectedPage : ""}
                          onClick={() => {props.onPageChanged(p)}}>
                        {p + " "}
                    </span>)
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                  <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={styles.photo}
                             alt={""}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>UNFOLLOW</button>

                            : <button disabled={props.followInProgress.some(id => id === u.id)}
                                      onClick={() => {
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
