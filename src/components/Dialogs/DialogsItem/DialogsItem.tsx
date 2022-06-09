import React, {memo} from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"

import {DialogDataType} from "../DialogsContainer";

const DialogItem: React.FC<DialogDataType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default memo(DialogItem);
