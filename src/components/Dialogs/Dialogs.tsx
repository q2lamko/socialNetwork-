import classes from "./Dialogs.module.css";
import React, {ChangeEvent} from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsTypes, DialogsPageType,
    // DialogsPageType,
    newMessageBodyActionCreator,
    sendMessageBodyActionCreator, StateType,
    StoreType
} from "../Redux/state";

type PropsType = {
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    DialogsPage: DialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void


}

const Dialogs: React.FC<PropsType> = (props) => {


    let DialogsDataMap =
        props.DialogsPage.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let MessageDataMap =
        props.DialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageBody = props.DialogsPage.newMessageBody


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogsDataMap}
            </div>
            <div className={classes.messages}>
                <div>{MessageDataMap}</div>
                <div>
                    <div>
                        <textarea
                            onChange={props.onNewMessageChange}
                            value={newMessageBody}
                            placeholder={"enter your message"}>{}</textarea></div>
                    <div>
                        <button onClick={props.onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;