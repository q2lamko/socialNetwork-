import React, {MouseEventHandler} from "react";
import styles from "./Paginator.module.css";

type PropsType = {
    onPageChanged: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handleClick = (p: any) => {
        onPageChanged(p)
    }

    return <>
        <div>
            {pages.map(p => {
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                return <span
                    className={currentPage === p ? styles.selectedPage : ""}
                    onClick={()=> onPageChanged(p)}
                    onKeyDown={handleClick}
                >
                        {p + " "}
                    </span>
            })}
        </div>
    </>
}

export default Paginator;
