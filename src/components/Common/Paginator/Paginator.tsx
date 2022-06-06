import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames"

type PropsType = {
    onPageChanged: (currentPage: number) => void
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number
}

let Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, serPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    const handleClick = (p: any) => {
        onPageChanged(p)
    }

    return <div className={styles.paginator}>
        {
            portionNumber > 1 &&
            <button onClick={() => {
                serPortionNumber(portionNumber - 1)
            }}>PREV</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p+" "}</span>
            })

        }
        {
            portionCount > portionNumber &&
            <button className={styles.next} onClick={() => {
                serPortionNumber(portionNumber + 1)
            }}>NEXT</button>
        }

        {/*<div>*/}
        {/*    {pages.map(p => {*/}
        {/*        // eslint-disable-next-line jsx-a11y/no-static-element-interactions*/}
        {/*        return <span*/}
        {/*            className={currentPage === p ? styles.selectedPage : ""}*/}
        {/*            onClick={()=> onPageChanged(p)}*/}
        {/*            onKeyDown={handleClick}*/}
        {/*        >*/}
        {/*                {p + " "}*/}
        {/*            </span>*/}
        {/*    })}*/}
        {/*</div>*/}
    </div>
}

export default Paginator;
