import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem, {DialogsItemType} from "./DialogsItem/DialogsItem";
import Message, {MessageType} from "./Message/Message";


type DialogsType = {
    dialogsData: Array<DialogsItemType>
    messageData: Array<MessageType>
}

const Dialogs = (props: DialogsType) => {

    let DialogsDataMap =
        props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let MessageDataMap =
        props.messageData.map(m => <Message message={m.message} id={m.id}/>);


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