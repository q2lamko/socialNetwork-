import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

export type DialogsItemType = {
    name: string;
    id: number;
}


const DialogItem: React.FC<DialogsItemType> = (props) => {
    console.log(props)
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;