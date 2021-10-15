import React from 'react';
import styles from './users.module.css';

import {UsersPropsType} from "./UsersContainer";


let Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
                    followed: false,
                    fullName: 'Konstantin',
                    status: 'learn react',
                    location: {country: 'Russia', city: 'Novosibirsk'}
                },
                {
                    id: 2,
                    photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
                    followed: true,
                    fullName: 'Maxim',
                    status: 'work react',
                    location: {country: 'Russia', city: 'Novosibirsk'}
                },
                {
                    id: 3,
                    photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
                    followed: true,
                    fullName: 'Lena',
                    status: 'work cook',
                    location: {country: 'Russia', city: 'Novosibirsk'}
                },
                {
                    id: 4,
                    photoUrl: "https://www.soyuz.ru/public/uploads/files/2/7450855/20201113195712abead384a5.jpg",
                    followed: false,
                    fullName: 'Kosha',
                    status: 'doing myav',
                    location: {country: 'Russia', city: 'Novosibirsk'}
                },
            ]
        )
    }

    return (

        <div>

            {
                props.usersPage.users.map(u => <div key={u.id}>

                  <span>
                    <div>
                        <img src={u.photoUrl} className={styles.photo} alt={''}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
                    </div>)
            }
        </div>
    )
}

export default Users;