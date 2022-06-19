import React from "react";
import {UserType} from "../Redux/users-reducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";

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

let Users: React.FC<newUserType> = ({
                                        unfollow,
                                        follow,
                                        followInProgress,
                                        users,
                                        currentPage,
                                        onPageChanged,
                                        pageSize,
                                        totalUsersCount,
                                        ...props
                                    }) => {
    return <div >
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            pageSize={pageSize}
            totalItemsCount={totalUsersCount}
            portionSize={10}
        />
        <div className={styles.users}>
            {
                users.map(u => <User user={u} key={u.id} unfollow={unfollow} follow={follow}
                                     followInProgress={followInProgress}/>)

            }
        </div>

    </div>
}

export default Users;
