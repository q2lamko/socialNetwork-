import React from 'react';
import styles from './users.module.css';
import userAvatar from "../../assets/img/userPhoto.jpg"

import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../Redux/users-reducer";

type ResponseType = {
    error: string
    items: Array<UserType>
    totalCount: number
}

class Users extends React.Component<UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    //
    // }

    componentDidMount() {
        axios.get<ResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            let a = response.data.items
            this.props.setUsers(a)
        })
    }

    //  getUsers = () => {
    //
    //     if (this.props.usersPage.users.length === 0) {
    //
    //         axios.get<ResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             let a = response.data.items
    //             console.log(a)
    //             this.props.setUsers(a)
    //         })
    //     }
    // }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i ++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                    })}


                </div>
                {
                    this.props.users.map(u => <div key={u.id}>

                  <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={styles.photo}
                             alt={''}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
        )
    }
}


export default Users;