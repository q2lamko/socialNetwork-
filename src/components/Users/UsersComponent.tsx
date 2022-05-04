import React from "react";
import styles from "./users.module.css";
import userAvatar from "../../assets/img/userPhoto.jpg";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../Redux/users-reducer";

type ResponseType = {
    error: string
    items: Array<UserType>
    totalCount: number
}

let UsersComponent: React.FC<UsersPropsType> = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get<ResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                let a = response.data.items
            })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>

            {
                props.users.map(u => <div key={u.id}>
                  <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={styles.photo}
                             alt={""}/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )

}

export default UsersComponent;
