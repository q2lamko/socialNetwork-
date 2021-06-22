import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'
import {} from "../../Redux/state";
import {DialogDataType} from "../DialogsContainer";




const DialogItem: React.FC<DialogDataType> = (props) => {
    console.log(props)
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;