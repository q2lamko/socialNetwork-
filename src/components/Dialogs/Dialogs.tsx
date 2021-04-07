import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../Redux/state";

type PropsType = {
    dialogsPage: DialogsPageType

}

const Dialogs: React.FC<PropsType> = (props) => {

    let DialogsDataMap =
        props.dialogsPage.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let MessageDataMap =
        props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogsDataMap}
            </div>
            <div className={classes.messages}>
                {MessageDataMap}
            </div>
        </div>
    )
}

export default Dialogs;