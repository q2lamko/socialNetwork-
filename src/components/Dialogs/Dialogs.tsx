import classes from "./Dialogs.module.css";
import React, {ChangeEvent} from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    // DialogsPageType,
    newMessageBodyActionCreator,
    sendMessageBodyActionCreator,
    StoreType
} from "../Redux/state";

type PropsType = {
    // dialogsPage: DialogsPageType
    dispatch:(action: ActionsTypes)=> void
    store:StoreType


}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.store.getState().DialogsPage

    let DialogsDataMap =
        state.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let MessageDataMap =
        state.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageBodyActionCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(newMessageBodyActionCreator(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogsDataMap}
            </div>
            <div className={classes.messages}>
                <div>{MessageDataMap}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder={"enter your message"}>123</textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;