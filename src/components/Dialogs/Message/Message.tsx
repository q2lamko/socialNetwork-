import React from 'react';
import s from './../Dialogs.module.css'
import {DialogsItemType} from "../DialogsItem/DialogsItem";

 export type MessageType = {
    message: string;
    id: number;
}

const Message: React.FC<MessageType> = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;